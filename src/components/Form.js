import React from "react";

const Form = props => {
  return (
    <React.Fragment>
      <form
        onSubmit={props.getRecipe}
        action=""
        style={{ marginBottom: "2rem" }}
      >
        <input className="form__input" type="search" name="recipeName" />
        <button className="form__button">Search</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
