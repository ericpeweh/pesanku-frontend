import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateForm from "./components/CreateForm/CreateForm";
import Showcase from "./components/Showcase/Showcase";
import History from "./components/History/History";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="create" replace />} />
				<Route path="/create" element={<CreateForm />} />
				<Route path="/history" element={<History />} />
				<Route path="/:msgId" element={<Showcase />} />
			</Routes>
		</div>
	);
};

export default App;
