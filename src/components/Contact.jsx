import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 1300px;
	height: 100%;

	display: flex;
	justify-content: space-between;
	gap: 50px;
	/* background-color: lightblue; */
	@media only screen and (max-width: 768px) {
		/* justify-content: center; */
		width: 400px;
		position: relative;
		text-align: center;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Form = styled.form`
	width: 450px;
	height: 80%;
	display: flex;
	flex-direction: column;
	gap: 25px;

	@media only screen and (max-width: 768px) {
		width: 300px;
		/* padding-left: 10px; */
		position: absolute;
		left: -100px;
	}
`;

const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;

const TextArea = styled.textarea`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	border: none;
	font-weight: bold;
	cursor: pointer;
	border-radius: 5px;
	padding: 20px;
`;

const Right = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	const ref = useRef();
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(ref.current.name);
		emailjs
			.sendForm(
				"service_eiz2t2r",
				"template_k7zf1vv",
				ref.current,
				"rg0LADzASRDVDCXk9"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};
	return (
		<Section>
			<Container>
				<Left>
					<Form ref={ref} onSubmit={handleSubmit}>
						<Title>Contact Us</Title>
						<Input placeholder='Name' name='name' />
						<Input placeholder='Email' name='email' />
						<TextArea
							rows={10}
							placeholder='Write your message'
							name='message'
						/>
						<Button type='submit'>Send</Button>
						{success &&
							"Your message has been sent. We'll get back to you soon :)"}
					</Form>
				</Left>
				<Right>
					<Map />
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
