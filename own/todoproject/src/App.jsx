import { useEffect, useRef, useState } from "react";

function App() {
  // const [list, setList] = useState(() => {
  //   // Retrieve the list from localStorage when the component mounts
  //   const savedList = localStorage.getItem('list');  //key is only one is list and the value is ['inp1','inp2',...]
  //   return savedList ? JSON.parse(savedList) : [];
  // });
  const [list, setList] = useState(() => {
    // Retrieve the list from localStorage when the component mounts
    const savedList = localStorage.getItem('list');
    return savedList ? JSON.parse(savedList) : [];
  });

  const [dates, setDates]= useState(()=>{
    // for (let i=0; i<list.length; i++){
    // console.log(list[i])
    // const savedTime = localStorage.getItem(list[i]);
    // return savedTime ? JSON.parse(savedTime): '';
    // }
    const initialDates = {};
    const savedList = localStorage.getItem('list');
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      parsedList.forEach(item => {
        const savedTime = localStorage.getItem(item);
        initialDates[item] = savedTime ? JSON.parse(savedTime) : '';
      });
    }
    return initialDates;
  });

  const [cvalue, setCvalue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect (()=>{
    localStorage.setItem('list', JSON.stringify(list))
   
  }, [list]);

  useEffect(()=>{
    // for (let i=0; i<list.length; i++){
    // localStorage.setItem(list[i], JSON.stringify(date))
    // }
    list.forEach(item => {
      localStorage.setItem(item, JSON.stringify(dates[item]));
    });
  },[dates, list])

  const handleInput = (e) => {
    setCvalue(e.target.value);
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const oldItem = list[editIndex]
      // setList((prevList) => [...prevList ,list[editIndex]=cvalue]) having issue that add and edit both
      const updatedList = list.map((item, index) =>
        index === editIndex ? cvalue : item
      );
      setList(updatedList);
      
      setDates((prevDates) => {
        const { [oldItem]: _, ...rest } = prevDates; // Remove old date entry
        return { ...rest, [cvalue]: new Date().toLocaleString()};
      });

      setEditIndex(null);
    } else {
      setList((prevList) => [...prevList, cvalue]);
      setDates((prevDates) => ({...prevDates, [cvalue]:new Date().toLocaleString()}))
    }
    setCvalue("");
  };

  const editButton = (item, index) => {
    setCvalue(item);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    // datedlist = list.splice(1, index)  by direct given it just store delete value only and remove other by list.splice it do same thing
    const itemToDelete = list[index]
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    //Same as for setlist we have to do for setDates
    const updatedDates = { ...dates };
    delete updatedDates[itemToDelete];
    setDates(updatedDates);
    localStorage.removeItem(itemToDelete); 

  };

  const timesch = (item) =>{
    // if (item === date){
    //   return setDate(date)
    // }
    // setDate(new Date().toTimeString())
    return dates[item] || '';
  }

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
              
              <div className="text-lg">{index+1}. {item} - {dates[item] || ''}</div>
              
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
