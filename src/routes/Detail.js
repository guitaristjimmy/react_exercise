import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(Object);
  const getDetail = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(response.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Detail</h1>
      ) : (
        <MovieDetail
          coverImg={detail.large_cover_image}
          title={detail.title}
          rating={detail.rating}
          description={detail.description_full}
          genres={detail.genres}
        />
      )}
      <div>
        <h3>
          <Link to="/">Back</Link>
        </h3>
      </div>
    </div>
  );
}

export default Detail;
