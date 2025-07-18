import { Outlet } from "react-router-dom"
import Navbar from "../../layouts/components/Navbar"
import Footer from "../../layouts/components/Footer"

const Layouts = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-full mx-0">
            <Navbar />
            <main className="flex-grow pt-16 w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layouts;
