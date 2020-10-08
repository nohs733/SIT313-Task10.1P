import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import Form from "../components/Form";

const IndexRouter = () => (
  <BrowserRouter>
    <div>
      <Form/>
      <Switch>
        <Route path="/" component={App} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default IndexRouter;
