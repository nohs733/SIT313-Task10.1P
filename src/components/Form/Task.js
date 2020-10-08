import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
//import WorkerInformation from "./WorkerInformation";
import CustomProfExtOptions from "./ExtendedOptions/SentenceOption";
import ChoiceOption from "./ExtendedOptions/ChoiceOption";
import DecisionOption from "./ExtendedOptions/DecisionOption";

let formId = "StatementOfWorkApplication";


let Task = (props) => {
  console.log(props);

  const submitForm = (values) => {
    console.log("Submission Info: ", values);
  };

  return (
    <div>
      <form className="formContainer" onSubmit={props.handleSubmit(submitForm)}>
        <div className="form-group">
          <label className="form-label">
            <h4>Select Task Type</h4>
          </label>

          <div className="checkbox-group">
            <div>
              <label className="checkbox-group">
                <Field
                  name="ChoiceOption"
                  className="form-checkbox"
                  component="input"
                  type="checkbox"
                />
                Choice Task
                {props.hasChoiceOption && (
                  <div>
                    <Field
                      name="choiceOption"
                      type="input"
                      component={ChoiceOption}
                      label="Custom Options Info"
                      placeholder="Location"
                      formId={formId}
                    />
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="checkbox-group">
            <div>
              <label className="checkbox-group">
                <Field
                  name="DecisionOption"
                  className="form-checkbox"
                  component="input"
                  type="checkbox"
                />
                Decision-making
                {props.hasDecisionOption && (
                  <div>
                    <Field
                      name="decisionOption"
                      type="input"
                      component={DecisionOption}
                      label="Custom Options Info"
                      placeholder="Location"
                      formId={formId}
                    />
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="checkbox-group">
            <div>
              <label className="checkbox-group">
                <Field
                  name="SentenceOption"
                  className="form-checkbox"
                  component="input"
                  type="checkbox"
                />
                Sentence-level
                {props.hasSentenceOption && (
                  <div>
                    <Field
                      name="sentenceOption"
                      type="input"
                      component={CustomProfExtOptions}
                      label="Custom Options Info"
                      placeholder="Location"
                      formId={formId}
                    />
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Task = reduxForm({
  form: "StatementOfWorkApplication"
})(Task);

const selector = formValueSelector("StatementOfWorkApplication");
Task = connect((state) => {
  const hasSentenceOption = selector(state, "SentenceOption");
  const hasChoiceOption = selector(state, "ChoiceOption");
  const hasDecisionOption = selector(state, "DecisionOption");

  return {
    hasSentenceOption,
    hasChoiceOption,
    hasDecisionOption
  };
})(Task);

export default Task;
