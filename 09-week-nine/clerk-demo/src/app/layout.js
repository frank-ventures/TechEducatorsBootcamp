import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <p>
                You are not signed in. How awful! You must sign in because its
                really nice:
              </p>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <p>
                Phew! Thank goodness. You are signed in. Thats really
                comforting.
              </p>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
