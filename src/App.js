import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import BreedList from './BreedList.jsx';
import ImageBreed from './ImageBreed.jsx';

class App extends Component {
	constructor(props){
		super(props);
		this.state= {
			breeds: [],
			image: ''
		}
		this.handleClick= this.handleClick.bind(this);
	}

	componentDidMount(){
		// Una vez montado el componente, hago un pedido axios a la API para setear en el state local
		// el array con todas las razas.
		axios.get('https://dog.ceo/api/breeds/list')
			.then(data => this.setState({ breeds : data.data.message }))
	}

	handleClick(breed){
		// Esta función va a manejar el evento onClick del componente que tiene la vista de la lista de razas.
		// En cada raza que se haga click, se hará un pedido axios a la API que contiene la imagen correspondiente a tal raza.
		axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
			.then(data => this.setState({ image : data.data.message }))
	}

  render() {
    return (
      <div className="App">
				<h2>Amalgama app</h2>
				<BreedList breeds= { this.state.breeds } handleClick= { this.handleClick } />
				{
					this.state.image && <ImageBreed src= { this.state.image } />
				}
      </div>
    );
  }
}

export default App;
