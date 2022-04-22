// Dependencies
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Styles
import {
	FormContainer,
	SubmitButton,
	Container,
	Logo,
	RowContainer,
	SideTitle,
	HistoryButton
} from "./CreateForm.styles";

// Images
import logoSrc from "../../assets/logo.png";

// Components
import LinkDisplay from "./LinkDisplay/LinkDisplay";
import MessageSide from "./MessageSide/MessageSide";
import OthersSide from "./OthersSide/OthersSide";

const CreateForm = () => {
	const navigate = useNavigate();
	const [link, setLink] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [selectedEmot, setSelectedEmot] = useState("cry");
	const [messages, setMessages] = useState([]);
	const [image, setImage] = useState(null);
	const [sender, setSender] = useState("");

	const submitHandler = async () => {
		try {
			setIsLoading(true);

			const formData = new FormData();
			for (const msg of messages) {
				formData.append("messages[]", msg);
			}
			formData.append("sender", sender);
			formData.append("image", image);
			formData.append("emot", selectedEmot);

			const res = await axios.post("https://pesanku-backend.herokuapp.com/create", formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});
			// const res = await axios.post("http://localhost:5000/create", formData, {
			// 	headers: {
			// 		"Content-Type": "multipart/form-data"
			// 	}
			// });
			setIsLoading(false);

			if (res.status === 200) {
				localStorage.setItem(`pesan_${res.data.link}`, res.data.link);
				setLink(res.data.link);
			}
		} catch (e) {
			setIsLoading(false);
			console.log(e);
		}
	};

	return (
		<FormContainer>
			<Logo src={logoSrc}></Logo>
			{link && (
				<Container>
					<LinkDisplay link={link} />
				</Container>
			)}
			{!link && (
				<RowContainer>
					<Container>
						<SideTitle>Konfigurasi Pesan</SideTitle>
						<MessageSide messages={messages} setMessages={setMessages} />
					</Container>
					<Container>
						<SideTitle>Konfigurasi Lainnya</SideTitle>
						<OthersSide
							sender={sender}
							image={image}
							selectedEmot={selectedEmot}
							setEmoticons={setSelectedEmot}
							setSender={setSender}
							setImage={setImage}
						/>
						<SubmitButton disabled={isLoading || messages.length === 0} onClick={submitHandler}>
							{isLoading ? "Membuat Pesan..." : "Buat Pesan"}
						</SubmitButton>
					</Container>
				</RowContainer>
			)}
			{!link && <HistoryButton onClick={() => navigate("/history")}>Cek Histori</HistoryButton>}
		</FormContainer>
	);
};

export default CreateForm;
