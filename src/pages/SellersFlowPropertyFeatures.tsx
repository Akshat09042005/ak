import { FunctionComponent } from "react";
import NAVBARS1 from "../components/NAVBARS1";
import MainContent from "../components/MainContent";

const SellersFlowPropertyFeatures: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[218px] box-border gap-[11px] leading-[normal] tracking-[normal]">
      <NAVBARS1 />
      <MainContent />
    </div>
  );
};

export default SellersFlowPropertyFeatures;
