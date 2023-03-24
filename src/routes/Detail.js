import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // const justId = useParams();
  // console.log(justId);
  const { id } = useParams();
  console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>Detail</div>;
};

export default Detail;
