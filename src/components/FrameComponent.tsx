import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-snow overflow-hidden flex flex-col items-start justify-start py-10 px-[60px] box-border gap-[60px] max-w-full text-left text-13xl text-black font-merriweather-sans mq450:gap-[15px] mq800:gap-[30px] mq800:py-[26px] mq800:px-[30px] mq800:box-border ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi mq800:text-7xl">
        Similar Properties In Mira road
      </h1>
      <div className="self-stretch grid flex-row items-start justify-start gap-[28px] grid-cols-[repeat(4,_minmax(231px,_1fr))] text-base font-inter mq800:grid-cols-[minmax(231px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(231px,_400px))]">
        <FrameComponent1 />
        <FrameComponent1 />
        <FrameComponent1 />
        <FrameComponent1 />
      </div>
    </div>
  );
};

export default FrameComponent;
