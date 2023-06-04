import React, { Component } from "react";
import "../components/styles.css";
import { Data } from "./data";
import Products from "../components/Products";
import Filter from "../components/Filter";
import Programs from "../components/Programs";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        : Data,
      cat: ""
    };
  }

  

  // filtering by name
  filteringName = (e) => {
    let categ = e.target.value;

    if (categ === "") {
      this.setState({ cat: categ, products: Data });
    } else {
      this.setState({
        cat: categ,
        products: Data.filter((product) => {
          return product.category.indexOf(e.target.value) >= 0;
        }
        )
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Filter
          filteringName={this.filteringName}
          cat={this.state.cat}
        />
        <Products products={this.state.products} />
        <Programs/>
        
      </div>
      

    );
  }
}
