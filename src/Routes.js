import { Switch, Route } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import Todo from "./Pages/Todo";
import ShowList from "./Pages/ShowList";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <ButtonAppBar />
        <Todo />
      </Route>
      <Route path="/list" exact>
        <ButtonAppBar />
        <ShowList />
      </Route>
    </Switch>
  );
}
