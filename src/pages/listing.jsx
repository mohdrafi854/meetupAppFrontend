import Card from "../components/Card";
import Header from "../components/Header";

const Listing = () => {
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-auto">
            <h1 className="mb-0 text-start h3">Meetup Events</h1>
          </div>
          <div className="col-md-3 ms-auto">
            <select name="" className="form-control">
              <option value="All">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Listing;
