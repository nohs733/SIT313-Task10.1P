import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector } from "redux-form";

let ChoiceOption = (props) => {
  const { formValues, formId, hasProfServ, placeholder, input } = props;
  console.log(formValues, formId, hasProfServ, placeholder, input);
  return (
    <div className="form-group">
      <label className="form-label">
        <h6>What positon are you applying for?</h6>
      </label>
      <div>
        <label className="checkbox-group">
          <Field
            name="wokerCheckbox"
            className="form-checkbox"
            type="checkbox"
            component="input"
          />
          Driver
          {props.hasProfServ && (
            <div>
              <Field name="workerService" type="input" component="none" />
            </div>
          )}
        </label>
      </div>

      <div>
        <label className="checkbox-group">
          <Field
            name="wokerCheckbox2"
            className="form-checkbox"
            type="checkbox"
            component="input"
          />
          Warehouse assistance
          {props.hasProfServ && (
            <div>
              <Field name="workerService" type="input2" component="none" />
            </div>
          )}
        </label>
      </div>

      <div>
        <label className="checkbox-group">
          <Field
            name="wokerCheckbox3"
            className="form-checkbox"
            type="checkbox"
            component="input"
          />
          Receptionist
          {props.hasProfServ && (
            <div>
              <Field name="workerService" type="input3" component="none" />
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

const selector = formValueSelector("StatementOfWorkApplication");
ChoiceOption = connect((state) => {
  const hasProfServ = selector(state, "wokerCheckbox");
  return {
    hasProfServ
  };
})(ChoiceOption);

export default ChoiceOption;
