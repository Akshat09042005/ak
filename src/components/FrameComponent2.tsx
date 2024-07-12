import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-1 box-border max-w-full shrink-0 text-left text-13xl text-black font-merriweather-sans ${className}`}
    >
      <div className="flex-1 rounded bg-neutral-1 box-border overflow-hidden flex flex-col items-start justify-start py-[39px] pr-[51px] pl-9 gap-[60px] max-w-full shrink-0 border-[0.8px] border-solid border-border-grey mq450:pt-[25px] mq450:pb-[25px] mq450:box-border mq800:gap-[30px] mq1350:pr-[25px] mq1350:box-border">
        <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi mq800:text-7xl">{`Ratings & Reviews`}</h1>
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-10 pl-0 box-border max-w-full gap-[20px] text-base text-main-blue font-inter mq1350:flex-wrap">
          <div className="w-[511px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="h-10 w-10 rounded-10xl bg-neutral-5 overflow-hidden shrink-0 flex flex-row items-start justify-start p-2 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-48.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <b className="relative">Aishwarya Malik</b>
                  <div className="relative text-xs text-grey-text inline-block min-w-[111px]">
                    Tenant ( 8 months )
                  </div>
                </div>
              </div>
              <div className="bg-neutral-1 flex flex-row items-center justify-center py-[9.5px] px-2 gap-[8px] text-lg">
                <div className="relative font-semibold inline-block min-w-[29px]">
                  4.5
                </div>
                <img
                  className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-49.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-grey-text">
              <div className="relative font-semibold inline-block min-w-[104px]">
                Good Society
              </div>
              <div className="self-stretch relative">
                <p className="m-0">
                  The garden view is mesmerizing, the exposure of natural light
                  is good.
                </p>
                <p className="m-0">
                  Easy access to stores, markets and schools.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[511px] flex flex-col items-start justify-start gap-[20px] max-w-full text-grey-text">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-main-blue mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="h-10 w-10 rounded-10xl bg-neutral-5 overflow-hidden shrink-0 flex flex-row items-start justify-start p-2 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-48.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <b className="relative inline-block min-w-[128px]">
                    Rajendra Prasad
                  </b>
                  <div className="relative text-xs text-grey-text inline-block min-w-[105px]">
                    Owner (10+ years)
                  </div>
                </div>
              </div>
              <div className="bg-neutral-1 flex flex-row items-center justify-center py-[9.5px] px-2 gap-[8px] text-lg">
                <div className="relative font-semibold inline-block min-w-[29px]">
                  4.5
                </div>
                <img
                  className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-49.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-semibold">{`Good Society & Apartment`}</div>
              <div className="self-stretch relative">
                <p className="m-0">
                  With its thoughtfully designed apartments, power backup, and
                  24x7 security, it offers a secure and worry-free living
                  experience.
                </p>
                <p className="m-0">
                  Easy access to stores, markets and schools....
                </p>
              </div>
            </div>
            <b className="relative text-sm [text-decoration:underline] inline-block min-w-[77px]">
              Show more
            </b>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[9.5px] px-11 bg-[transparent] rounded [background:linear-gradient(rgba(79,_79,_79,_0.2),_rgba(79,_79,_79,_0.2)),_#122b49] flex flex-col items-center justify-center whitespace-nowrap hover:bg-slategray">
          <div className="relative text-sm font-inter text-neutral-1 text-left inline-block min-w-[98px]">
            Write a Review
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
