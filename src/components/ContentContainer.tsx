import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";

export type ContentContainerType = {
  className?: string;
};

const ContentContainer: FunctionComponent<ContentContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[23px] max-w-full ${className}`}
    >
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0"
        alt=""
        src="/frame-210.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <form className="m-0 w-[976px] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq1000:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[191px] max-w-[195px]">
              <div className="self-stretch bg-cream flex flex-row items-center justify-center py-[22px] px-9">
                <a className="[text-decoration:none] flex-1 relative text-sm font-merriweather-sans text-main-blue text-center">
                  PROPERTY DETAILS
                </a>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start min-w-[191px] max-w-[195px]">
              <div className="self-stretch bg-aliceblue flex flex-row items-center justify-center py-[22px] px-9">
                <div className="flex-1 relative text-sm font-merriweather-sans text-main-blue text-center">
                  LOCATION DETAILS
                </div>
              </div>
            </div>
            <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] z-[1] mq450:flex-1">
              <div className="flex-1 relative text-sm font-merriweather-sans text-grey-text-2 text-center">{`FEATURES & AMENITIES`}</div>
            </div>
            <button className="cursor-pointer [border:none] py-[31px] px-[41px] bg-cream flex-[0.5799] flex flex-row items-center justify-center box-border min-w-[191px] max-w-[195px] whitespace-nowrap hover:bg-gainsboro-200 mq450:flex-1">
              <div className="flex-1 relative text-sm font-merriweather-sans text-grey-text-2 text-center">
                PRICE DETAILS
              </div>
            </button>
            <div className="flex-[0.5799] bg-cream flex flex-row items-center justify-center py-[22px] px-[41px] box-border min-w-[191px] max-w-[195px] z-[1] mq450:flex-1">
              <div className="flex-1 relative text-sm font-merriweather-sans text-grey-text-2 text-center">
                PROPERTY IMAGES
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full">
            <div className="h-2 flex-1 relative bg-border-grey max-w-full">
              <div className="absolute top-[0px] left-[0px] bg-border-grey w-full h-full hidden" />
              <div className="absolute top-[0px] left-[0px] bg-main-blue w-[195px] h-2 z-[1]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq1000:pl-[39px] mq1000:pr-[39px] mq1000:box-border">
            <div className="h-[368px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[168px] box-border gap-[60px] max-w-full mq450:pb-[71px] mq450:box-border mq1000:h-auto mq1000:gap-[30px] mq1000:pb-[109px] mq1000:box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[60px] shrink-0 max-w-full mq1000:flex-wrap mq1000:gap-[30px]">
                <div className="h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full mq450:h-auto">
                  <div className="overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px] shrink-0">
                    <div className="relative text-base leading-[22px] font-medium font-inter text-main-blue text-left">
                      Building/ Society Name
                    </div>
                    <div className="relative text-base leading-[22px] font-inter text-dust-red-5 text-right inline-block min-w-[8px]">
                      *
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start min-h-[42px] max-w-full shrink-0 border-[1px] border-solid border-grey-text-2">
                    <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-5 mq450:flex-wrap">
                      <img
                        className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                        alt=""
                        src="/inputprefix@2x.png"
                      />
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-start min-w-[164px] max-w-full">
                        <div className="relative text-base leading-[22px] font-body-regular text-character-disabled-placeholder-25 text-left">
                          Enter Apartment Name
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
                <div className="h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full mq450:h-auto">
                  <div className="overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px] shrink-0">
                    <div className="relative text-base leading-[22px] font-medium font-inter text-main-blue text-left inline-block min-w-[110px]">
                      Locality / Area
                    </div>
                    <div className="relative text-base leading-[22px] font-inter text-dust-red-5 text-right inline-block min-w-[8px]">
                      *
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-neutral-1 box-border overflow-hidden flex flex-row items-center justify-start min-h-[42px] max-w-full shrink-0 border-[1px] border-solid border-grey-text-2">
                    <div className="flex-1 rounded-sm bg-neutral-1 box-border flex flex-row items-center justify-start py-[7px] px-[11px] gap-[4px] max-w-full border-[1px] border-solid border-neutral-5 mq450:flex-wrap">
                      <img
                        className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                        alt=""
                        src="/inputprefix@2x.png"
                      />
                      <div className="flex-1 overflow-hidden flex flex-row items-center justify-start min-w-[119px] max-w-full">
                        <div className="relative text-sm leading-[22px] font-inter text-character-disabled-placeholder-25 text-left inline-block min-w-[119px]">
                          Eg : sheetal nagar
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
              <div className="self-stretch flex flex-row items-start justify-start gap-[60px] shrink-0 max-w-full mq1000:flex-wrap mq1000:gap-[30px]">
                <FrameComponent6
                  title="Landmark / Street Name"
                  placeholder="Prominent Landmark"
                />
                <FrameComponent6
                  title="City"
                  placeholder="Mumbai, Maharashtra"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-2">
                    <div className="relative text-lg leading-[22px] font-medium font-inter text-character-title-85 text-left">
                      Mark Locality on Map
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[400px] relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0.5px] w-[820px] h-[380px] object-cover"
                    alt=""
                    src="/-map-maker-shanti-nagar-mira-road-east-mirabhayandhar-thane-maharashtra-india-standard@2x.png"
                  />
                  <div className="absolute top-[20px] left-[calc(50%_-_369px)] rounded-sm bg-neutral-1 box-border w-[737px] flex flex-row items-start justify-start py-[7px] px-[11px] gap-[4px] max-w-full z-[1] border-[1px] border-solid border-neutral-5">
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-0.5 box-border gap-[8px] max-w-full">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px]"
                        alt=""
                        src="/frame-3.svg"
                      />
                      <input
                        className="w-[250px] [border:none] [outline:none] font-body-regular text-sm bg-[transparent] h-[22px] relative leading-[22px] text-character-disabled-placeholder-25 text-left flex items-center p-0"
                        placeholder="Search your society or nearest landmark"
                        type="text"
                      />
                    </div>
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
          <FrameComponent5 />
        </form>
      </div>
    </div>
  );
};

export default ContentContainer;
