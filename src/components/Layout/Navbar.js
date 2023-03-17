import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import Search from './Search';
import Contact from './Contact';
import Donate from './Donate';
import "../../styles/Navbar.css"

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showDonate, setShowDonate] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        setShowContact(false);
        setShowDonate(false);
    };

    const handleContactClick = () => {
        setShowContact(!showContact);
        setShowSearch(false);
        setShowDonate(false);
    };

    const handleDonateClick = () => {
        setShowDonate(!showDonate);
        setShowSearch(false);
        setShowContact(false);
    };

    return (
        <div className="col-span-12 h-[3.75rem] px-4 flex items-center justify-between bg-slate-800">
            <div className="flex items-center">
                <h1 className="text-lg text-orange-600 hover:text-amber-500 font-bold">Shonin</h1>
            </div>
            <div className="flex items-center">
                <div className="hidden md:block mr-4">
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={handleSearchClick}>
                        <FaSearch />
                    </button>
                </div>
                <div className="hidden lg:block mr-4">
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={handleContactClick}>
                        <RiContactsLine />
                    </button>
                </div>
                <div className="hidden lg:block">
                    <button className="px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-800" onClick={handleDonateClick}>
                        Donate <GiReceiveMoney className="inline-block ml-2" />
                    </button>
                </div>
                <div className="flex lg:hidden">
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={handleSearchClick}>
                        <FaSearch />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={handleContactClick}>
                        <RiContactsLine />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={handleDonateClick}>
                        <GiReceiveMoney />
                    </button>
                </div>
            </div>
            {showSearch && <Search />}
            {showContact && <Contact />}
            {showDonate && <Donate />}
        </div>
    );
}

export default Navbar;
