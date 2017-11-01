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
      <div className="flex-container">
        <div className="flex-1">
          <textarea onChange={this.handleUserInput} value={this.state.userInput} autoFocus />
        </div>
        <div className="flex-2">
          <ReactMarkdown source={this.state.userInput}/>
        </div>
        <footer><p><a href="https://github.com/allansp9/markdown" target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="mailto:allansp9@gmail.com">allansp9@gmail.com</a></p></footer>
      </div>
    );
  }
}

export default App;
