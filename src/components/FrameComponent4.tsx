import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  frame?: string;
  cCTVCamera?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  frame,
  cCTVCamera,
  propOverflow,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`overflow-hidden flex flex-col items-start justify-start py-4 px-0 gap-[13px] text-left text-sm text-grey-text-2 font-inter ${className}`}
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[50px]">
        <img
          className="h-[34px] w-[35px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={frame}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="relative inline-block min-w-[95px]">{cCTVCamera}</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
