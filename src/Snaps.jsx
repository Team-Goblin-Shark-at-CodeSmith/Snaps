import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";



// const totalCards = useSelector(state => state.markets.totalCards);
const totalSnap = useSelector(state => state.snapsList);



const SnapTable = () => {

//create a variable to track total snaps
let totalSnap; 

for (let i=0; i < totalSnap.length(); i++){



}



return(
    <div>
         <ul>
        



         </ul>

    </div>
);
}





export default SnapTable;