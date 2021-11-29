import classes from "./CataloguePage.module.css"
import { useState } from "react";

function CataloguePage(props) {
    const [itemChoice, setItem] = useState("Select Clothing Item");

    const [cartCount, setCartCount] = useState(props.globalObject.getNum());
    const [sizePopup, setSizePopup] = useState(false);
    const [sizeMenu, setSizeMenu] = useState("");
    const [colourPopup, setColourPopup] = useState(false);
    const [colourMenu, setColourMenu] = useState("");
    const [amountPopup, setAmountPopup] = useState(false);
    const [amount, setAmount] = useState(1);

    let SizePopupJsx = null;
    if (sizePopup === true) {
        SizePopupJsx = (
            <div className={classes.dropdownContent}>
                <div onClick={() => { hideMenus(); setSizeMenu('Small') }}>Small</div>
                <div onClick={() => { hideMenus(); setSizeMenu('Medium') }}>Medium</div>
                <div onClick={() => { hideMenus(); setSizeMenu('Large') }}>Large</div>
            </div>
        )
    }
    let ColourPopupJsx = null;
    if (colourPopup === true) {
        ColourPopupJsx = (
            <div className={classes.dropdownContent}>
                <div onClick={() => { hideMenus(); setColourMenu('White') }}>White</div>
                <div onClick={() => { hideMenus(); setColourMenu('Black') }}>Black</div>
                <div onClick={() => { hideMenus(); setColourMenu('Blue') }}>Blue</div>
            </div>
        )
    }
    let AmountPopupJsx = null;
    if (amountPopup === true) {
        AmountPopupJsx = (
            <div className={classes.dropdownContent} onMouseLeave={() => setAmountPopup(false)}>
                <div onClick={() => setAmount(amount + 1)}>Add</div>
                <div onClick={() => checkAmount()}>Remove</div>
            </div>
        )
    }

    function setCount() {
        setCartCount(cartCount + 1);
        props.globalObject.setNum(cartCount);
    }

    function hideMenus() {
        setSizePopup(false);
        setColourPopup(false);
        setAmountPopup(false);
    }
    function resetWidget() {
        setItem("Select Clothing item");
        setSizeMenu("");
        setColourMenu("");
        setAmount(1);
    }

    function checkAmount() {
        amount > 1 ? setAmount(amount - 1) : setAmount(amount);
    }
    function submitHandler() {
        const enteredItem = itemChoice;
        const enteredSize = sizeMenu;
        const enteredColour = colourMenu;
        const enteredAmount = amount;

        const clothingData = {
            Item: enteredItem,
            Size: enteredSize,
            Colour: enteredColour,
            Amount: enteredAmount,
        };

        fetch(
            'https://reactteamproject-default-rtdb.firebaseio.com/cart.json',
            {
                method: 'POST',
                body: JSON.stringify(clothingData),
                headers: {
                    'Content-Type': 'Application/json'
                }
            }
        );
    }

    return (
        <div className={classes.mainDiv}>
            <div className={classes.apparelSelect}>
                <div onClick={() => setItem("T-Shirt")}>T-Shirt</div>
                <div onClick={() => setItem("Jeans")}>Jeans</div>
                <div onClick={() => setItem("Other")}>Other</div>
            </div>
            <div className={classes.itemBox}>
                <h3>{itemChoice}</h3>
                <div className={classes.choiceBox}>
                    <div>
                        <div className={classes.dropdown} onClick={() => setSizePopup(true)}>Select Size: {sizeMenu}</div>
                        {SizePopupJsx}
                    </div>
                    <div>
                        <div className={classes.dropdown} onClick={() => setColourPopup(true)}>Select Colour: {colourMenu}</div>
                        {ColourPopupJsx}
                    </div>
                    <div>
                        <div className={classes.dropdown} onMouseEnter={() => setAmountPopup(true)}>Select Amount: {amount}</div>
                        {AmountPopupJsx}
                    </div>
                </div>
                <div onClick={() => { submitHandler(); resetWidget(); setCount() }}>Submit Clothing Item</div>
            </div>
        </div>
    )
}
export default CataloguePage;