// Dependencies
import React, { useState } from "react";

// Components
import ResultItem from "./ResultItem/ResultItem";
import Divider from "../../Divider/Divider";

// Styles
import {
	MessageSideContainer,
	AddButton,
	Form,
	Result,
	TextInput,
	ResetButton,
	Text,
	Subtitle
} from "./MessageSide.styles";

const MessageSide = ({ messages, setMessages }) => {
	const [textInput, setTextInput] = useState("");

	const resetHandler = () => {
		setMessages([]);
	};

	const textInputChangeHandler = e => {
		setTextInput(e.target.value);
	};

	const addMessageHandler = e => {
		e.preventDefault();
		if (!textInput) return;

		setTextInput("");
		setMessages(prev => [...prev, textInput]);
	};

	const deleteMessageHandler = msgIndex => {
		setMessages(prev => prev.filter((msg, i) => i !== msgIndex));
	};

	const upMessageHandler = msgIndex => {
		if (msgIndex === 0) return;

		setMessages(prev => {
			const oldMsg = [...prev][msgIndex - 1];
			const currentMsg = [...prev][msgIndex];
			return [...prev.slice(0, msgIndex - 1), currentMsg, oldMsg, ...prev.slice(msgIndex + 1)];
		});
	};

	const downMessageHandler = msgIndex => {
		setMessages(prev => {
			if (msgIndex === prev.length - 1) return prev;

			const oldMsg = [...prev][msgIndex + 1];
			const currentMsg = [...prev][msgIndex];
			return [...prev.slice(0, msgIndex), oldMsg, currentMsg, ...prev.slice(msgIndex + 2)];
		});
	};

	return (
		<MessageSideContainer>
			<Subtitle>Masukkan Pesan</Subtitle>
			<Divider />
			<Form onSubmit={addMessageHandler}>
				<TextInput
					placeholder="Isi pesan 1 per 1"
					onChange={textInputChangeHandler}
					value={textInput}
				/>
				<AddButton>Tambahkan Pesan</AddButton>
			</Form>
			<Result>
				{messages.length === 0 && <Text>Belum ada pesan.</Text>}
				{messages.map((msg, i) => (
					<ResultItem
						key={i + msg}
						message={msg}
						i={i}
						onDelete={deleteMessageHandler}
						onUp={upMessageHandler}
						onDown={downMessageHandler}
					/>
				))}
			</Result>

			<ResetButton onClick={resetHandler}>Reset Pesan</ResetButton>
		</MessageSideContainer>
	);
};

export default MessageSide;
