

import React from "react";
import ReactDOM from "react-dom";

  //componentWillMount(){
    // let n = prompt("Please enter length", 3)
    // alert (`son ${n} columnas x filas `)
    
  //}

// src='https://freight.cargo.site/t/original/i/22da83e6832d7e844384b84a3d3a29a36872695bd4d59a7a309bf4b951369b1b/1400pxMarks-symbols-05.png'

const styles= {
  square:{
                   
          width: 100,
          height: 100,
          borderColor:'#000',
          borderWidth: '2px',
          // position: "absolute",
          margin:0,
          padding:0,
          
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
          // position: "relative"
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
        imgElem: 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg',
        imgPlay: 'https://freight.cargo.site/t/original/i/22da83e6832d7e844384b84a3d3a29a36872695bd4d59a7a309bf4b951369b1b/1400pxMarks-symbols-05.png'
                     
    }
      
      this.handleKeyDown = this.handleKeyDown.bind(this)
      
    }
    
    
    //handles touches
    handleKeys = (move, index) => {  
      const mov = this.state.elemens;  
      const plays = this.state.play; 
      const n = this.state.n
  
        let actual;
        for(let i=0;i< plays.length; i++){
          
           if(plays[i]===1)
              actual=i      
        
         }
  
        for(let i=0;i< plays.length; i++){ 
            plays[i]=0;
           if(index===actual+1 || index===actual-1 ||  ///anadir n-1 o n+1 
              index===actual-n || index===actual+n )
              {
                plays[index]=1
                mov[index]=0
                } 
              else
               {
                 plays[actual]=1
                 mov[index]=0
               }
        
         }      
     
       this.setState({play: plays})    
       this.setState({elemens: mov}) 
  
      }      
    
    //  handleClick(i){
    //   const squares = this.state.squares.slice();
    //   squares[i] = 'X';
    //   this.setState({squares: squares});
    // }
    
  
    initial(){
      
       const mov = this.state.elemens;
      const plays = this.state.play;   
  
      const move = mov.map(( move,index) => {
  
            let imgs;
            if (move===1&& plays[index]===0){  //(this.state.isElem) {
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
              pStyle={styles.square}
              src={this.state.imgElem}
              style={{width: 40, height: 40}}
                             
                />
             
            );
    
      }); 
      
    }
                
      
   handleKeyDown(e) {
          let newDirection;
     console.log(e)
         
          switch(e.keyCode) {
              case 37:
                  //LEFT
                  // newDirection = { top: 0, left: -1 , dir: LEFT};
                  console.log('left')
                  break;
              case 38:
                  // UP
                  // newDirection = { top: -1, left: 0 , dir: UP};
                  console.log('up')
                  break;
              case 39:
                  // rigth
                  // newDirection = { top: 0, left: 1, dir: RIGHT};
                  console.log('rigth')
                  break;
              case 40:
                  // DOWN
                  // newDirection = { top: 1, left: 0, dir: DOWN };
                  break;
              default:
                  return;
          }
  
          // this.props.handlePlayerMovement(newDirection);
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
              style={{width: 40, height: 40}}
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