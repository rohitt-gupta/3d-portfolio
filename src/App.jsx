import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import styled from "styled-components";

const Container = styled.div`
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
		</Container>
	);
};

export default App;
