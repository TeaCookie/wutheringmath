"use client";

import { signIn, signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <section className="flex gap-8 items-center justify-center mt-12">
      <p className="font-bold text-lg">Login Using Discord</p>
      <button onClick={() => signOut()}>Sign out</button>
    </section>
  );
}

