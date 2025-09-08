import React from 'react'
import Footer from "./Footer";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Divcard from './Divcard';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Divcard />
			<Footer />
		</div>
	);
};


export default Home;