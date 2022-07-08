import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default Home;