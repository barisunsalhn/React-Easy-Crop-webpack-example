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
					"http://www.pxleyes.com/images/contests/cloud-panorama/fullsize/Wide-4f8c7ce030a65_hires.jpg"
					//"http://www.pxleyes.com/images/contests/Flowers-2020/fullsize/Flowers-2020-5ebbc968f354a.jpg"
				}
				crop={this.state.crop}
				zoom={this.state.zoom}
				aspect={this.state.aspect}
				onCropChange={this.onCropChange}
				onCropComplete={this.onCropComplete}
				onZoomChange={this.onZoomChange}
				classes={{ containerClassName: "container" }}
				showGrid={false}
			/>
		);
		return (
			//<div>{originalScreenshotDOMElement}</div>

			<Modal dialogClassName="test" show={true} onHide={this.handleClose}>
				<Modal.Header>Test</Modal.Header>
				<Modal.Body>{originalScreenshotDOMElement}</Modal.Body>
				<Modal.Footer>End</Modal.Footer>
			</Modal>
		);
	}
}
export default Home;
