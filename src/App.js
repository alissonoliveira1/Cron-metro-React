import React, {Component} from 'react'
import Style from './style.css'
class App extends Component{
constructor(props){
  super(props)
  this.state = {
    numero: 0,
    botao: 'Iniciar'
  }
  this.iniciar = "Iniciar"
  this.tempo = null
  this.vai = this.vai.bind(this)
  this.limpar = this.limpar.bind(this)
}
vai(){

let state = this.state
if(this.tempo !== null){
  clearInterval(this.tempo)
  this.tempo = null
  this.state.botao = 'Iniciar'
  
}
else{
this.tempo = setInterval(()=>{
let state = this.state;
state.numero += 0.1
this.setState(state)
},100)
this.state.botao = 'pausa'
}
this.setState(state);
}



limpar(){
clearInterval(this.tempo)
let state = this.state;
this.state.numero = 0
this.setState(state)
this.tempo = null
this.state.botao = 'Iniciar'
}


  render(){
    return(
      <div className='container'>
        <img className='img' src={require('./imagem/cronometro.png')}/>
        <a className='tempo'>{this.state.numero.toFixed(1)}</a>
        <div className='paibutton'>
          <a className='iniciar' onClick={this.vai}>{this.state.botao}</a>
          <a className='limpar' onClick={this.limpar}>Zerar</a>
        </div>
      </div>
    )
  }

}

export default App