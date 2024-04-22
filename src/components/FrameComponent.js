import FrameComponent1 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <div className="absolute top-[2963px] left-[calc(50%_-_720px)] bg-white w-[1440px] flex flex-col items-start justify-start py-[120px] px-[100px] box-border gap-[80px] text-left text-33xl text-black font-text-paragraph-p1">
      <div className="w-[537px] relative leading-[120%] font-semibold inline-block">
        <p className="m-0">{`Join Us. `}</p>
        <p className="m-0">Let’s grow together</p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-17xl text-white">
        <FrameComponent1
          sellOnShoppr="Sell on Shoppr"
          joinShopprAndReachMoreCus="Join Shoppr and reach more customers. We do all the hard work so you can focus on your business and boost your sales "
          learnMore="Learn More"
        />
        <FrameComponent1
          sellOnShoppr="Ride for Shoppr"
          joinShopprAndReachMoreCus="Enjoy flexible work that fits your life.  Plus great perks and earnings when you ride with Shoppr"
          learnMore="Get Started"
          propBackgroundImage="url('/frame-5916@3x.png')"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
