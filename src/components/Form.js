import React from "react";
import { NavLink } from "react-router-dom";

const Form = () => (
  <header>
    <h1 className="SOW_h1">New Requester Task</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      WorkerTask
    </NavLink>
    {`   `}{`   `}{`   `}
    <NavLink to="/" activeClassName="is-active">
      ManagerTask
    </NavLink>
    {`   `}{`   `}{`   `}
    <NavLink to="/" activeClassName="is-active">
      None
    </NavLink>
  </header>
);

export default Form;