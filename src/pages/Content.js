import Sales from "../components/Sales";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Content() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Sales />
        </div>
    );
}

export default Content;