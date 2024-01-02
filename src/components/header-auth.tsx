"use client";
import Link from "next/link";
import * as actions from "@/actions";
import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  popover,
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  session.data?.user;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar
            style={{ cursor: "pointer" }}
            src={session.data?.user?.image || ""}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Up</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
