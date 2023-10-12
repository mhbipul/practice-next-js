import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import Description from "./component/Description";
import Images from "./component/Images";
import Rating from "./component/Rating";
import ResturantNavbar from "./component/ResturantNavbar";
import Reviews from "./component/Reviews";
import Title from "./component/Title";
import Reservation from "./component/reservation";

export default function Page(){
    return (
        <div>
            <div >
                <Navbar></Navbar>
                <Header></Header>
                <ResturantNavbar></ResturantNavbar>
                <Title></Title>
                <Rating></Rating>
                <Description></Description>
                <Images></Images>
                <Reviews></Reviews> 
                <Reservation></Reservation> 
            </div>

        </div>
        
    )
}