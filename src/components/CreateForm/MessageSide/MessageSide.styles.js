import styled from "styled-components";

export const MessageSideContainer = styled.div`
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	background-color: rgba(0, 0, 0, 0.15);
	padding: 1rem 0.5rem;
`;

export const Subtitle = styled.h4`
	font-size: 1.1rem;
	font-weight: 500;
	margin: 0;
	text-align: center;
`;

export const TextInput = styled.input`
	width: 100%;
	border: none;
	outline: 1px solid #888;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
`;

export const AddButton = styled.button`
	padding: 0.5rem 2rem;
	border-radius: 0.5rem;
	background-color: #e21d6f;
	color: #eee;
	border: none;
	outline: none;
	margin-top: 0.7rem;
	font-size: 1rem;
	cursor: pointer;
`;

export const Result = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
	background-color: rgba(0, 0, 0, 0.15);
	padding: 1rem 0.5rem;
	border-radius: 0.5rem;
	grid-gap: 0.3rem;
	min-height: 200px;
	position: relative;
`;

export const ResetButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 0.5rem;
	background-color: #bf2c2c;
	color: #eee;
	border: none;
	outline: none;
	width: 100%;
	margin: 0.7rem 0;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: #bd0000;
	}
`;

export const Text = styled.p`
	font-size: 1rem;
	text-align: center;
	font-weight: 500;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0;
	position: absolute;
`;
