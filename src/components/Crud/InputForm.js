import React, { useEffect, useState } from "react";
import SearchField from "./SearchField";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputNumValue, setInputNumValue] = useState("");
  const [inputdate, setInputdate] = useState("");

  const [newdata, setNewdata] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    // Set the editing index and populate input fields with corresponding data
    const itemToEdit = newdata[index];
    setInputValue(itemToEdit.title);
    setInputNumValue(itemToEdit.upvote);
    setInputdate(itemToEdit.date);
    setEditingIndex(index);
  };
  const handleDelete = (index) => {
    const updatedData = newdata.filter((item, i) => i !== index);
    setNewdata(updatedData);
    localStorage.setItem("key", JSON.stringify(updatedData));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Regular expression to match alphabets only
    if (value !== " ") {
      if (/^[A-Za-z ]*$/.test(value)) {
        setInputValue(value);
      }
    }
  };
  const HandleNumberValue = (event) => {
    const value = event.target.value;
    if (/^[0-9]*$/.test(value) || value === "") {
      setInputNumValue(value);
    }
  };
  const HandleDate = (event) => {
    const value = event.target.value;
    setInputdate(value);
  };
  const addData = (event) => {
    event.preventDefault();

    const newData = {
      title: inputValue,
      upvote: inputNumValue,
      date: inputdate,
    };

    // Update the newdata state with the new data
    setNewdata((prevData) => [...prevData, newData]);

    // Save the new data to localStorage
    localStorage.setItem("key", JSON.stringify([...newdata, newData]));

    // Clear input fields
    setInputValue("");
    setInputNumValue("");
    setInputdate("");
  };
  const saveEditData = (event) => {
    event.preventDefault();

    const editedData = {
      title: inputValue,
      upvote: inputNumValue,
      date: inputdate,
    };

    const updatedData = newdata.map((item, index) =>
      index === editingIndex ? editedData : item
    );

    setNewdata(updatedData);

    // Also update localStorage with the updated data
    localStorage.setItem("key", JSON.stringify(updatedData));

    // Clear input fields and reset editing index
    setInputValue("");
    setInputNumValue("");
    setInputdate("");
    setEditingIndex(null);
  };
  useEffect(() => {
    // Load data from localStorage
    const savedData = JSON.parse(localStorage.getItem("key")) || [];
    setNewdata(savedData);
  }, []);

  return (
    <div className="container d-lg-flex flex-lg-row flex-column justify-content-center">
      <div className="left-data col-lg-5  mt-5 ">
        <div className="data mt-5  col-lg-9">
          <h5>For the state management usereducer with usecontext hooks .</h5>
        </div>
        <form className=" p-4 shadow col-lg-11 bg-white mt-5 ">
          <div class="form-group col-lg-12">
            {editingIndex !== null ? (
              <h5 className="font-weight-normal">Edit Record</h5>
            ) : (
              <h5 className="font-weight-normal">Add Record</h5>
            )}
          </div>
          <div class="form-group col-lg-12">
            <input
              type="text"
              class="form-control pt-4 pb-4"
              id="exampleInputEmail1"
              placeholder="Enter title"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group col-lg-12">
            <input
              type="text"
              class="form-control pt-4 pb-4"
              id="exampleInputPassword1"
              placeholder="Enter upvotes number between 0 to 100..."
              value={inputNumValue}
              onChange={HandleNumberValue}
            />
          </div>
          <div class="form-group col-lg-12">
            <input
              type="date"
              class="form-control pt-4 pb-4"
              id="exampleInputPassword1"
              placeholder="Enter Date..."
              value={inputdate}
              onChange={HandleDate}
            />
          </div>
          <div class="form-group col-lg-12">
            <button
              type="submit"
              className="form-control btn btn-success "
              disabled={!(inputValue && inputNumValue && inputdate)}
              onClick={editingIndex !== null ? saveEditData : addData}
            >
              <h5>{editingIndex !== null ? "Save Edits" : "Add Data"}</h5>
            </button>
          </div>
        </form>
      </div>
      <div className="right-data col-lg-7">
        <SearchField
          val={newdata}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default InputForm;
