import { FunctionComponent } from "react";
import NAVBARS2 from "../components/NAVBARS2";
import PropertyDetails from "../components/PropertyDetails";

const SellersFlowPriceDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[218px] box-border gap-[58px] leading-[normal] tracking-[normal] mq725:gap-[29px]">
      <NAVBARS2 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <PropertyDetails />
      </section>
    </div>
  );
};

export default SellersFlowPriceDetails;
