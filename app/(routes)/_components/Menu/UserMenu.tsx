import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const UserMenu = () => {
  return (
    <div>
      <div className="space-x-4">
        <Link href="/sing-in">
          <Button variant={"mybutton"}>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="default">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
