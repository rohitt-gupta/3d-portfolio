import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 1300px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		width: 400px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Left = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
	}
`;

const Title = styled.h1`
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`;
const WhatWeDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 5px;
`;

const Subtitle = styled.h2`
	color: #da4ea2;
`;

const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
	@media only screen and (max-width: 768px) {
		padding: 20px;
		text-align: center;
	}
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 3;
	position: relative;
	@media only screen and (max-width: 768px) {
		flex: 1;
		width: 100vh;
	}
`;
const Img = styled.img`
	width: 700px;
	height: 500px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		to {
			transform: translateY(20px);
		}
	}
	@media only screen and (max-width: 768px) {
		width: 450px;
		height: 450px;
	}
`;

const Model = styled.div`
	position: absolute;
	/* top: 300px; */
	left: 20px;
	height: 100%;
	width: 100%;
	@media only screen and (max-width: 768px) {
		width: 70%;
		height: 70%;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
	}
`;

const Hero = () => {
	return (
		<Section>
			<Navbar />
			<Container>
				<Left>
					<Title>Think. Make. Solve.</Title>
					<WhatWeDo>
						<Line src='./img/line.png' />
						<Subtitle>What we Do</Subtitle>
					</WhatWeDo>
					<Desc>
						we enjoy creating delightful, human-sentered digital experiences.
					</Desc>
					<Button>Learn More</Button>
				</Left>
				<Right>
					<Model>
						<Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
							<Suspense fallback={null}>
								<ambientLight intensity={0.5} />
								<directionalLight position={[3, 2, 1]} />
								<Sphere args={[1, 100, 200]} scale={1.4}>
									<MeshDistortMaterial
										color='hsl(247.82608695652172, 89.14728682170544%, 25.294117647058822%)'
										attach='material'
										distort={0.5}
										speed={2}
									/>
								</Sphere>
								<OrbitControls enableZoom={false} autoRotate />
							</Suspense>
						</Canvas>
					</Model>
					<Img src='./img/moon.png'></Img>
				</Right>
			</Container>
		</Section>
	);
};

export default Hero;
