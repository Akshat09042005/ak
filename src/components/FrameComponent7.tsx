import { FunctionComponent } from "react";

export type FrameComponent7Type = {
  className?: string;
  group33405?: string;
  lift?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
  group33405,
  lift,
}) => {
  return (
    <div
      className={`h-[138px] w-[135px] flex flex-col items-center justify-center gap-[16px] text-left text-sm text-grey-text-2 font-inter ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-center justify-between py-4 px-0">
        <img
          className="w-[30.1px] h-[34px] relative object-contain"
          alt=""
          src={group33405}
        />
        <div className="self-stretch h-[17px] flex flex-col items-center justify-center py-0 px-14 box-border">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start">
            <div className="self-stretch w-[22px] relative inline-block">
              {lift}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[26px] h-[26px] relative">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
      </div>
    </div>
  );
};

export default FrameComponent7;
