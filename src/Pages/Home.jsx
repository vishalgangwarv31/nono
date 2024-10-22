import Achievement from "../component/achienvment/Achievment";
import Activities from "../component/activity/Activities";
import Faq from "../component/faq/Faq";
import Landing from "../component/landing/Landing";
import Middle from "../component/Middle/Middle";

const Home = () =>{
    return(
        <>
            <Landing 
                green="Making" 
                premium="Premium" 
                green2="Healthcare" 
                cyan="Affordable" 
                detail="Providing immediate access to healthcare, empowering individuals and communities to lead healthier lives."
                home="true"
                imageURL= "/assets/front/shield.png"
            />
            <Middle/>
            <Activities/>
            <Achievement />
            <Faq/>
        </>
    )
}

export default Home;