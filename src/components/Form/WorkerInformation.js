import React from "react";

const WorkerInformation = ({ placeholder, input }) => {
  console.log(input);
  return (
    <div>
      <div className="form-label" />
      <div>
        <textarea
          className="form-control"
          {...input}
          type="textarea"
          rows={1}
          placeholder={placeholder}
          style={"resize" ? null : { resize: "none" }}
        />
      </div>
    </div>
  );
};

export default WorkerInformation;