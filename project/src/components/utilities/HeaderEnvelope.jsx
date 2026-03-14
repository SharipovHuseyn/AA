import TriangleUpRight from "../../assets/images/home/Polygon 3.svg";
import TriangleUpLeft from "../../assets/images/home/Polygon 2.svg";
import TriangleDownRight from "../../assets/images/home/Polygon 4.svg";
import TriangleDownLeft from "../../assets/images/home/Polygon 1.svg";
import MainTitleText from "./MainTitleText"
import MainSubTitleText from "./MainSubTitleText"

export default function HeaderEnvelope() {
  return (
    <section className="relative">
      <div
        className={`relative w-full transition-all duration-300 text-white md:py-20 sm:py-10 py-5`}
      >
        <span
          className={`block ml-5 md:ml-0 absolute transition-all duration-500 left-0 top-0 stroke-white`}
        >
        <img className="md:w-6 sm:w-4 w-3" src={TriangleUpLeft} alt="TriangleUpLeft" />
        </span>
        <span
          className={`block mr-5 md:mr-0 absolute transition-all duration-500 right-0 top-0 stroke-white`}
        >
          <img className="md:w-6 sm:w-4 w-3" src={TriangleUpRight} alt="TriangleUpRight" />
        </span>
        <span
          className={`block ml-5 md:ml-0 absolute transition-all duration-500 left-0 bottom-0 stroke-white`}
        >
        <img className="md:w-6 sm:w-4 w-3" src={TriangleDownLeft} alt="TriangleDownLeft" />
        </span>
        <span
          className={`block mr-5 md:mr-0 absolute transition-all duration-500 right-0 bottom-0 stroke-white`}
        >
          <img className="md:w-6 sm:w-4 w-3" src={TriangleDownRight} alt="TriangleDownRight" />
        </span>

        <MainTitleText>
          <span className="text-brand-normal">aвтомобиль </span> без посредников
        </MainTitleText>
        <MainSubTitleText>
          из южной Кореи для физических и юридических лиц
        </MainSubTitleText>
      </div>
    </section>
  );
}
