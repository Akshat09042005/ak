import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-main-blue flex flex-row items-start justify-between py-[13.5px] px-[65px] gap-[20px] text-left text-xs text-neutral-1 font-inter mq725:flex-wrap mq1000:pl-8 mq1000:pr-8 mq1000:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
        <div className="relative">
          <span>{`Need Help? `}</span>
          <span className="font-medium">Call 9999999999</span>
        </div>
      </div>
      <button className="cursor-pointer py-[5px] pr-[37px] pl-[38px] bg-[transparent] [filter:drop-shadow(0px_4px_4px_rgba(18,_43,_73,_0.32))] rounded flex flex-row items-start justify-start border-[1px] border-solid border-neutral-1 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
        <b className="relative text-base inline-block font-merriweather-sans text-neutral-1 text-left min-w-[43px]">
          NEXT
        </b>
      </button>
    </div>
  );
};

export default FrameComponent5;
