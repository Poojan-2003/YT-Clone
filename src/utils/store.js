import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import themeSlice from "./themeSlice";
 
const store = configureStore({
    reducer:{
        myAppslice  : appSlice,
        myChatSlice : chatSlice, 
        theme: themeSlice,
    }
});

export default store