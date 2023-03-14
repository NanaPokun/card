import { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted query:', query);
        // Perform search using query value here
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="relative top-20 p-4 bg-white rounded-lg shadow-md m-4">
            <form onSubmit={handleSubmit}>
                {/* <label className="block mb-2" htmlFor="search-input">Enter a search query:</label> */}
                <input
                    className="w-full border rounded py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="search-input"
                    value={query}
                    onChange={handleChange}
                    placeholder="Type here..."
                />
                <button className="bg-cyan-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
