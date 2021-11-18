import classes from "./Catalogue.module.css"
import { useState } from "react";

function Catalogue() {
    const [itemChoice, setItem] = useState("Select Clothing Item");
    const [size, setSize] = useState("Select Size");
    const [colour, setColour] = useState("Select Colour");
    const [amount, setAmount] = useState(1);

    function checkAmount(){
        amount > 1 ? setAmount(amount-1) : setAmount(amount);
    }


    function resetWidget() {
        setSize("Select Size")
        setItem("Select Clothing Item")
        setColour("Select Colour")
        setAmount("1")
    }
    return (
        <div className = {classes.mainDiv}>
           <div className = {classes.apparelSelect}>
                <div onClick={() => setItem("T-Shirt")}>T-Shirt</div>
                <div onClick={() => setItem("Jeans")}>Jeans</div>
                <div onClick={() => setItem("Other")}>Other</div>
           </div>
           <div className={classes.itemBox}>
               <h3>{itemChoice}</h3>
               <div className = {classes.choiceBox}>
                    <div className={classes.dropdown}>
                        {size}
                        <div className={classes.dropdownContent}>
                            <div onClick={()=>setSize("Small")}>Small</div>
                            <div onClick={()=>setSize("Medium")}>Medium</div>
                            <div onClick={()=>setSize("Large")}>Large</div>
                        </div>
                    </div>
                    <div className={classes.dropdown}>
                        {colour}
                        <div className={classes.dropdownContent}>
                            <div onClick={()=>setColour("Black")}>Black</div>
                            <div onClick={()=>setColour("White")}>White</div>
                            <div onClick={()=>setColour("Blue")}>Blue</div>
                        </div>
                    </div>
                    <div className={classes.dropdown}>
                        Amount: {amount}
                        <div className={classes.dropdownContent}>
                            <div onClick={()=>setAmount(amount + 1)}>Add</div>
                            <div onClick={()=>checkAmount()}>Remove</div>
                        </div>
                    </div>
               </div>
               <div onClick={() => resetWidget()}>Submit Clothing Item</div>
           </div>
        </div>
    )
}
export default Catalogue;