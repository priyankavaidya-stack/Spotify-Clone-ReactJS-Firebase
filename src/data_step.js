// 1] how to code react context api with data layer
// 2] [first, go to index.js and add <StateProvider> or <DataLayer> 
//    or anything name what you want inside of <React.StrictMode> ] 
// 3] Add props {initialState,reducer} to <DataLayer>
//    i.e <DataLayer initialState reducer>
// 4] Crate DataLayer.js file in src.
//    import React, { CreateContext, useContext, useReducer } from "react";
//    export variable like DataLayerContext = createContext();
//    this is datalayer initialization
// 5] then we will export other variable like DataLayer = ({ initialState, reducer, childern }) => {
//    here, <DataLayerContext.Provider>   </DataLayerContext.Provider>    }
//     Here childern is content of <DataLayer> tag provided in the index.js
//     and initialState and reducer is props was already provided in index.js
// 6]   
