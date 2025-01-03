import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Search = () => {
  return (
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="Search By Title"
      />
      <button>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
};

export default Search;
