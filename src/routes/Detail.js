import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const res = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(res.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <h3>{movies.title}</h3>
          <img src={movies.medium_cover_image} alt="imagescreen" />
          <ul>
            {movies.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <p>
            language:{movies.language} rating:{movies.rating}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
