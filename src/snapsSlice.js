import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    snapsList: [],
}



const snapsSlice = createSlice ({

    name:'snaps',
    initialState,
    reducers: {
        setSnapsList: (state, action) => {
            state.snapsList = [];
            for (let i = 0; i < action.payload.length; i++){
                state.snapsList.push(action.payload[i]);
            }
        },


    }


})

export const { setSnapsList } = snapsSlice.actions

export default snapsSlice.reducer

