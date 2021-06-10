import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Post from './Post';

export default function Popup() {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [postArray, setPost] = useState([]);

	const popupShow = () => {
		setIsOpen(true);
	};
	const popupHide = () => {
		setIsOpen(false);
	};
	const handelChange = (e) => {
		console.log(e.target.value);
		setTitle(e.target.value);
	};

	const handelImage = (e) => {
		console.log(e.target.value);
		setImage(e.target.value);
	};
	const addPost = () => {
		setIsOpen(false);
		const Component = postArray;
		Component.push({ title: title, image: image });
		setPost(Component);
	};

	return (
		<div>
			<button onClick={popupShow}> add a post</button>

			{postArray.map((item, i) => {
				return <Post key={i} title={item.title} img={item.image} />;
			})}
			<Modal
				isOpen={isOpen}
				onAfterOpen={false}
				onRequestClose={popupHide}
				contentLabel='Add a post'
			>
				<label>Enter the title</label>
				<input type='text' onChange={handelChange} />
				<label>Enter url</label>
				<input type='text' onChange={handelImage} />
				<button onClick={addPost}> add </button>
			</Modal>
		</div>
	);
}
