import styled from "styled-components";

export const LinkDisplayContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Link = styled.p`
	padding: 0.7rem 2rem;
	width: 100%;
	text-align: center;
	background-color: #fff;
	color: #333;
	border-radius: 0.5rem;
	font-weight: 500;
	transition: 0.3s ease-in;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
`;

export const Title = styled.h1`
	font-size: 1.6rem;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;

	@media screen and (max-width: 700px) {
		font-size: 1.4rem;
	}
`;

export const HistoryButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 0.5rem;
	background-color: #21ad73;
	color: #eee;
	border: none;
	outline: none;
	margin-top: 1rem;
	font-size: 1rem;
	cursor: pointer;
	min-width: 150px;

	&:hover {
		background-color: #1e9664;
	}
`;
