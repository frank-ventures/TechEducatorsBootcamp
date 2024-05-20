import LoadingBar from "@/components/LoadingBar";
import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";
import { SlowBox } from "./SlowBox";

export default function Movies() {
  return (
    <>
      <div className="movies-container flex gap-2 w-dvw flex-wrap">
        <div className="movie-box">
          <Suspense fallback={<p>I am loading</p>}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>

        <div className="movie-box">
          <Suspense fallback={<LoadingBar />}>
            <SlowBox />
          </Suspense>
        </div>
      </div>
    </>
  );
}
