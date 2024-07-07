
import { getServerSession } from "next-auth";
// import { options } from "@/pages/api/auth/[...nextauth]";
import { signOut } from "next-auth/react";
import SignOut from "@/components/signout";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import SideMenu from "./sidemenu";


export default async function Topbar() {
  const session = await getServerSession();


  return (
    <div>
      <div className="w-full h-[50px]" />
      <div className="fixed top-0 right-0 left-0 bg-muted">
        <div className="flex justify-between px-8 p-2 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              Home
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {session?.user ? (
              <div>
                <p>Signed in as {session.user.name}</p>
                <p>Email: {session.user.email}</p>
                <p>Image: {session.user.image}</p>
                <SignOut />
              </div>
            ) : (


              <Link href={"http://localhost:3000/api/auth/signin/discord"}>
                <button>
                  Login
                </button>
              </Link>
            )}
            <ThemeSwitch />
          </div>
        </div>
        <div className="w-full h-[2px] masked-gradient"/>
      </div>
    </div>
  );
}
