import { FunctionComponent } from "react";

export type VerticalFormItemInput1Type = {
  className?: string;
  title?: string;
};

const VerticalFormItemInput1: FunctionComponent<VerticalFormItemInput1Type> = ({
  className = "",
  title,
}) => {
  return (
    <div
      className={`h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full text-left text-base text-character-title-85 font-inter ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-[333px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border">
        <div className="relative leading-[22px] font-medium inline-block min-w-[36px]">
          {title}
        </div>
        <div className="relative text-sm leading-[22px] text-dust-red-5 text-right inline-block min-w-[7px]">
          *
        </div>
      </div>
      <div className="self-stretch h-[42px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start max-w-full text-lg text-character-disabled-placeholder-25 border-[1px] border-solid border-grey-text-2">
        <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-between py-[7px] px-3 max-w-full gap-[-14px] border-[1px] border-solid border-neutral-5">
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden z-[1]"
            alt=""
            src="/inputprefix@2x.png"
          />
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="relative leading-[22px] inline-block min-w-[10px]">
              ₹
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start text-sm">
            <div className="relative leading-[22px] inline-block min-w-[52px]">
              / Month
            </div>
          </div>
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden z-[4]"
            alt=""
            src="/inputsuffix@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalFormItemInput1;
