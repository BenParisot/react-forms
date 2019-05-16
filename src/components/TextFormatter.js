import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
    state = {
      text: ''
    }
    handleTextChange = ({ target }) => {
      this.setState({ text: target.value });
    }

    render() {
      const {
        text
      } = this.state;
      return (
          <>
            <form>
              <input onChange={this.handleTextChange}></input>
            </form>
            <p>{text}</p>  
        </> 
      );
    }
}
