import { FunctionComponent } from "react";

export type NonVegContainerType = {
  className?: string;
  nonVeg?: string;
  allowed?: string;
  allowed1?: string;
};

const NonVegContainer: FunctionComponent<NonVegContainerType> = ({
  className = "",
  nonVeg,
  allowed,
  allowed1,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 pr-[302px] pl-0 gap-[32px] shrink-0 text-right text-sm text-dust-red-5 font-inter mq450:gap-[16px] mq450:pr-5 mq450:box-border mq1050:pr-[151px] mq1050:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[4px]">
        <div className="relative leading-[22px] inline-block min-w-[7px]">
          *
        </div>
        <div className="relative text-lg font-semibold text-black text-left inline-block min-w-[83px]">
          {nonVeg}
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-character-title-85">
        <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[155px] mq450:flex-wrap">
          <div className="h-[26px] w-[26px] relative">
            <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] rounded-81xl bg-neutral-1 box-border w-full h-full border-[1px] border-solid border-main-blue" />
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-[18px] h-[18px] z-[1]">
              <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] rounded-[50%] bg-lavender w-full h-full" />
              <input
                className="cursor-pointer m-0 absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] rounded-xl bg-main-blue w-3.5 h-3.5 z-[1]"
                type="radio"
              />
            </div>
          </div>
          <div className="flex-1 relative leading-[22px] inline-block min-w-[46px]">
            {allowed}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[155px] mq450:flex-wrap">
          <input
            className="cursor-pointer m-0 h-[26px] w-[26px] relative"
            type="radio"
          />
          <div className="flex-1 relative leading-[22px] inline-block min-w-[71px]">
            {allowed1}
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[23px]">
          <div className="h-[26px] w-[26px] relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-neutral-1 box-border border-[1px] border-solid border-neutral-5" />
          </div>
          <div className="h-[22px] w-[190px] relative leading-[22px] inline-block shrink-0">
            Allowed
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonVegContainer;
