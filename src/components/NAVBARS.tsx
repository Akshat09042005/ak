import { FunctionComponent } from "react";

export type NAVBARSType = {
  className?: string;
};

const NAVBARS: FunctionComponent<NAVBARSType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[74px] bg-cream box-border overflow-hidden shrink-0 flex flex-row items-end justify-between pt-[9px] pb-3.5 pr-[88px] pl-[60px] top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-lg text-peru font-merriweather border-[1px] border-solid border-cream-dark mq450:pr-5 mq450:box-border mq800:pl-[30px] mq800:pr-11 mq800:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
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
      <div className="h-[27px] w-[961px] flex flex-row items-end justify-start pt-0.5 px-0 pb-0 box-border gap-[39.3px] max-w-full mq800:gap-[20px] mq1125:w-[159px]">
        <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[32px] max-w-full text-left text-xs text-black font-merriweather-sans mq450:gap-[16px] mq1125:hidden">
          <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[95px] whitespace-nowrap">
              ALL PROPERTIES
            </a>
          </div>
          <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[56px]">
              WISHLIST
            </a>
          </div>
          <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] whitespace-nowrap">
              SAVED SEARCH
            </a>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[124px] whitespace-nowrap">
              LIST YOUR PROPERTY
            </a>
          </div>
          <div className="flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[36px]">
              MORE
            </a>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-2.5 px-2.5 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[124px] whitespace-nowrap">
              LIST YOUR PROPERTY
            </a>
          </div>
        </nav>
        <div className="h-[25.4px] w-[1.4px] relative box-border border-r-[1.4px] border-solid border-main-blue" />
        <div className="w-[79px] flex flex-row items-start justify-between pt-1 px-0 pb-0 box-border gap-[20px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          <img
            className="h-[21px] w-[21px] relative overflow-hidden shrink-0"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default NAVBARS;
