import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";
import Cropper from "react-easy-crop";
import "../../styles/index.scss";
//create your first component

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			crop: { x: 0, y: 0 },
			zoom: 1,
			aspect: 4 / 3
		};
	}
	handleClose = () => console.log("not closing");
	onCropChange = crop => {
		this.setState({ crop });
	};

	onCropComplete = (croppedArea, croppedAreaPixels) => {
		console.log(croppedArea, croppedAreaPixels);
	};

	onZoomChange = zoom => {
		this.setState({ zoom });
	};
	render() {
		let originalScreenshotDOMElement = (
			<Cropper
				image={
					"https://images.unsplash.com/photo-1551801841-ecad875a5142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1268&q=80"
				}
				crop={this.state.crop}
				zoom={this.state.zoom}
				aspect={this.state.aspect}
				onCropChange={this.onCropChange}
				onCropComplete={this.onCropComplete}
				onZoomChange={this.onZoomChange}
			/>
		);
		return (
			//<div>{originalScreenshotDOMElement}</div>

			<Modal dialogClassName="test" show={true} onHide={this.handleClose}>
				<Modal.Body style={{ minHeight: "90vw" }}>
					{originalScreenshotDOMElement}
				</Modal.Body>
			</Modal>
		);
	}
}
export default Home;
