import { Link } from "react-router-dom";

const Card = ({data, loading}) => {
if (!Array.isArray(data)) {
  return <p>No events found</p>;
}

  return Array.isArray(data) ? (
    <>
      {Array.isArray(data) && data?.map((event) => (
        <div className="col-md-4 mb-3" key={event._id}>
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
