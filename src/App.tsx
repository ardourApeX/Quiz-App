import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home Page/Home";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/">
					<Home />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
