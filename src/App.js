import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { placeholder } from './placeholder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: placeholder};

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput : e.target.value
    });
  }

  render () {
    return (
      <div class="flex-container">
        <div class="flex-child">
          <div class="flex-item1">
            <h5>MARKDOWN</h5>
          </div>
          <div class="flex-item2">
            <textarea onChange={this.handleUserInput} value={this.state.userInput}/>
          </div>
        </div>

        <div class="flex-child">
          <div class="flex-item3">
            <h5>PREVIEW</h5>
          </div>
          <div class="flex-item4">
            <ReactMarkdown source={this.state.userInput}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
