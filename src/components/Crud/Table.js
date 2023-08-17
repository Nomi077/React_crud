import React, { useState } from "react";
// import SearchField from "./SearchField";

const Table = ({ val, handleDelete, handleEdit }) => {
  const [viewItemIndex, setViewItemIndex] = useState(null);
  const indexupdate = (index) => {
    setViewItemIndex(index);
  };
  return (
    <div>
      <table class="table mt-4 shadow bg-white ">
        <thead className="thread font-weight-normal text-muted">
          <tr>
            <th scope="col">
              <h6>Title</h6>
            </th>
            <th scope="col">
              <h6>Upvotes</h6>
            </th>
            <th scope="col">
              <h6>Date</h6>
            </th>
            <th></th>
          </tr>
        </thead>
        {val.map((item, index) => (
          <tbody>
            <tr>
              <td>
                <h6>
                  {item.title.length > 15
                    ? item.title.substring(0, 15) + "..."
                    : item.title}
                </h6>
              </td>

              <td>
                <h6>{item.upvote}</h6>
              </td>
              <td>
                <h6>{item.date}</h6>
              </td>
              <td className="d-flex">
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ borderRadius: "15px" }}
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => indexupdate(index)}
                >
                  View
                </button>
                <button
                  class="btn btn-primary ml-2"
                  style={{ borderRadius: "15px" }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger  ml-2"
                  style={{ borderRadius: "15px" }}
                  data-toggle="modal"
                  data-target="#exampleModal1"
                  onClick={() => indexupdate(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Do you want to delete your selected Item
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <button
                type="button"
                class="btn btn-success"
                style={{ borderRadius: "15px" }}
                onClick={() => handleDelete(viewItemIndex)}
                data-dismiss="modal"
              >
                Yes Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Title: {viewItemIndex !== null ? val[viewItemIndex].title : ""}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Upvotes: {viewItemIndex !== null ? val[viewItemIndex].upvote : ""}
              <br />
              Date: {viewItemIndex !== null ? val[viewItemIndex].date : ""}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
