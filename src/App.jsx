import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import styled from "styled-components";
import Test from "./components/Test";

const Container = styled.div`
	padding-left: 150px;
	padding-right: 150px;
	margin: 0;
	height: 100vh;
	color: white;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	background: url("./img/bg.jpeg");
	&::-webkit-scrollbar {
		display: none;
	}
`;

const App = () => {
	return (
		<Container>
			<Hero />
			<Who />
			<Works />
			<Contact />
			{/* <Test /> */}
		</Container>
	);
};

export default App;
