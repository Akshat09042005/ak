import { FunctionComponent } from "react";

export type TotalFloorsLabelType = {
  className?: string;
  title?: string;
};

const TotalFloorsLabel: FunctionComponent<TotalFloorsLabelType> = ({
  className = "",
  title,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[247px] max-w-full text-left text-base text-character-title-85 font-inter ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
        <div className="relative leading-[22px] font-medium inline-block min-w-[98px]">
          {title}
        </div>
        <div className="relative text-sm leading-[22px] text-dust-red-5 text-right inline-block min-w-[7px]">
          *
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center max-w-full text-sm text-main-blue">
        <div className="flex-1 rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start max-w-full border-[1px] border-solid border-grey-text-2">
          <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-5">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/inputprefix@2x.png"
            />
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between max-w-full gap-[20px]">
              <div className="relative leading-[22px] inline-block min-w-[26px]">
                580
              </div>
              <div className="relative leading-[22px] inline-block min-w-[43px]">
                Sq. Ft.
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
    </div>
  );
};

export default TotalFloorsLabel;
