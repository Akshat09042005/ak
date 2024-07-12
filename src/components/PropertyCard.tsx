import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import AmenitiesBlock from "./AmenitiesBlock";

export type PropertyCardType = {
  className?: string;
};

const PropertyCard: FunctionComponent<PropertyCardType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[35px] box-border gap-[6px] max-w-full shrink-0 text-left text-13xl text-black font-merriweather-sans ${className}`}
    >
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/frame-2.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[55px] max-w-full mq800:gap-[27px] mq1350:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq450:gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-7xl">
                <div className="self-stretch flex flex-row items-end justify-start gap-[10px] max-w-full mq800:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[466px] max-w-full mq800:min-w-full">
                    <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-2xl">
                      <p className="m-0">{`1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 `}</p>
                      <p className="m-0">{`(545 Sq.ft.) `}</p>
                    </h2>
                    <div className="flex flex-row items-center justify-start gap-[8px] max-w-full text-base font-inter">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px]"
                        loading="lazy"
                        alt=""
                        src="/frame-3.svg"
                      />
                      <div className="relative">
                        Gokul village chs 2 Shanti Park, near st. Xaviours High
                        school
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <div className="shadow-[0px_4px_4px_rgba(83,_63,_41,_0.21)] flex flex-row items-end justify-start relative gap-[9.4px]">
                      <div className="h-[43.4px] w-[43.4px] relative rounded-[50%] bg-neutral-1 box-border border-[0px] border-solid border-cream-dark" />
                      <img
                        className="h-[23.6px] w-[23.6px] absolute !m-[0] top-[calc(50%_-_11.7px)] left-[calc(50%_-_11.7px)] overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/frame-4.svg"
                      />
                    </div>
                    <div className="shadow-[0px_4px_4px_rgba(83,_63,_41,_0.21)] flex flex-row items-end justify-start relative gap-[9.4px]">
                      <div className="h-[43.4px] w-[43.4px] relative rounded-[50%] bg-neutral-1 box-border border-[0px] border-solid border-cream-dark" />
                      <img
                        className="h-[20.8px] w-[23.6px] absolute !m-[0] top-[calc(50%_-_10.4px)] left-[calc(50%_-_11.3px)] overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/frame-5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_4px_8px_rgba(73,_63,_52,_0.25)] bg-silver flex flex-col items-end justify-start pt-[164px] px-0 pb-0 gap-[136px] text-base text-grey-text-2 font-inter border-[1px] border-solid border-border-grey mq450:gap-[34px] mq450:pt-[107px] mq450:box-border mq1125:gap-[68px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                      <img
                        className="w-12 h-12 overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        alt=""
                        src="/frame-6@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                      <div className="flex flex-row items-start justify-start py-0 px-[76px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/frame-7.svg"
                        />
                      </div>
                      <button className="cursor-pointer [border:none] p-2 bg-main-blue rounded-lg flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/frame-8.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="relative text-base leading-[22px] font-medium font-inter text-neutral-1 text-left inline-block min-w-[128px]">
                            Add Photos Now
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                      <img
                        className="w-12 h-12 overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        alt=""
                        src="/frame-9@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[29px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.64),_rgba(255,_255,_255,_0.48))] flex flex-row items-start justify-between py-[5px] pr-0 pl-6 box-border gap-[20px]">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <div className="relative font-medium inline-block min-w-[96px]">{`Property ID : `}</div>
                      <div className="relative text-sm font-medium inline-block min-w-[72px]">
                        99999999
                      </div>
                    </div>
                    <div className="mt-[-5.5px] w-[247px] bg-gray-200 flex flex-row items-start justify-start py-[5px] px-6 box-border gap-[48px]">
                      <input
                        className="w-[calc(100%_-_68px)] [border:none] [outline:none] bg-[transparent] h-[18.5px] flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border font-inter text-sm text-grey-text min-w-[79px]"
                        placeholder="Reject this property"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                        src="/frame-10.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                <div className="flex-1 shadow-[0px_1px_1px_rgba(57,_48,_39,_0.25)] rounded bg-neutral-1 overflow-hidden flex flex-col items-start justify-start py-10 pr-[22px] pl-9 box-border gap-[60px] max-w-full mq800:pt-[26px] mq800:pb-[26px] mq800:box-border mq1125:gap-[30px]">
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq800:flex-wrap">
                    <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi mq800:text-7xl">
                      Property Overview
                    </h1>
                    <div className="flex flex-col items-start justify-start text-base text-grey-text-2 font-inter">
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <div className="relative font-medium whitespace-pre-wrap inline-block min-w-[75px]">{`Society  : `}</div>
                        <div className="relative font-medium inline-block min-w-[100px]">
                          Gokul Village
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[728px] flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border gap-[20px] max-w-full text-base text-main-blue font-inter mq800:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[57.5px]">
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-[6.5px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                            alt=""
                            src="/frame-11.svg"
                          />
                          <div className="relative font-medium inline-block min-w-[59px]">
                            Two (2)
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[68px]">
                            Bedrooms
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-12.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[57px]">
                              Ground
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[117px]">
                            Property on Floor
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-13.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[87px]">
                              No Balcony
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[33px] pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[54px]">
                            Balcony
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-14.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium">
                              Normal tiles white
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[55px]">
                            Flooring
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                            alt=""
                            src="/frame-15.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[28px]">
                              Yes
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[87px]">
                            Pets Allowed
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-16.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[57px]">
                              5 Years
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[89px]">
                            Property Age
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[57.5px]">
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-[6.5px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                            alt=""
                            src="/frame-17.svg"
                          />
                          <div className="relative font-medium inline-block min-w-[51px]">
                            One(1)
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[73px]">
                            Bathrooms
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-12.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                          <div className="flex flex-col items-start justify-start gap-[8px]">
                            <div className="relative font-medium inline-block min-w-[11px]">
                              4
                            </div>
                            <div className="relative text-sm font-medium text-grey-text-2 inline-block min-w-[79px]">
                              Total Floors
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-19.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[118px]">
                              Semi-furnished
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[70px]">
                            Furnishing
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-20.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[81px]">
                              Immediate
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[72px]">
                            Availability
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-21.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[61px]">
                              Allowed
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[64px]">{`Non- Veg `}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-22.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium">{`Flats & Apartments`}</div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[96px]">
                            Property Type
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[562.5px] flex flex-col items-start justify-start gap-[57.5px]">
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-[6.5px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                            alt=""
                            src="/frame-23.svg"
                          />
                          <div className="relative font-medium inline-block min-w-[31px]">
                            580
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[43px]">
                            Sq. Ft.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-24.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[34px]">
                              East
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[45px]">
                            Facing
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-25.svg"
                          />
                          <div className="relative font-medium">
                            Any (Family / Bachelor)
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[22px] text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[124px]">
                            Tenant Preference
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start relative">
                        <div className="absolute !m-[0] top-[1.5px] right-[-132px] font-medium">
                          Municipal Corporation (BMC)
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[8.5px] text-sm text-grey-text-2">
                          <img
                            className="w-5 h-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-26.svg"
                          />
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6">
                            <div className="relative font-medium inline-block min-w-[90px]">
                              Water Supply
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-[18px] w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-27.svg"
                          />
                          <div className="relative font-medium">
                            No/ Rare Powercut
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[29px] pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[114px]">
                            Electricity Status
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                            alt=""
                            src="/frame-28@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <div className="relative font-medium inline-block min-w-[27px]">
                              yes
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-6 text-sm text-grey-text-2">
                          <div className="relative font-medium inline-block min-w-[100px]">
                            Gated Security
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                <div className="flex-1 shadow-[0px_1px_1px_rgba(57,_48,_39,_0.25)] rounded bg-neutral-1 overflow-hidden flex flex-col items-start justify-start py-10 px-9 box-border gap-[60px] max-w-full mq800:pt-[26px] mq800:pb-[26px] mq800:box-border mq1125:gap-[30px]">
                  <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi mq800:text-7xl">
                    Amenities
                  </h1>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full text-sm text-grey-text-2 font-inter">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[74px] min-h-[276px] mq450:gap-[18px] mq800:gap-[37px]">
                      <div className="flex flex-col items-start justify-start py-4 px-0 gap-[13px]">
                        <div className="flex flex-row items-start justify-start py-0 px-[52px]">
                          <div className="flex flex-row items-center justify-start">
                            <img
                              className="h-[34px] w-9 relative overflow-hidden shrink-0 object-cover"
                              loading="lazy"
                              alt=""
                              src="/frame-29@2x.png"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
                          <div className="relative whitespace-pre-wrap inline-block min-w-[93px]">
                            24/7 Security
                          </div>
                        </div>
                      </div>
                      <FrameComponent4
                        frame="/frame-30.svg"
                        cCTVCamera="CCTV Camera"
                      />
                      <FrameComponent3
                        group33405="/group-33405@2x.png"
                        lift="Lift"
                      />
                      <FrameComponent4
                        frame="/frame-31.svg"
                        cCTVCamera="Reserved Parking"
                        propOverflow="unset"
                      />
                      <div className="h-[26px] w-[26px] relative hidden z-[2]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
                      </div>
                      <div className="h-[26px] w-[26px] relative hidden z-[4]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
                      </div>
                      <div className="h-[26px] w-[26px] relative hidden z-[6]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
                      </div>
                      <div className="h-[26px] w-[26px] relative hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
                      </div>
                      <AmenitiesBlock
                        frame="/frame-32.svg"
                        regularWaterSupply="Regular water supply"
                      />
                      <AmenitiesBlock
                        frame="/frame-33.svg"
                        regularWaterSupply="Power Back up-Partial "
                        propWidth="135px"
                      />
                      <AmenitiesBlock
                        frame="/frame-33.svg"
                        regularWaterSupply="Power Back up-Full "
                        propWidth="unset"
                      />
                      <AmenitiesBlock
                        frame="/group-33422@2x.png"
                        regularWaterSupply="Maintenance staff"
                        propWidth="unset"
                      />
                    </div>
                    <div className="w-[345px] flex flex-row items-start justify-between pt-0 px-0 pb-[42px] box-border max-w-full gap-[20px] mq450:flex-wrap">
                      <FrameComponent3
                        group33405="/frame-35.svg"
                        lift="Intercom"
                        propWidth="unset"
                      />
                      <div className="h-[26px] w-[26px] relative hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
                      </div>
                      <FrameComponent4
                        frame="/frame-36.svg"
                        cCTVCamera="Fire Safety"
                        propOverflow="unset"
                      />
                      <div className="h-[26px] w-[26px] relative hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border hidden border-[0.8px] border-solid border-gray-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_1px_1px_rgba(57,_48,_39,_0.25)] rounded bg-neutral-1 overflow-hidden flex flex-col items-start justify-start py-10 px-9 gap-[25px]">
                <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi mq800:text-7xl">
                  Description
                </h1>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-grey-text font-inter">
                  <div className="self-stretch relative">
                    <p className="m-0 whitespace-pre-wrap">{`Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.  `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0 whitespace-pre-wrap">{`If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Never miss out on lifestyle as Rassaz Mall......
                    </p>
                  </div>
                  <b className="relative [text-decoration:underline] inline-block min-w-[88px]">
                    Show more
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[427px] flex flex-col items-start justify-start gap-[32px] min-w-[427px] max-w-full text-right text-5xl mq450:gap-[16px] mq800:min-w-full mq1350:flex-1">
            <div className="self-stretch bg-cream-dark flex flex-row items-start justify-start py-5 px-[22px] gap-[59.5px] mq450:flex-wrap mq450:gap-[30px]">
              <div className="w-[195px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch relative mq450:text-base">
                  <span>
                    <b>₹ 20,000</b>
                    <span className="font-extrabold font-merriweather-sans">{` `}</span>
                    <span className="text-xl">{`/ `}</span>
                  </span>
                  <span className="text-xl">
                    <span>Month</span>
                  </span>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[29px] text-base font-inter">
                  <div className="relative">(Rent-Negotiable)</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <b className="relative inline-block min-w-[112px] whitespace-nowrap mq450:text-lgi">
                  ₹ 20,000
                </b>
                <div className="flex flex-row items-start justify-start py-0 px-[21px] text-base font-inter">
                  <div className="relative inline-block min-w-[70px]">
                    (Deposit)
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_8px_8px_rgba(179,_164,_150,_0.24)] overflow-hidden flex flex-row items-start justify-start gap-[45px] max-w-full text-left text-lg mq450:gap-[22px] mq1125:flex-wrap">
              <div className="w-[428.6px] shadow-[0px_2px_12px_4px_rgba(179,_164,_150,_0.25)] rounded bg-snow box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-7 pr-[33px] pl-[34px] gap-[25px] min-w-[428.6px] max-w-full border-[0.8px] border-solid border-border-grey mq800:pt-5 mq800:pb-5 mq800:box-border mq800:min-w-full mq1125:flex-1">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <div className="flex flex-col items-start justify-start gap-[12px]">
                    <b className="relative">
                      Send an Inquiry for this property?
                    </b>
                    <div className="relative text-xs font-light font-inter text-grey-text whitespace-pre-wrap">
                      Contact Person : Melvin Lasrado
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-0.5 pl-px box-border max-w-full text-xs text-gray-300 font-poppins">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="w-[34px] relative tracking-[0.4px] font-medium hidden">
                        Label
                      </div>
                      <div className="self-stretch rounded bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[7px] pr-[191px] pl-[15px] gap-[8px] text-sm border-[1px] border-solid border-border-grey mq450:pr-5 mq450:box-border">
                        <div className="hidden flex-row items-center justify-start">
                          <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                            First Text Value
                          </div>
                          <div className="h-[18px] w-[1.5px] relative shrink-0">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                          </div>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/email.svg"
                        />
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-37.svg"
                        />
                        <div className="relative leading-[22px] font-semibold font-inter text-main-blue inline-block min-w-[123px] whitespace-nowrap">
                          +91-9999999999
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] flex flex-col items-start justify-start gap-[4px]">
                      <div className="w-[34px] relative tracking-[0.4px] font-medium hidden">
                        Label
                      </div>
                      <div className="self-stretch rounded bg-neutral-1 overflow-hidden flex flex-row items-center justify-between py-1 px-2 gap-[-55.5px] text-sm">
                        <div className="hidden flex-row items-center justify-start z-[1]">
                          <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                            First Text Value
                          </div>
                          <div className="h-[18px] w-[1.5px] relative shrink-0">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                          </div>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden z-[2]"
                          alt=""
                          src="/email.svg"
                        />
                        <input
                          className="w-14 [border:none] [outline:none] bg-neutral-1 h-8 rounded-lg flex flex-col items-start justify-start py-[7.5px] px-[7px] box-border font-inter text-sm text-grey-text-2"
                          placeholder="Name*"
                          type="text"
                        />
                        <div className="h-8 w-[23px] rounded-lg bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-[7.5px] px-[7px] box-border gap-[8px]">
                          <div className="hidden flex-row items-center justify-start">
                            <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                              First Text Value
                            </div>
                            <div className="h-[18px] w-[1.5px] relative shrink-0">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                            </div>
                          </div>
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/email.svg"
                          />
                          <div className="relative tracking-[0.4px] font-inter text-grey-text-2 hidden min-w-[8px]">
                            *
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded bg-neutral-1 overflow-hidden flex flex-row items-center justify-between py-1 px-2 gap-[-55.5px] text-sm">
                      <div className="hidden flex-row items-center justify-start z-[1]">
                        <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                          First Text Value
                        </div>
                        <div className="h-[18px] w-[1.5px] relative shrink-0">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                        </div>
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden z-[2]"
                        alt=""
                        src="/email.svg"
                      />
                      <input
                        className="w-[135px] [border:none] [outline:none] bg-neutral-1 h-8 rounded-lg flex flex-col items-start justify-start py-[7.5px] px-[7px] box-border font-inter text-sm text-grey-text-2"
                        placeholder="Email*"
                        type="text"
                      />
                      <div className="h-8 w-[23px] rounded-lg bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-[7.5px] px-[7px] box-border gap-[8px]">
                        <div className="hidden flex-row items-center justify-start">
                          <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                            First Text Value
                          </div>
                          <div className="h-[18px] w-[1.5px] relative shrink-0">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                          </div>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/email.svg"
                        />
                        <div className="relative tracking-[0.4px] font-inter text-grey-text-2 hidden min-w-[8px]">
                          *
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[9px] text-sm mq450:flex-wrap">
                      <div className="w-[51px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-neutral-1 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[7px] pr-2 pl-3.5 gap-[8px] border-[1px] border-solid border-border-grey">
                        <div className="hidden flex-row items-center justify-start">
                          <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                            First Text Value
                          </div>
                          <div className="h-[18px] w-[1.5px] relative shrink-0">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                          </div>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/email1.svg"
                        />
                        <div className="relative leading-[22px] font-semibold font-inter text-main-blue inline-block min-w-[26px] whitespace-nowrap">
                          +91
                        </div>
                      </div>
                      <div className="h-10 flex-1 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-1 pr-40 pl-2 box-border gap-[8px] min-w-[193px]">
                        <div className="hidden flex-row items-center justify-start">
                          <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                            First Text Value
                          </div>
                          <div className="h-[18px] w-[1.5px] relative shrink-0">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                          </div>
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/email.svg"
                        />
                        <div className="h-8 w-[129px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="w-10 relative tracking-[0.4px] font-medium hidden">
                            Label
                          </div>
                          <div className="w-[129px] h-8 rounded-lg bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-[7.5px] pr-2 pl-4 box-border gap-[8px]">
                            <div className="hidden flex-row items-center justify-start">
                              <div className="h-[21px] relative tracking-[0.4px] inline-block whitespace-nowrap">
                                First Text Value
                              </div>
                              <div className="h-[18px] w-[1.5px] relative shrink-0">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cornflowerblue" />
                              </div>
                            </div>
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/email.svg"
                            />
                            <input
                              className="w-[105px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[17px] relative tracking-[0.4px] text-grey-text text-left inline-block"
                              placeholder="999-999-9999"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-sm text-grey-text-2 font-inter">
                  <div className="flex-1 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.25)_inset] bg-neutral-1 flex flex-row items-start justify-start pt-3.5 pb-4 pr-[21px] pl-6 box-border max-w-full">
                    <div className="flex-1 relative font-medium">
                      I would like more information about Sector 5, shanti
                      nagar, anubhav society
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-px box-border max-w-full">
                  <button className="cursor-pointer [border:none] py-3 px-5 bg-[transparent] flex-1 rounded [background:linear-gradient(rgba(79,_79,_79,_0.2),_rgba(79,_79,_79,_0.2)),_#122b49] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-slategray">
                    <b className="relative text-base inline-block font-merriweather-sans text-neutral-1 text-left min-w-[115px]">
                      SEND INQUIRY
                    </b>
                  </button>
                </div>
              </div>
              <div className="w-[427px] shadow-[0px_2px_12px_4px_rgba(179,_164,_150,_0.25)] rounded bg-neutral-1 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[26px] px-0 pb-[33px] gap-[41px] min-w-[428.6px] max-w-full border-[1px] border-solid border-border-grey mq450:gap-[20px] mq800:pt-5 mq800:pb-[21px] mq800:box-border mq800:min-w-full mq1125:flex-1">
                <div className="w-[15px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[27px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-9">
                    <div className="w-[355px] flex flex-col items-start justify-start gap-[8px] max-w-full shrink-0">
                      <b className="w-[241px] h-[23px] relative inline-block">
                        Book a Visit to the property
                      </b>
                      <div className="self-stretch h-[15px] relative text-xs font-inter text-grey-text inline-block">{`(Schedule a visit to the property with us from your options ) `}</div>
                    </div>
                  </div>
                  <div className="w-[427px] bg-neutral-1 flex flex-row items-center justify-between py-0 px-6 box-border max-w-[2847%] shrink-0 gap-[6px] text-xs text-grey-text font-inter mq450:flex-wrap">
                    <img
                      className="h-[22px] w-[22px] relative rounded-lg overflow-hidden shrink-0 object-contain"
                      loading="lazy"
                      alt=""
                      src="/frame-38@2x.png"
                    />
                    <div className="w-[-37px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-4 pr-0 pl-4 box-border gap-[12px]">
                      <div className="w-[88px] shadow-[0px_4px_9.7px_2px_rgba(0,_0,_0,_0.1)] bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-center justify-start py-3 px-5 box-border gap-[8px]">
                        <b className="self-stretch h-[15px] relative inline-block text-grey-text-2">
                          Monday
                        </b>
                        <div className="w-[17px] h-[15px] relative font-extrabold inline-block">
                          20
                        </div>
                        <div className="w-[25px] h-[15px] relative font-semibold inline-block">
                          May
                        </div>
                      </div>
                      <div className="w-[88px] shadow-[0px_4px_9.7px_2px_rgba(0,_0,_0,_0.1)] bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-center justify-start py-3 px-[19px] box-border gap-[8px]">
                        <b className="self-stretch h-[15px] relative inline-block text-grey-text-2">
                          Tuesday
                        </b>
                        <div className="w-3.5 h-[15px] relative font-extrabold inline-block">
                          21
                        </div>
                        <div className="w-[25px] h-[15px] relative font-semibold inline-block">
                          May
                        </div>
                      </div>
                      <div className="w-[88px] shadow-[0px_4px_9.7px_2px_rgba(0,_0,_0,_0.1)] bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-center justify-start py-3 px-[9px] box-border gap-[8px]">
                        <b className="self-stretch h-[15px] relative inline-block text-grey-text-2">
                          Wednesday
                        </b>
                        <div className="w-4 h-[15px] relative font-extrabold inline-block">
                          22
                        </div>
                        <div className="w-[25px] h-[15px] relative font-semibold inline-block">
                          May
                        </div>
                      </div>
                      <div className="w-[88px] shadow-[0px_4px_9.7px_2px_rgba(0,_0,_0,_0.1)] bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-center justify-start py-3 px-[15px] box-border gap-[8px]">
                        <b className="self-stretch h-[15px] relative inline-block text-grey-text-2">
                          Thursday
                        </b>
                        <div className="w-4 h-[15px] relative font-extrabold inline-block">
                          23
                        </div>
                        <div className="w-[25px] h-[15px] relative font-semibold inline-block">
                          May
                        </div>
                      </div>
                      <div className="shadow-[0px_4px_9.7px_2px_rgba(0,_0,_0,_0.1)] bg-neutral-1 overflow-hidden shrink-0 flex flex-col items-center justify-start py-3 px-[25px] gap-[8px]">
                        <b className="w-[37px] h-[15px] relative inline-block text-grey-text-2">
                          Friday
                        </b>
                        <div className="w-4 h-[15px] relative font-extrabold inline-block">
                          24
                        </div>
                        <div className="w-[25px] h-[15px] relative font-semibold inline-block">
                          May
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-[22px] w-[22px] relative rounded-lg overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/frame-39@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[138px] flex flex-row items-start justify-start pt-0 pb-2.5 pr-[63px] pl-16 box-border text-xs text-grey-text font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="self-stretch w-[300px] flex flex-row flex-wrap items-start justify-start gap-[10px_13px]">
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[17px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[53px] relative inline-block">
                        11:00 am
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-4 whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[55px] relative inline-block">
                        12:00 am
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-5 whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-12 relative inline-block">
                        1:00 pm
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[19px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[49px] relative inline-block">
                        2:00 pm
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[19px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[50px] relative inline-block">
                        4:00 pm
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[19px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[50px] relative inline-block">
                        5:00 pm
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[19px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[50px] relative inline-block">
                        6:00 pm
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[19px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[49px] relative inline-block">
                        7:00 pm
                      </b>
                    </div>
                    <div className="h-[38px] w-[90px] rounded-lg bg-neutral-1 box-border flex flex-row items-center justify-center py-[10.5px] px-[19px] whitespace-nowrap border-[1px] border-solid border-border-grey">
                      <b className="h-[15px] w-[50px] relative inline-block">
                        8:00 pm
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-9 box-border max-w-full text-base text-neutral-1">
                  <div className="h-11 flex-1 rounded [background:linear-gradient(rgba(79,_79,_79,_0.2),_rgba(79,_79,_79,_0.2)),_#122b49] flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap max-w-full">
                    <b className="self-stretch w-[123px] relative inline-block">
                      Schedule a Visit
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
