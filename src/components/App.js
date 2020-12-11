import React from 'react'
import { getAll, getByType, getBetweenAge } from '../data/pets'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: getAll(),
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    // console.log(e.target.value)
    // console.log('here')
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onAdoptPet = (pet) => {
    console.log(pet)

    this.setState({
      pets: this.state.pets.map(p => {
        if(p.id === pet.id){
          p.isAdopted = !p.isAdopted
          return p
        }else{
          return p
        }
      })
    })
  }

  // getPetData = () => {
    // fetch('/api/pets')
    // .then(res => res.json())
    // .then(data => console.log(data))
    ////OR
    // console.log(getAll())
    // return getAll()
  // }

  render() {
    // console.log(getPetData())
    // console.log(this.state.filters.type)
    const pets = this.state.filters.type === 'all' ? this.state.pets : this.state.pets.filter(pet => pet.type === this.state.filters.type)
    console.log(pets)


    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets ={pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
