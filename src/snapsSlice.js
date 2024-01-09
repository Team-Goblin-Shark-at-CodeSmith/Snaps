import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    snapsList: [],
    user_id: 0,
}



const snapsSlice = createSlice ({

    name:'snaps',
    initialState,
    reducers: {
        setSnapsList: (state, action) => {
            console.log("action here " , action)
            state.snapsList = [];
            for (let i = 0; i < action.payload.length; i++){
                state.snapsList.push(action.payload[i]);
            }
            state.user_id = action.payload[0].user_id;
        },


    }


})

export const { setSnapsList } = snapsSlice.actions

export default snapsSlice.reducer

