import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Snap from "./Snap.jsx";



const SnapsContainer = () => {

    const snapsList = useSelector(state => state.snaps.snapsList);

    console.log(" SNAPS LIST FROM STATE ", snapsList);

    //create a variable to hold all snap components
    const snapsComponentList = [<tr>
        <th>Title</th>
        <th id="snap-text">Snap</th>
      </tr>]; 

    for (let i = 0; i < snapsList.length; i++){

        snapsComponentList.push(<Snap key={snapsList[i].snap_id} snap_text={snapsList[i].snap_text} title={snapsList[i].title} url={snapsList[i].url}/>);

    }



return(
    <div id="snaps-container">
        <h1>My Snaps</h1>
         <table className="snaps-table container">
            {snapsComponentList}
         </table>
    </div>
);
}





export default SnapsContainer;