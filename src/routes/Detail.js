import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // const x = useParams(); 하면 {id: 1111} 이런식으로 반환, 따라서 이 id를 사용
  const { id } = useParams(); //url에 있는 변수를 반환
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
