import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';


const inputField = (field, label) => {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input} />
    </div>
  )
}


class PostsNew extends Component {
 

  render() {

    return (
        <form>
          <Field name="title" label="Title for Post" component={inputField} />
          <Field name="tags" label="Tags" component={inputField} />
          <Field name="context" label="Post Content" component={inputField} />
        </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm' // unique name of form
})(PostsNew);