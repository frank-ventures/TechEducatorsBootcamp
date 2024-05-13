import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    console.log(userId);
  }

  const user = await currentUser();
  if (user) {
    console.log(user);
    console.log(
      "trying to access arrays within: ",
      user.externalAccounts[0].emailAddress
    );
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page. This intro is always here.</p>
      <SignedOut>
        {" "}
        <p>Stop looking here! You need to sign in! Heres a reminder:</p>{" "}
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {user ? (
          <>
            <p>You are signed in, {user.firstName}!</p>
            <p>Your quite spicy User ID is: {userId}</p>
            <p>Your quite mild User ID is: {user.id}</p>
            <p>Your image url is: {user.imageUrl}</p>
            <p>Your interesting username is: {user.username}</p>
            {user.externalAccounts.map((item) => {
              return (
                <div key={item.id}>
                  <p>{item.emailAddress}</p>
                  <p>{item.firstName}</p>
                  <Image
                    src={item.imageUrl}
                    alt={item.firstName}
                    width={500}
                    height={500}
                  ></Image>
                </div>
              );
            })}
          </>
        ) : null}
      </SignedIn>
    </>
  );
}
