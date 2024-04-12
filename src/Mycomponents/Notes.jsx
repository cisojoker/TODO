import react from "react";

function Notes(props) {
  return (
    <div className=" border border-success rounded-top rounded bottom">
      <button
        className="btn btn-danger delbtn"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        <span>
          <tr>
            <td>🗑️</td>
            <td>Delete</td>
          </tr>
        </span>
      </button>
      <h1 className="notesh1">{props.title}</h1>
    </div>
  );
}
export default Notes;
