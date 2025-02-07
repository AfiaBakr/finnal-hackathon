import react from "react";
import Image from "next/image";
import StarterMenu from "./StarterMenu";
import OverView from "./OverView";
import DessertDrink from "./DessertDrink"; 
import PartnerClient from "./PartnerClient";


const OurMenu = ()=> {
    return(
        <main id="Menu">
            <title>Our Menu</title>
            <StarterMenu/>           
            <OverView/>
            <DessertDrink/>
            <PartnerClient/>

           
        </main>
    )
};
export default OurMenu;