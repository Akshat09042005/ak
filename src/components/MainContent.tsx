import { FunctionComponent } from "react";
import NonVegContainer from "./NonVegContainer";
import AdditionalFeaturesCheckboxes from "./AdditionalFeaturesCheckboxes";
import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent5 from "./FrameComponent5";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1235px] flex flex-row items-start justify-end py-0 px-[27px] box-border max-w-full text-center text-sm text-main-blue font-merriweather-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[23px] max-w-full">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          alt=""
          src="/frame-210.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[976px] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq1050:flex-wrap">
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
              <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start min-w-[191px] max-w-[195px] z-[1]">
                <div className="self-stretch bg-aliceblue flex flex-row items-center justify-center py-[22px] px-9">
                  <div className="flex-1 relative">{`FEATURES & AMENITIES`}</div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[31px] px-[41px] bg-cream flex-[0.5799] flex flex-row items-center justify-center box-border min-w-[191px] max-w-[195px] whitespace-nowrap hover:bg-gainsboro-200 mq450:flex-1">
                <div className="flex-1 relative text-sm font-merriweather-sans text-grey-text-2 text-center">
                  PRICE DETAILS
                </div>
              </button>
              <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] z-[1] text-grey-text-2 mq450:flex-1">
                <a className="[text-decoration:none] flex-1 relative text-[inherit]">
                  PROPERTY IMAGES
                </a>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full">
              <div className="h-2 flex-1 relative bg-border-grey max-w-full">
                <div className="absolute top-[0px] left-[0px] bg-border-grey w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] bg-main-blue w-[390px] h-2 z-[1]" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full text-right text-dust-red-5 font-inter mq1050:pl-[39px] mq1050:pr-[39px] mq1050:box-border">
              <div className="h-[368px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[206px] box-border relative gap-[60px] max-w-full lg:pb-[87px] lg:box-border mq750:h-auto mq750:pb-[57px] mq750:box-border mq1050:gap-[30px]">
                <div className="self-stretch flex flex-row items-start justify-start shrink-0 text-left text-lg text-black">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative font-semibold">
                      General Features
                    </div>
                  </div>
                </div>
                <NonVegContainer
                  nonVeg="Non- Veg"
                  allowed="Allowed"
                  allowed1="Not Allowed"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[60px] shrink-0 mq1050:gap-[30px]">
                  <NonVegContainer
                    nonVeg="Pets Allowed"
                    allowed="Yes"
                    allowed1="No"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[302px] pl-0 gap-[32px] mq450:gap-[16px] mq450:pr-5 mq450:box-border mq1050:pr-[151px] mq1050:box-border">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <div className="relative leading-[22px] inline-block min-w-[7px]">
                          *
                        </div>
                        <div className="relative text-lg font-semibold text-black text-left inline-block min-w-[88px]">
                          Electricity
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-character-title-85">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[155px] mq450:flex-wrap">
                        <div className="h-[26px] w-[26px] relative">
                          <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] rounded-81xl bg-neutral-1 box-border w-full h-full border-[1px] border-solid border-main-blue" />
                          <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-[18px] h-[18px] z-[1]">
                            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] rounded-[50%] bg-lavender w-full h-full" />
                            <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] rounded-xl bg-main-blue w-3.5 h-3.5 z-[1]" />
                          </div>
                        </div>
                        <div className="flex-1 relative inline-block min-w-[108px]">
                          Rare/No Powercut
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[155px] mq450:flex-wrap">
                        <div className="h-[26px] w-[26px] relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-neutral-1 box-border border-[1px] border-solid border-neutral-5" />
                        </div>
                        <div className="flex-1 relative inline-block min-w-[113px]">
                          Frequent Powercut
                        </div>
                      </div>
                      <div className="hidden flex-row items-center justify-start gap-[23px]">
                        <div className="h-[26px] w-[26px] relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-neutral-1 box-border border-[1px] border-solid border-neutral-5" />
                        </div>
                        <div className="h-[22px] w-[190px] relative leading-[22px] inline-block shrink-0">
                          Allowed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full shrink-0">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[39px] pl-0 box-border gap-[32px] shrink-0 max-w-full mq450:gap-[16px]">
                    <div className="w-32 h-[22px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                        <div className="self-stretch w-[7px] relative leading-[22px] inline-block">
                          *
                        </div>
                        <div className="self-stretch flex-1 relative text-lg font-semibold text-black text-left">
                          Water Supply
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-character-title-85">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[179px] mq450:flex-wrap">
                        <div className="h-[26px] w-[26px] relative">
                          <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] rounded-81xl bg-neutral-1 box-border w-full h-full border-[1px] border-solid border-main-blue" />
                          <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-[18px] h-[18px] z-[1]">
                            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] rounded-[50%] bg-lavender w-full h-full" />
                            <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] rounded-xl bg-main-blue w-3.5 h-3.5 z-[1]" />
                          </div>
                        </div>
                        <div className="h-[38px] flex-1 relative inline-block min-w-[123px]">
                          <p className="m-0">{`Municipal Corporation `}</p>
                          <p className="m-0">(BMC)</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[179px] mq450:flex-wrap">
                        <div className="h-[26px] w-[26px] relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-neutral-1 box-border border-[1px] border-solid border-neutral-5" />
                        </div>
                        <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                          Borewell
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[179px] mq450:flex-wrap">
                        <div className="h-[26px] w-[26px] relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-neutral-1 box-border border-[1px] border-solid border-neutral-5" />
                        </div>
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block min-w-[123px]">
                          Both
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[-287px] left-[0px] box-border shrink-0 border-t-[1px] border-solid border-border-grey" />
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full shrink-0">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[39px] pl-0 box-border gap-[32px] shrink-0 max-w-full mq450:gap-[16px]">
                    <div className="w-[103px] h-[22px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                        <div className="self-stretch w-[7px] relative leading-[22px] inline-block">
                          *
                        </div>
                        <div className="self-stretch flex-1 relative text-lg font-semibold text-black text-left">
                          Furnishing
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-2 gap-[24px] text-left text-base text-black">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Fully Furnished
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Semi Furnished
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Unfurnished
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[-487px] left-[0px] box-border shrink-0 border-t-[1px] border-solid border-border-grey" />
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full shrink-0 text-left text-lg text-black">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[39px] pl-0 box-border gap-[32px] shrink-0 max-w-full mq450:gap-[16px]">
                    <div className="w-[169px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-[22px] relative font-semibold inline-block">
                        Additional Features
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-2 gap-[24px] text-base">
                      <AdditionalFeaturesCheckboxes
                        airConditioning="Air Conditioning"
                        securityPersonnelGatedSec="Washing machine"
                      />
                      <AdditionalFeaturesCheckboxes
                        airConditioning="Ceiling Fans"
                        securityPersonnelGatedSec="Microwave"
                      />
                      <AdditionalFeaturesCheckboxes
                        airConditioning="Refrigerator"
                        securityPersonnelGatedSec="oven"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[-745px] left-[0px] box-border shrink-0 border-t-[1px] border-solid border-border-grey" />
                <div className="w-[781px] flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full shrink-0 text-left text-lg text-black">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] shrink-0 max-w-full mq450:gap-[16px]">
                    <div className="w-[42px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-[22px] relative font-semibold inline-block">
                        Tiles
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-2 gap-[24px] text-base">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Normal White Tiles
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Marble
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[179px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Vitrified Tiles
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[-945px] left-[0px] box-border shrink-0 border-t-[1px] border-solid border-border-grey" />
                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[-1157px] left-[0px] box-border shrink-0 border-t-[1px] border-solid border-border-grey" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[120px] shrink-0 max-w-full mq450:gap-[30px] mq1050:gap-[60px]">
                  <div className="w-[518px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                    <div className="w-[68px] h-[22px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                        <div className="self-stretch w-[7px] relative leading-[22px] inline-block">
                          *
                        </div>
                        <div className="self-stretch flex-1 relative text-lg font-semibold text-black text-left">
                          Safety
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-2 gap-[24px] text-left text-base text-black">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[155px]">
                        <div className="self-stretch h-[38px] flex flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="self-stretch w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[155px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[23px] mq450:flex-wrap">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block min-w-[123px]">
                            Security Systems- CCTV
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="h-24 hidden flex-col items-start justify-start gap-[32px]">
                        <div className="w-[239px] flex flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[19px] flex-1 relative inline-block">
                            Vitrified Tiles
                          </div>
                        </div>
                        <div className="hidden flex-row items-center justify-start gap-[23px]">
                          <div className="h-[26px] w-[26px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                          </div>
                          <div className="h-[38px] w-[190px] relative inline-block shrink-0">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-1 flex flex-col items-start justify-start gap-[60px] text-left text-lg text-black mq1050:gap-[30px]">
                    <div className="w-[182px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-[22px] relative font-semibold inline-block">
                        SOCIETY AMENITIES
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-grey-text-2 mq750:flex-wrap">
                      <div className="h-[138px] w-[135px] flex flex-col items-center justify-center gap-[16px]">
                        <div className="self-stretch flex-1 flex flex-col items-center justify-between py-4 px-0">
                          <div className="flex flex-row items-center justify-start py-0 px-0">
                            <img
                              className="h-[34px] w-9 relative overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/frame-34@2x.png"
                            />
                          </div>
                          <div className="self-stretch h-[17px] flex flex-row items-center justify-center py-0 px-[21px] box-border">
                            <div className="self-stretch flex-1 relative whitespace-pre-wrap">
                              24/7 Security
                            </div>
                          </div>
                        </div>
                        <div className="w-[26px] h-[26px] relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
                        </div>
                      </div>
                      <FrameComponent8
                        frame="/frame-30.svg"
                        cCTVCamera="CCTV Camera"
                      />
                      <FrameComponent7
                        group33405="/group-334051@2x.png"
                        lift="Lift"
                      />
                      <FrameComponent8
                        frame="/frame-31.svg"
                        cCTVCamera="Reserved Parking"
                        propWidth="135px"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                      <FrameComponent8
                        frame="/frame-32.svg"
                        cCTVCamera="Regular water supply"
                        propWidth="unset"
                      />
                      <FrameComponent8
                        frame="/frame-33.svg"
                        cCTVCamera="Power Back up-Partial "
                        propWidth="135px"
                      />
                      <FrameComponent8
                        frame="/frame-33.svg"
                        cCTVCamera="Power Back up-Full "
                        propWidth="135px"
                      />
                      <FrameComponent8
                        frame="/group-334221@2x.png"
                        cCTVCamera="Maintenance staff"
                        propWidth="135px"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                      <FrameComponent8
                        frame="/frame-91.svg"
                        cCTVCamera="Garden/ Park"
                        propWidth="135px"
                      />
                      <FrameComponent8
                        frame="/frame-101.svg"
                        cCTVCamera="Kids Play area"
                        propWidth="135px"
                      />
                      <FrameComponent7
                        group33405="/frame-111.svg"
                        lift="Sport"
                      />
                      <FrameComponent8
                        frame="/frame-121.svg"
                        cCTVCamera="Property Gym"
                        propWidth="135px"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                      <FrameComponent8
                        frame="/frame-131.svg"
                        cCTVCamera="Community Hall"
                        propWidth="135px"
                      />
                      <FrameComponent7
                        group33405="/frame-141.svg"
                        lift="Shopping center"
                      />
                      <FrameComponent8
                        frame="/frame-131.svg"
                        cCTVCamera="Club House"
                        propWidth="135px"
                      />
                      <FrameComponent8
                        frame="/frame-161.svg"
                        cCTVCamera="Swimming pool"
                        propWidth="135px"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                      <FrameComponent7
                        group33405="/frame-35.svg"
                        lift="Intercom"
                      />
                      <FrameComponent8
                        frame="/frame-36.svg"
                        cCTVCamera="Fire Safety"
                        propWidth="135px"
                      />
                      <FrameComponent8
                        frame="/frame-131.svg"
                        cCTVCamera="Club House"
                        propWidth="135px"
                      />
                      <FrameComponent8
                        frame="/frame-161.svg"
                        cCTVCamera="Swimming pool"
                        propWidth="135px"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[-2289px] left-[0px] box-border shrink-0 border-t-[1px] border-solid border-border-grey" />
                <div className="w-[380px] h-[51px] !m-[0] absolute bottom-[-2399px] left-[0px] rounded-sm overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
                  <div className="self-stretch flex-1 rounded-sm bg-neutral-1 flex flex-row items-start justify-start py-[3.5px] px-3 box-border gap-[4px] max-w-full">
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
        </div>
      </div>
    </section>
  );
};

export default MainContent;
