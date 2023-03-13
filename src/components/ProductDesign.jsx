import React from "react";
import Shoe from "./Shoe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from "styled-components";

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	bottom: 60px;
	right: -54px;
`;

const ProductDesign = () => {
	return (
		<>
			<Canvas>
				<Stage environment='city' intensity={0.3}>
					<Shoe />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>
				We Design products with a strong focus on both world class design and
				ensuring your product is a market success.
			</Desc>
		</>
	);
};

export default ProductDesign;
