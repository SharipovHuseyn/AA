import React from "react";
import ParallaxImageGallery from "../components/ParallaxImageGallery";
import { useSmoothScroll } from "../components/useSmoothScroll";
import FeedBlackForm from "../components/feedBackForm/FeedBlackForm";
import MainTitleText from "../components/utilities/MainTitleText";
import FormBG from "../assets/images/contacts/photo.png"
import ApplicationBtn from "../components/Buttons/ ApplicationBtn";
import ContactsMap from "../components/ContactsMap";
import BlurCenter from "../components/BlurCenter";

function Contacts() {

  const feedbackRef = useSmoothScroll("#feedback-form", 100);
  const contactRef = useSmoothScroll("#contact", 100);

  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pt-10 sm:pt-20 md:pt-30 lg:pt-40 xl:pt-50 2xl:pt-60 bg-black w-full">
      <div className=" text-[#0b0b0b] min-h-screen w-full">
        <BlurCenter />
        <section className="relative z-50 py-6 sm:py-8 md:py-10 lg:py-12 text-center">
          <MainTitleText>Контакты</MainTitleText>
        </section>

        <section ref={contactRef} className="relative z-50 mx-auto w-full mt-4 md:mt-6 lg:mt-8 2xl:mt-10">
          <div className="bg-white/[0.03] w-[90%] mx-auto text-white rounded-2xl sm:rounded-3xl py-3 sm:py-4 lg:py-5 px-4 sm:px-5 md:px-6 xl:px-8">

            <div className="hidden lg:flex justify-between items-center">
              <p className="text-[28px] xl:text-[30px] 2xl:text-[32px] font-semibold uppercase">ОТдел продаж</p>
              <div className="flex items-center gap-6">
                <p className="text-[18px] lg:text-[22px] font-semibold">
                  Телефон:<span className="text-[#FBFFFECC] ml-2">8-915-124-95-45</span>
                </p>
                <ApplicationBtn onClick={scrollToFeedback} />
              </div>
            </div>

            <div className="hidden w-full sm:block lg:hidden">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start">
                  <p className="text-[24px] font-semibold uppercase mb-2">ОТдел продаж</p>
                  <p className="text-[16px] font-semibold">
                    Телефон:<span className="text-[#FBFFFECC] ml-2">8-915-124-95-45</span>
                  </p>
                </div>
                <div className="">
                  <ApplicationBtn onClick={scrollToFeedback} />
                </div>
              </div>
            </div>

            <div className="sm:hidden">
              <div className="flex flex-col gap-2">
                <p className="text-[22px] font-semibold uppercase">ОТдел продаж</p>
                <p className="text-[14px] font-semibold">
                  Телефон:<span className="text-[#FBFFFECC] ml-1">8-915-124-95-45</span>
                </p>
                <ApplicationBtn onClick={scrollToFeedback} />
              </div>
            </div>

          </div>
        </section>

        <ContactsMap />

        <div className="relative overflow-hidden z-30">
          <ParallaxImageGallery />
        </div>

        <section ref={feedbackRef} className="z-50 mt-16 sm:mt-20 md:mt-25 lg:mt-30 relative bg-cover bg-center bg-no-repeat bg-[#111111]" style={{ backgroundImage: `url(${FormBG})` }}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center mb-8 sm:mb-10 md:mb-30">
              <MainTitleText className="text-white">
                подбор авто экспертом
              </MainTitleText>
            </div>

            <div className="mx-auto">
              <FeedBlackForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
