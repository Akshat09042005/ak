import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;
  group33405?: string;
  lift?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  group33405,
  lift,
  propWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`h-24 w-[135px] flex flex-col items-center justify-between py-4 px-0 box-border text-left text-sm text-grey-text-2 font-inter ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="w-[30.1px] h-[34px] relative object-contain"
        alt=""
        src={group33405}
      />
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-14">
        <div className="self-stretch flex flex-row items-end justify-start">
          <div className="relative inline-block min-w-[22px]">{lift}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
