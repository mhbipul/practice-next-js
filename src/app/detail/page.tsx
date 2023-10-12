import Header from "../component/Header";
import Navbar from "../component/Navbar";
import ResturantDescription from "./component/ResturantDescription";

export default function Page(){
    return(
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <ResturantDescription></ResturantDescription>
        </div>
    )
}