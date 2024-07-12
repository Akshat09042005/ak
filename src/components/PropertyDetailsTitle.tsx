import { FunctionComponent } from "react";
import TotalFloorsLabel from "./TotalFloorsLabel";
import VerticalFormItemInput from "./VerticalFormItemInput";
import FrameComponent5 from "./FrameComponent5";

export type PropertyDetailsTitleType = {
  className?: string;
};

const PropertyDetailsTitle: FunctionComponent<PropertyDetailsTitleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-sm text-grey-text-2 font-inter ${className}`}
    >
      <div className="w-[976px] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] text-center font-merriweather-sans mq1000:flex-wrap">
          <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start min-w-[191px] max-w-[195px] text-main-blue">
            <div className="self-stretch bg-aliceblue flex flex-row items-center justify-center py-[22px] px-9">
              <a className="[text-decoration:none] flex-1 relative text-[inherit]">
                PROPERTY DETAILS
              </a>
            </div>
          </div>
          <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] mq450:flex-1">
            <a className="[text-decoration:none] flex-1 relative text-[inherit]">
              LOCATION DETAILS
            </a>
          </div>
          <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] z-[1] mq450:flex-1">
            <div className="flex-1 relative">{`FEATURES & AMENITIES`}</div>
          </div>
          <button className="cursor-pointer [border:none] py-[31px] px-[41px] bg-cream flex-[0.5799] flex flex-row items-center justify-center box-border min-w-[191px] max-w-[195px] whitespace-nowrap hover:bg-gainsboro-200 mq450:flex-1">
            <div className="flex-1 relative text-sm font-merriweather-sans text-grey-text-2 text-center">
              PRICE DETAILS
            </div>
          </button>
          <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] z-[1] mq450:flex-1">
            <a className="[text-decoration:none] flex-1 relative text-[inherit]">
              PROPERTY IMAGES
            </a>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full">
          <div className="h-2 flex-1 relative bg-border-grey max-w-full">
            <div className="absolute top-[0px] left-[2px] bg-border-grey w-full h-full hidden" />
            <div className="absolute top-[8px] left-[2px] bg-main-blue w-0.5 h-2 [transform:_rotate(180deg)] [transform-origin:0_0]" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[78px] box-border max-w-full text-base text-character-title-85 mq1000:pl-[39px] mq1000:pr-[39px] mq1000:box-border">
          <div className="h-[368px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[60px] max-w-full mq725:h-auto mq1000:gap-[30px]">
            <div className="w-[518px] flex flex-col items-start justify-start max-w-full text-right text-sm text-dust-red-5 mq725:gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-[284px] pl-0 box-border gap-[4px] max-w-full mq450:pr-5 mq450:box-border">
                  <div className="relative leading-[22px] inline-block min-w-[7px]">
                    *
                  </div>
                  <div className="relative text-base leading-[22px] font-medium text-character-title-85 text-left inline-block min-w-[105px]">
                    Property For :
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-character-title-85">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[155px] mq450:flex-wrap">
                    <div className="h-[26px] w-[26px] relative">
                      <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] rounded-81xl bg-neutral-1 box-border w-full h-full border-[1px] border-solid border-main-blue" />
                      <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-[18px] h-[18px] z-[1]">
                        <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] rounded-[50%] bg-lavender w-full h-full" />
                        <input
                          className="cursor-pointer m-0 absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] rounded-xl bg-main-blue w-3.5 h-3.5 z-[1]"
                          type="radio"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative leading-[22px] inline-block min-w-[26px]">
                      Rent
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[155px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-[26px] w-[26px] relative"
                      type="radio"
                    />
                    <div className="flex-1 relative leading-[22px] inline-block min-w-[24px]">
                      Sale
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
            <div className="w-[781px] flex flex-col items-start justify-start max-w-full text-right text-sm text-dust-red-5 mq450:gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-64 pl-0 box-border gap-[4px] max-w-full mq450:pr-5 mq450:box-border">
                  <div className="relative leading-[22px] inline-block min-w-[7px]">
                    *
                  </div>
                  <div className="relative text-lg leading-[22px] font-medium text-character-title-85 text-left">
                    Property Type :
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-character-title-85">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[179px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-[26px] w-[26px] relative"
                      type="radio"
                    />
                    <div className="flex-1 relative leading-[22px] inline-block min-w-[64px]">
                      Residential
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[179px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-[26px] w-[26px] relative"
                      type="radio"
                    />
                    <div className="flex-1 relative leading-[22px] inline-block min-w-[70px]">
                      Commercial
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-[23px] min-w-[179px] mq450:flex-wrap">
                    <div className="h-[26px] w-[26px] relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-neutral-1 box-border border-[1px] border-solid border-neutral-5" />
                    </div>
                    <div className="flex-1 relative leading-[22px] inline-block min-w-[63px]">
                      Land / Plot
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[60px] max-w-full mq1000:gap-[30px]">
              <TotalFloorsLabel title="Built up Area" />
              <TotalFloorsLabel title="Carpet Area" />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[60px] max-w-full mq1000:gap-[30px]">
              <div className="flex-1 flex flex-row items-start justify-between min-w-[247px] max-w-full gap-[20px] mq725:flex-wrap">
                <VerticalFormItemInput
                  title="Property on Floor"
                  placeholder="2 "
                />
                <VerticalFormItemInput title="Total Floors" placeholder="5" />
              </div>
              <div className="h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full mq450:h-auto">
                <div className="overflow-hidden flex flex-row items-center justify-start pt-0 pb-2 pr-[247px] pl-0 gap-[4px] shrink-0 mq450:pr-5 mq450:box-border">
                  <div className="relative leading-[22px] font-medium inline-block min-w-[122px]">
                    Property Facing
                  </div>
                  <div className="relative text-sm leading-[22px] text-dust-red-5 text-right inline-block min-w-[7px]">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start min-h-[42px] max-w-full shrink-0 border-[1px] border-solid border-grey-text-2">
                  <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-5 mq450:flex-wrap">
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <input
                      className="w-[calc(100%_-_34px)] [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 overflow-hidden flex flex-row items-center justify-start font-inter text-sm text-main-blue min-w-[221px] max-w-full"
                      placeholder="East"
                      type="text"
                    />
                    <img
                      className="h-1.5 w-3 relative object-contain"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[707px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq1000:pr-[353px] mq1000:box-border">
                  <div className="h-[22px] flex-1 relative leading-[22px] font-medium inline-block min-w-[66px]">
                    Property Age
                  </div>
                  <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq1000:w-full mq1000:h-[7px]">
                    *
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 gap-[24px_23px] text-sm text-black">
                  <div className="h-[39px] shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-neutral-1">
                    <div className="h-[17px] relative inline-block">Any</div>
                  </div>
                  <div className="w-[159px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="self-stretch h-[17px] relative inline-block">
                      Less than 1 Year
                    </div>
                  </div>
                  <div className="rounded-11xl bg-neutral-1 flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[67px] h-[17px] relative inline-block">
                      1- 3 Years
                    </div>
                  </div>
                  <div className="rounded-11xl bg-neutral-1 flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[69px] h-[17px] relative inline-block">
                      3- 5 Years
                    </div>
                  </div>
                  <div className="rounded-11xl bg-neutral-1 flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[79px] h-[17px] relative inline-block">
                      5 - 10 Years
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[78px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="self-stretch h-[17px] relative inline-block">
                      Greater than 10 Years
                    </div>
                  </div>
                  <div className="h-[39px] rounded-11xl bg-neutral-1 box-border hidden flex-col items-center justify-center py-2.5 px-[7px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">5+ BHK</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[673px] flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[587px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq725:pr-[293px] mq725:box-border">
                  <div className="h-[22px] flex-1 relative leading-[22px] font-medium inline-block min-w-[49px]">
                    BHK Type
                  </div>
                  <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq725:w-full mq725:h-[7px]">
                    *
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 gap-[24px_23.2px] text-sm text-black">
                  <div className="h-[39px] shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-neutral-1">
                    <div className="h-[17px] relative inline-block">Any</div>
                  </div>
                  <div className="w-[79px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[29px] h-[17px] relative inline-block">
                      1 RK
                    </div>
                  </div>
                  <div className="w-[90px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-10 h-[17px] relative inline-block">
                      1 BHK
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[37px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[42px] h-[17px] relative inline-block">
                      2 BHK
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[37px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[42px] h-[17px] relative inline-block">
                      3 BHK
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[37px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[42px] h-[17px] relative inline-block">
                      4 BHK
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[40px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[51px] h-[17px] relative inline-block">
                      5+ BHK
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[673px] flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[518px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq725:pr-[259px] mq725:box-border">
                  <div className="h-[19px] flex-1 relative font-medium inline-block min-w-[94px]">
                    Bathrooms/ Toilets
                  </div>
                  <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq725:w-full mq725:h-[7px]">
                    *
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-0 pr-48 pl-0 gap-[20px] text-sm text-black mq450:pr-5 mq450:box-border mq725:pr-24 mq725:box-border">
                  <div className="h-[39px] shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-neutral-1">
                    <div className="h-[17px] relative inline-block">Any</div>
                  </div>
                  <div className="w-[57px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[7px] h-[17px] relative inline-block">
                      1
                    </div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      2
                    </div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      3
                    </div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      4
                    </div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      5
                    </div>
                  </div>
                  <div className="w-[68px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[18px] h-[17px] relative inline-block">
                      6+
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[673px] flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[601px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq725:pr-[300px] mq725:box-border">
                  <div className="h-[19px] flex-1 relative font-medium inline-block min-w-[40px]">
                    Balcony
                  </div>
                  <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq725:w-full mq725:h-[7px]">
                    *
                  </div>
                </div>
                <div className="w-[403px] flex flex-row flex-wrap items-start justify-between py-0 pr-1 pl-0 box-border max-w-full gap-[20px] text-sm text-black">
                  <div className="shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-neutral-1">
                    <div className="h-[17px] relative inline-block">1</div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      0
                    </div>
                  </div>
                  <div className="w-[57px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[7px] h-[17px] relative inline-block">
                      1
                    </div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      2
                    </div>
                  </div>
                  <div className="w-[59px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[9px] h-[17px] relative inline-block">
                      3
                    </div>
                  </div>
                  <div className="w-[73px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[23px] h-[17px] relative inline-block">
                      4 +
                    </div>
                  </div>
                  <div className="h-[39px] rounded-11xl bg-neutral-1 box-border hidden flex-col items-center justify-center py-2.5 px-6 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">6+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[673px] flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[521px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq725:pr-[260px] mq725:box-border">
                  <div className="h-[19px] flex-1 relative font-medium inline-block min-w-[92px]">
                    Tenant Preference
                  </div>
                  <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq725:w-full mq725:h-[7px]">
                    *
                  </div>
                </div>
                <div className="w-[573px] flex flex-row flex-wrap items-center justify-start py-0 pr-1 pl-0 box-border gap-[24px_22.7px] max-w-full text-sm text-black">
                  <div className="w-[79px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-2 px-6 text-base border-[1px] border-solid border-border-grey">
                    <div className="w-[29px] h-[19px] relative inline-block">
                      Any
                    </div>
                  </div>
                  <div className="w-[99px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-2 px-6 text-base border-[1px] border-solid border-border-grey">
                    <div className="w-[49px] h-[19px] relative inline-block">
                      Family
                    </div>
                  </div>
                  <div className="w-[151px] rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="self-stretch h-[17px] relative inline-block">
                      Bachelor (Man)
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[69px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="self-stretch h-[17px] relative inline-block">
                      Bachelor (Women)
                    </div>
                  </div>
                  <div className="self-stretch rounded-11xl bg-neutral-1 hidden flex-col items-center justify-center py-2.5 px-6 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">4</div>
                  </div>
                  <div className="self-stretch rounded-11xl bg-neutral-1 hidden flex-col items-center justify-center py-2.5 px-6 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">5</div>
                  </div>
                  <div className="h-[39px] rounded-11xl bg-neutral-1 box-border hidden flex-col items-center justify-center py-2.5 px-6 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">6+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[673px] flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[579px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq725:pr-[289px] mq725:box-border">
                  <div className="h-[19px] flex-1 relative font-medium inline-block min-w-[54px]">
                    Availability
                  </div>
                  <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq725:w-full mq725:h-[7px]">
                    *
                  </div>
                </div>
                <div className="w-[640px] flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 box-border gap-[24px_22.7px] max-w-full text-sm text-black">
                  <div className="rounded-11xl bg-neutral-1 flex flex-col items-center justify-center py-[9px] px-6 border-[1px] border-solid border-border-grey">
                    <div className="w-[70px] h-[17px] relative inline-block">
                      Immediate
                    </div>
                  </div>
                  <div className="rounded-11xl bg-neutral-1 flex flex-col items-center justify-center py-[9px] px-6 whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[95px] h-[17px] relative inline-block">
                      within 15 days
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[59px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="w-[97px] h-[17px] relative inline-block">
                      within 1 month
                    </div>
                  </div>
                  <div className="flex-1 rounded-11xl bg-neutral-1 box-border flex flex-col items-center justify-center py-[9px] px-6 min-w-[62px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                    <div className="self-stretch h-[17px] relative inline-block">
                      within 2 months
                    </div>
                  </div>
                  <div className="self-stretch rounded-11xl bg-neutral-1 hidden flex-col items-center justify-center py-2.5 px-4 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">{`>10`}</div>
                  </div>
                  <div className="self-stretch rounded-11xl bg-neutral-1 hidden flex-col items-center justify-center py-2.5 px-6 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">5</div>
                  </div>
                  <div className="h-[39px] rounded-11xl bg-neutral-1 box-border hidden flex-col items-center justify-center py-2.5 px-6 border-[1px] border-solid border-border-grey">
                    <div className="h-[17px] relative inline-block">6+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
              <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-start pt-0 pb-2 pr-[650px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border mq1000:pr-[325px] mq1000:box-border">
                <div className="h-[22px] flex-1 relative leading-[22px] font-medium inline-block min-w-[103px]">
                  Property Description
                </div>
                <div className="h-[22px] w-[7px] relative text-sm leading-[22px] text-dust-red-5 text-right inline-block mq1000:w-full mq1000:h-[7px]">
                  *
                </div>
              </div>
              <div className="self-stretch rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-sm text-character-disabled-placeholder-25 border-[1px] border-solid border-neutral-5">
                <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-start justify-start py-4 px-[11px] min-h-[96px] max-w-full border-[1px] border-solid border-neutral-5">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-start max-w-full">
                    <div className="h-[22px] w-[404px] relative leading-[22px] flex items-center max-w-full">
                      Add a description for your property to attract the best
                      tenant
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[380px] h-[51px] rounded-sm overflow-hidden shrink-0 flex flex-row items-center justify-start max-w-full">
              <div className="self-stretch flex-1 rounded-sm bg-neutral-1 flex flex-row items-center justify-start py-[3.5px] px-3 box-border gap-[4px] max-w-full">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
                  alt=""
                  src="/inputprefix1@2x.png"
                />
                <div className="self-stretch flex-1 overflow-hidden max-w-full" />
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain hidden"
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
  );
};

export default PropertyDetailsTitle;
