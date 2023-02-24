import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import {
	onSnapshot,
	query,
	orderBy,
	collection,
} from '@firebase/firestore';
import { db, storage } from '../firebase';

//

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'posts'),
					orderBy('timestamp', 'desc'),
				),
				(snapshot) => {
					setPosts(snapshot.docs);
				},
			),
		[db],
	);

	console.log(posts);

	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.data().username}
					profileImg={post.data().profileImg}
					description={post.data().description}
					body={post.data().body}
					title={post.data().title}
					image={post.data().image}
					niche={post.data().niche.name}
					name={post.data().name}
					timestamp={post.data().timestamp}
				/>
			))}
		</div>
	);
}

export default Posts;
