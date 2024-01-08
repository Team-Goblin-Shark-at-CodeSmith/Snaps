import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    snapsList: [],
}


//snapSlice is our reducer & set snaps list is one of the actions
const snapsSlice = createSlice ({

    name:'snaps', 
    initialState,
    reducers: {
        //loops through return 'value' from our async call and add all our objects 'user snaps' into snapsList array
        setSnapsList: (state, action) => {
            for (let i = 0; i < action.payload.length; i++){
                //pushing action.payload[i]    pushing every snap object to state
                state.snapsList.push(action.payload[i]);
            }
        },


    }


})

//exporting method 
export const { setSnapsList } = snapsSlice.actions

export default snapsSlice.reducer

