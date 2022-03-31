import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateForm from "./components/CreateForm/CreateForm";
import Showcase from "./components/Showcase/Showcase";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="create" replace />} />
				<Route path="/:msgId" element={<Showcase />} />
				<Route path="/create" element={<CreateForm />} />
			</Routes>
		</div>
	);
};

export default App;
