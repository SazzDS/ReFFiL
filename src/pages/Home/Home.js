import React, {Component} from 'react';
import './Home.css';
import Hero from '../../globalComponents/Hero/js/Hero';
import Banner from '../../globalComponents/Banner/js/Banner';
import {Link} from 'react-router-dom';
import axios, { post } from 'axios';
import {useDropzone} from 'react-dropzone';

// class Home extends Component {
const Home = (props) => {
		const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
			getFilesFromEvent: event => myCustomFileGetter(event)
		});

		const files = acceptedFiles.map(f => (
			<li key={f.name}>
				{f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
			</li>
		));

		return (
			<section className="container">
				<Hero hero="roomsHero">
					<Banner title="Home Page" subtitle="This is Home Page">
						<Link to="/Documentation/Introduction"><button className="btn btn-primary">Explore Documentation</button></Link>
						&nbsp;
						<Link to="/about"><button className="btn btn-primary">Explore About Us</button></Link>
					</Banner>
				</Hero>
				Hello from Home Pages

				<div {...getRootProps({className: 'dropzone'})}>
					<input name="file" {...getInputProps()} />
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
				<aside>
					<h4>Files</h4>
					<ul>{files}</ul>
				</aside>
			</section>
		)
}

	async function myCustomFileGetter(event) {
		const files = [];
		const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
		for (var i = 0; i < fileList.length; i++) {
			const file = fileList.item(i);
			Object.defineProperty(file, 'myProp', {
				value: true
			});
			files.push(file);
		}
		return files;
	}

export default Home