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
      <div>
        <header>
          <div class="header">
            <h5>MARKDOWN - <small>Type your markdown here.</small></h5>
          </div>
          <div class="header">
            <h5>PREVIEW - <small>See the preview here.</small></h5>
          </div>
        </header>
          <main id="content">
            <div id="flex-one">
              <textarea onChange={this.handleUserInput} value={this.state.userInput} autoFocus />
            </div>
            <div id="flex-two">
              <ReactMarkdown source={this.state.userInput}/>
            </div>
          </main>
          <footer>...</footer>
      </div>
    );
  }
}

export default App;
