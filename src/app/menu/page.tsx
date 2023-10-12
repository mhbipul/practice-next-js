import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Description from "./component/Description";

export default function Page(){
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Description></Description>
        </div>
    )
}