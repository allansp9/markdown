import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { placeholder } from './placeholder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: placeholder };

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
        <div class="flex-1">
          <textarea onChange={this.handleUserInput} value={this.state.userInput} autoFocus />
        </div>
        <div class="flex-2">
          <ReactMarkdown source={this.state.userInput}/>
        </div>
      </div>
    );
  }
}

export default App;
