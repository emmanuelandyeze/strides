import React from 'react';
import Post from '../components/Post';

const posts = [
	{
		id: '123',
		niche: 'technology',
		username: 'Chexy Emma',
		title: 'Building the future of tech from scraps',
		userImg:
			'https://media.licdn.com/dms/image/C4D03AQGuy72wZVoeWQ/profile-displayphoto-shrink_800_800/0/1657031882849?e=2147483647&v=beta&t=X5pmUNGvPAbDPHhonqvN8WCIL8ZS-UeeCZWDsMzz508',
		img: 'https://war-relics.com/wp-content/uploads/2021/04/DSC01004-1-530x352.jpg',
		caption:
			'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks.',
		body: 'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks. A comma is a deadly weapon, just as dangerous as a semi-colon, especially when positioned wrongly in a document.',
	},
	{
		id: '1234',
		niche: 'business',
		username: 'Emmanuel Eze',
		title:
			'How I’ve Made $280k Selling Spreadsheets on Etsy',
		userImg:
			'https://media.licdn.com/dms/image/C4D03AQGuy72wZVoeWQ/profile-displayphoto-shrink_800_800/0/1657031882849?e=2147483647&v=beta&t=X5pmUNGvPAbDPHhonqvN8WCIL8ZS-UeeCZWDsMzz508',
		img: 'https://ksr-ugc.imgix.net/assets/000/166/494/2464a955a414f94a3b3bfaeaa536eb08_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1348000928&auto=format&gif-q=50&q=92&s=b19eed4173c56be3016ed3a9d42c33f9',
		caption:
			'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks.',
		body: 'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks. A comma is a deadly weapon, just as dangerous as a semi-colon, especially when positioned wrongly in a document.',
	},
	{
		id: '123456',
		niche: 'business',
		username: 'Andreas Eze',
		title:
			'How I made ~5$ per day — in Passive Income (with an android app)',
		userImg:
			'https://media.licdn.com/dms/image/C4D03AQGuy72wZVoeWQ/profile-displayphoto-shrink_800_800/0/1657031882849?e=2147483647&v=beta&t=X5pmUNGvPAbDPHhonqvN8WCIL8ZS-UeeCZWDsMzz508',
		img: 'https://th.bing.com/th/id/OIP.zkoPgd2DvuBFoWctDNELoAHaEK?pid=ImgDet&rs=1',
		caption:
			'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks.',
		body: 'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks. A comma is a deadly weapon, just as dangerous as a semi-colon, especially when positioned wrongly in a document.',
	},
	{
		id: '1234567',
		niche: 'self-development',
		username: 'Andreas Eze',
		title:
			'4 Unsexy One-Minute Habits That Save Me 30+ Hours Every Week',
		userImg:
			'https://media.licdn.com/dms/image/C4D03AQGuy72wZVoeWQ/profile-displayphoto-shrink_800_800/0/1657031882849?e=2147483647&v=beta&t=X5pmUNGvPAbDPHhonqvN8WCIL8ZS-UeeCZWDsMzz508',
		img: 'https://i.pinimg.com/originals/72/ea/f8/72eaf8776af8e563de11ce9aede5c1e6.jpg',
		caption:
			'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks.',
		body: 'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks. A comma is a deadly weapon, just as dangerous as a semi-colon, especially when positioned wrongly in a document.',
	},
	{
		id: '12345',
		niche: 'programming',
		username: 'Andreas Eze',
		title:
			'Why you will not make money with ChatGPT (written by ChatGPT)',
		userImg:
			'https://media.licdn.com/dms/image/C4D03AQGuy72wZVoeWQ/profile-displayphoto-shrink_800_800/0/1657031882849?e=2147483647&v=beta&t=X5pmUNGvPAbDPHhonqvN8WCIL8ZS-UeeCZWDsMzz508',
		img: 'https://i.ebayimg.com/images/g/6j4AAOSwygJXgndb/s-l640.jpg',
		caption:
			'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks.',
		body: 'I can readily recollect how insufferable we were as students in secondary school. My then English teacher, Mr Olukoya, would often be seen with his veins popping at the side of his neck almost as though they were looking for a means of escape, all in a bid to make us pronounce our words properly and better appreciate the use of punctuation marks. A comma is a deadly weapon, just as dangerous as a semi-colon, especially when positioned wrongly in a document.',
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					caption={post.caption}
					body={post.body}
					title={post.title}
					img={post.img}
					niche={post.niche}
				/>
			))}
		</div>
	);
}

export default Posts;
