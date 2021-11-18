import classes from "./NewPage.module.css"
import { useState } from "react";
function NewPage() {
    const [itemChoice, setItem] = useState("Select Clothing Item");
  
    return (
        <div className = {classes.mainDiv}>
           <div className = {classes.apparelSelect}>
                <div onClick={() => setItem("T-Shirt")}>T-Shirt</div>
                <div onClick={() => setItem("Jeans")}>Jeans</div>
                <div onClick={() => setItem("Other")}>Other</div>
           </div>
           <div className={classes.itemBox}>
               <h3>{itemChoice}</h3>
               <body className = {classes.choiceBox}>
                   <div>Size</div>
                   <div>Colour</div>
                   <div>Amount</div>
               </body>
               <div onClick={() => setItem("Select Clothing Item")}>Submit Clothing Item</div>
           </div>
        </div>
    )
}
export default NewPage;