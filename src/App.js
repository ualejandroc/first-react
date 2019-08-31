
import React from "react";
import ReactDOM from "react-dom";
import Board from '../src/components/board'


class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        n:3
      };
      
    }

   
    render() {
      return (
        <div  >
          <div >
            <Board  n={this.state.n} />
          </div>
          {/* <div className="game-info">
            <div></div>
            <ol></ol>
          </div> */}
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))
  
  export default App;