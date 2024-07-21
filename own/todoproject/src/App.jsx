import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [cvalue, setCvalue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (e) => {
    setCvalue(e.target.value);
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      // setList((prevList) => [...prevList ,list[editIndex]=cvalue]) having issue that add and edit both
      const updatedList = list.map((item, index) =>
        index === editIndex ? cvalue : item
      );
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList((prevList) => [...prevList, cvalue]);
    }
    setCvalue("");
  };

  const editButton = (item, index) => {
    setCvalue(item);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    // datedlist = list.splice(1, index)  by direct given it just store delete value only and remove other by list.splice it do same thing
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red to-blue p-4">
        <div className="mb-4">
          <input
            type="text"
            value={cvalue}
            onChange={handleInput}
            className="border-4 border-black p-2 rounded-md w-full mb-2"
            placeholder="Enter item"
          />
          <button
            onClick={handleSubmit}
            className="bg-pink-600 text-white p-2 rounded-md w-full"
          >
            Submit
          </button>
        </div>
        <div className="w-full">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-2"
            >
              
              <div className="text-lg">{index+1}. {item} - {new Date().toLocaleDateString()} </div>
              
              <div>
                <button
                  className="bg-yellow-400 text-white p-2 rounded-md mr-2"
                  onClick={() => editButton(item, index)}
                >
                  Edit
                </button>
                <button
                  className="bg-rose-700
                 text-white p-2 rounded-md"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
