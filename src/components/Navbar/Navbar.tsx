import React, { useContext, useState } from "react";
import account from "../../assets/Account.svg";

import styles from "./Navbar.module.css";
import { IconButton } from "../IconButton";
import { UserContext } from "../../App";
import Dialog from "../Dialog/Dialog";
import { Auth } from "@supabase/auth-ui-react";
import { supaClient } from "../../db/supa-client";
import { toast } from "react-toastify";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useContext(UserContext);
  const user = session?.user;

  const handleAccountButtonClick = () => {
    if (user) {
      supaClient.auth.signOut().then(() => {
        toast.success("Logged out 👋");
      });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.Logo}>Better Job Search</div>
        <IconButton onClick={handleAccountButtonClick} icon={account} pill>
          {user ? "Logout" : "Login"}
        </IconButton>
      </div>
      <Dialog
        isOpen={isOpen && !user}
        onClose={() => setIsOpen(false)}
        title={"Better Job Search"}
      >
        <Auth
          redirectTo={"/"}
          supabaseClient={supaClient}
          appearance={{
            theme: ThemeSupa,
          }}
          // theme={"dark"}
          providers={[]} // Add 'google' to the array to enable Google login
        />
      </Dialog>
    </>
  );
};

export default Navbar;
