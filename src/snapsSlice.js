import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    snapsList: [],
}



const snapsSlice = createSlice ({

    name:'snaps',
    initialState,
    reducers: {
        setSnapsList: (state, action) => {
            state.snapsList = action.payload
        },


    }


})

export const { setSnapsList } = snapsSlice.actions

export default snapsSlice.reducer

