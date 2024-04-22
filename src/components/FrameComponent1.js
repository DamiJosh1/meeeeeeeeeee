import { useMemo } from "react";

const FrameComponent1 = ({
  sellOnShoppr,
  joinShopprAndReachMoreCus,
  learnMore,
  propBackgroundImage,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="flex-1 rounded-2xl h-[763px] flex flex-col items-start justify-end pt-20 px-big pb-large box-border gap-[16px] bg-[url('/public/frame-5914@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-17xl text-white font-text-paragraph-p1"
      style={frameDiv1Style}
    >
      <div className="self-stretch relative leading-[120%] font-medium">
        {sellOnShoppr}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-lg">
        <div className="self-stretch relative leading-[150%]">
          {joinShopprAndReachMoreCus}
        </div>
        <div className="w-[206px] rounded-radius-big bg-shopprgreen h-14 flex flex-row items-center justify-center p-2.5 box-border">
          <div className="relative leading-[120%]">{learnMore}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
