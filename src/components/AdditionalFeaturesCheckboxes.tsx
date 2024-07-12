import { FunctionComponent } from "react";

export type AdditionalFeaturesCheckboxesType = {
  className?: string;
  airConditioning?: string;
  securityPersonnelGatedSec?: string;
};

const AdditionalFeaturesCheckboxes: FunctionComponent<
  AdditionalFeaturesCheckboxesType
> = ({ className = "", airConditioning, securityPersonnelGatedSec }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px] text-left text-base text-black font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
        <div className="h-[26px] w-[26px] relative">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
        </div>
        <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
          {airConditioning}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
        <div className="h-[26px] w-[26px] relative">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
        </div>
        <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
          {securityPersonnelGatedSec}
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeaturesCheckboxes;
