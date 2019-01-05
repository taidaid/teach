import React, { Component } from "react";
import "tachyons";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App h-100 ma0">
        <div className="Navbar br2 shadow-5 pa2 ma0 min-h border">Navbar</div>
        <div className="Board center h-100 pa2 border">
          <div className="boardLeft w-60 center br2 shadow-5 pa2 border">
            Slides
          </div>
          <div className="boardRight w-40 center br2 shadow-5 pa2 border">
            <div className="Student h-50 br2 shadow-5 pa2 w-100 center border">
              Student
              <div />
            </div>
            <div className="boardBottomRight w-100 h-50 br2 shadow-5 center border">
              <div className="Toolbar w-20 br2 shadow-5 center border">
                Toolbar
              </div>
              <div className="Teacher w-80 br2 shadow-5 center border">
                Teacher
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
