import { FunctionComponent } from "react";

export type NAVBARS2Type = {
  className?: string;
};

const NAVBARS2: FunctionComponent<NAVBARS2Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[74px] bg-cream box-border overflow-hidden shrink-0 flex flex-row items-end justify-between pt-[9px] pb-[13px] pr-[62px] pl-[60px] top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-sm text-black font-inter border-[1px] border-solid border-cream-dark mq725:pl-[30px] mq725:pr-[31px] mq725:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5 text-lg text-peru font-merriweather">
        <div className="flex flex-row items-start justify-start">
          <div className="h-12 w-[105px] flex flex-row items-start justify-start py-0 px-0 box-border">
            <div className="flex flex-col items-start justify-center gap-[2px] shrink-0">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[47.5px] h-[27px] relative"
                  alt=""
                  src="/logo-icon.svg"
                />
                <div className="flex flex-col items-center justify-center pt-0 px-[9px] pb-0 z-[1] mt-[-17px]">
                  <img
                    className="w-7 h-[12.7px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <div className="flex flex-col items-center justify-center py-0 px-2.5 gap-[1.4px] z-[1] mt-[-3px]">
                    <div className="w-[9px] flex flex-row items-center justify-center gap-[1.4px]">
                      <div className="h-[3.4px] w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)]" />
                      <div className="h-[3.4px] w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)]" />
                    </div>
                    <div className="w-[9px] flex flex-row items-center justify-center gap-[1.4px]">
                      <div className="h-[3.4px] w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)]" />
                      <div className="h-[3.4px] w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-0.5">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[113px] whitespace-nowrap">
                  Dylan Estate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[27px] hidden flex-row items-end justify-center pt-2.5 px-2.5 pb-0 box-border">
        <b className="self-stretch flex-1 relative whitespace-nowrap">
          ABOUT US
        </b>
      </div>
      <div className="w-[951px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[32px] max-w-full mq725:gap-[16px] mq1050:hidden">
        <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[88px]">
            PROPERTIES
          </a>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
          <b className="relative whitespace-nowrap">MY DASHBOARD/ACTIVITY</b>
        </div>
        <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
          <b className="relative [text-decoration:underline] whitespace-nowrap">
            LIST YOUR PROPERTY
          </b>
        </div>
        <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[93px] whitespace-nowrap">
            CONTACT US
          </a>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
          <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <b className="relative inline-block min-w-[42px]">MORE</b>
          </div>
        </div>
        <div className="h-6 w-2 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
          <div className="w-[1.4px] h-[25.4px] relative box-border border-r-[1.4px] border-solid border-black" />
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame1.svg"
        />
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
          <img
            className="w-[21px] h-[21px] relative overflow-hidden shrink-0"
            alt=""
            src="/frame-18.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default NAVBARS2;
