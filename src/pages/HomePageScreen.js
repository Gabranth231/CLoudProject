import classes from './HomePageScreen.module.css';
import { useState } from 'react';

function HomePageScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.widgetcontainer}>
        <div>Hello</div>
        <div className={classes.inputcontainer}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
}

export default HomePageScreen;