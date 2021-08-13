import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home, Join } from "./pages";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/join">
					<Join />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
