import styled from "styled-components";

export const FormContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem;
	margin: auto;

	@media screen and (min-width: 900px) {
		width: 60%;
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	text-transform: uppercase;

	@media screen and (max-width: 700px) {
		font-size: 1.4rem;
	}
`;

export const Link = styled.p`
	padding: 0.7rem 1rem;
	width: 100%;
	text-align: center;
	background-color: #ddd;
	color: #333;
	transition: 0.3s ease-in;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.15);
	padding: 1rem 0.5rem;
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-radius: 5px;
	margin-bottom: 1rem;
	background-color: rgba(0, 0, 0, 0.15);
	padding: 1rem 0.5rem;
`;

export const AddButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 5px;
	background-color: #e21d6f;
	color: #eee;
	border: none;
	outline: none;
	margin-top: 0.7rem;
	width: 80%;
	font-size: 1.1rem;
	cursor: pointer;
`;

export const SubmitButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 5px;
	background-color: #1de290;
	color: #333;
	border: none;
	outline: none;
	margin-top: 0.7rem;
	width: 80%;
	font-size: 1.1rem;
	cursor: pointer;

	&:disabled {
		background-color: #d6d6d6;
		color: #333;
	}
`;

export const ResetButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 5px;
	background-color: #bd0000;
	color: #eee;
	border: none;
	outline: none;
	margin-top: 0.7rem;
	width: 80%;
	font-size: 1.1rem;
	cursor: pointer;
`;

export const TextInput = styled.input`
	width: 100%;
	border: none;
	outline: 1px solid #888;
	border-radius: 5px;
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
`;

export const Result = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 1rem;
	background-color: rgba(0, 0, 0, 0.15);
	padding: 1rem 0.5rem;
`;

export const ResultItem = styled.p`
	width: 100%;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	background: #fff;
	outline: 1px solid #888;
	margin-bottom: 0.1rem;
`;

export const Text = styled.p`
	font-size: 1.3rem;
`;

export const EmotSelector = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Emot = styled.img`
	flex: 1;
	object-fit: cover;
	width: 5rem;
	border-radius: 5px;
	border: 1px solid #333;
	margin: 0.2rem;
	cursor: pointer;
`;
