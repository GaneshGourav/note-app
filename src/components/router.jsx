import { Route, Routes } from "react-router-dom"
import { Login } from "./login"
import { Signup } from "./signIn"
import { Notes } from "../page/note"

export const Router = () =>{


    return <>
    <Routes>
    <Route path="/notes" element={<Notes/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
    
    
    </>
}