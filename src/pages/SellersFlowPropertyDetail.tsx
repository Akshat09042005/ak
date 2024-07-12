import { FunctionComponent } from "react";
import NAVBARS1 from "../components/NAVBARS1";
import PropertyDetailsTitle from "../components/PropertyDetailsTitle";

const SellersFlowPropertyDetail: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[218px] box-border gap-[11px] leading-[normal] tracking-[normal]">
      <NAVBARS1 />
      <section className="w-[1235px] flex flex-row items-start justify-end py-0 px-[27px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-end justify-start gap-[23px] max-w-full">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            alt=""
            src="/frame-210.svg"
          />
          <PropertyDetailsTitle />
        </div>
      </section>
    </div>
  );
};

export default SellersFlowPropertyDetail;
