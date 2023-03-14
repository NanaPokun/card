import { useState } from "react";

const ReadMore = ({ desc }) => {
    const [ showMore, setShowMore ] = useState(false)
    
    const handleReadMore = () => {
        setShowMore(!showMore);
    }
    return (
        <div className="container mx-auto">
            <p className="p-4 box-content">
                 {showMore ? desc : `${desc.slice(0, 54)}...`}
            </p>
            <button 
                onClick={handleReadMore} 
                className="bg-cyan-600 hover:bg-cyan-800 text-white font-serif hover:font-mono font-semibold py-2 px-2 rounded m-4"
            >
                {showMore ? "Read Less" : "Read More"}
            </button>
        </div>
    );
}
 
export default ReadMore;