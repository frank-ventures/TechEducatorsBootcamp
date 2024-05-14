import LoadingBar from "@/components/LoadingBar";
import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <p>Please browse our selection:</p>
      <div className="navbar">
        <Suspense fallback={<LoadingBar />}>
          <SlowComponent />
        </Suspense>
      </div>
    </>
  );
}
