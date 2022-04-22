// Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Styles
import { LinkDisplayContainer, Link, Title, HistoryButton } from "./LinkDisplay.styles";

const LinkDisplay = ({ link }) => {
	const navigate = useNavigate();

	const copyLinkHandler = () => {
		navigator.clipboard.writeText(link);
		Swal.fire({
			text: "Link berhasil dicopy, tinggal dishare!",
			confirmButtonText: "Oke"
		});
	};

	return (
		<LinkDisplayContainer>
			<Title>KLIK UNTUK COPY LINK</Title>
			<Link onClick={copyLinkHandler}>{link}</Link>
			<HistoryButton onClick={() => navigate("/history")}>Cek Histori</HistoryButton>
		</LinkDisplayContainer>
	);
};

export default LinkDisplay;
