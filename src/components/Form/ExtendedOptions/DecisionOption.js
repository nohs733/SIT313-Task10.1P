import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";

let DecisionOption = (props) => {
  const { formValues, formId, hasProfServ, placeholder, input } = props;
  console.log(formValues, formId, hasProfServ, placeholder, input);
  return (
    <div className="form-group">
      <label className="form-label">
        <h6>Do you have liacence?</h6>
      </label>
      <div>
        <label className="checkbox">
          <Field
            name="workerCheckbox"
            className="form-checkbox"
            type="checkbox"
            component="input"
          />
          Yes
          {props.hasProfServ && (
            <div>
              <Field name="workerService" type="input2" component="none" />
            </div>
          )}
        </label>
      </div>

      <div>
        <label className="checkbox">
          <Field
            name="workerCheckbox2"
            className="form-checkbox"
            type="checkbox"
            component="input"
          />
          No
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

DecisionOption = reduxForm({
  form: "StatementOfWorkApplication"
})(DecisionOption);

const selector = formValueSelector("StatementOfWorkApplication");
DecisionOption = connect((state) => {
  const hasProfServ = selector(state, "workerCheckbox");
  return {
    hasProfServ
  };
})(DecisionOption);

export default DecisionOption;
