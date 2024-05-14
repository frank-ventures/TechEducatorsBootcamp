import LoadingBar from "@/components/LoadingBar";
import AinsleyHead from "@/assets/ainsley-main-head-1.png";
import Image from "next/image";
import "./ainsley-spin.css";

export default function LoadingTV() {
  return (
    <>
      <p>We&apos;re doing our best to fetch your TV Shows</p>
      <div className="w-[500px] h-[50px]">
        <LoadingBar />
        <Image
          src={AinsleyHead}
          alt={"Ainsleys head"}
          className="ainsley-head"
        />
      </div>
    </>
  );
}
