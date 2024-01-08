import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import Snap from "./Snap.jsx";



const SnapsContainer = () => {

    const navigate = useNavigate();

    //This is grabbing the array of objects (AKA our individual snaps)
    const snapsList = useSelector(state => state.snaps.snapsList);

    console.log(" SNAPS LIST FROM STATE ", snapsList);

    //create a variable to hold all snap components
    const snapsComponentList = [<tr>
        <th>Title</th>
        <th id="snap-text">Snap</th>
      </tr>]; 

    for (let i = 0; i < snapsList.length; i++){

            //DEFINING PROPS
            //in the list of snaps we past the id of the individual snap )  (snap text of individual snap)  (title of snap)
        snapsComponentList.push(<Snap key={snapsList[i].snap_id} snap_text={snapsList[i].snap_text} title={snapsList[i].title} url={snapsList[i].url}/>);

    }

    const returnToSignup = (e) => {

        navigate("/") 
    
    
      }
    

return(
   
    <div id="snaps-container">
        <h1>My Snaps</h1>
         <table className="snaps-table container">
            {snapsComponentList}
         </table>
        <button id= 'Signout-button' onClick={returnToSignup} > Signout </button>
    </div>
);
}





export default SnapsContainer;