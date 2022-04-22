import styled from "styled-components";

export const ResultItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	border-radius: 5px;
	background: #fff;
	outline: 1px solid #e96691;
	position: relative;

	@media screen and (max-width: 950px) {
		flex-direction: column;
	}
`;

export const Message = styled.p`
	font-size: 1rem;
	padding-left: 3.2rem;
	word-wrap: break-word;
`;

export const ActionButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-right: 0.5rem;

	@media screen and (max-width: 950px) {
		margin-bottom: 0.5rem;
		justify-content: flex-end;
	}
`;

export const ActionButton = styled.div`
	border-radius: 0.5rem;
	background-color: #d9d9d9;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e96691;
	margin-left: 0.3rem;
	cursor: pointer;
	font-size: 1.3rem;

	& > svg {
		stroke-width: 2;
		outline-width: 0;

		& > path:nth-child(1) {
			display: none;
		}
	}

	&:hover {
		background-color: #d2d2d2;
	}
`;

export const NumberTag = styled.div`
	border-radius: 0.5rem;
	background-color: #e96691;
	position: absolute;
	left: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
	width: 2rem;
	height: 2rem;
	text-align: center;
	line-height: 2rem;
	color: #f3f3f3;
	font-weight: 600;

	@media screen and (max-width: 950px) {
		top: 2rem;
	}
`;
