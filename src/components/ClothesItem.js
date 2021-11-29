import Card from './ui/Card';
import classes from './ClothesItem.module.css';

function ClothesItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <div>{props.item}</div>
          <div>{props.size}</div>
          <div>{props.colour}</div>
          <div>{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ClothesItem;