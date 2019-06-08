import React from 'react';
import { Form } from 'react-bootstrap';

export interface ProductProps {}

export interface ProductState {}

class EditProduct extends React.Component<ProductProps, ProductState> {
	state = { imageUrl: '', title: '', description: '', price: '', availableStock: '' };
	handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="product-form">
				<Form onSubmit={(e: any) => this.handleSubmit(e)}>
					<Form.Group controlId="formGroupTitle">
						<Form.Label>Book Title</Form.Label>
						<Form.Control required type="text" placeholder="Enter Book Title" value={this.state.title} onChange={(event: any) => this.setState({ title: event.target.value })} />
					</Form.Group>
					<Form.Group controlId="formGroupDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Enter Description"
							value={this.state.description}
							onChange={(event: any) => this.setState({ description: event.target.value })}
						/>
					</Form.Group>
					<Form.Group controlId="formGroupPrice">
						<Form.Label>Price</Form.Label>
						<Form.Control required type="number" placeholder="Enter Price" value={this.state.price} onChange={(event: any) => this.setState({ price: event.target.value })} />
					</Form.Group>
					<Form.Group controlId="formGroupStock">
						<Form.Label>Quantity Available</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Enter Quantity Available"
							value={this.state.availableStock}
							onChange={(event: any) => this.setState({ availableStock: event.target.value })}
						/>
					</Form.Group>
					<Form.Group controlId="formGroupImageUrl">
						<Form.Label>Image Url</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Enter Image Url"
							value={this.state.imageUrl}
							onChange={(event: any) => this.setState({ imageUrl: event.target.value })}
						/>
					</Form.Group>
					<button type="submit" className="ui-btn ui-btn__primary">
						Create
					</button>
				</Form>
			</div>
		);
	}
}

export default EditProduct;