import styles from "./App.module.css";
import { Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { createContext, useState } from "react";
import { SupashipUserInfo, useSession } from "./hooks/useSession";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          // {
          //   path: ":pageNumber",
          //   element: <AllPosts />,
          // },
          // {
          //   path: "post/:postId",
          //   element: <PostView />,
          // },
        ],
      },
    ],
  },
  // {
  //   path: "welcome",
  //   element: <Welcome />,
  //   loader: welcomeLoader,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

export const UserContext = createContext<
  SupashipUserInfo & {
    searchString: string;
    handleSetSearchString: (s: string) => void;
  }
>({
  session: null,
  searchString: "",
  handleSetSearchString: (s: string) => {
    console.log(s, "initialized");
  },
});

function Layout() {
  const [searchString, setSearchString] = useState("");
  const supashipUserInfo = useSession();

  const handleSetSearchString = () => {
    setSearchString("");
  };

  return (
    <UserContext.Provider
      value={{
        ...supashipUserInfo,
        searchString,
        handleSetSearchString,
      }}
    >
      <main className={styles.Main}>
        <div className={styles.AppContent}>
          <Navbar />
          <section className={styles.MainMargin}>
            <Outlet />
          </section>
        </div>
      </main>
    </UserContext.Provider>
  );
}
