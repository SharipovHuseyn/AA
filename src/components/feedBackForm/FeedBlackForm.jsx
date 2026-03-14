import React, { useState } from 'react'
import { Link } from "react-router-dom"
import SuccessImage from './images/success.svg'

export default function FeedBlackForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        brand: '',
        model: '',
        priceFrom: '',
        priceTo: '',
        isPhysical: false,
        isLegal: false,
        agreeToPolicy: false
    });

    const [showModal, setShowModal] = useState(false);
    const [showAdditionalModal, setShowAdditionalModal] = useState(false);
    const [showFinalModal, setShowFinalModal] = useState(false);
    
    const [carDetails, setCarDetails] = useState({
        yearFrom: '',
        yearTo: '',
        mileageFrom: '',
        mileageTo: '',
        fuelType: '',
        bodyType: '',
        specialWishes: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCarDetailsChange = (e) => {
        const { name, value } = e.target;
        setCarDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Валидация
        if (!formData.name.trim()) {
            alert('Пожалуйста, введите ваше имя');
            return;
        }
        if (!formData.phone.trim()) {
            alert('Пожалуйста, введите ваш телефон');
            return;
        }
        if (!formData.email.trim()) {
            alert('Пожалуйста, введите вашу почту');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }
        if (!formData.isPhysical && !formData.isLegal) {
            alert('Пожалуйста, выберите тип лица');
            return;
        }
        if (!formData.brand) {
            alert('Пожалуйста, выберите марку автомобиля');
            return;
        }
        if (!formData.model) {
            alert('Пожалуйста, выберите модель автомобиля');
            return;
        }
        if (!formData.agreeToPolicy) {
            alert('Пожалуйста, согласитесь с политикой обработки персональных данных');
            return;
        }
        
        setShowModal(true);
    };

    const handleNoClick = () => {
        setShowModal(false);
        console.log('Основная заявка отправлена:', formData);
        setFormData({
            name: '', phone: '', email: '', brand: '', model: '',
            priceFrom: '', priceTo: '', isPhysical: false, isLegal: false, agreeToPolicy: false
        });
    };

    const handleYesClickFirstModal = () => {
        setShowModal(false);
        setTimeout(() => {
            setShowAdditionalModal(true);
        }, 300);
    };

    const handleCarDetailsSubmit = () => {
        if (carDetails.yearFrom && carDetails.yearTo) {
            const yearFrom = parseInt(carDetails.yearFrom);
            const yearTo = parseInt(carDetails.yearTo);
            if (yearFrom > yearTo) {
                alert('Год "От" не может быть больше года "До"');
                return;
            }
        }
        
        if (carDetails.mileageFrom && carDetails.mileageTo) {
            const mileageFrom = parseInt(carDetails.mileageFrom);
            const mileageTo = parseInt(carDetails.mileageTo);
            if (mileageFrom > mileageTo) {
                alert('Пробег "От" не может быть больше пробега "До"');
                return;
            }
        }
        
        const allData = {
            mainData: formData,
            carDetails: carDetails
        };
        
        console.log('Все данные отправлены:', allData);
        
        setShowAdditionalModal(false);
        setTimeout(() => {
            setShowFinalModal(true);
        }, 300);
    };

    const handleCloseFinalModal = () => {
        setShowFinalModal(false);
        setFormData({
            name: '', phone: '', email: '', brand: '', model: '',
            priceFrom: '', priceTo: '', isPhysical: false, isLegal: false, agreeToPolicy: false
        });
        setCarDetails({
            yearFrom: '', yearTo: '', mileageFrom: '', mileageTo: '',
            fuelType: '', bodyType: '', specialWishes: ''
        });
    };

    const handleSkipAdditional = () => {
        console.log('Основная заявка отправлена (без доп. инфо):', formData);
        setShowAdditionalModal(false);
        setTimeout(() => {
            setShowFinalModal(true);
        }, 300);
    };
    return (
        <>
            <div className="bg-white/[0.03] backdrop-blur-[61px] mx-auto mt-10 text-white w-[200px] xs:w-[90%] sm:w-[500px] md:w-[628px] p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="text-[#FBFFFE] text-[12px] sm:text-[14px] font-light">
                        Имя *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="outline-none border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 sm:py-4 rounded-xl text-[14px] sm:text-[16px] text-white"
                        placeholder="Ваше имя"
                        required
                    />

                    <label className="text-[#FBFFFE] text-[12px] sm:text-[14px] font-light mt-4">
                        Телефон *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="outline-none border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 sm:py-4 rounded-xl text-[14px] sm:text-[16px] text-white"
                        placeholder="Ваш телефон"
                        required
                    />

                    <label className="text-[#FBFFFE] text-[12px] sm:text-[14px] font-light mt-4">
                        Почта *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="outline-none border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 sm:py-4 rounded-xl text-[14px] sm:text-[16px] text-white"
                        placeholder="Ваша почта"
                        required
                    />

                    <div className="flex mt-4">
                        <label className="flex items-start text-[10px] sm:text-[13px] md:text-[14] mt-4 sm:mt-5 text-white cursor-pointer">
                            <input
                                type="checkbox"
                                name="isPhysical"
                                checked={formData.isPhysical}
                                onChange={handleChange}
                                className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                            />
                            <span
                                className="relative flex-shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 bg-[#1e1e29] border border-white rounded transition-all duration-200 mr-2 mt-0.5
                                    after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2 
                                    after:w-1.5 after:h-2 sm:after:w-1.5 sm:after:h-2.5 after:border-white after:border-r-2 after:border-b-2 
                                    after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
                                    peer-checked:after:block
                                    peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]
                                    peer-focus:ring-1" />
                            <span className="leading-tight mt-1">
                                Физ. лицо *
                            </span>
                        </label>

                        <label className="flex items-start ml-5 text-[12px] md:text-[14] mt-4 sm:mt-5 text-white cursor-pointer">
                            <input
                                type="checkbox"
                                name="isLegal"
                                checked={formData.isLegal}
                                onChange={handleChange}
                                className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                            />
                            <span
                                className="relative flex-shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 bg-[#1e1e29] border border-white rounded transition-all duration-200 mr-2 mt-0.5
                                    after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2 
                                    after:w-1.5 after:h-2 sm:after:w-1.5 sm:after:h-2.5 after:border-white after:border-r-2 after:border-b-2 
                                    after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
                                    peer-checked:after:block
                                    peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]
                                    peer-focus:ring-1" />
                            <span className="leading-tight mt-1">
                                Юр. лицо *
                            </span>
                        </label>
                    </div>

                    <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 sm:mt-3 md:mt-4 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                        <select
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-8 cursor-pointer text-white"
                            required
                        >
                            <option className="bg-[#1E1E1E] text-gray-500">
                                Выберете марку *
                            </option>
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

                    <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-5 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                        <select
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white"
                            required
                        >
                            <option value="" className="bg-[#1E1E1E] text-gray-500">
                                Модель *
                            </option>
                            <option value="X5" className="bg-[#1E1E1E] text-white">X5 (BMW)</option>
                            <option value="S-Class" className="bg-[#1E1E1E] text-white">S-Class (MERCEDES)</option>
                            <option value="A6" className="bg-[#1E1E1E] text-white">A6 (AUDI)</option>
                            <option value="Vesta" className="bg-[#1E1E1E] text-white">Vesta (LADA)</option>
                            <option value="488" className="bg-[#1E1E1E] text-white">488 (FERRARI)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="mt-4 rounded-xl text-[14px] sm:text-[16px] text-[#fff]">
                        <p className='text-[16px]'>Ориентировочная цена</p>
                        <div className="flex mt-2 justify-between">
                            <input
                                name="priceFrom"
                                value={formData.priceFrom}
                                onChange={handleChange}
                                className="bg-white/[0.03] outline-none border border-[#FFFFFF0D] rounded-[10px] w-[50%] px-4 py-3 text-white"
                                type="number"
                                placeholder="от"
                                min={0}
                            />
                            <input
                                name="priceTo"
                                value={formData.priceTo}
                                onChange={handleChange}
                                className="bg-white/[0.03] outline-none border border-[#FFFFFF0D] rounded-[10px] w-[50%] px-4 py-3 ml-3 text-white"
                                type="number"
                                placeholder="до"
                                min={0}
                            />
                        </div>
                    </div>

                    <label className="flex items-start text-[12px] sm:text-[13px] md:text-[15px] xl:text-[18px] mt-4 text-white cursor-pointer">
                        <input
                            type="checkbox"
                            name="agreeToPolicy"
                            checked={formData.agreeToPolicy}
                            onChange={handleChange}
                            className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                        />
                        <span
                            className="relative flex-shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 bg-[#1e1e29] border border-white rounded transition-all duration-200 mr-2 mt-0.5
                                after:content-[''] after:absolute after:hidden after:left-1/2 after:top-1/2 
                                after:w-1.5 after:h-2 sm:after:w-1.5 sm:after:h-2.5 after:border-white after:border-r-2 after:border-b-2 
                                after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45
                                peer-checked:after:block
                                peer-checked:bg-[#fb2c36] peer-checked:border-[#fb2c36]
                                peer-focus:ring-1" />
                        <span className="leading-tight mt-1">
                            Я согласен с{" "}
                            <Link
                                to="/personal"
                                className="text-red-500 underline ml-2 sm:ml-1 hover:text-red-400 transition-colors duration-200 inline-block"
                            >
                                политикой обработки персональных данных *
                            </Link>
                        </span>
                    </label>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-4 w-full bg-[#DB1E1E] text-white rounded-lg px-5 h-[45px] text-[15px] font-semibold uppercase hover:text-black hover:bg-white transition-all duration-500 ease-in-out"
                        >
                            отправить заявку
                        </button>
                    </div>
                </form>
            </div>

               {showModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#101012] backdrop-blur-[20px] rounded-3xl p-3 w-[525px]">
                      <div className='w-full h-[121px] bg-[#1EDB791A] rounded-2xl flex items-center justify-center'>
                      <img className='w-16 h-16' src={SuccessImage || null} alt="Успешно" />
                      </div>
                        <div className='px-3'>
                        <div className='mt-2 sm:mt-3 lg:mt-4'>
                        <p className='text-white font-semibold text-[18px] md:text-[20px] 2xl:text-[22px]'>Ваша заявка отправлена</p>
                        <p className='text-white/50 mt-2 sm:mt-3 lg:mt-4 text-[14px] md:text-[15px] 2xl:text-[16px]'>Не желаете ли вы <span className='text-white font-semibold underline'>дополнить</span> Ваш запрос насчет авто, для более подробного подбора?</p>
                      </div>
                      <div className='flex flex-col sm:flex-row w-full gap-2 mt-2 sm:mt-3'>
                        <button 
                            onClick={handleYesClickFirstModal}
                            className='text-[16px] lg:text-[18px] mt-2 sm:mt-0 uppercase font-semibold bg-white text-black w-full sm:w-[60%] rounded-lg cursor-pointer py-2 hover:bg-white/70 transition-all duration-500 ease-in-out'
                        >
                            Конечно
                        </button>
                        <button 
                            onClick={handleNoClick}
                            className='text-[16px] lg:text-[18px] mt-2 sm:mt-0 uppercase font-semibold border border-white text-white w-full sm:w-[40%] rounded-lg cursor-pointer py-2 hover:border-white/25 transition-all duration-500 ease-in-out'
                        >
                            Нет, спасибо
                        </button>
                      </div>
                        </div>
                    </div>
                </div>
            )}

            {showAdditionalModal && (
                <div className="fixed inset-0 bg-[#030305]/70 flex items-center justify-center z-150 p-4">
                    <div className="bg-[#101012] backdrop-blur-[20px] rounded-3xl p-6 w-full max-w-[525px] max-h-[90vh] overflow-y-auto  md:mt-15 lg:mt-20">
                        <div className=''>
                            <p className='text-white font-semibold text-[18px] md:text-[20px] 2xl:text-[22px]'>
                                Подробнее о машине
                            </p>
                            <p className='text-white/50 mt-2 text-[14px] md:text-[15px] 2xl:text-[16px]'>
                                Опишите желаемый автомобиль подробнее
                            </p>
                        </div>

                        <div>
                            <div className='w-full mt-3 sm:mt-4 lg:mt-5'>
                                <p className='text-[14px] sm:text-[16px] text-[#fff]'>Год производства</p>
                                <div className="flex w-full justify-between gap-3">
                                    <div className="w-[50%]">
                                        <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                                            <input 
                                                placeholder='От' 
                                                name="yearFrom"
                                                value={carDetails.yearFrom}
                                                onChange={handleCarDetailsChange}
                                                className='w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white placeholder:text-[#8f8f8f]' 
                                                type="number" 
                                                min="1900"
                                                max="2024"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-[50%]">
                                        <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                                            <input 
                                                placeholder='До' 
                                                name="yearTo"
                                                value={carDetails.yearTo}
                                                onChange={handleCarDetailsChange}
                                                className='w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white placeholder:text-[#8f8f8f]' 
                                                type="number" 
                                                min="1900"
                                                max="2024"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full mt-3 lg:mt-4'>
                                <p className='text-[14px] sm:text-[16px] text-[#fff]'>Пробег (км)</p>
                                <div className="flex w-full justify-between gap-3">
                                    <div className="w-[50%]">
                                        <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                                            <input 
                                                placeholder='От' 
                                                name="mileageFrom"
                                                value={carDetails.mileageFrom}
                                                onChange={handleCarDetailsChange}
                                                className='w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white placeholder:text-[#8f8f8f]' 
                                                type="number" 
                                                min="0"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-[50%]">
                                        <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                                            <input 
                                                placeholder='До' 
                                                name="mileageTo"
                                                value={carDetails.mileageTo}
                                                onChange={handleCarDetailsChange}
                                                className='w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white placeholder:text-[#8f8f8f]' 
                                                type="number" 
                                                min="0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full justify-between gap-3">
                                <div className="mt-4 w-[50%]">
                                    <p className='text-[14px] sm:text-[16px] text-[#fff]'>Тип топлива</p>
                                    <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                                        <select 
                                            className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white" 
                                            name="fuelType"
                                            value={carDetails.fuelType}
                                            onChange={handleCarDetailsChange}
                                        >
                                            <option value="" className="text-[#8f8f8f]">Любой</option>
                                            <option value="gasoline" className="bg-[#1E1E1E] text-white">Бензин</option>
                                            <option value="diesel" className="bg-[#1E1E1E] text-white">Дизель</option>
                                            <option value="electric" className="bg-[#1E1E1E] text-white">Электро</option>
                                            <option value="hybrid" className="bg-[#1E1E1E] text-white">Гибрид</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 w-[50%]">
                                    <p className='text-[14px] sm:text-[16px] text-[#fff]'>Тип кузова</p>
                                    <div className="bg-white/[0.03] border border-[#FFFFFF0D] mt-2 rounded-xl text-[14px] sm:text-[16px] text-[#fff] relative">
                                        <select 
                                            className="w-full px-4 py-3 sm:py-4 outline-none appearance-none bg-transparent pr-10 cursor-pointer text-white" 
                                            name="bodyType"
                                            value={carDetails.bodyType}
                                            onChange={handleCarDetailsChange}
                                        >
                                            <option value="" className="text-[#8f8f8f]">Любой</option>
                                            <option value="sedan" className="bg-[#1E1E1E] text-white">Седан</option>
                                            <option value="hatchback" className="bg-[#1E1E1E] text-white">Хэтчбек</option>
                                            <option value="suv" className="bg-[#1E1E1E] text-white">Внедорожник</option>
                                            <option value="coupe" className="bg-[#1E1E1E] text-white">Купе</option>
                                            <option value="convertible" className="bg-[#1E1E1E] text-white">Кабриолет</option>
                                            <option value="minivan" className="bg-[#1E1E1E] text-white">Минивэн</option>
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

                        <div className="mt-6">
                            <p className='text-[14px] sm:text-[16px] text-[#fff]'>Может быть у Вас есть особенные пожелания?</p>
                            <textarea 
                                className="w-full h-[163px] outline-none border border-[#FFFFFF0D] bg-white/[0.03] mt-2 px-4 py-3 md:py-4 rounded-xl text-[14px] sm:text-[16px] text-white placeholder:text-[#8f8f8f]"
                                name="specialWishes"
                                value={carDetails.specialWishes}
                                onChange={handleCarDetailsChange}
                                placeholder="Напишите текст"
                            />
                        </div>
                        
                        <div className='flex w-full gap-3 mt-4'>
                            <button
                                onClick={handleCarDetailsSubmit}
                                className='text-[16px] lg:text-[18px] uppercase font-semibold bg-white text-black w-full rounded-lg cursor-pointer py-3 hover:bg-white/70 transition-all duration-500 ease-in-out'
                            >
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showFinalModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-150 p-4">
                    <div className="bg-[#101012] backdrop-blur-[20px] rounded-3xl p-3 w-full max-w-[525px]">
                        <div className='w-full h-[121px] bg-[#1EDB791A] rounded-2xl flex items-center justify-center mb-4'>
                        <img className='w-16 h-16' src={SuccessImage || null} alt="Успешно" />
                        </div>
                        <div className='px-4'>
                            <p className='text-white font-semibold text-[18px] md:text-[20px] 2xl:text-[22px] mb-2'>
                                Вся информация отправлена!
                            </p>
                            <p className='text-white/50 text-[14px] md:text-[15px] 2xl:text-[16px] mb-4'>
                                Благодарим за предоставленную информацию. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
                            </p>
                            <button
                                onClick={handleCloseFinalModal}
                                className='text-[16px] lg:text-[18px] uppercase font-semibold border border-white text-white w-full rounded-lg cursor-pointer py-3 hover:border-white/70 transition-all duration-500 ease-in-out'
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}