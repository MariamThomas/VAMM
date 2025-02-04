import React from "react";
import {Route, Routes} from "react-router-dom";
import News from "./components/News";
import Auth from "./pages/Auth/Auth";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route exact path="/"  element={<News key="general" pageSize={8} catagory="general"/>}>

            </Route>
            <Route exact path="/business"  element={<News key="business" pageSize={8} catagory="business"/>}>

            </Route>
            <Route exact path="/sports"  element={ <News key="sports" pageSize={8} catagory="sports"/>}>

            </Route>
            <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={8} catagory="entertainment"/>}>


            </Route>
            <Route exact path="/health" element={<News key="health" pageSize={8} catagory="health"/>}>

            </Route>
            <Route exact path="/science" element={<News key="science" pageSize={8} catagory="science"/>}>

            </Route>
            <Route exact path="/technology" element={ <News key="technology" pageSize={8} catagory="technology"/>}>

            </Route>
                <Route path='/Auth' element={<Auth />}/>
        </Routes>
    )
}