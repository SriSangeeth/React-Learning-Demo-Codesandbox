import React from "react";
import ReactDOM from "react-dom";

class car {
  //main class
  constructor(num) {
    this.tyre = num;
  }
  func() {
    return "It has " + this.tyre + " tyres.";
  }
}
class vehicle extends car {
  //derieved class
  constructor(num, model) {
    super(num); //if num not declared it shows undefined
    this.name = model;
  }
  func1() {
    return this.func() + " The name is " + this.name + ".";
  }
  arrowfun = num => "Arrow Function Working. " + num;
}
var name2 = new vehicle();
var name1 = new vehicle(4, "Ford Mustang");
ReactDOM.render(name1.func1(), document.getElementById("root"));
ReactDOM.render(name2.arrowfun(46), document.getElementById("root1"));
