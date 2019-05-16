import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
    state = {
      text: '',
      color: 'black'
    }
    handleTextChange = ({ target }) => {
      this.setState({ text: target.value });
    }

    handleColorChange = ({ target }) => {
      this.setState({ color: target.value });
    }

    render() {
      const {
        text
      } = this.state;
      return (
          <>
            <form>
              <input onChange={this.handleTextChange}></input>
              <input type="color" onChange={this.handleColorChange}></input>
            </form>
            <p style={{ color:this.state.color }}>{text}</p>  
        </> 
      );
    }
}
