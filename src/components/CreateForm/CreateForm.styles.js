import styled from "styled-components";

export const FormContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem;
	margin: auto;
	margin-bottom: 5rem;

	@media screen and (min-width: 950px) {
		width: 90%;
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

export const Logo = styled.img`
	margin: 2rem auto 2rem;
	width: 200px;
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-radius: 0.5rem;
	background-color: rgba(0, 0, 0, 0.15);
	flex: 1;
	position: relative;

	@media screen and (max-width: 950px) {
		flex-direction: column;
	}

	&::after {
		content: "";
		z-index: 200;
		position: absolute;
		height: 100%;
		width: 3px;
		background-color: #f2f2f2;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		@media screen and (max-width: 950px) {
			display: none;
		}
	}
`;

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 1rem;
	width: 100%;
`;

export const SubmitButton = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 0.5rem;
	background-color: #27c281;
	color: #eee;
	border: none;
	outline: none;
	width: 100%;
	margin-top: 1rem;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: #1e9664;
	}

	&:disabled {
		background-color: #d6d6d6;
		color: #333;
	}
`;

export const SideTitle = styled.h2`
	text-align: center;
	font-weight: 600;
	font-size: 1.4rem;
`;
