import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      {" "}
      <h2>
        Thank you so very much for choosing to sign in. Its really reassuring
      </h2>
      <SignIn />
    </>
  );
}
