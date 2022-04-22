import styled from "styled-components";

export const HistoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	width: 60%;
	min-height: 80vh;
	margin: 0 auto;
	margin-top: 2rem;
	background-color: #f3f3f3;
	border: 2px solid #e21d6f;
	border-radius: 0.5rem;

	@media screen and (min-width: 950px) {
		width: 90%;
	}
`;

export const HistoryItem = styled.div`
	width: 100%;
	padding: 1rem;
	font-size: 1.2rem;
	border-radius: 0.5rem;
	background-color: #f3f3f3;
	color: #222;
	border-radius: 0.5rem;
	border: 1px solid #333;
	margin-bottom: 0.7rem;
	cursor: pointer;

	&:hover {
		border: 1px solid #e21d6f;
	}
`;

export const BackButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 0.5rem;
	background-color: #21ad73;
	color: #eee;
	border: none;
	outline: none;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: #1e9664;
	}
`;

export const Logo = styled.img`
	margin: 2rem auto 2rem;
	width: 200px;
`;
