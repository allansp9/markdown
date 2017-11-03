import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Icon from 'react-component-bytesize-icons';
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
        <footer>
          <div><a href="https://github.com/allansp9/markdown" target="_blank" rel="noopener noreferrer"><Icon name="github" size="regular"/></a></div>
           <div><a href="mailto:allansp9@gmail.com"><Icon name="mail" size="regular"/></a></div>
         </footer>
      </div>
    );
  }
}

export default App;
