import {useState, useEffect} from 'react';
import ClothesList from '../components/ClothesList'

function CartPage(props) {
    const [isLoading, setIsloading] = useState(true);
    const [loadedData, setLoadedData] = useState([])
    
    useEffect(()=>{
        setIsloading(true);
        fetch(
            'https://reactteamproject-default-rtdb.firebaseio.com/cart.json'
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const cart = [];
            
            for (const key in data){
                const clothing = {
                    id: key,
                    ...data[key],
                };
                cart.push(clothing);
            }
            setIsloading(false);
            setLoadedData(cart);
        });
    }, []);
    

    if(isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    
    return (
        <section>
            <ClothesList cart = {loadedData} />
            {props.globalObject.setNum(loadedData.length)}
        </section>
    )
}
export default CartPage;