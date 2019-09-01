

import React from "react";
import ReactDOM from "react-dom";

  //componentWillMount(){
    // let n = prompt("Please enter length", 3)
    // alert (`son ${n} columnas x filas `)
    
  //}

// src='https://freight.cargo.site/t/original/i/22da83e6832d7e844384b84a3d3a29a36872695bd4d59a7a309bf4b951369b1b/1400pxMarks-symbols-05.png'

const styles= {
  images: {
    width: 40, 
    height: 40,
    display: "flex",
    
  },
  square:{
    alignItems:'center',
    justifyContent:'center',
          display: "flex",       
          width: 100,
          height: 100,
          borderColor:'#000',
          borderWidth: '2px',
          // position: "absolute",
          margin:0,
          padding:0,
          border: '2px solid grey'
          
        },
  container:
        {
          display: "flex",
          width: 320,
          height: 320,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent:'flex-start',
          alignItems: 'stretch',
          alignContent:'flex-start',
        }

      };


class Square extends React.Component {
    render() {   

      let image =<img 
      style={this.props.style}
      src={this.props.src}  /> 

      if(this.props.src==="")
        image=""

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
   
       elemens:[1,1,0,0,1,1,1,1,1],
       isElem : true,
       play:[0,0,0,0,0,0,0,0,1],

       n: this.props.n,
     
      // let handleKeyDown = this.handleKeyDown.bind(this) 
        imgElem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9eBjHRgSnEpj2Kdi9BcO0jQuqMbXsHIqBfzOULgFVQbN8QAa',
        imgPlay: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsh69DzGNII0obwN1_V6GgVuFa1TNK6aTKUMWeRwoHopI4_wdOlQ'
    }
      
      this.handleKeyDown = this.handleKeyDown.bind(this)
      
    }
    
   

    //handles arrow keys
    handleKeys = (key) => {  
      const mov = this.state.elemens;  
      const plays = this.state.play; 
      const n = this.state.n
  
        let actual;
        for(let i=0;i< plays.length; i++){
          
           if(plays[i]===1)
              actual=i      
        
         }
         
          switch(key) {
              case 'left':
                if(actual>0)
                  {
                    plays[actual-1]=1
                    mov[actual-1]=0
                    mov[actual]=0
                    plays[actual]=0
                    } 
                 
                 
                  break;
              case 'up':
                  // UP
                  if(actual>n-1)
                  {
                    plays[actual-n]=1
                    mov[actual-n]=0
                    mov[actual]=0
                    plays[actual]=0
                    } 
                  console.log('up')
                  break;
              case 'rigth':
                if(actual<=n*n-2)
                {
                  plays[actual+1]=1
                  mov[actual+1]=0
                  mov[actual]=0
                  plays[actual]=0
                  } 
                  console.log('rigth')
                  break;
              case 'down':
                if(actual<=(n -1)*n-1 )
                {
                  plays[actual+n]=1
                  mov[actual+n]=0
                  mov[actual]=0
                  plays[actual]=0
                  } 
                  break;
              default:
                  return;
          }
     
       this.setState({play: plays})    
       this.setState({elemens: mov}) 
  
      }      
    
  
    
                 
      
   handleKeyDown(e) {
          let newDirection;
     console.log(e)
         
          switch(e.keyCode) {
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
                  console.log('rigth')
                  break;
              case 40:
                  // DOWN
                  this.handleKeys('down') 
                  break;
              default:
                  return;
          }
  
      }
  
     componentDidMount() {
    
  }
      
    
    render() {

      const mov = this.state.elemens;
      const plays = this.state.play;   
  
      const move = mov.map(( move,index) => {
  
            let imgs;
            if (move===1&& plays[index]===0){ 
                  imgs=  this.state.imgElem
            }else if(move===1&& plays[index]===1){
                  mov[index]=0
                   this.setState({elemens: mov})
                   imgs=  this.state.imgPlay
            }  else if(move===0 && plays[index]===1){
                   imgs=  this.state.imgPlay  
            }     
             else if(move===0 && plays[index]===0){
              imgs=  ""
            
            }
  
            //return of the render of the map of elements
            return (            
              <Square  
              key={index.toString()}             
              pStyle={styles.square}
              src={imgs}
              style={styles.images}
                />
             
            );
    
      }); 
  
      return (
        <div   onKeyDown= {(e) =>this.handleKeyDown(e)}   >
         
          <div                      
            tabIndex="0"
            style={styles.container}
            >
           {move}        

        </div>
        </div>
      );
    }
  }