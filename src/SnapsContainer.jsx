import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Snap from "./Snap.jsx";



const SnapsContainer = () => {

    const snapsList = useSelector(state => state.snaps.snapsList);

    console.log(" SNAPS LIST FROM STATE ", snapsList);

    //create a variable to hold all snap components
    const snapsComponentList = []; 

    for (let i = 0; i < snapsList.length; i++){

        snapsComponentList.push(<Snap key={snapsList[i].snap_id} snap_text={snapsList[i].snap_text} title={snapsList[i].title} url={snapsList[i].url}/>);

    }



return(
    <div>
         <ul>
            {snapsComponentList}
         </ul>
    </div>
);
}





export default SnapsContainer;