import React from "react";

let SentenceOption = (props) => {
  const { formValues, formId, hasProfServ, placeholder, input } = props;
  console.log(formValues, formId, hasProfServ, placeholder, input);
  return (
    <div>
      <div className="form-group">
        <label className="form-label">
          <h6>Why did you apply this position?</h6>
          <input
            {...input}
            className="form-control"
            style={{ width: "1150px" }}
          />
        </label>
      </div>
    </div>
  );
};

export default SentenceOption;
