import React from 'react';
import Img from './Img';

const ImgList = props => {
	const results = props.data;
	let imgs = results.map(img => <Img url={img.urls.thumb} key={img.id} limit={'5'} />);

	return (
		<div>
			{imgs}
		</div>
	);
};

export default ImgList;
