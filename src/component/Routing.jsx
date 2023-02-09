/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./login/SignIn";
import Policy from "./Policy/Policy";

const Routing = () => {
	return (
		
		
		<Routes>
			<Route path='/auth' element={<SignIn />} />
			<Route path='/policy' element={<Policy />} />
			<Route path='/login/hr' element={< SignIn/>} />
			<Route path='/login/Recruiter' element={< SignIn/>} />
			<Route path='/login/employee' element={< SignIn/>} />
		</Routes>
	
	);
};


export default Routing;
