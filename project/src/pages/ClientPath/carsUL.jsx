import triangle from "../../assets/images/triangle.svg";
import CarsDocSteps from '../../components/CarsDocSteps'
import BannerA from "../../components/BannerComponents/BannerA";
import BannerB from "../../components/BannerComponents/BannerB";
import DashedLine from "../../components/DashedLine";
import MainHeadNav from "../../components/carsPagesComponents/MainHeadNav";
import OneStepForm from "../../components/carsPagesComponents/OneStepForm";
import Blur from "../../components/Blur";

export default function CarsULPages() {
  return (
    <div className="py-30 xs:py-32 sm:py-40 md:py-45 lg:py-52 xl:py-56 2xl:py-60">

      <MainHeadNav />
      <div className="mx-auto px-1 xs:px-2 sm:px-3 md:px-4 max-w-[96vw] xs:max-w-[96vw] sm:max-w-[96vw] md:max-w-[96vw] lg:max-w-[96vw] xl:max-w-[90vw] 2xl:max-w-[80vw]">

        {/* ====== ШАГ 1 ====== */}
        <section className="mt-8 xs:mt-10 sm:mt-14 md:mt-15 lg:mt-16 xl:mt-18 2xl:mt-20 3xl:mt-36 4xl:mt-40
mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
          <section className="mt-10">
            <CarsDocSteps title='ШАГ №1' subtitle="Размещение заявки" subSubtitle="Для юридического лица*" />
          </section>

          <OneStepForm />
        </section>

        {/* ====== ШАГ 2 ====== */}
        <section className="relative mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
            <Blur/>
          <section>
            <CarsDocSteps title='ШАГ №2' subtitle="Поиск и подбор" />
          </section>
          <BannerA />
        </section>

        {/* ====== ШАГ 3 ====== */}
        <section className="relative mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
            <Blur/>
          <section className="mt-10">
            <CarsDocSteps title='ШАГ №3' subtitle="ЗАКЛЮЧЕНИЕ ДОГОВОРА НА ПОДБОР АВТОМОБИЛЯ" />
          </section>

          <div className="mt-4 sm:mt-5 lg:mt-8 2xl:mt-10">
            <div className="text-[#FBFFFE] p-3 md:p-4 xl:p-5 2xl:p-6 bg-white/[0.08] mt-2 sm:mt-3 md:mt-4 lg:mt-5 rounded-xl lg:rounded-2xl">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px]">
                Для возможности быстрого бронирования автомобиля и подробного осмотра с видео-фиксацией необходимо заключить договор и оплатить услуги по подбору автомобиля.
              </p>
            </div>

            <div className="text-[#FBFFFE] p-3 md:p-4 xl:p-5 2xl:p-6 bg-white/[0.08] mt-2 sm:mt-3 md:mt-4 xl:mt-5 rounded-xl lg:rounded-2xl">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px]">
                Размер депозита – <span className="text-[#DB1E1E]">250 000 рублей*</span>
              </p>
            </div>

            <div className="mt-4 sm:mt-5 lg:mt-6 text-[#9E9E9E]">
              <div className="flex items-start">
                <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">*</span>
                <span className="ml-1 sm:ml-1.5 lg:ml-2 text-justify text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                  В случае успешного подбора автомобиля его стоимость будет снижена на стоимость оплаченной Вами услуги. В случае отказа от приобретения автомобиля после его осмотра стоимость услуги возвращается за вычетом расходов на проведенные осмотры. В случае отказа от выкупа автомобиля после его бронирования стоимость услуги НЕ возвращается.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ====== ШАГ 4 ====== */}
        <section className="relative mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
            <Blur/>
          <section className="mt-10">
            <CarsDocSteps title='ШАГ №4' subtitle="Согласование автомобиля" />
          </section>
          <BannerB />
        </section>

        {/* ====== ШАГ 5 ====== */}
        <section className="relative mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
            <Blur/>
          <section className="mt-6 sm:mt-8 lg:mt-10">
            <CarsDocSteps title='ШАГ №5' subtitle="Подписание договора на поставку автомобиля. Олпата в Корею за автомобиль" />
          </section>

          <div className="mx-auto px-4 sm:px-6 lg:px-0">
            <div className="w-full mt-4 sm:mt-5 lg:mt-4">
              <div className="text-[#FBFFFE] p-3 md:p-4 xl:p-5 2xl:p-6 font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] bg-white/[0.05] mt-2 sm:mt-3 md:mt-4 xl:mt-5 rounded-xl lg:rounded-2xl">
                На данном этапе Ваша компания подписывает договор купли-продажи автомобиля. В рамках подписанного договора
                <span className="text-[#E40000] block sm:inline">
                  {" "}необходимо совершить 2 платежа:
                </span>
              </div>
            </div>

            <div className="mt-4 md:mt-5 lg:mt-6 2xl:mt-8 flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
              <div className="w-full xl:w-1/2 bg-white/[0.05] p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-xl lg:rounded-2xl">
                <span className="font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px]">
                  <span className="text-[#E40000]">Авансовый </span>платеж
                </span>
                <p className="text-white mt-3 text-sm sm:text-base lg:text-lg xl:text-[23px] w-full">
                  В размере, согласованном Сторонами, но не менее суммы расходов, понесенных до прибытия автомобиля во Владивосток – оплачивается в течение 3 дней с момента подписания договора.
                </p>
              </div>

              <div className="w-full xl:w-1/2 bg-white/[0.05] p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-xl lg:rounded-2xl">
                <span className="font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px]">
                  <span className="text-[#E40000]">Окончательный </span>платеж
                </span>
                <p className="text-white mt-3 text-sm sm:text-base lg:text-lg xl:text-[23px] w-full">
                  Оплачивается в течение 3 дней с момента получения уведомления о готовности автомобиля к таможенной очистке.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== ШАГ 6 ====== */}
        <section className="relative mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40
mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
            <Blur/>
          <section className="mt-6 sm:mt-8 lg:mt-10">
            <CarsDocSteps title='ШАГ №6' subtitle="Логистика, таможенное оформление" />
          </section>

          <div className="bg-white/[0.08] p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl 2xl:rounded-3xl">

            <p className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold mb-3 md:mb-4 lg:mb-5 2xl:mb-6">Этапы:</p>


            {/* Этап 1 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-[#251213] text-[#DB1E1E] flex items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] rounded-lg">
                  1
                </div>
                <div className="flex flex-col items-center flex-1">
                  <DashedLine dashes={14} className={'min-h-[50px] sm:min-h-[80px] lg:min-h-[130px]'} />
                </div>
              </div>
              <div className="flex-1 text-white">
                <p className="text-base font-semibold sm:text-lg lg:text-[22px] leading-none">
                  После прохождения таможенной очистки автомобиль перемещается на стоянку транспортной компании.
                </p>
                <p className="mb-4 sm:mb-5 lg:mb-6 text-base sm:text-lg lg:text-[21px] font-light mt-1">Мы предлагаем следующие варианты доставки: </p>

                {/* Варианты доставки */}
                <div className="flex-col lg:flex-row items-start mt-4 sm:mt-5 lg:mt-6 gap-4 sm:gap-5 lg:gap-8 mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 flex-1">
                    <div className="border border-white/10 rounded-xl md:rounded-2xl relative py-2 sm:py-3 lg:py-4 xl:py-6 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                      <img className="absolute top-0 left-0 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px]" src={triangle} alt="" />
                      Автовозом
                    </div>
                    <div className="border border-white/10 rounded-xl md:rounded-2xl relative py-2 sm:py-3 lg:py-4 xl:py-6 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                      <img className="absolute top-0 left-0 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px]" src={triangle} alt="" />
                      Закрытым автовозом / фурой
                    </div>
                    <div className="border border-white/10 rounded-xl md:rounded-2xl relative py-2 sm:py-3 lg:py-4 xl:py-6 text-center text-xs sm:text-sm lg:text-[16px] px-3 sm:px-4 lg:px-6 flex items-center justify-center min-h-[60px]">
                      <img className="absolute top-0 left-0 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px]" src={triangle} alt="" />
                      Поездом
                    </div>
                  </div>

                  <div className="text-[#9E9E9E] w-full mt-2 md:mt-3 2xl:mt-4">
                    <div className="flex items-start">
                      <span className="text-[#E40000] text-lg sm:text-xl lg:text-[25px] mt-0.5">*</span>
                      <span className="ml-1 sm:ml-1.5 lg:ml-2 text-sm sm:text-[15.5px] lg:text-[16.5px] leading-relaxed">
                        Менеджер проконсультирует Вас по актуальным срокам и стоимости разных вариантов доставки.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Этап 2 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-[#251213] text-[#DB1E1E] flex items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] rounded-lg">
                  2
                </div>
                <div className="flex flex-col items-center flex-1">
                  {/* <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] bg-white flex-1 min-h-[50px] sm:min-h-[80px] lg:min-h-[50px]"></div> */}
                  <DashedLine dashes={4} className={'min-h-[50px] sm:min-h-[80px] lg:min-h-[50px]'} />
                </div>
              </div>
              <div className="text-white">
                <p className="text-base font-semibold sm:text-lg lg:text-[22px] leading-none">
                  После согласования выбранного способа доставки Перевозчик принимает Ваш автомобиль.
                </p>
                <p className="mb-4 sm:mb-5 lg:mb-6 text-base sm:text-lg lg:text-[21px] font-light mt-1">В день отправки Перевозчик присылает фото/видео фиксацию процесса погрузки автомобиля</p>
              </div>
            </div>


            {/* Этап 3 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
              {/* Колонка с цифрой и линией */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-[#251213] text-[#DB1E1E] flex items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] rounded-lg">
                  3
                </div>
                <div className="flex flex-col items-center flex-1">
                  {/* <div className="w-[1.5px] sm:w-[1.6px] lg:w-[1.8px] flex-1 "></div> */}
                  <DashedLine dashes={4} className={'min-h-[40px] sm:min-h-[80px] lg:min-h-[50px]'} color="bg-[#DB1E1E]" />
                </div>
              </div>
              <div className="flex-1 text-white">
                <p className="text-base sm:text-lg lg:text-[21px] font-semibold w-full lg:w-[92%] leading-none">
                  После прибытия автомобиля в Москву оформляется ОТТС
                </p>
                <p className="mb-4 sm:mb-5 lg:mb-6 text-base sm:text-lg lg:text-[21px] font-light mt-1">ОТТС — одобрение типа транспортного средства, сертификат, подтверждающий соответствие его технических характеристик требованиям безопасности и экологическим стандартам, установленным на территории Таможенного союза. </p>
              </div>
            </div>

            {/* Этап 4 */}
            <div className="flex  gap-3 sm:gap-4 lg:gap-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[40px] lg:h-[40px] bg-[#DB1E1E] text-white flex items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] rounded-lg">
                4
              </div>
              <div className="flex-1 text-white">
                <p className="text-base sm:text-lg lg:text-[21px] w-full lg:w-[92%] leading-relaxed font-semibold ">
                  После получения ОТТС выпускается ЭПТС и автомобиль готов к передаче
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 rounded-xl lg:rounded-2xl border border-[#DB1E1E] text-[#DB1E1E] py-5 px-4 md:px-8 lg:px-10 xl:px-22 text-center text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-semibold">
              Общее время доставки автомобиля до Москвы с момента выкупа автомобиля 30-60 дней
            </div>

          </div>
        </section>

        {/* ====== ШАГ 7 ====== */}
        <section className="relative mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 3xl:mt-36 4xl:mt-40">
        <Blur/>
          <section className="mt-10">
            <CarsDocSteps title='ШАГ №7' subtitle="Выдача автомобля" />
          </section>

          <p className="text-white text-[15px] sm:text-[18px] md:text-[22px] lg:text-[25px]">По Вашему выбору <span className="font-semibold">автомобиль будет доставлен по указанному адресу</span> или передан в один из наших партнерских детейлинг-центров.</p>

        </section>
      </div>
    </div>
  );
}