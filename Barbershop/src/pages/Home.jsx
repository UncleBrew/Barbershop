import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Welcome } from "../components/Welcome";

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

        {/*Theme Toggle */}
        <ThemeToggle />

        {/*Navbar*/}
        <NavBar />

        {/*Main Content */}
        <main>
            <Welcome />
        </main>


        {/*Footer */}
        <Footer />


    </div>
};