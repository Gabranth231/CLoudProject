import classes from './HomePageScreen.module.css';
import { useState } from 'react';

function HomePageScreen() {
  const [widgetCount, setWidget] = useState(0);
  function checkCount(){
      widgetCount > 0 ? setWidget(widgetCount-1) : setWidget(widgetCount);
  }
  return (
    <div className={classes.mainDiv}>
      <div className={classes.counter}>
        Widget count is {widgetCount}
      </div>

      <div className={classes.buttons}>
        <div>
          <div onClick={() => setWidget(widgetCount + 1)}>Add Widget</div>
        </div>

        <div>
         <div onClick ={() => checkCount()}>Delete Widget</div>
        </div>
      </div>
    </div>
  );
}

export default HomePageScreen;
