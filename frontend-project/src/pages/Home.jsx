import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
    const[searchQuery, setSearchQuery] = useState("");
     
    const movies = [
        {id:1, title: "Venom", release_date: "2025" },
        {id:2, title: "Avatar", release_date: "2023" },
        {id:3, title: "Inception", release_date: "2010" },
        {id:4, title: "The Dark Knight", release_date: "2008" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };

    return (
    <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input
             type="text" 
             placeholder="Search for a movie..." 
             className="search-input"
             value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button type="submit" className="search-button">
                Search
             </button>
        </form>
        <div className="movies-grid">   
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && ( 
                    <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
    );
}

export default Home