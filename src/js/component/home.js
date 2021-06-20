import React, { Component } from "react";

import { Modal, Button } from "react-bootstrap";
import Cropper from "react-easy-crop";
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
					"https://images.all-free-download.com/images/graphiclarge/city_building_night_view_216448.jpg"
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
			<Modal show={true}>
				<Modal.Body>{originalScreenshotDOMElement}</Modal.Body>
			</Modal>
		);
	}
}
export default Home;
