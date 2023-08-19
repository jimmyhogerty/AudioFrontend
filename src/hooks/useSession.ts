import { RealtimeChannel, Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";
// import { setReturnPath } from "./Login";
import { supaClient } from "../db/supa-client";
import { toast } from "react-toastify";

export interface UserProfile {
  username: string;
  avatarUrl?: string;
}

export interface SupashipUserInfo {
  session: Session | null;
}

export function useSession(): SupashipUserInfo {
  const [userInfo, setUserInfo] = useState<SupashipUserInfo>({
    session: null,
  });
  const [channel, setChannel] = useState<RealtimeChannel | null>(null);
  // const navigate = useNavigate();
  useEffect(() => {
    supaClient.auth.getSession().then(({ data: { session } }) => {
      setUserInfo({ ...userInfo, session });
      supaClient.auth.onAuthStateChange((_event, session) => {
        setUserInfo({ session });
      });
    });
  }, []);

  useEffect(() => {
    if (userInfo.session?.user) {
      listenToUserProfileChanges(userInfo.session.user.id).then(
        (newChannel) => {
          if (channel) {
            channel.unsubscribe();
          }
          setChannel(newChannel);
        }
      );
    } else if (!userInfo.session?.user) {
      channel?.unsubscribe();
      setChannel(null);
    }
  }, [userInfo.session]);

  async function listenToUserProfileChanges(userId: string) {
    return supaClient
      .channel(`public:user_profiles`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "user_profiles",
          filter: `user_id=eq.${userId}`,
        },
        () => {
          toast.success("Signed in!");
          setUserInfo({ ...userInfo });
        }
      )
      .subscribe();
  }

  return userInfo;
}
