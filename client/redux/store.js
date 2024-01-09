// Importing store from redux toollkit 
import { configureStore } from '@reduxjs/toolkit'  
import snapsReducer from './snapsSlice'
// Exporting store for app use
export const store = configureStore({ 
  reducer: { 
    snaps: snapsReducer,
  },
})