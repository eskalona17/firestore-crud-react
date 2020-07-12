import React, { useState } from "react";


export const LinkForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChanges = e => {
      const {name, value} = e.target;
      setValues({
          ...values,
          [name]: value
      })
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(values);
    setValues({...initialStateValues})
  };
  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="url"
          name="url"
          onChange={handleInputChanges}
          value={values.url}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="website name"
          onChange={handleInputChanges}
          value={values.name}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          rows="3"
          className="form-control"
          placeholder="Write a description"
          onChange={handleInputChanges}
          value={values.description}
        ></textarea>
      </div>
      <button className="btn btn-warning btn-block">
        Save
      </button>
    </form>
  );
};

export default LinkForm;
