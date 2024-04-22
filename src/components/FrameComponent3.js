import FrameComponent4 from "./FrameComponent4";

const FrameComponent3 = () => {
  return (
    <div className="absolute top-[2211px] left-[calc(50%_-_720px)] bg-gray-300 w-[1440px] flex flex-col items-center justify-start py-20 px-16 box-border gap-[80px] text-left text-21xl text-black font-text-paragraph-p1">
      <div className="relative tracking-[-0.02em] leading-[120%] font-semibold text-center">{`Local stores you might like. `}</div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[48px] text-base text-black1">
        <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
          <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
          <div className="w-[114px] flex flex-col items-start justify-start">
            <div className="relative">Yakoyo</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <FrameComponent4 amalaSky="Amala Sky" />
          <FrameComponent4
            amalaSky="Foodies"
            propFlex="unset"
            propHeight="unset"
            propMinWidth="unset"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <FrameComponent4
            amalaSky="Delis Cafe"
            propFlex="unset"
            propHeight="unset"
            propMinWidth="unset"
          />
          <FrameComponent4
            amalaSky="Liquor ETC"
            propFlex="unset"
            propHeight="unset"
            propMinWidth="unset"
          />
          <FrameComponent4
            amalaSky="Gourmet Twist"
            propFlex="unset"
            propHeight="unset"
            propMinWidth="unset"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <FrameComponent4
            amalaSky="Popsicles"
            propFlex="unset"
            propHeight="unset"
            propMinWidth="unset"
          />
          <FrameComponent4
            amalaSky="BPS Pharmacy"
            propFlex="unset"
            propHeight="unset"
            propMinWidth="unset"
          />
        </div>
        <div className="rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start p-4 gap-[21px]">
          <div className="w-14 relative rounded-lg bg-gainsboro h-14" />
          <div className="relative">Infused Flavors</div>
        </div>
      </div>
      <div className="w-[206px] rounded-radius-big bg-accent-orange h-14 flex flex-row items-center justify-center p-2.5 box-border text-lg">
        <div className="relative leading-[120%]">Explore more stores</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
