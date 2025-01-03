import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Card = () => {
  const { data, error, loading } = useFetch("https://meetup-app-backend-opal.vercel.app/events/");

  return data ? (
    <>
      {data?.map((event) => (
        <div className="col-md-4 mb-3">
          <Link to={`/detail/${event._id}`} className="card">
            <img src={event.image} alt="" />
            <div className="event-status">{event.event}</div>
            <div className="card-body pt-1 p-0">
              <p>{event.date}</p>
              <h4>{event.title}</h4>
            </div>
          </Link>
        </div>
      ))}
    </>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default Card;
