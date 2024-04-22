import HeroSection from "../components/HeroSection";
import Statepending from "../components/Statepending";

const MerchantLandingPage = () => {
  return (
    <div className="w-full relative bg-white h-[4480px] overflow-y-auto text-left text-29xl text-black font-text-paragraph-p1">
      <HeroSection />
      <div className="absolute top-[1313px] left-[0px] w-[1440px] flex flex-col items-start justify-start py-[120px] px-[100px] box-border gap-[80px]">
        <div className="w-[750px] relative font-medium inline-block">
          Important features that will help your business
        </div>
        <div className="w-[1314px] relative rounded-2xl bg-color-grey-grey-50 h-[941px] overflow-hidden shrink-0 text-base text-text-text-text-100">
          <div className="absolute top-[100px] left-[76px] flex flex-row items-start justify-start gap-[48px]">
            <div className="flex flex-row items-end justify-start gap-[37px]">
              <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px]">
                <div className="self-stretch w-1 relative rounded-lg bg-color-grey-grey-300 overflow-hidden shrink-0 z-[0]" />
                <div className="w-1 absolute !m-[0] top-[0px] left-[0px] rounded-lg bg-shopprgreen h-[45px] overflow-hidden shrink-0 z-[1]" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[48px]">
                <div className="flex flex-col items-start justify-start gap-[16px] text-xl text-black1">
                  <div className="relative leading-[120%]">
                    Order Management
                  </div>
                  <div className="w-[301px] relative text-sm leading-[200%] text-text-text-text-200 inline-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
                <div className="relative leading-[120%]">Payouts</div>
                <div className="relative leading-[120%]">
                  Catalogue Management
                </div>
                <div className="relative leading-[120%]">
                  Bulk logistics deliveries
                </div>
                <div className="relative leading-[120%]">Branches</div>
              </div>
            </div>
            <div className="w-[1235.7px] rounded-[8.64px] bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-start p-[25.9px] text-sm text-black1 border-[1.1px] border-solid border-color-grey-grey-200">
              <div className="self-stretch flex flex-row items-start justify-start text-base-1 border-b-[1.1px] border-solid border-color-grey-grey-100">
                <div className="w-[129.6px] flex flex-row items-center justify-start pt-[10.8px] px-[17.3px] pb-[21.6px] box-border">
                  <div className="relative leading-[120%]">OrderID</div>
                </div>
                <div className="w-[378px] flex flex-row items-center justify-start pt-[10.8px] px-[17.3px] pb-[21.6px] box-border">
                  <div className="relative leading-[120%]">Items</div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] px-[17.3px] pb-[21.6px]">
                  <div className="relative leading-[120%]">Order Time</div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] px-[17.3px] pb-[21.6px]">
                  <div className="relative leading-[120%]">Price</div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] px-[17.3px] pb-[21.6px]">
                  <div className="relative leading-[120%]">Delivery Type</div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] pb-[21.6px] pr-0 pl-[17.3px]">
                  <div className="relative leading-[120%]">Status</div>
                </div>
              </div>
              <div className="self-stretch overflow-y-auto flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0 text-white">
                  <div className="rounded-[4.32px] bg-shopprgreen h-[34.6px] flex flex-row items-center justify-center py-[8.6px] px-[13px] box-border">
                    <div className="relative leading-[120%]">Accept</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="Awaiting Pickup"
                    show
                    statependingBorder="1.1px solid #e7b021"
                    statependingBackgroundColor="#fff7d9"
                    statependingGap="4.3px"
                    divColor="#8c6a14"
                    completedColor="#8c6a14"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="In Transit"
                    show
                    statependingBorder="1.1px solid #8d19c3"
                    statependingBackgroundColor="#f5eafa"
                    statependingGap="4.3px"
                    divColor="#7b21a5"
                    completedColor="#9d40aa"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0 text-white">
                  <div className="rounded-[4.32px] bg-shopprgreen h-[34.6px] flex flex-row items-center justify-center py-[8.6px] px-[13px] box-border">
                    <div className="relative leading-[120%]">Order Ready</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    1 Fried Rice, 2 Chicken and Eja Kika
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="Rejected"
                    show
                    statependingBorder="1.1px solid #ee4a52"
                    statependingBackgroundColor="#fef1f2"
                    statependingGap="8.6px"
                    divColor="#811015"
                    completedColor="#811015"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    1 Fried Rice, 2 Chicken and Eja Kika
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="Rejected"
                    show
                    statependingBorder="1.1px solid #ee4a52"
                    statependingBackgroundColor="#fef1f2"
                    statependingGap="8.6px"
                    divColor="#811015"
                    completedColor="#811015"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="Completed"
                    show
                    statependingBorder="1.1px solid #2e9092"
                    statependingBackgroundColor="#eaf4f4"
                    statependingGap="8.6px"
                    divColor="#2e9092"
                    completedColor="#2e9092"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="Completed"
                    show
                    statependingBorder="1.1px solid #2e9092"
                    statependingBackgroundColor="#eaf4f4"
                    statependingGap="8.6px"
                    divColor="#2e9092"
                    completedColor="#2e9092"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">#123ABC</div>
                </div>
                <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                  <div className="relative leading-[120%]">
                    5 chicken buckets, 3 ice creams
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">12:30 pm</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">N5,000.00</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                  <div className="relative leading-[120%]">Pickup</div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                  <Statepending
                    text="Completed"
                    show
                    statependingBorder="1.1px solid #2e9092"
                    statependingBackgroundColor="#eaf4f4"
                    statependingGap="8.6px"
                    divColor="#2e9092"
                    completedColor="#2e9092"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3110px] left-[calc(50%_-_720px)] bg-white w-[1440px] flex flex-row items-start justify-center pt-[100px] px-[100px] pb-[120px] box-border gap-[80px] text-21xl">
        <div className="w-[380px] relative tracking-[-0.02em] leading-[120%] font-semibold inline-block shrink-0">
          Frequently Asked Questions
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 px-large gap-[32px] text-center text-5xl">
          <div className="self-stretch flex flex-col items-start justify-center pt-4 px-4 pb-8 gap-[16px] border-b-[1px] border-solid border-color-grey-grey-200">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[120%]">What is Shoppr?</div>
              <img className="w-8 relative h-8" alt="" src="/iconminus.svg" />
            </div>
            <img
              className="w-[684px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
              alt=""
              src="/vector-4.svg"
            />
            <div className="self-stretch relative text-xl leading-[200%] text-dimgray text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </div>
          </div>
          <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[120%]">
                How do i make a delivery?
              </div>
              <img className="w-8 relative h-8" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[120%]">
                What kind of items can i deliver on shoppr?
              </div>
              <img className="w-8 relative h-8" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[120%]">
                What times does shoppr work during the day?
              </div>
              <img className="w-8 relative h-8" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[120%]">
                How do i make a complaint about a delivery?
              </div>
              <img className="w-8 relative h-8" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="self-stretch box-border h-14 flex flex-col items-start justify-center pt-4 px-4 pb-8 border-b-[1px] border-solid border-color-grey-grey-200">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[120%]">
                Why should i use Shoppr?
              </div>
              <img className="w-8 relative h-8" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2670px] left-[calc(50%_-_720px)] w-[1440px] flex flex-col items-center justify-start pt-0 px-[100px] pb-[120px] box-border gap-[64px] text-center">
        <div className="self-stretch relative font-medium">
          Get started in 3 easy steps
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-left text-xl">
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
            <div className="w-[397.3px] flex-1 relative bg-white overflow-hidden hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium">
                Signup and complete verification
              </div>
              <div className="self-stretch relative text-base leading-[150%] text-text-text-text-200">
                Sign up online or download the mobile app to get started. P
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
            <div className="w-[397.3px] flex-1 relative bg-white overflow-hidden hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium">
                Upload and manage product catalogue
              </div>
              <div className="self-stretch relative text-base leading-[150%] text-text-text-text-200">
                Upload your store offerings e
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
            <div className="w-[397.3px] flex-1 relative bg-white overflow-hidden hidden" />
            <div className="self-stretch flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium whitespace-pre-wrap">
                Go online and start receiving orders
              </div>
              <div className="self-stretch relative text-base leading-[150%] text-text-text-text-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3986px] left-[calc(50%_-_718px)] rounded-t-13xl rounded-b-none bg-shopprgreen w-[1436px] h-[494px] overflow-hidden text-center text-white">
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
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] flex flex-row items-center justify-between py-reg px-16 box-border text-sm text-shopprgreen">
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

export default MerchantLandingPage;
