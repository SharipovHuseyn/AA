import React, { useState } from 'react'

export default function OneStepForm() {
  // Состояния для всех select элементов
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedModel2, setSelectedModel2] = useState('');
  const [selectedModel3, setSelectedModel3] = useState('');
  const [selectedModel4, setSelectedModel4] = useState('');

  // Состояния для textarea
  const [equipment, setEquipment] = useState('Напишите комплектацию');

  // Состояния для input полей
  const [mileage, setMileage] = useState('');
  const [insurance, setInsurance] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <section className="mt-6 mx-auto px-1 xs:px-2 sm:px-3 md:px-4 max-w-[96vw] xs:max-w-[96vw] sm:max-w-[96vw] md:max-w-[96vw] lg:max-w-[96vw] xl:max-w-[90vw] 2xl:max-w-[80vw]">
      <div className="w-full h-auto lg:h-[600px] bg-white/[0.05] rounded-xl lg:rounded-2xl relative p-5">
        <div className={`absolute hidden sm:block left-0 top-0 bg-red-700 w-16 h-26 xs:w-18 xs:h-28 sm:w-20 sm:h-30 md:w-22 md:h-32 lg:w-24 lg:h-34 xl:w-26 xl:h-36 2xl:w-30 2xl:h-40 blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px] xl:blur-[120px] rounded-r-[50%]`}></div>
        <div className={`absolute hidden sm:block right-0 top-0 bg-red-700 w-16 h-26 xs:w-18 xs:h-28 sm:w-20 sm:h-30 md:w-22 md:h-32 lg:w-24 lg:h-34 xl:w-26 xl:h-36 2xl:w-30 2xl:h-40 blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px] xl:blur-[120px] rounded-l-[50%]`}></div>

        <div>
          <p className="text-white font-bold text-[16px] md:text-[18px] 2xl:text-[22px]">Для начала поиска автомобиля необходимо заполнить заявку:</p>
          <p className="text-[#DB1E1E] text-[14px] lg:text-[16px] 2xl:text-[18px] mt-2">Наши специалисты свяжутся с вами в кратчайшие сроки</p>
          <div className="w-full h-[0.4px] bg-white/10 mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="w-full lg:w-[50%]">
            <div className="mt-6">
              <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Марка автомобиля <span className='text-[#DB1E1E]'>*</span></p>
              <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                <select
                  className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white font-semibold"
                  name="brand"
                  id="brand"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="" disabled className="text-[#8f8f8f]">Выберите марку</option>
                  <option value="BMW" className="bg-[#1E1E1E] text-white">BMW</option>
                  <option value="MERCEDES-BENZ" className="bg-[#1E1E1E] text-white">MERCEDES-BENZ</option>
                  <option value="AUDI" className="bg-[#1E1E1E] text-white">AUDI</option>
                  <option value="LADA" className="bg-[#1E1E1E] text-white">LАДА</option>
                  <option value="FERRARI" className="bg-[#1E1E1E] text-white">FERRARI</option>
                </select>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Модель автомобиля <span className='text-[#DB1E1E]'>*</span></p>
              <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                <select
                  className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white font-semibold"
                  name="model"
                  id="model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option value="" disabled className="text-[#8f8f8f]">Выберите модель</option>
                  <option value="X5" className="bg-[#1E1E1E] text-white">X5 (BMW)</option>
                  <option value="S-CLASS" className="bg-[#1E1E1E] text-white">S-Class (MERCEDES)</option>
                  <option value="A6" className="bg-[#1E1E1E] text-white">A6 (AUDI)</option>
                  <option value="VESTA" className="bg-[#1E1E1E] text-white">Vesta (LADA)</option>
                  <option value="488" className="bg-[#1E1E1E] text-white">488 (FERRARI)</option>
                </select>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex w-[100%] gap-3">
              <div className="mt-4 w-[40%]">
                <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Пробег до</p>
                <input
                  type="number"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  className="outline-none w-[100%] border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 md:py-4 rounded-xl text-[14px] sm:text-[16px] text-white"
                  placeholder="км"
                />
              </div>

              <div className="mt-4 w-[60%]">
                <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Тип топлива</p>
                <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                  <select
                    className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white- "
                    name="bodyType"
                    id="bodyType"
                    value={selectedModel2}
                    onChange={(e) => setSelectedModel2(e.target.value)}
                  >
                    <option value="" disabled className="text-[#8f8f8f]">Выберите тип топлива</option>
                    <option value="GASOLINE" className="bg-[#1E1E1E] text-white">Бензин</option>
                    <option value="DIESEL" className="bg-[#1E1E1E] text-white">Дизель</option>
                    <option value="ELECTRIC" className="bg-[#1E1E1E] text-white">Электрический</option>
                    <option value="HYBRID" className="bg-[#1E1E1E] text-white">Гибрид</option>
                  </select>

                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-between gap-3">
              <div className="mt-4 w-[50%]">
                <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Цвет кузова</p>
                <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                  <select
                    className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white font-semibold"
                    name="bodyColor"
                    id="bodyColor"
                    value={selectedModel3} // Используем существующее состояние
                    onChange={(e) => setSelectedModel3(e.target.value)}
                  >
                    <option value="" disabled className="text-[#8f8f8f]">Выберите цвет</option>
                    <option value="BLACK" className="bg-[#1E1E1E] text-white">Черный</option>
                    <option value="WHITE" className="bg-[#1E1E1E] text-white">Белый</option>
                    <option value="GRAY" className="bg-[#1E1E1E] text-white">Серый</option>
                    <option value="SILVER" className="bg-[#1E1E1E] text-white">Серебристый</option>
                    <option value="BLUE" className="bg-[#1E1E1E] text-white">Синий</option>
                    <option value="RED" className="bg-[#1E1E1E] text-white">Красный</option>
                    <option value="GREEN" className="bg-[#1E1E1E] text-white">Зеленый</option>
                    <option value="BROWN" className="bg-[#1E1E1E] text-white">Коричневый</option>
                    <option value="YELLOW" className="bg-[#1E1E1E] text-white">Желтый</option>
                    <option value="ORANGE" className="bg-[#1E1E1E] text-white">Оранжевый</option>
                    <option value="BEIGE" className="bg-[#1E1E1E] text-white">Бежевый</option>
                  </select>

                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 w-[50%]">
                <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Цвет салона</p>
                <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                  <select
                    className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white font-semibold"
                    name="transmission"
                    id="transmission"
                    value={selectedModel4}
                    onChange={(e) => setSelectedModel4(e.target.value)}
                  >
                    <option value="" disabled className="text-[#8f8f8f]">Выберите цвет</option>
                    <option value="BLACK" className="bg-[#1E1E1E] text-white">Черный</option>
                    <option value="WHITE" className="bg-[#1E1E1E] text-white">Белый</option>
                    <option value="GRAY" className="bg-[#1E1E1E] text-white">Серый</option>
                    <option value="SILVER" className="bg-[#1E1E1E] text-white">Серебристый</option>
                    <option value="BLUE" className="bg-[#1E1E1E] text-white">Синий</option>
                    <option value="RED" className="bg-[#1E1E1E] text-white">Красный</option>
                    <option value="GREEN" className="bg-[#1E1E1E] text-white">Зеленый</option>
                    <option value="BROWN" className="bg-[#1E1E1E] text-white">Коричневый</option>
                    <option value="YELLOW" className="bg-[#1E1E1E] text-white">Желтый</option>
                    <option value="ORANGE" className="bg-[#1E1E1E] text-white">Оранжевый</option>
                    <option value="BEIGE" className="bg-[#1E1E1E] text-white">Бежевый</option>
                  </select>

                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="mt-6">
              <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Комплектация</p>
              <textarea
                className="w-full h-[163px] outline-none border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 md:py-4 rounded-xl text-[14px] sm:text-[16px] text-white placeholder:text-[#5E5E5E]"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                placeholder="Напишите комплектацию"
              />
            </div>

            <div className="mt-3">
              <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Допустимы ли страховые выплаты? (Окрасы/замены деталей на новые)</p>
              <input
                type="text"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="outline-none w-full border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 md:py-4 rounded-xl text-[14px] sm:text-[16px] text-white placeholder:text-[#5E5E5E]"
                placeholder="Да, допустимы потому что..."
              />
            </div>

            <div className="mt-3">
              <p className='text-[14px] sm:text-[16px] text-[#fff] font-semibold'>Бюджет <span className='text-[#DB1E1E]'>*</span></p>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="outline-none w-full border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 md:py-4 rounded-xl text-[14px] sm:text-[16px] text-white placeholder:text-[#5E5E5E]"
                placeholder="От 3 000 000 руб."
              />
            </div>
          </div>
        </div>

        <button className="bg-white rounded-xl py-3 w-full lg:w-[475px] font-semibold text-[#101012] text-[16px] md:text-[18px] uppercase mt-6 hover:bg-[#DB1E1E] hover:text-white transition-all duration-500 ease-in-out">
          оставить заявку
        </button>
      </div>
    </section>
  )
}