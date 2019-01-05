import React, { Component } from "react";
import "tachyons";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App h-100 ma0">
        <div className="Navbar br2 shadow-5 pa2 ma0 min-h border bg-light-gray justify-between items-center">
          <div className="Logo tl ">Logo</div>
          <div className="companyName fw5 f-5">TEACH</div>
          <div className="Account tr">Account</div>
        </div>
        <div className="Board center h-100 pa2 border bg-light-gray w-100 ma0">
          <div className="boardLeft w-60 center br2 shadow-5 pa2 border bg-dark-gray white justify-between">
            <div className="classInfo center border w-100 h-100 pa1 justify-around">
              <div className="classTitle">Class Title</div>
              <div className="classTime">Class Time</div>
            </div>
            <div className="studentInfo center border w-100 h-100 pa1 justify-around">
              <div className="studentName">Student Name</div>
              <div className="Reward">Student Reward</div>
            </div>
            <div className="Slides">
              <img
                className="Slides"
                alt="Student"
                src="https://i.pinimg.com/originals/59/f1/e7/59f1e7aa8ac5ad6691e45bcebb826eee.jpg"
              />
            </div>
          </div>
          <div className="boardRight w-40 center br2 shadow-5 pa2 border">
            <div className="boardTopRight h-50 br2 shadow-5 pa2 w-100 center border bg-dark-gray white">
              <img
                className="Student"
                alt="Student"
                src="https://st2.depositphotos.com/1006832/10857/i/950/depositphotos_108572872-stock-photo-girl-university-student-with-headset.jpg"
              />
              <div />
            </div>
            <div className="boardBottomRight w-100 h-50 br2 shadow-5 center border">
              <div className="Toolbar w-40 br2 shadow-5 center border bg-dark-gray white">
                <div className="Toolbar-Row1 justify-between">
                  <button className="">Button 1 </button>
                  <button className="">Button 2 </button>
                </div>
                <div className="Toolbar-Row2">
                  <button className="">Button 3 </button>
                  <button className="">Button 4 </button>
                </div>
                <div className="Toolbar-Row3">
                  <button className="">Button 5 </button>
                  <button className="">Button 6 </button>
                </div>
                <div className="Toolbar-Row4">
                  <button className="">Button 7 </button>
                  <button className="">Button 8 </button>
                </div>
              </div>
              <div className="Teacher w-60 br2 shadow-5 center border bg-dark-gray white">
                <img
                  className="Teacher"
                  alt="Student"
                  src="https://esltutor.net/wp-content/uploads/2014/03/esltutor-teacher-with-headset.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
