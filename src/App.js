import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";
import About from "./component/pages/about";
import AddUser from "./component/pages/AddUser";
import Contact from "./component/pages/contact";
import Home from "./component/pages/home";
import Edit from "./component/pages/Edit";
import Login1 from "./component/Login/Login1";
import Hr from "./component/pages/Hr";
import AllEmployee from "./component/employee/allemployee";
import EmployeePanel from "./component/employee/employeepanel";
import Sidebar from "./component/layout/Sidebar";

const App = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/adduser" element={<AddUser />} />
				<Route path="/edit/:id" element={<Edit />} />
				<Route path="/login" element={<Login1 />} />
				<Route path="/hr" element={<Hr />} />
				<Route path="/allemployee" element={<AllEmployee />} />
				<Route path="/employeepanel" element={<EmployeePanel />} />
				<Route path="/sidebar" element={<Sidebar />} />
			</Routes>
		</>
	);
};

export default App;
