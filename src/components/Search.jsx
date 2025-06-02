import { useSearch } from "../context/Search.context";

const Search = () => {
  const { setSearch, search } = useSearch();




  return (
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="Search By Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
