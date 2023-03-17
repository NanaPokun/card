import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import portfolioImage from '../../constants/profile.jpg';

const Footer = () => {
    return (
        <div className="col-span-12 md:col-span-4 p-4 bg-slate-800 text-white flex flex-col justify-between justify-items-center">
            <div className="flex flex-col justify-center items-center mt-8">
                <a href="https://twitter.com/nanayaw_codes" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={48} className="text-white hover:text-blue-400 m-4" />
                </a>
                <a href="https://www.linkedin.com/in/felix-osei-1890401a1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={48} className="text-white hover:text-blue-400 m-4" />
                </a>
                <div className="flex items-center mt-4">
                    <img src={portfolioImage} alt="Portfolio" className="w-8 h-8 rounded-full mr-2" />
                    <a href="https://my-folio-nanapokun.vercel.app/" className="text-white hover:text-blue-400 text-lg m-2 font-serif hover:font-mono font-semibold">
                        Portfolio
                    </a>
                </div>
            </div>
            <div className="text-sm mb-2 font-serif hover:font-mono font-normal fixed bottom-0">
                &copy; {new Date().getFullYear()} Shonin Anime. All Rights Reserved. | 
                <a href="/terms" className="text-white hover:text-blue-400">Terms of Use</a> | 
                <a href="/privacy" className="text-white hover:text-blue-400">Privacy Policy</a>
            </div>
        </div>
    );
};

export default Footer;
