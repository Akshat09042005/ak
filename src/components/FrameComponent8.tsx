import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent8Type = {
  className?: string;
  frame?: string;
  cCTVCamera?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
  frame,
  cCTVCamera,
  propWidth,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`h-[138px] w-[135px] flex flex-col items-center justify-center gap-[16px] text-left text-sm text-grey-text-2 font-inter ${className}`}
      style={frameDiv2Style}
    >
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-between py-4 px-0">
        <img
          className="w-[35px] h-[34px] relative overflow-hidden shrink-0"
          alt=""
          src={frame}
        />
        <div className="self-stretch h-[17px] flex flex-row items-center justify-center py-0 px-5 box-border">
          <div className="self-stretch flex-1 relative">{cCTVCamera}</div>
        </div>
      </div>
      <div className="w-[26px] h-[26px] relative">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-1 box-border border-[0.8px] border-solid border-gray-100" />
      </div>
    </div>
  );
};

export default FrameComponent8;
