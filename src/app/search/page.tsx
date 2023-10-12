import Header from "../component/Header";
import Navbar from "../component/Navbar";
import SearchSideBar from "./component/SearchSideBar";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            
            <SearchSideBar></SearchSideBar>
        </div>
    )
}