// Dependencies
import React from "react";

// Styles
import {
	ResultItemContainer,
	ActionButton,
	NumberTag,
	Message,
	ActionButtonsContainer
} from "./ResultItem.styles";

// Icons
import { MdClose, MdArrowDownward, MdArrowUpward } from "react-icons/md";

const ResultItem = ({ message, i, onDelete, onUp, onDown }) => {
	return (
		<ResultItemContainer>
			<NumberTag>{i + 1}</NumberTag>
			<Message>{message}</Message>
			<ActionButtonsContainer>
				<ActionButton onClick={() => onUp(i)}>
					<MdArrowUpward fontWeight={600} />
				</ActionButton>
				<ActionButton onClick={() => onDown(i)}>
					<MdArrowDownward />
				</ActionButton>
				<ActionButton onClick={() => onDelete(i)}>
					<MdClose />
				</ActionButton>
			</ActionButtonsContainer>
		</ResultItemContainer>
	);
};

export default ResultItem;
