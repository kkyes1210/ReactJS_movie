import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Link는 브라우저 새로고침 없어도 유저를 다른 페이지로 이동시켜주는 컴포넌트
//<a> 태그는 브라우저 새로고침이 되기 때문에 Link를 사용하는 것이 좋다 !
//a href="" ==> Link to=""

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
