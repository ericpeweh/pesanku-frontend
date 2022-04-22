import styled from "styled-components";

export const OthersSideContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const EmotSelector = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;
`;

export const Emot = styled.img`
	flex: 1;
	object-fit: cover;
	width: 5rem;
	border-radius: 0.5rem;
	border: 1px solid #333;
	margin: 0.2rem;
	cursor: pointer;
`;

export const Subtitle = styled.h4`
	font-size: 1.1rem;
	font-weight: 500;
	margin: 0;
	text-align: center;
`;

export const FileInputContainer = styled.div`
	margin: 0.7rem 0rem;
	position: relative;
`;

export const FileName = styled.p`
	padding: 0.5rem 3rem;
	border-radius: 0.5rem;
	border: 1px solid #333;
`;

export const Label = styled.label`
	border-radius: 0.5rem;
	background-color: #e21d6f;
	color: #eee;
	border: none;
	outline: none;
	padding: 0.5rem 2rem;
	font-size: 1rem;
	cursor: pointer;
	margin-top: 0.5rem;
`;

export const UploadImageButton = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const TextInput = styled.input`
	width: 100%;
	border: none;
	outline: 1px solid #888;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	margin-top: 0.6rem;
`;
