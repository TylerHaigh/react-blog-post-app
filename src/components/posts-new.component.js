import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

const inputField = (field, label) => {
  
  const {meta: { touched, error }} = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`
  
  return (
    <div className={className}>
      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input} />
      
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
  )
}


class PostsNew extends Component {

  onSubmit(values) {
    console.log(values);
  }


  render() {

    const {handleSubmit} = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" label="Title for Post" component={inputField} />
          <Field name="categories" label="Categories" component={inputField} />
          <Field name="content" label="Post Content" component={inputField} />

          <button type="submit" className="btn btn-primary">Submit</button>

          <Link to="/" className="btn btn-danger">Cancel</Link>
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
  return errors;
}


export default reduxForm({
  validate,
  form: 'PostsNewForm' // unique name of form
})(PostsNew);