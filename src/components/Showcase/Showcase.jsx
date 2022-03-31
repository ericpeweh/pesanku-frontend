import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShowcaseContainer, Emot } from "./Showcase.styles";
import emoticons from "../../utils/emoticons";

const Showcase = () => {
	const [messages, setMessages] = useState(null);
	const [emot, setEmot] = useState("");
	const [done, setDone] = useState(false);
	const { msgId } = useParams();

	useEffect(() => {
		const fetchMessage = async () => {
			try {
				const res = await axios.get(`https://pesanku-backend.herokuapp.com/${msgId}`);

				if (res.status === 200) {
					setMessages(res.data.messages);
					setEmot(res.data.emot);
				}
			} catch (err) {
				console.error(err.message);
			}
		};

		fetchMessage();
	}, [msgId]);

	useEffect(() => {
		if (messages) {
			messages.forEach(msg => {
				window.alert(msg);
			});
			setDone(true);
		}
	}, [messages]);

	return (
		<ShowcaseContainer>
			{done && emot && <Emot src={emoticons.find(item => item.name === emot).img} />}
		</ShowcaseContainer>
	);
};

export default Showcase;
