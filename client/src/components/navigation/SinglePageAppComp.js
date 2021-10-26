// האבא, קריאה לילד NavigationBarComp
// יכיל את התפריט וגם את הראוטינג - ניווט חכם

import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";
import { BrowserRouter as Router } from "react-router-dom";

//אחראית על ניווטים ומאיזה דפים

function SinglePageAppComp({ set, user }) {
  return (
    <Router>
      {" "}
      <NavigationBarComp user={user} setUser={set}></NavigationBarComp>
      <NavigationRouteComp set={set} user={user}></NavigationRouteComp>
    </Router>
  );
}
export default SinglePageAppComp;
