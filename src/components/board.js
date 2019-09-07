

import React from "react";
import ReactDOM from "react-dom";

//componentWillMount(){
// let n = prompt("Please enter length", 3)
// alert (`son ${n} columnas x filas `)

//}

// src='https://freight.cargo.site/t/original/i/22da83e6832d7e844384b84a3d3a29a36872695bd4d59a7a309bf4b951369b1b/1400pxMarks-symbols-05.png'

const styles = {
  images: {
    // width: 40, 
    // height: 40,
    display: "flex",

  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    // width: 100,
    // height: 100,
    borderColor: '#000',
    borderWidth: '2px',
    margin: 0,
    padding: 0,
    border: '2px solid grey'

  },
  container:
  {
    display: "flex",
    width: 320,
    height: 320,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'flex-start',
  }

};


class Square extends React.Component {
  render() {

    let image = <img
      style={this.props.style}
      src={this.props.src} />

    if (this.props.src === "")
      image = ""

    return (
      <div
        style={this.props.pStyle}
      >
        {image}

      </div>
    );
  }
}

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(this.props.n).fill(null),

      elemens: [1, 1, 0, 0, 1, 1, 1, 1, 1],
      isElem: true,
      play: [0, 0, 0, 0, 0, 0, 0, 0, 1],

      n: this.props.n,
      nTemp: this.props.n,

      width: 300,
      counter: 0,
      score:0,

      // let handleKeyDown = this.handleKeyDown.bind(this) 
      imgElem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9eBjHRgSnEpj2Kdi9BcO0jQuqMbXsHIqBfzOULgFVQbN8QAa',
      imgPlay: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsh69DzGNII0obwN1_V6GgVuFa1TNK6aTKUMWeRwoHopI4_wdOlQ'
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this);

  }



  //handles arrow keys
  handleKeys = (key) => {
    const mov = this.state.elemens;
    const plays = this.state.play;
    const n = parseInt(this.state.n)

    let count = 0

    let actual;
    for (let i = 0; i < plays.length; i++) {

      if (plays[i] === 1)
        actual = i

    }
    actual = parseInt(actual)
    switch (key) {
      case 'left':
        if (actual > 0) {
          plays[actual - 1] = 1
          mov[actual - 1] = 0
          mov[actual] = 0
          plays[actual] = 0
        }


        break;
      case 'up':
        // UP
        if (actual > n - 1) {
          plays[actual - n] = 1
          mov[actual - n] = 0
          mov[actual] = 0
          plays[actual] = 0
        }
        break;
      case 'rigth':
        if (actual <= n * n - 2) {
          plays[actual + 1] = 1
          mov[actual + 1] = 0
          mov[actual] = 0
          plays[actual] = 0
        }
        break;
      case 'down':
        if (actual <= (n - 1) * n - 1) {
          plays[actual + n] = 1
          mov[actual + n] = 0
          mov[actual] = 0
          plays[actual] = 0
        }
        break;
      default:
        return;
    }



    mov.map((val, index) => {
      if (val == 1) {
        count++
      }
    })

    this.setState({ score: (parseInt( this.state.counter)-parseInt( count)  ) })

    this.setState({ play: plays })
    this.setState({ elemens: mov })

  }

  handleKeyDown(e) {

    switch (e.keyCode) {
      case 37:
        //LEFT
        this.handleKeys('left')
        break;
      case 38:
        // UP
        this.handleKeys('up')
        break;
      case 39:
        // rigth
        this.handleKeys('rigth')
        break;
      case 40:
        // DOWN
        this.handleKeys('down')
        break;
      default:
        return;
    }

  }

  //generates random 1 or 0
  getRand = () => {
    return Math.random() < 0.5 ? 0 : 1
  }

  // handleChange
  handleChange(event) {
    this.setState({ nTemp: event.target.value });
  }


  render() {

    const mov = this.state.elemens;
    const plays = this.state.play;
    let n = this.state.n

    const move = mov.map((move, index) => {

      let imgs;
      if (move === 1 && plays[index] === 0) {
        imgs = this.state.imgElem
      } else if (move === 1 && plays[index] === 1) {
        mov[index] = 0
        this.setState({ elemens: mov })
        imgs = this.state.imgPlay
      } else if (move === 0 && plays[index] === 1) {
        imgs = this.state.imgPlay;
      }
      else if (move === 0 && plays[index] === 0) {
        imgs = "";
      }

      let newD = {
        width: this.state.width / n,
        height: this.state.width / n,
      }

      let square = { ...newD, ...styles.square }



      let newImage = {
        width: this.state.width / (2 * n),
        height: this.state.width / (2 * n),
      }

      let images = { ...newImage, ...styles.images }

      //return of the render of the map of elements
      return (
        <Square
          key={index.toString()}
          pStyle={square}
          src={imgs}
          style={images}
        />

      );

    });

    return (
      <div onKeyDown={(e) => this.handleKeyDown(e)}   >

<label>{'Score:  ' + this.state.score }</label>
        <div
          tabIndex="0"
          style={styles.container}
        >
          {move}

        </div>

        <br />

        <div style={{
          width: 300,
          //  marginTop:320, 
          flex: 1,
          position: "absolute"
        }} >

          <label>{'Select number of rows:'}</label>
          <input
            type='text'
            value={this.state.nTemp}
            onChange={this.handleChange}

          />

          <button
            onClick={() => {
              if (this.state.n) {
                const n = this.state.nTemp
                let middle = (n * n - 1) % 2 == 0 ? parseInt((n * n - 1) / 2) : (parseInt((n * n - 1) / 2) - n / 2)


                let mov = new Array(n * n)
                let plays = new Array(n * n).fill(0)
                plays[middle] = 1

                for (let index = 0; index < mov.length; index++) {
                  mov[index] = this.getRand()
                }

                let count = 0

                mov.map((val, index) => {
                  if (val == 1) {
                    count++
                  }
                })


                this.setState({ counter:count   ,n, play: plays })
                this.setState({ elemens: mov })
              }

            }}
            title="Start"
            color="#cc1584"
          > Start </button>
          <br />
          <br />
          <label>{'Start again  '}</label>

          <button

            onClick={() => {
              let mov = [1, 1, 0, 0, 1, 1, 1, 1, 1]
              let plays = [0, 0, 0, 0, 1, 0, 0, 0, 0]

              let count = 0

                mov.map((val, index) => {
                  if (val == 1) {
                    count++
                  }
                })

              this.setState({ counter:count , play: plays })
              this.setState({ elemens: mov })
            }}
            title="Reset"
            color="#841584"
          > Reset </button>

        </div>


      </div>
    );
  }
}