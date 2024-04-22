import ItemsAnimation from "../components/ItemsAnimation";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";

const CustomerLandingPage = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[5484px] overflow-y-auto text-left text-29xl text-black font-text-paragraph-p1">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[900px] overflow-hidden text-center text-45xl">
        <ItemsAnimation />
        <div className="absolute top-[157px] left-[calc(50%_-_375px)] w-[751px] flex flex-col items-center justify-start gap-[32px]">
          <div className="self-stretch relative leading-[120%] font-medium">
            <p className="m-0">{`Simplifying Deliveries, `}</p>
            <p className="m-0">{`Every Order. `}</p>
          </div>
          <div className="w-[509px] relative text-lg leading-[150%] inline-block">{`What you need, when you need it. Your food, grocery, everyday essentials and your packages delivered to your door. `}</div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-base text-white">
            <div className="rounded-radius-med bg-shopprgreen flex flex-row items-center justify-center py-med px-big">
              <div className="relative">Start Shopping</div>
            </div>
            <div className="rounded-radius-med flex flex-row items-center justify-center py-med px-big text-shopprgreen border-[1px] border-solid border-shopprgreen">
              <div className="relative">Deliver Package</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[931px] left-[calc(50%_-_684px)] w-[1440px] flex flex-col items-center justify-start pt-40 px-[100px] pb-[120px] box-border gap-[120px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[48px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[48px]">
            <div className="w-[537px] relative font-medium inline-block">
              Bringing convenience right to your doorstep
            </div>
            <div className="self-stretch flex-1 relative text-xl leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="w-[517px] hidden flex-row items-start justify-start py-0 pr-8 pl-0 box-border gap-[32px]">
              <div className="flex flex-col items-start justify-start py-0 pr-8 pl-0 gap-[4px] border-r-[1px] border-solid border-color-grey-grey-100">
                <div className="relative font-medium">200+</div>
                <div className="relative text-xs leading-[200%]">
                  Successful Deliveries
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-8 pl-0 gap-[4px] border-r-[1px] border-solid border-color-grey-grey-100">
                <div className="relative font-medium">100+</div>
                <div className="relative text-xs leading-[200%]">
                  Trained Riders
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative font-medium">98%</div>
                <div className="relative text-xs leading-[200%]">
                  Customer satisfaction
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative rounded-13xl bg-color-grey-grey-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border h-[439px] overflow-hidden border-[1px] border-solid border-black1">
            <div className="absolute top-[-143px] left-[-26px] w-[648px] h-[648px] hidden" />
            <div className="absolute top-[-180px] left-[calc(50%_-_420px)] w-[800px] h-[800px]" />
          </div>
        </div>
        <div className="self-stretch h-[472px] flex flex-row items-start justify-start gap-[24px] text-5xl">
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 relative bg-white overflow-hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium">
                Custom Order
              </div>
              <div className="self-stretch relative text-base leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 relative bg-white overflow-hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium">
                Saved Routes
              </div>
              <div className="self-stretch relative text-base leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 relative bg-white overflow-hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium">
                Live Updates
              </div>
              <div className="self-stretch relative text-base leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <div className="absolute top-[2943px] left-[100px] bg-color-grey-grey-100 w-[1312px] hidden flex-col items-center justify-start pt-20 px-28 pb-28 box-border gap-[80px] text-21xl text-black1">
        <div className="relative font-medium">Top Stores on Shoppr</div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[77px] text-xl">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Yakoyo</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Foodies</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Gourmet Twist</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Popsicles</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Liquor ETC</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Infused Flavours</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Delis Cafe</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">BPS Phamarcy</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
              <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Infused Flavours</div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                  <div className="relative">African</div>
                  <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                  <div className="relative">Delivery by 3:00 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <div className="absolute top-[4990px] left-[calc(50%_-_718px)] rounded-t-13xl rounded-b-none bg-shopprgreen w-[1436px] h-[494px] overflow-hidden text-center text-white">
        <div className="absolute top-[101px] left-[calc(50%_-_482px)] flex flex-col items-center justify-start gap-[64px]">
          <div className="w-[965px] relative font-medium inline-block">
            Get started on Shoppr
          </div>
          <div className="flex flex-row items-start justify-start gap-[15.7px]">
            <img
              className="w-[152.2px] relative h-12 overflow-hidden shrink-0"
              alt=""
              src="/playstore-button.svg"
            />
            <img
              className="w-[142.5px] relative h-12 overflow-hidden shrink-0"
              alt=""
              src="/download-on-the-app-store-badge-usuk-rgb-blk-092917-1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[339px] left-[calc(50%_-_520px)] box-border w-[1040.2px] flex flex-row items-center justify-start pt-16 px-0 pb-0 text-xl border-t-[1px] border-solid border-white">
          <div className="flex-1 flex flex-row items-center justify-between">
            <img
              className="w-[92.2px] relative h-8 overflow-hidden shrink-0"
              alt=""
              src="/shopprlogo.svg"
            />
            <div className="flex flex-row items-center justify-start gap-[32px]">
              <div className="relative leading-[120%]">Terms of use</div>
              <div className="relative leading-[120%]">Privacy Policy</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="rounded-81xl bg-white flex flex-row items-start justify-start p-2">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon1.svg"
                />
              </div>
              <div className="rounded-81xl bg-white flex flex-row items-start justify-start p-2">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon2.svg"
                />
              </div>
              <div className="rounded-81xl bg-white flex flex-row items-start justify-start p-2">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon3.svg"
                />
              </div>
              <img
                className="w-6 relative h-6 hidden"
                alt=""
                src="/icon4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
      <div className="absolute top-[0px] left-[36px] bg-white w-[1440px] flex flex-row items-center justify-between py-reg px-16 box-border text-sm text-shopprgreen">
        <img
          className="w-[92.2px] relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/shopprlogo1.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-radius-s box-border h-8 flex flex-row items-center justify-center py-2.5 px-med border-[1px] border-solid border-color-grey-grey-300">
            <div className="relative">Login</div>
          </div>
          <div className="rounded-radius-s bg-shopprgreen h-8 flex flex-row items-center justify-center py-2.5 px-med box-border text-white">
            <div className="relative">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLandingPage;
