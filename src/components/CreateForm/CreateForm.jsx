import React, { useState } from "react";
import {
	AddButton,
	Emot,
	EmotSelector,
	Text,
	Form,
	FormContainer,
	ResetButton,
	Result,
	ResultItem,
	SubmitButton,
	TextInput,
	Title,
	Container,
	Link
} from "./CreateForm.styles";
import axios from "axios";

import emoticons from "../../utils/emoticons";

const CreateForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [link, setLink] = useState("");
	const [textInput, setTextInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [selectedEmot, setSelectedEmot] = useState("cry");

	const textInputChangeHandler = e => {
		setTextInput(e.target.value);
	};

	const addMessageHandler = e => {
		e.preventDefault();
		if (!textInput) return;

		setTextInput("");
		setMessages(prev => [...prev, textInput]);
	};

	const resetHandler = () => {
		setMessages([]);
	};

	const emotChangeHandler = newEmot => {
		setSelectedEmot(newEmot);
	};

	const copyLinkHandler = () => {
		navigator.clipboard.writeText(link);
		alert("Link berhasil dicopy, tinggal dishare ");
	};

	const submitHandler = async () => {
		const data = {
			messages,
			emot: selectedEmot
		};

		try {
			setIsLoading(true);
			const res = await axios.post("https://pesanku-backend.herokuapp.com/create", data);
			setIsLoading(false);

			if (res.status === 200) {
				setLink(res.data.link);
			}
		} catch (e) {
			setIsLoading(false);
			console.log(e);
		}
	};

	return (
		<FormContainer>
			{link && (
				<Container>
					<Title>KLIK UNTUK COPY LINK</Title>
					<Link onClick={copyLinkHandler}>{link}</Link>
				</Container>
			)}
			{!link && (
				<>
					<Title>- Buat Pesanmu -</Title>
					<Form onSubmit={addMessageHandler}>
						<Text>MASUKKAN PESAN</Text>
						<TextInput
							placeholder="Masukkan pesan disini 1 per 1"
							onChange={textInputChangeHandler}
							value={textInput}
						/>
						<AddButton>TAMBAHKAN PESAN</AddButton>
					</Form>
					<Result>
						{messages.length === 0 && <p>Belum ada pesan.</p>}
						{messages.map((msg, i) => (
							<ResultItem key={i + msg}>
								{i + 1}. {msg}
							</ResultItem>
						))}
					</Result>
					<Container>
						<Text>PILIH GAMBAR</Text>
						<EmotSelector>
							{emoticons.map(item => (
								<Emot
									key={item.name}
									onClick={() => emotChangeHandler(item.name)}
									src={item.img}
									style={{ backgroundColor: selectedEmot === item.name ? "#222" : "transparent" }}
								></Emot>
							))}
						</EmotSelector>
					</Container>
					<ResetButton onClick={resetHandler}>!! RESET PESAN !!</ResetButton>
					<SubmitButton disabled={isLoading || messages.length === 0} onClick={submitHandler}>
						{isLoading ? "MEMBUAT..." : "SELESAI"}
					</SubmitButton>
				</>
			)}
		</FormContainer>
	);
};

export default CreateForm;
