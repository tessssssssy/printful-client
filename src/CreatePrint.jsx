import React from 'react';

class CreatePrint extends React.Component {
    async componentDidMount() {
        const response = await fetch('http://localhost:3000/products');
        const results = await response.json();
        console.log(results);
    }
    render() {
        return (
            <h1>Create Print</h1>
        )
    }
}

export default CreatePrint;