import { useMemo } from "react";

const FrameComponent4 = ({ amalaSky, propFlex, propHeight, propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  const amalaSkyStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px] text-left text-base text-black1 font-text-paragraph-p1"
      style={frameDivStyle}
    >
      <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
      <div className="w-[114px] flex flex-col items-start justify-start">
        <div className="relative" style={amalaSkyStyle}>
          {amalaSky}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
