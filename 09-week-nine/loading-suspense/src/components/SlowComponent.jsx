import Link from "next/link";
import LoadingBar from "./LoadingBar";

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  // slow because of a delay, or fetching lots of data over the network or from a database
  await delay(5000);

  return (
    <div className="flex gap-8 p-2 justify-center text-lg bg-orange-300">
      <Link href="/movies">See Our Movies</Link>
      <Link href="/tvshows">See Our TV Shows</Link>
    </div>
  );
}
