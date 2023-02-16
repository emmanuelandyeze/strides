import React from 'react';

function Post({
	id,
	username,
	userImg,
	img,
	caption,
	body,
	title,
	niche
}) {
	return (
		<div
			style={{
				padding: '18px 20px 18px 20px',
				backgroundColor: '#fff',
				margin: '6px 0px',
				borderBottomColor: '#808080',
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
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div style={{ width: '80%' }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<img
								src={userImg}
								alt=""
								style={{
									height: '20px',
									width: '20px',
									borderRadius: '20%',
								}}
							/>
							<p
								style={{
									fontSize: '11px',
									paddingLeft: '5px',
								}}
							>
								<span style={{ fontWeight: 'bold' }}>
									{username}
								</span>{' '}
								from{' '}
								<span style={{ fontWeight: 'bold' }}>
									Clever Programmer
								</span>
							</p>
						</div>
						<div style={{ paddingTop: '10px' }}>
							<p
								style={{
									fontSize: '16px',
									color: '#0B0E11',
									fontWeight: 'bold',
								}}
							>
								{title}
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
							>
								<p
									style={{
										fontSize: '11px',
										color: '#0B0E11',
										paddingTop: '5px',
									}}
								>
									January 3, 2023
								</p>
								<p
									style={{
										fontSize: '9px',
										color: '#0B0E11',
										paddingTop: '5px',
										textTransform: 'capitalize',
										borderRadius: '5px',
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
							height: '105px',
							width: '40%',
						}}
					>
						<img
							src={img}
							alt=""
							style={{
								height: '100%',
								width: '100%',
								marginLeft: '5px',
								objectFit: 'cover',
								borderRadius: '5px'
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
