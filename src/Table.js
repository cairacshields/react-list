import React, { Component } from 'react';

//A few React SIMPLE components that creates peices of a Table from a function
const TableHeader = () => {
	return (
		<thead>
	      <tr>
	        <th>Name</th>
	        <th>Job</th>
	        <th> Remove </th>
	      </tr>
	    </thead>
	);
}

const TableBody = props => {
	const rows = props.characterData.map((row, index) => {
		return (
			<tr key={index}>
		      <td>{row.name}</td>
		      <td>{row.job}</td>
		      <td>
		      	<button onClick={() => props.removeCharacter(index)}>Delete</button>
		      </td>
		    </tr>
		);
	});

	return <tbody>{rows}</tbody>;
}



//A React CLASS component that creates a Table 
class Table extends Component {
	render() {
		const { characterData, removeCharacter } = this.props;

		return (
			<table>
				<TableHeader />
				<TableBody characterData={characterData} removeCharacter={removeCharacter}/>
			</table>	
		);
	}
}

export default Table;