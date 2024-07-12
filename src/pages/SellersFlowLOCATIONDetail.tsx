import { FunctionComponent } from "react";
import NAVBARS2 from "../components/NAVBARS2";
import ContentContainer from "../components/ContentContainer";

const SellersFlowLOCATIONDetail: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[218px] box-border gap-[11px] leading-[normal] tracking-[normal]">
      <NAVBARS2 />
      <section className="w-[1235px] flex flex-row items-start justify-end py-0 px-[27px] box-border max-w-full">
        <ContentContainer />
      </section>
    </div>
  );
};

export default SellersFlowLOCATIONDetail;
