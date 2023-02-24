import Link from 'next/link';
import React from 'react';

function Post({
	id,
	username,
	profileImg,
	image,
	description,
	body,
	title,
	niche,
	name,
	timestamp,
}) {
	return (
		<div
			style={{
				padding: '18px 20px 18px 20px',
				backgroundColor: '#fff',
				margin: '6px 0px',
				borderBottomColor: '#E6E6E6',
				borderBottomWidth: '.5px',
			}}
		>
			{/* Header  */}
			<div
				style={{
					// borderRightColor: '#808080',
					// borderRightWidth: '3px',
					// paddingRight: '10px',
					color: '#151A21',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			></div>
			{/* Body */}
			<Link
				href={{
					pathname: `/`,
				}}
			>
				<div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<img
							src={profileImg}
							alt=""
							style={{
								height: '20px',
								width: '20px',
								borderRadius: '50%',
								objectFit: 'contain',
							}}
						/>
						<p
							style={{
								fontSize: '11px',
								paddingLeft: '5px',
							}}
						>
							<span style={{ fontWeight: 'bold' }}>
								{name}
							</span>{' '}
							{/* from{' '}
						<span style={{ fontWeight: 'bold' }}>
							Clever Programmer
						</span> */}
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '80%' }}>
							<div style={{ paddingTop: '10px' }}>
								<p
									style={{
										color: '#0B0E11',
										fontWeight: 'bold',
									}}
									className="text-lg md:text-2xl"
								>
									{title}
								</p>
								<p
									style={{
										color: '#0B0E11',
									}}
									className="text-xs md:text-md md:pt-3"
								>
									{description.substr(0, 150)}...
								</p>
							</div>
							<div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
									className="pt-2 md:pt-5"
								>
									<p
										style={{
											fontSize: '11px',
											color: '#0B0E11',
											paddingTop: '5px',
											fontWeight: 'bold',
										}}
									>
										{timestamp.toDate().toDateString()}
									</p>
									<p
										style={{
											fontSize: '9px',
											color: '#0B0E11',
											paddingTop: '5px',
											textTransform: 'capitalize',
											borderRadius: '5px',
											fontWeight: 'bold',
										}}
										className="bg-gray-300 px-2 mr-2 pb-1"
									>
										{niche}
									</p>
								</div>
							</div>
						</div>

						<div
							style={{
								height: '120px',
								width: '40%',
							}}
							className="md:hidden"
						>
							<img
								src={image}
								alt=""
								style={{
									height: '100%',
									width: '100%',
									marginLeft: '5px',
									objectFit: 'cover',
									borderRadius: '5px',
								}}
							/>
						</div>
						<div
							style={{
								height: '160px',
								width: '35%',
							}}
							className="hidden md:block"
						>
							<img
								src={image}
								alt=""
								style={{
									height: '100%',
									width: '100%',
									marginLeft: '5px',
									objectFit: 'cover',
									borderRadius: '5px',
								}}
							/>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Post;
