import { FunctionComponent } from "react";
import NAVBARS from "../components/NAVBARS";
import PropertyCard from "../components/PropertyCard";
import Neighborhood from "../components/Neighborhood";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Locality from "../components/Locality";
import Footer from "../components/Footer";

const Preview: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start gap-[25px] leading-[normal] tracking-[normal]">
      <NAVBARS />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[31px] pr-[60px] pl-[57px] box-border max-w-full shrink-0 mq800:pl-7 mq800:pr-[30px] mq800:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[56px] max-w-full mq800:gap-[28px]">
          <PropertyCard />
          <Neighborhood />
          <FrameComponent2 />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[1159px] box-border max-w-full shrink-0 mq800:pb-[318px] mq800:box-border mq1125:pb-[489px] mq1125:box-border mq1350:pb-[753px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[56px] max-w-full mq800:gap-[28px]">
          <FrameComponent />
          <Locality />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Preview;
