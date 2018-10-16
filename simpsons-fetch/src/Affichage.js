import React from "react";

const Affichage = (props) => {
   
            
        return(
            <div>
            <p>{props.affiche.character}</p>
            <img src={props.affiche.image} alt="image personnage" />
            <p>{props.affiche.quote}</p>
            </div>
        )


}


export default Affichage;