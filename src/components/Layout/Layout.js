import Navbar from "./Navbar"
import Footer from "./Footer"
import Content from "./Content";


const Layout = () => {
    return (
        <div className="grid grid-cols-12 gap-2 w-full h-full">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
}
 
export default Layout;