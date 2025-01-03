import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "./Header";
import { Link } from "react-router-dom";

const Detail = () => {
  const { data, loading, error } = useFetch("https://meetup-app-backend-opal.vercel.app/events/");

  const eventId = useParams();

  const eventDetail = data?.find((event) => event._id == eventId.productId);
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            {eventDetail && (
              <>
                <h1>{eventDetail.title}</h1>
                <p className="mb-0">Hosted By:</p>
                <h5 className="mb-4">{eventDetail.hosted}</h5>
                <img src={eventDetail.image} alt="" className="img-fluid" />
                <h4 className="mt-4">Details:</h4>
                {eventDetail.details.map((des) => (
                  <p>{des}</p>
                ))}
                <h4>Additional Information:</h4>
                <p className="mb-1">
                  <strong>Dress Code:</strong> {eventDetail.dressCode}
                </p>
                <p>
                  <strong>Age Restrictions:</strong>{" "}
                  {eventDetail.ageRestrictions}
                </p>
                <h4>Event Tags:</h4>
                {eventDetail.tags?.map((tag) => (
                  <Link className="btn btn-danger btn-sm mx-1">{tag}</Link>
                ))}
              </>
            )}
          </div>
          <div className="col-md-4">
            <div className="card bg-white rounded-0">
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    Tue Aug 15 2023 at 10:00:00 AM to <br /> Tue Aug 15 2023 at
                    12:00:00 PM
                  </li>
                  <li className="mb-3">
                    <span className="d-block">Marketing City</span>
                    <p>789 Marketing Avenue, City</p>
                  </li>
                  <li>
                    3,000
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
