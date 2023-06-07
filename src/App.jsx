import Image from "./components/Image";
import data from "./data/challenge.json";
import { useState } from "react";
import Information from "./components/Information";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filters = ["Mountain", "Beach", "Bird", "Food"];

  const [effect, setEffect] = useState("");

  return (
    <div>
      <h1 id="main-title">SnapShot</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div>
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() =>
              setFilteredData(data.filter((elem) => elem.category === filter))
            }
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="img-container">
        {filteredData
          .filter((image) =>
            image.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )

          .map((item) => (
            <Image
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              picture={item.picture}
              onClick={() => {
                setEffect(item.picture + item.category);
              }}
            />
          ))}
      </div>
      <div>
        <Information effect={effect} />
      </div>
    </div>
  );
};

export default App;
