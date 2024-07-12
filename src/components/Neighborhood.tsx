import { FunctionComponent } from "react";

export type NeighborhoodType = {
  className?: string;
};

const Neighborhood: FunctionComponent<NeighborhoodType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_16px_4px_rgba(108,_100,_93,_0.14)] rounded bg-neutral-1 box-border overflow-hidden flex flex-col items-start justify-start pt-8 pb-6 pr-[35px] pl-9 gap-[36px] max-w-full shrink-0 text-left text-13xl text-black font-merriweather-sans border-[0.5px] border-solid border-border-grey mq800:gap-[18px] mq800:pt-[21px] mq800:pb-5 mq800:box-border ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi mq800:text-7xl">
        Explore Neighborhood
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start gap-[17px] max-w-full text-sm text-grey-text font-inter mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[522px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[42px] max-w-full mq450:gap-[21px] mq800:flex-wrap mq1350:flex-1">
              <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-[31.5px] w-[25px] relative"
                    alt=""
                    src="/group-33409.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[7.3px] px-0 pb-0">
                    <div className="relative font-medium inline-block min-w-[128px]">
                      Gokul Village chs 2
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[11px] min-w-[382px] max-w-full mq800:flex-wrap mq800:min-w-full">
                <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[25px]">
                    To :
                  </div>
                </div>
                <input
                  className="[outline:none] bg-neutral-1 h-9 flex-1 relative rounded box-border min-w-[229px] max-w-full border-[1px] border-solid border-border-grey"
                  type="text"
                />
                <button className="cursor-pointer [border:none] py-[9.5px] px-[70px] bg-[transparent] rounded [background:linear-gradient(rgba(79,_79,_79,_0.2),_rgba(79,_79,_79,_0.2)),_#122b49] flex flex-row items-start justify-start hover:bg-slategray">
                  <div className="relative text-sm font-inter text-neutral-1 text-left inline-block min-w-[47px]">
                    Search
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-end pt-[195px] px-[150px] pb-[94.3px] relative text-xl text-red mq450:pt-[127px] mq450:pb-[61px] mq450:box-border mq800:pl-[75px] mq800:pr-[75px] mq800:box-border">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/second-location-icon@2x.png"
            />
            <div className="flex flex-row items-start justify-start py-0 px-[52px]">
              <img
                className="h-[86.7px] w-[86.7px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-33410.svg"
              />
            </div>
            <h3 className="m-0 relative text-inherit font-medium font-inherit [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] z-[1] mq450:text-base">
              Gokul Village CHS 2
            </h3>
          </div>
        </div>
        <div className="w-[428px] bg-snow overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border min-w-[428px] max-w-full text-center text-black mq450:pb-[27px] mq450:box-border mq800:min-w-full mq1350:flex-1">
          <div className="bg-snow flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <button className="cursor-pointer [border:none] pt-0 px-0 pb-0 bg-[transparent] h-12 flex flex-col items-end justify-start box-border shrink-0">
              <div className="bg-cream-dark flex flex-row items-start justify-start py-[15px] px-9">
                <b className="relative text-sm inline-block font-merriweather-sans text-main-blue text-center min-w-[69px]">
                  Transport
                </b>
              </div>
              <div className="flex flex-row items-start justify-end py-0 pr-[3px] pl-1">
                <img
                  className="h-0.5 w-[135px] relative"
                  alt=""
                  src="/line-8.svg"
                />
              </div>
            </button>
            <div className="flex flex-row items-start justify-center shrink-0 [row-gap:20px] mq450:flex-wrap">
              <button className="cursor-pointer [border:none] py-[15px] px-[37px] bg-cream-dark flex flex-row items-start justify-start shrink-0 hover:bg-lightgray">
                <div className="relative text-sm font-merriweather-sans text-main-blue text-center inline-block min-w-[68px]">
                  Essentials
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[15px] px-[49px] bg-cream-dark flex flex-row items-start justify-start shrink-0 z-[1] ml-[-0.1px] hover:bg-lightgray mq450:ml-0">
                <div className="relative text-sm font-merriweather-sans text-main-blue text-center inline-block min-w-[43px]">
                  Utility
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start py-3 px-0 box-border gap-[8px] max-w-full">
              <div className="self-stretch rounded-lg bg-neutral-1 box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-[19px] gap-[10px_201px] min-h-[172px] max-w-full border-[1px] border-solid border-border-grey mq800:gap-[50px] mq1125:gap-[100px]">
                <div className="w-[348px] flex flex-row items-center justify-between max-w-full gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-40.svg"
                    />
                    <div className="relative font-semibold inline-block min-w-[78px]">
                      Bus Station
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-41.svg"
                  />
                </div>
                <div className="w-[348px] flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap mq800:justify-center">
                  <div className="flex flex-col items-start justify-center gap-[16px] min-w-[162px] mq800:flex-1">
                    <div className="relative">Mira Road Station (E)</div>
                    <div className="relative">Mira Road Station (E)</div>
                    <div className="relative">Mira Road Station (E)</div>
                    <div className="relative">Mira Road Police Station</div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[16px] min-w-[101px] mq800:flex-1">
                    <div className="relative inline-block min-w-[101px]">
                      0.7 km | 3 mins
                    </div>
                    <div className="relative inline-block min-w-[101px]">
                      0.8 km | 2 mins
                    </div>
                    <div className="relative inline-block min-w-[101px]">
                      0.9 km | 4 mins
                    </div>
                    <div className="relative inline-block min-w-[98px]">
                      1.8 km | 6 mins
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-neutral-1 overflow-hidden flex flex-col items-start justify-center py-2.5 pr-[19px] pl-[17px] border-[1px] border-solid border-border-grey">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-42.svg"
                    />
                    <div className="relative font-semibold inline-block min-w-[104px]">
                      Railway Station
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-43.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-neutral-1 overflow-hidden flex flex-col items-start justify-center py-2.5 pr-[19px] pl-[17px] border-[1px] border-solid border-border-grey">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-44.svg"
                    />
                    <div className="relative font-semibold inline-block min-w-[99px]">
                      Metro stations
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-43.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-neutral-1 overflow-hidden flex flex-col items-start justify-center py-2.5 pr-[19px] pl-[17px] border-[1px] border-solid border-border-grey">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-46.svg"
                    />
                    <div className="relative font-semibold inline-block min-w-[48px]">
                      Airport
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-43.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
