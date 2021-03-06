import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "a30efdd994bbe73cae87f691e8e0a697";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
    console.log(title);
  };
  render() {
    console.log(this.props);
    const recipe = this.state.activeRecipe;
    return (
      <React.Fragment>
        <div className="container">
          {this.state.activeRecipe.length !== 0 && (
            <div className="active-recipe">
              <img
                className="active-recipe__img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <h3 className="active-recipe__title">{recipe.title}</h3>
              <h4 className="active-recipe__publisher">
                Publisher:<span>{recipe.publisher}</span>
              </h4>
              <p className="active-recipe__website">
                Website:
                <span>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </span>
              </p>
              <button className="active-recipe__button">
                <Link to="/">Home</Link>
              </button>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Recipe;
