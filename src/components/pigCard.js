import React from 'react';


export default class PigCard extends React.Component {
   
   
    constructor(props){
        super()
    }

    state = {
        details: false
    }

    piggyClick = () => {
        this.setState({
            details: !this.state.details
        })
    }

    render(){
        if (this.state.details === true){
            return <div onClick={this.piggyClick}>
                <h1>Name: {this.props.name}</h1> 
                <img src={`/hog-imgs/${this.props.name.split(' ').join('_').toLowerCase()}.jpg`} alt='https://i.ytimg.com/vi/EM7OjpQVouo/hqdefault.jpg'/>
                <p>Specialty: {this.props.specialty}</p>
                <p>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                <p>Highest Medal Achieved: {this.props['highest medal achieved'
                ]}</p>
            </div>
            }
        else if (this.state.details === false){
// debugger;
            return <div onClick={this.piggyClick}>
                <h1>Name: {this.props.name}</h1> 
                <img src={`/hog-imgs/${this.props.name.split(' ').join('_').toLowerCase()}.jpg`} alt='https://i.ytimg.com/vi/EM7OjpQVouo/hqdefault.jpg'/>
            </div>
        }
    }
}