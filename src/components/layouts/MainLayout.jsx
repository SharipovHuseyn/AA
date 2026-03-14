import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

const MainLayout = () => {
  return (
    <div className="lg:min-h-dvh max-lg:pt-10  flex flex-col bg-black text-gray-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout