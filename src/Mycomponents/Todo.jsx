import React, { useState } from "react";
import Notes from "./Notes";

function Todo() {
  const [inputList, setInputList] = useState("");
  const [Items, setiTems] = useState([]);
  const itemEvents = (event) => {
    setInputList(event.target.value);
  };
  function deleteItems(id) {
    setiTems((oldItems) => {
      return oldItems.filter((ArrElem, index) => {
        return index !== id;
      });
    });
  }
  const clickBait = () => {
    setiTems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  return (
    <div>
      <div className="field-group ">
        <input
          type="text"
          placeholder="Add to do"
          value={inputList}
          id="name"
          class="input-field"
          autoComplete="off"
          onChange={itemEvents}
        />
        <label for="name" className="input-label">
          <em>
            {" "}
            Enter work to do
            <button onClick={clickBait} className=" btn btn-danger btn-circle">
              <em>
                <i>Add</i>
              </em>
            </button>
          </em>
        </label>
      </div>
      {Items.map((itemsval, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={itemsval}
            onSelect={deleteItems}
          />
        );
      })}
    </div>
  );
}
export default Todo;
