import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { User, X } from "lucide-react";
import { SignIn } from "@clerk/nextjs";

interface ModalLoginProps {
  redirectUrl?: string;
}

const ModalLogin = ({ redirectUrl }: ModalLoginProps) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            Login <User className="h-4 w-4 inline" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="justify-center items-center w-full flex">
          <AlertDialogCancel asChild>
            <Button variant="link" className="absolute top-2 right-2 p-2">
              <X className="h-4 w-4" />
            </Button>
          </AlertDialogCancel>
          <SignIn routing="hash" redirectUrl={redirectUrl} />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ModalLogin;
