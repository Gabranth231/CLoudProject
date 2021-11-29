import ClothesItem from './ClothesItem';
import classes from './ClothesList.module.css';

function ClothesList(props) {
  return (
    <ul className={classes.list}>
      {props.cart.map((clothing) => (
        <ClothesItem
          key={clothing.id}
          item={clothing.Item}
          size={clothing.Size}
          colour={clothing.Colour}
          amount={clothing.Amount}
        />
      ))}
    </ul>
  );
}

export default ClothesList;