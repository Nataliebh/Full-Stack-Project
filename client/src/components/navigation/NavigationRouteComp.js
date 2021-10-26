//לוגיקה שיודעת לחקור את שורת הכתובת של הדפדפן
//ולפי שורת הכתובת לרנדר את הקוד המבוקש

import { Switch, Route } from "react-router-dom";
import { tabs } from "../../helpers/tabs";
function NavigationRouteComp({ set, user }) {
  //
  return (
    // נבדוק בשורת הכתובת מה יש אחרי הסלאש ולכל מקרה תרנדר לי את הדף המתאים
    <Switch>
      {tabs.map((tab) => (
        <Route key={tab} path={tab.href}>
          {<tab.page set={set} user={user}></tab.page>}
        </Route>
      ))}
    </Switch>
  );
}

export default NavigationRouteComp;
