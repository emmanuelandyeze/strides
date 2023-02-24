import { useRouter } from 'next/router';
import React from 'react';

function pid() {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			<p>Post: {id}</p>
		</div>
	);
}

export default pid;
