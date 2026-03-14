import MainTitleText from "../components/utilities/MainTitleText"
import MainSubTitleText from "../components/utilities/MainSubTitleText"
import AlfaAlliance from "../components/Insurance/AlfaAlliance"
import AlfaCards from "../components/Insurance/AlfaCards"
import FeedBlackForm from "../components/feedBackForm/FeedBlackForm"
import Blur from "../components/Blur"

export default function InsurancePage() {
    return (
        <div className="min-h-dvh bg-black">
            <div className="py-30 xs:py-32 sm:py-40 md:py-45 lg:py-52 xl:py-56 2xl:py-60">
                <section className="w-full mx-auto">
                    <MainTitleText><span className="text-[#FF0000]">Страхование</span> от лидера рынка</MainTitleText>

                    <AlfaAlliance />
                    <div>
                        <MainSubTitleText>
                            Asia Alliance и АльфаСтрахование заключили официальное партнёрство.
                            Теперь каждый клиент получает доступ к страховым программам от лидера рынка на эксклюзивных условиях.
                        </MainSubTitleText>
                    </div>
                </section>

                <section className="mt-30 xs:mt-20 sm:mt-30 md:mt-40 lg:mt-50 xl:mt-55 2xl:mt-60 w-full mx-auto">
                    <div className="relative">
                        <Blur />
                        <div className="w-[90%] mx-auto">
                            <MainTitleText><span className="text-[#FF0000]">почему </span>альфастрахование?</MainTitleText>
                        </div>
                        <AlfaCards />
                    </div>
                </section>



                <section className="mt-30 xs:mt-20 sm:mt-30 md:mt-40 lg:mt-50 xl:mt-55 2xl:mt-60 w-full mx-auto">
                    <div className="relative">
                        <Blur />
                        <div className="w-[90%] mx-auto">
                            <MainTitleText>оформление <span className="text-[#FF0000]">страховки</span></MainTitleText>
                        </div>
                        <MainSubTitleText>
                            Заполните форму — специалист свяжется с Вами <br />
                            и подберёт оптимальную программу страхования
                        </MainSubTitleText>
                    </div>

                    <FeedBlackForm />
                </section>
            </div>
        </div>
    )
}

// insurance