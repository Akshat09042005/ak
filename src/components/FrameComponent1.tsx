import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`shadow-[0px_6px_6px_rgba(0,_0,_0,_0.08)] bg-neutral-1 overflow-hidden flex flex-col items-start justify-start text-left text-base text-black font-inter border-[1px] border-solid border-neutral-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[194px] bg-[url('/public/frame-311@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.45))] flex flex-row items-start justify-end py-2 px-6">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/frame-52.svg"
            />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/frame-53.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-5 px-6 gap-[14px]">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative font-medium">{`Modern & Luxury 2BHK Flat For Rent`}</div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-xs text-grey-text">
              <img
                className="h-[15px] w-3.5 relative overflow-hidden shrink-0 min-h-[15px]"
                alt=""
                src="/frame-54.svg"
              />
              <div className="flex-1 relative whitespace-pre-wrap">
                Kashimira, Mira Road East, Mumbai
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[158px] pl-0 gap-[8px] text-sm text-grey-text mq450:pr-5 mq450:box-border">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-55.svg"
            />
            <div className="relative inline-block min-w-[66px]">60.50 Lac</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-56.svg"
            />
            <div className="relative inline-block min-w-[76px]">
              1850 Sq. ft.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
