import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShowcaseContainer, Emot, Image } from "./Showcase.styles";
import emoticons from "../../utils/emoticons";
import Swal from "sweetalert2";

const Showcase = () => {
	const [counter, setCounter] = useState("idle");
	const [messages, setMessages] = useState(null);
	const [emot, setEmot] = useState("");
	const [image, setImage] = useState(null);
	const [done, setDone] = useState(false);
	const [sender, setSender] = useState("");
	const { msgId } = useParams();

	useEffect(() => {
		const fetchMessage = async () => {
			try {
				// const res = await axios.get(`http://localhost:5000/${msgId}`);
				const res = await axios.get(`https://pesanku-backend.herokuapp.com/${msgId}`);

				if (res.status === 200) {
					setMessages(res.data.messages);
					setEmot(res.data.emot);
					setImage(res.data?.image);
					setSender(res.data.sender);
				}
			} catch (err) {
				console.error(err.message);
			}
		};

		fetchMessage();
	}, [msgId]);

	useEffect(() => {
		if (messages) {
			setCounter(0);
		}
	}, [messages]);

	useEffect(() => {
		if (counter !== "idle") {
			Swal.fire({
				text: messages[counter],
				confirmButtonText: "Oke"
			}).then(res => {
				if (res.isConfirmed) {
					if (counter === messages.length - 1) setDone(true);
					setCounter(prev => {
						if (prev === messages.length - 1) return prev;
						return prev + 1;
					});
				}
			});
		}
	}, [counter, messages]);

	return (
		<ShowcaseContainer>
			{sender && (
				<p>
					Dari: <b>{sender}</b>
				</p>
			)}
			{done && image && <Image src={image} alt="gambar pesan" />}
			{!image && done && emot && <Emot src={emoticons.find(item => item.name === emot).img} />}
		</ShowcaseContainer>
	);
};

export default Showcase;
