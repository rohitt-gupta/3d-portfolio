import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	top: 60px;
	right: -54px;

	@media only screen and (max-width: 768px) {
		top: 340px;
		bottom: 0px;
		left: -60px;
		right: 0;
	}
`;

const Model = styled.div`
	position: absolute;
	left: 100px;
	height: 100%;
	width: 100%;
	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
		left: -85px;
		bottom: 40px;
	}
`;

const WebDesign = () => {
	return (
		<>
			<Model>
				<Canvas>
					<Stage environment='city' intensity={0.3}>
						<Mac />
					</Stage>
					<OrbitControls enableZoom={false} autoRotate />
				</Canvas>
			</Model>
			<Desc>
				We Design products with a strong focus on both world class design and
				ensuring your product is a market success.
			</Desc>
		</>
	);
};

export default WebDesign;
