import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsContainer from './Oink'
import PigCard from './pigCard'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    sortVal: 'none',
    piggies: hogs,
    filtered: false
  }

  filterPigs = () => {
    this.setState({
      filtered: !this.state.filtered
    }, () => this.updateSort(this.state.sortVal))

  
  }

  applyFilter = (sortedPigs) => {
    const filteredPigs = []
    if (this.state.filtered === true){
      sortedPigs.forEach((pig)=>{
        if (pig.greased === true){
          filteredPigs.push(pig)
        }
      })
      return filteredPigs 
    }
    else{
      return sortedPigs
    }
  }

  sortPigs = (val) => {
    if (val === 'none'){
      return hogs
    }
    else{
      return hogs.sort((h1,h2)=>{
        if (h1[val] < h2[val]){
          return -1
        }
        else{
          return 1
        }
      })
    }
  }

  updateSort = (val) => {
    let newHogs = this.applyFilter(this.sortPigs(val))
    this.setState({
      sortVal: val,
      piggies: newHogs
    })
  }

  createPigCards = () => {
    return this.state.piggies.map((oinkers) => {
      return <PigCard {...oinkers}/>
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < PigsContainer pigCards={this.createPigCards()} sortBy={this.updateSort} sortVal={this.state.sortVal} filterPigs={this.filterPigs}/>
      </div>
    )
  }
}

export default App;
