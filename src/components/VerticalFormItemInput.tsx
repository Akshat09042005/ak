import { FunctionComponent } from "react";

export type VerticalFormItemInputType = {
  className?: string;
  title?: string;
  placeholder?: string;
};

const VerticalFormItemInput: FunctionComponent<VerticalFormItemInputType> = ({
  className = "",
  title,
  placeholder,
}) => {
  return (
    <div
      className={`h-[70px] w-[170px] flex flex-col items-start justify-start text-left text-base text-character-title-85 font-inter ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-[25px] pl-0 gap-[4px]">
        <div className="relative leading-[22px] font-medium">{title}</div>
        <div className="relative text-sm leading-[22px] text-dust-red-5 text-right inline-block min-w-[7px]">
          *
        </div>
      </div>
      <div className="self-stretch h-[42px] rounded-sm bg-neutral-1 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start text-sm text-main-blue border-[1px] border-solid border-grey-text-2">
        <div className="flex-1 rounded-sm bg-neutral-1 flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] border-[1px] border-solid border-neutral-5">
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
            alt=""
            src="/inputprefix@2x.png"
          />
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
            <div className="relative leading-[22px] inline-block min-w-[9px]">
              {placeholder}
            </div>
          </div>
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
            alt=""
            src="/inputsuffix@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalFormItemInput;
