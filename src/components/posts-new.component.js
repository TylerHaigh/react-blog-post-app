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
          <Field name="categories" label="Categories" component={inputField} />
          <Field name="context" label="Post Content" component={inputField} />
        </form>
    );
  }
}




function validate(values) {
  const errors = {};

  // validate inputs from values object => { name: value }
  if (!values.title || values.title.length < 3) { errors.title = "Enter a title that is at least 3 characters"; }
  if (!values.categories) { errors.categories = "Enter some categories"; }
  if (!values.content) { errors.content = "Enter some content"; }

  // if errors is empty, then ok.
  // if erros has any properties, then redux form assumes for is invalid
  return errors
}


export default reduxForm({
  validate,
  form: 'PostsNewForm' // unique name of form
})(PostsNew);