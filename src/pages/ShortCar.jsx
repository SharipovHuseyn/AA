import ImageSwiper from "../components/Swiper.jsx";

import i1 from "../assets/images/swiper/i1.png";
import i2 from "../assets/images/swiper/i2.png";
import i3 from "../assets/images/swiper/i3.png";
import i4 from "../assets/images/swiper/i4.png";
import i5 from "../assets/images/swiper/i5.png";
import i6 from "../assets/images/swiper/i6.png";
import i7 from "../assets/images/swiper/i7.png";
import i8 from "../assets/images/swiper/i8.png";

import car from "../assets/images/car/car.png"

export default function ShortCar() {
  let images = [i1, i2, i3, i4, i5, i6, i7, i8];

  let cars = [
    {image: car, price: "2 957 000 р.", mark: "KGM Torres, 2025", year: "2024"},
    {image: car, price: "2 957 000 р.", mark: "KGM Torres, 2025", year: "2024"},
    {image: car, price: "2 957 000 р.", mark: "KGM Torres, 2025", year: "2024"},
    {image: car, price: "2 957 000 р.", mark: "KGM Torres, 2025", year: "2024"},
  ]

  return (
 <main className="my-30 2xl:px-20 md:px-10 px-5">
      <section className="flex justify-between grid md:grid-cols-2 grid-cols-1">
        <div className="flex">
          <ImageSwiper images={images} />
        </div>
        
        <div className="text-white py-10 lg:ml-10 md:ml-5">
          <p className="font-[400] 2xl:text-[44px] lg:text-[35px] md:text-[25px] text-[22px]">KG_Mobility_Ssangyong Torres</p>
          <p className="font-[400] text-[16px] py-3 opacity-[80%]">HEV 1.5 2WD</p>
          <div className="bg-[#FFFFFF09] p-5  my-3 rounded-[10px]">
            <div className="flex justify-between py-3 items-center bg-[#FFFFFF09] p-3 rounded-[15px]">
              <p className="text-[16px] lg:text-[18px] font-[400]">Цена в Корее</p>
              <p className="text-[16px] lg:text-[18px] font-[400]">3,380 ₩</p>
            </div>
            <div className="flex justify-between py-2 items-center">
              <p className="text-[16px] lg:text-[18px] font-[400]">Утильсбор</p>
              <p className="text-[16px] lg:text-[18px] font-[400]">3 400 р.</p>
            </div>
            <div className="flex justify-between py-2 items-center">
              <p className="text-[16px] lg:text-[18px] font-[400]">Таможенный сбор</p>
              <p className="text-[16px] lg:text-[18px] font-[400]">900 380 р.</p>
            </div>
            <div className="flex justify-between py-2 items-center">
              <p className="text-[16px] lg:text-[18px] font-[400]">Услуги компании</p>
              <p className="text-[16px] lg:text-[18px] font-[400]">~ 100 000 р.</p>
            </div>
          </div>
          <p className="text-[#DB1E1E] font-[500] text-[22px] py-3">
            2 973 000 р.
          </p>
          <div className="flex gap-3 grid grid-cols-1 lg:grid-cols-2">
            <button className="font-[600] uppercase rounded-[5px] p-2 w-full text-[16px] text-[#101012] bg-white">
              Оставить заявку
            </button>
            <button className="font-[600] uppercase rounded-[5px] p-2 w-full text-[16px] text-white border-[1px] border-white bg-[#101012]">
              Сбросить фильтр
            </button>
          </div>
        </div>
      </section>

      <section className="mt-30">
        <p className="font-[400] text-[28px] text-white">
          Похожие авто
        </p>

        <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-5 gap-10">
            {cars.map((item, index)=>(
              <a href="/car">
                <div className="text-white" key={index}>
                <img src={item.image} className="rounded-[15px] w-full" alt={item.mark} />
                <p className="text-[22px] font-[500] py-1">2 957 000 р.</p>
                <p className="text-[18px] font-[500]">KGM Torres, 2025</p>
                <p className="text-[16px] font-[500] opacity-[80%]">2024</p>
              </div>
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
