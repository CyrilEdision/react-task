import React, { Component } from "react";
import Data from "../Data.json";
class Checkbox extends Component {
  constructor(props) {
    console.log(Data);
    super(props);
    this.state = {
      showCheckBox: false
    };
  }

  showCheckboxes = () => {
    this.setState({
      showCheckBox: !this.state.showCheckBox
    });
  };
  render() {
    return (
      <div>
        <form>
          <div className="multiselect">
            <div className="selectBox" onClick={() => this.showCheckboxes()}>
              <select>
                <option>Select an option</option>
              </select>
              <div className="overSelect" />
            </div>
            {this.state.showCheckBox && (
              <div id="checkboxes">
                <label for="one">
                  <input type="checkbox" id="one" />
                  First checkbox
                </label>
                <label for="two">
                  <input type="checkbox" id="two" />
                  Second checkbox
                </label>
                <label for="three">
                  <input type="checkbox" id="three" />
                  Third checkbox
                </label>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Checkbox;
