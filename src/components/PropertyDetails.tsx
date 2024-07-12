import { FunctionComponent } from "react";
import VerticalFormItemInput1 from "./VerticalFormItemInput1";
import FrameComponent5 from "./FrameComponent5";

export type PropertyDetailsType = {
  className?: string;
};

const PropertyDetails: FunctionComponent<PropertyDetailsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[976px] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full text-center text-sm text-main-blue font-merriweather-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq1000:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[191px] max-w-[195px]">
          <div className="self-stretch bg-cream flex flex-row items-center justify-center py-[22px] px-9">
            <a className="[text-decoration:none] flex-1 relative text-[inherit]">
              PROPERTY DETAILS
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[191px] max-w-[195px]">
          <div className="self-stretch bg-cream flex flex-row items-center justify-center py-[22px] px-9">
            <div className="flex-1 relative">LOCATION DETAILS</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[191px] max-w-[195px] z-[1]">
          <div className="self-stretch bg-cream flex flex-row items-center justify-center py-[22px] px-9">
            <div className="flex-1 relative">{`FEATURES & AMENITIES`}</div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start min-w-[191px] max-w-[195px] text-black">
          <div className="self-stretch bg-aliceblue flex flex-row items-center justify-center py-[31px] px-9 whitespace-nowrap">
            <div className="flex-1 relative">PRICE DETAILS</div>
          </div>
        </div>
        <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] z-[1] text-grey-text-2 mq450:flex-1">
          <div className="flex-1 relative">PROPERTY IMAGES</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full">
        <div className="h-2 flex-1 relative bg-border-grey max-w-full">
          <div className="absolute top-[0px] left-[0px] bg-border-grey w-full h-full hidden" />
          <div className="absolute top-[0px] left-[0px] bg-main-blue w-[586px] h-2 z-[1]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full text-left text-base text-character-title-85 font-inter mq1000:pl-[39px] mq1000:pr-[39px] mq1000:box-border">
        <div className="h-[368px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[60px] max-w-full mq1000:h-auto mq1000:gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1000:flex-wrap">
            <VerticalFormItemInput1 title="Rent" />
            <VerticalFormItemInput1 title="Security" />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[60px] max-w-full mq1000:gap-[30px]">
            <div className="h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full mq450:h-auto">
              <div className="overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-[270px] pl-0 gap-[4px] shrink-0 mq450:pr-5 mq450:box-border">
                <div className="relative leading-[22px] font-medium inline-block min-w-[99px]">
                  Maintenance
                </div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right inline-block min-w-[7px]">
                  *
                </div>
              </div>
              <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start min-h-[42px] max-w-full shrink-0 text-sm text-character-disabled-placeholder-25 border-[1px] border-solid border-grey-text-2">
                <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-5 mq450:flex-wrap">
                  <img
                    className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/inputprefix@2x.png"
                  />
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-start min-w-[86px] max-w-full">
                    <div className="relative leading-[22px] inline-block min-w-[86px]">
                      Maintenance
                    </div>
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
            <div className="flex-1 flex flex-col items-start justify-start min-w-[247px] max-w-full">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-[270px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border">
                <div className="relative leading-[22px] font-medium inline-block min-w-[99px]">{`Maintenance `}</div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right inline-block min-w-[7px]">
                  *
                </div>
              </div>
              <div className="self-stretch h-10 flex flex-row items-start justify-between gap-[12px] text-lg text-character-disabled-placeholder-25">
                <div className="h-[42px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-grey-text-2">
                  <div className="rounded-sm bg-neutral-1 flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] border-[1px] border-solid border-neutral-5">
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-12 pl-0 gap-[16px]">
                      <div className="relative leading-[22px] inline-block min-w-[10px]">
                        ₹
                      </div>
                      <div className="relative text-sm leading-[22px] inline-block min-w-[86px]">
                        Maintenance
                      </div>
                    </div>
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[42px] w-[186px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start text-sm border-[1px] border-solid border-grey-text-2">
                  <div className="flex-1 rounded-sm bg-neutral-1 flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] border-[1px] border-solid border-neutral-5">
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative leading-[22px] inline-block min-w-[54px]">
                        Monthly
                      </div>
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
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2">
              <div className="relative leading-[22px] font-medium">
                Additional Pricing details to convey to agent?
              </div>
            </div>
            <div className="self-stretch rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-sm text-character-disabled-placeholder-25 border-[1px] border-solid border-neutral-5">
              <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-start justify-start py-4 px-[11px] min-h-[96px] max-w-full border-[1px] border-solid border-neutral-5">
                <div className="flex-1 overflow-hidden flex flex-row items-center justify-start max-w-full">
                  <div className="relative leading-[22px]">{`Do you have any concerns regarding pricing of your property? Add your concerns here or call us. `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[51px] rounded-sm overflow-hidden shrink-0 flex flex-row items-center justify-start max-w-full">
            <div className="self-stretch flex-1 rounded-sm bg-neutral-1 flex flex-row items-center justify-start py-[3.5px] px-3 box-border gap-[4px] max-w-full">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/inputprefix1@2x.png"
              />
              <div className="self-stretch flex-1 overflow-hidden max-w-full" />
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/inputsuffix1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5 />
    </div>
  );
};

export default PropertyDetails;
