import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const UserMenu = async () => {
  const user = await currentUser();

  const ADMIN_USER = process.env.ADMIN_USER;

  return (
    <div>
      {user && (
        <>
          <div className="flex flex-row items-center justify-center gap-3">
            {user.id === ADMIN_USER && (
              <Link href="/p/dashboard">
                <Button variant="mybutton">A panel</Button>
              </Link>
            )}
            <Link href="/myorder">
              <Button variant="outline"> Myorder</Button>
            </Link>
            <UserButton />
          </div>
        </>
      )}
      {!user && (
        <div className="space-x-4">
          <Link href="/sign-in">
            <Button variant={"mybutton"}>Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="default">Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
