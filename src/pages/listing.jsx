import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { useSearch } from "../context/Search.context";

const Listing = () => {
  const [eventStatus, setEventStatus] = useState("");
  const [eventData, setEventData] = useState([]);
  const { search } = useSearch();
  
  const [searchData, setSearchData] = useState([]);

  const { data, loading } = useFetch("https://mohdrafi-store.vercel.app/events/");

  const handleSelectEvent = (event) => {
    const selectedValue = event.target.value;
    setEventStatus(selectedValue);

    fetch(`https://mohdrafi-store.vercel.app/events?event=${selectedValue}`)
      .then((response) => response.json())
      .then((data) => {
        setEventData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://mohdrafi-store.vercel.app/events?search=${search}`
        );
        const data = await response.json();
        console.log(data);
        
        setSearchData(data);
      } catch (error) {
        console.error(error);
      }
    };   
    fetchEvents();
 
  }, [search]);

  
  

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
            <select
              className="form-control"
              value={eventStatus}
              onChange={handleSelectEvent}
            >
              <option value="">Select Event Type</option>
              <option value="Online Event">Online</option>
              <option value="Offline Event">Offline</option>
            </select>
          </div>
        </div>
        <div className="row">
          <Card
            data={
              search ? searchData : eventStatus && eventData ? eventData : data
            }
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};
export default Listing;
