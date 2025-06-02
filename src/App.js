import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Listing from "./pages/listing";
import { SearchProvider } from "./context/Search.context";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Listing />
      </SearchProvider>
    </div>
  );
}

export default App;
