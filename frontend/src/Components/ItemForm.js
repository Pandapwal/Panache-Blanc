import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: '',
      brand: '',
      picture: '',
      price: '',
      description: '',
      location: '',
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    console.log(this.state);
    fetch('http://localhost:4000/items', {
        method: 'POST',
        body: JSON.stringify(this.state)
    }).then(function(response) {
        console.log(response)
        return response.json();
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Model:
          <input type="text" name="model" value={this.state.model} onChange={this.handleChange} />
        </label>
        <label>Brand:
          <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} />
        </label>
        <label>Picture:
          <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange} />
        </label>
        <label>Price:
          <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
        </label>
        <label>Description:
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>Location:
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
        </label>
        <label>Category:
          <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ItemForm;