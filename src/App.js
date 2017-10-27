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
        <div className="container">
          <header>
            <h1>Markdown Previewer</h1>
          </header>
          <section className='textArea'>
            <h1>Editor</h1>
            <textarea onChange={this.handleUserInput} value={this.state.userInput} />
          </section>

          <section className='previewArea'>
            <div className='scroller'>
              <h1>Previewer</h1>
              <ReactMarkdown source={this.state.userInput}/>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
