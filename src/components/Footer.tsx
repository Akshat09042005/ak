import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-main-blue overflow-hidden flex flex-col items-start justify-start pt-[54px] pb-[47px] pr-[78px] pl-[120px] box-border gap-[34px] max-w-full shrink-0 text-left text-15xl-6 text-bisque font-merriweather mq450:pl-5 mq450:pt-[35px] mq450:pb-[31px] mq450:box-border mq800:gap-[17px] mq800:pl-[60px] mq800:pr-[39px] mq800:box-border ${className}`}
    >
      <div className="w-[105px] h-12 relative hidden" />
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1350:flex-wrap">
        <div className="w-[883px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
            <div className="h-[100.5px] flex flex-col items-start justify-center gap-[3.8px] min-w-[224.7px] shrink-0 z-[1] mq1125:flex-1">
              <div className="w-[91.3px] flex-1 flex flex-col items-center justify-center">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-1-1.svg"
                />
                <div className="flex flex-col items-center justify-center py-0 px-[18px] z-[1] mt-[-32.7px]">
                  <img
                    className="w-[53.8px] h-[24.5px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-3-1.svg"
                  />
                  <div className="flex flex-col items-center justify-center py-0 px-[19px] gap-[2.8px] z-[1] mt-[-5.8px]">
                    <div className="w-[17px] flex flex-row items-center justify-center gap-[2.8px]">
                      <div className="h-[6.5px] w-[6.5px] relative [background:linear-gradient(180deg,_#dbbd9a,_#f5dbc2)]" />
                      <div className="h-[6.5px] w-[6.5px] relative [background:linear-gradient(180deg,_#dbbd9a,_#f5dbc2)]" />
                    </div>
                    <div className="w-[17px] flex flex-row items-center justify-center gap-[2.8px]">
                      <div className="h-[6.5px] w-[6.5px] relative [background:linear-gradient(180deg,_#dbbd9a,_#f5dbc2)]" />
                      <div className="h-[6.5px] w-[6.5px] relative [background:linear-gradient(180deg,_#dbbd9a,_#f5dbc2)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-[3px]">
                <b className="relative mq450:text-2xl mq800:text-9xl">
                  Dylan Estate
                </b>
              </div>
            </div>
            <div className="w-[566px] flex flex-col items-start justify-start pt-[76px] px-0 pb-0 box-border min-w-[566px] max-w-full text-sm text-neutral-1 font-inter mq1125:flex-1 mq1125:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-end gap-[40px] shrink-0 mq800:flex-wrap mq800:gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[43px]">
                      HOME
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[87px]">
                      PROPERTIES
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold">
                      LIST YOUR PROPERTY
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[126px]">
                      SAVED SEARCHES
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold whitespace-pre-wrap">
                      ABOUT MIRA ROAD
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[124px]">
                      EMI CALCULATOR
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[110px]">
                      TESTAMONIALS
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold">
                      EXPLORE NEIGHBORHOOD
                    </div>
                  </div>
                </div>
                <div className="h-[162px] flex flex-col items-start justify-start gap-[18px]">
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[73px]">
                      ABOUT US
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[92px]">
                      CONTACT US
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
                    <div className="relative font-semibold inline-block min-w-[40px]">
                      FAQ’S
                    </div>
                  </div>
                  <div className="w-5 flex-1 flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0 box-border">
                    <div className="self-stretch flex-1 relative font-semibold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[236px] flex flex-col items-start justify-start gap-[29px] text-xl text-neutral-1 font-inter">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
              CONTACT US
            </h3>
            <div className="self-stretch relative text-sm font-merriweather-sans">{`B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti `}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
              OFFICE HOURS
            </h3>
            <div className="self-stretch relative text-sm font-merriweather-sans">{`B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti `}</div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[12.4px] max-w-full text-sm text-neutral-1 font-inter">
        <div className="self-stretch h-[0.6px] relative box-border border-t-[0.6px] border-solid border-neutral-1" />
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-[7px] box-border shrink-0 gap-[20px] max-w-full mq1125:flex-wrap">
          <div className="relative inline-block max-w-full">
            <p className="m-0">
              © 2024 Dylan Estates. All rights reserved. Dylan Estates- Your
              Neighborhood Experts
            </p>
            <p className="m-0">
              <span className="[text-decoration:underline]">
                Privacy Policy
              </span>
               | 
              <span className="[text-decoration:underline]">{`Terms & Conditions`}</span>
               
            </p>
          </div>
          <div className="flex flex-row items-end justify-start gap-[26px] text-base">
            <div className="flex flex-row items-end justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/frame-72.svg"
              />
              <div className="flex flex-col items-start justify-end">
                <b className="relative [text-decoration:underline] inline-block min-w-[91px]">
                  English (IN)
                </b>
              </div>
            </div>
            <b className="relative inline-block min-w-[45px]">
              <span className="text-lg">₹</span>
              <span>
                {`  `}
                <span className="[text-decoration:underline]">INR</span>
              </span>
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
