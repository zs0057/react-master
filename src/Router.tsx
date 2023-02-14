import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react-master/:coinId">
          <Coin />
        </Route>
        <Route path="/react-master">
          <Coins></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
