import { Route, Switch } from "react-router-dom";
import EditPersonPage from "../pages/editPerson";
import ListPersonsPage from "../pages/listPersons";
import RegisterPersonPage from "../pages/registerPerson";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ListPersonsPage />
        </Route>
        <Route path="/list">
          <ListPersonsPage />
        </Route>
        <Route path="/register">
          <RegisterPersonPage />
        </Route>
        <Route path="/edit">
          <EditPersonPage />
        </Route>
      </Switch>
    </>
  );
};
export default Router;
