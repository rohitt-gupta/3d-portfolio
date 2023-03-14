import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";

const data = [
	"Web Design",
	"Development",
	"Illustration",
	"Product Design",
	"Social Media",
];

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
	color: black;
	font-size: 14px;
	font-weight: 300;
`;

const Container = styled.div`
	width: 1300px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 400px;
		flex-direction: column;
		position: relative;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 768px) {
		text-align: center;
		position: absolute;
		left: -70px;
		top: 30px;
	}
	/* background-color: purple; */
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ListItem = styled.li`
	font-size: 68px;
	font-weight: bold;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px white;
	position: relative;
	font-family: sans-serif;
	width: 100%;
	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0;
		z-index: 1;

		::after {
			display: none;
		}

		&:hover {
			color: pink;
		}
	}

	::after {
		content: "${(props) => props.text}";
		position: absolute;
		top: 0;
		left: 0;
		color: pink;
		width: 0px;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		::after {
			animation: moveText 0.5s linear both;

			@keyframes moveText {
				to {
					width: 100%;
				}
			}
		}
	}
`;

const Right = styled.div`
	flex: 1;
	position: relative;

	/* @media only screen and (max-width: 768px) {
		position: relative;
	} */
`;

// const Model = styled.div`
// 	@media only screen and (max-width: 768px) {
// 		width: 300px;
// 		height: 300px;
// 		position: absolute;
// 		left: -85px;
// 		bottom: 40px;
// 	}
// `;

const Works = () => {
	const [work, setWork] = useState("Web Design");
	console.log("helloWork", work);
	return (
		<Section>
			<Container>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem key={item} text={item} onClick={() => setWork(item)}>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>
					{work === "Web Design" ? (
						<WebDesign />
					) : work === "Development" ? (
						<Development />
					) : (
						<ProductDesign />
					)}
				</Right>
			</Container>
		</Section>
	);
};

export default Works;
