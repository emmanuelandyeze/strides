import React from 'react';

import Posts from '../components/Posts';

function Feed() {
	return (
		<main
			className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-4 xl:max-w-6xl mx-auto"
			style={{
				backgroundColor: '#fff',
				paddingTop: '3rem',
				paddingBottom: '30rem',
			}}
		>
			{/* Section */}
			{/* Posts */}
			<section className="col-span-2 pt-2">
				<Posts />
			</section>

			{/* Mini Profile */}

			{/* Suggestions */}
		</main>
	);
}

export default Feed;
