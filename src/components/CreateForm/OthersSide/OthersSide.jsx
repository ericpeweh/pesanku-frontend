// Dependencies
import React from "react";

// Styles
import {
	Emot,
	EmotSelector,
	FileInputContainer,
	FileName,
	Label,
	OthersSideContainer,
	Subtitle,
	TextInput,
	UploadImageButton
} from "./OthersSide.styles";

// Utils
import emoticons from "../../../utils/emoticons";

// Components
import Divider from "../../../components/Divider/Divider";

const OthersSide = ({ selectedEmot, setEmoticons, setSender, setImage, sender, image }) => {
	const senderChangeHandler = e => {
		setSender(e.target.value);
	};

	const imageUploadHandler = e => {
		setImage(e.target.files[0]);
	};

	return (
		<OthersSideContainer>
			<Subtitle>Pilih Gambar</Subtitle>
			<Divider />
			{!image && (
				<>
					<EmotSelector>
						{emoticons.map(item => (
							<Emot
								key={item.name}
								onClick={() => setEmoticons(item.name)}
								src={item.img}
								style={{ backgroundColor: selectedEmot === item.name ? "#555" : "transparent" }}
							></Emot>
						))}
					</EmotSelector>
					<Subtitle>Atau</Subtitle>
				</>
			)}
			<FileInputContainer>
				<Label htmlFor="image">Upload Gambar</Label>
				<UploadImageButton
					id="image"
					type="file"
					accept="image/jpeg, image/png"
					onChange={imageUploadHandler}
				/>
			</FileInputContainer>
			{image && (
				<FileName>
					Gambar terupload: <b>{image.name}</b>
				</FileName>
			)}
			<Divider />
			<TextInput
				placeholder="Nama pengirim, kosongkan untuk anon"
				value={sender}
				onChange={senderChangeHandler}
			/>
		</OthersSideContainer>
	);
};

export default OthersSide;
