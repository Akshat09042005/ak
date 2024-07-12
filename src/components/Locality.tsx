import { FunctionComponent } from "react";

export type LocalityType = {
  className?: string;
};

const Locality: FunctionComponent<LocalityType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-[59px] pl-[61px] box-border max-w-full text-left text-13xl text-black font-merriweather-sans mq800:pl-[30px] mq800:pr-[29px] mq800:box-border ${className}`}
    >
      <div className="flex-1 rounded bg-neutral-1 box-border overflow-hidden flex flex-col items-start justify-start py-10 px-9 gap-[60px] max-w-full shrink-0 border-[0.8px] border-solid border-border-grey mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq800:gap-[30px]">
        <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lgi mq800:text-7xl">
          About Miraroad
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-base text-grey-text font-inter">
          <div className="relative">
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
        <button className="cursor-pointer [border:none] py-[9.5px] px-11 bg-[transparent] rounded [background:linear-gradient(rgba(79,_79,_79,_0.2),_rgba(79,_79,_79,_0.2)),_#122b49] flex flex-row items-start justify-start whitespace-nowrap hover:bg-slategray">
          <div className="relative text-sm font-inter text-neutral-1 text-left inline-block min-w-[98px]">
            Write a Review
          </div>
        </button>
      </div>
    </div>
  );
};

export default Locality;
