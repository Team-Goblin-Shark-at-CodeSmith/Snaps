import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snap from "../components/Snap.jsx";
import { setSnapsList } from "../redux/snapsSlice.js";
import Navbar from "../components/Navbar.jsx";

const SnapsContainer = () => {
  // MH - useSelector is how we connect react to redux. It allows us to access whatever piece of state we desire. In this case, our snapsList
  const snapsList = useSelector((state) => state.snaps.snapsList);
  // MH - useDispatch is how we connect react to redux specifically to invoke/dispatch redux actions
  const dispatch = useDispatch();

  console.log(" SNAPS LIST FROM STATE ", snapsList);
  

  //create a variable to hold all snap components
  const snapsComponentList = [
    <tr>
      <th>Title</th>
      <th id="snap-text">Snap</th>
    </tr>,
  ];

  for (let i = 0; i < snapsList.length; i++) {
    snapsComponentList.push(
      <Snap
        key={snapsList[i].snap_id}
        snap_text={snapsList[i].snap}
        title={snapsList[i].title}
        url={snapsList[i].url}
      />
    );
  }

  const handleAdd = async (e) => {
    const userUrlInput = document.getElementById("urlInput").value;
    const userTitleInput = document.getElementById("titleInput").value;

    console.log("snapsList before post call ", snapsList);
    fetch("/my-snaps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 29, //snapsList[0].user_id,
        title: userTitleInput,
        url: userUrlInput,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("urlInput").value = "";
        document.getElementById("titleInput").value = "";
        console.log("dispatching setSnapsList ", res);

        // MH - 'res' is the .rows param of the SELECT query on the Snaps table and is dispatched AS THE PAYLOAD here to the setSnapsList reducer
        dispatch(setSnapsList(res));
      })
      .catch(() => {
        console.log("Error in addSnap");
      });
  };

  return (
    <>
      <Navbar />
      <div id="snaps-container">
        <img id="snaps-page-logo" src="./images/snaps-page-logo.png" />
        {/* <h1>My Snaps</h1> */}
        <table className="snaps-table container">{snapsComponentList}</table>
        <input
          type="title"
          className="snaps-input"
          id="titleInput"
          placeholder="Enter a title..."
        />
        <input
          type="url"
          className="snaps-input"
          id="urlInput"
          placeholder="Enter a URL..."
        />
        <button id="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default SnapsContainer;
