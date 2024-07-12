import { FunctionComponent } from "react";

export type FrameComponent6Type = {
  className?: string;
  title?: string;
  placeholder?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
  title,
  placeholder,
}) => {
  return (
    <div
      className={`h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full text-left text-base text-main-blue font-inter mq450:h-auto ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 shrink-0">
        <div className="relative leading-[22px] font-medium">{title}</div>
      </div>
      <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start min-h-[42px] max-w-full shrink-0 text-sm text-character-disabled-placeholder-25 border-[1px] border-solid border-grey-text-2">
        <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-5 mq450:flex-wrap">
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/inputprefix@2x.png"
          />
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-start min-w-[137px] max-w-full">
            <div className="relative leading-[22px]">{placeholder}</div>
          </div>
          <img
            className="h-1.5 w-3 relative object-contain"
            alt=""
            src="/vector.svg"
          />
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/inputsuffix@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
