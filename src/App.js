import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { placeholder } from './placeholder';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container-fluid">
            <div className="row">
              <div className="col no-padding">
                <header className="main-header border">
                  <h1>Markdown Previewer</h1>
                </header>
              </div>
            </div>
             <div className="row">
              <div className="col no-padding">
                <section className='textarea screensize'>
                  <header className="border">
                    <h5>MARKDOWN</h5>
                  </header>
                  <textarea onChange={this.handleUserInput} value={this.state.userInput}/>
                </section>
              </div>

              <div className="col no-padding">
                <header className="border">
                  <h5>PREVIEW</h5>
                </header>
                <section className='previewarea screensize'>

                  <div className='scroller'>
                    <ReactMarkdown source={this.state.userInput}/>
                  </div>
                </section>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
