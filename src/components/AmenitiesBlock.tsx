import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AmenitiesBlockType = {
  className?: string;
  frame?: string;
  regularWaterSupply?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const AmenitiesBlock: FunctionComponent<AmenitiesBlockType> = ({
  className = "",
  frame,
  regularWaterSupply,
  propWidth,
}) => {
  const amenitiesBlockStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-[42px] gap-[16px] text-left text-sm text-grey-text-2 font-inter ${className}`}
      style={amenitiesBlockStyle}
    >
      <div className="flex flex-col items-start justify-start py-4 px-0 gap-[13px]">
        <div className="flex flex-row items-start justify-start py-0 px-[50px]">
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={frame}
          />
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="ml-[-2.5px] w-[140px] relative inline-block shrink-0">
            {regularWaterSupply}
          </div>
        </div>
      </div>
      <div className="h-[26px] w-[26px] relative hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
      </div>
    </div>
  );
};

export default AmenitiesBlock;
