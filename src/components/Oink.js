import React from 'react'

function PigsContainer(props){
    // debugger;
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'


    
    return <div>
        <label>Sort </label>
        <select value={props.sortVal} onChange={(e)=>{props.sortBy(e.target.value)}}>
        <option value='none'>---</option>
        <option value='name'>Name</option>
        <option value={weight}>Weight</option>
        </select>
        <label> &emsp; Filter Greased Piggies</label>
        <button onClick={props.filterPigs}>Filter</button>
        {props.pigCards}
    </div>
}

export default PigsContainer;