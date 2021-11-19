import "./App.css";
import { Home, Profile } from "./pages";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<div className="Parent-App">
			<div className="App">
				<Routes>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
