// Dependencies
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Styles
import { BackButton, HistoryContainer, HistoryItem, Logo } from "./History.styles";

// Images
import logoSrc from "../../assets/logo.png";

const getAllFromLocalStorage = () => {
	const values = [];
	const keys = Object.keys(localStorage);
	for (const key of keys) {
		if (key.includes("pesan_")) {
			values.push(localStorage.getItem(key));
		}
	}
	return values;
};

const History = () => {
	const navigate = useNavigate();
	const [history] = useState(getAllFromLocalStorage());

	const copyLinkHandler = link => {
		navigator.clipboard.writeText(link);
		Swal.fire({
			text: "Link berhasil dicopy, tinggal dishare!",
			confirmButtonText: "Oke"
		});
	};

	return (
		<HistoryContainer>
			<Logo src={logoSrc}></Logo>
			<BackButton onClick={() => navigate("/create")}>Kembali</BackButton>
			<p>Klik untuk copy</p>
			{history.length === 0 && <p>Belum ada histori.</p>}
			{history.map(item => (
				<HistoryItem onClick={() => copyLinkHandler(item)}>{item}</HistoryItem>
			))}
		</HistoryContainer>
	);
};

export default History;
