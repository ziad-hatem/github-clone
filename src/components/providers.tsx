"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From Client: User is Signed In</div>;
  }

  return <div>From Client: User is NOT Signed In</div>;
}
