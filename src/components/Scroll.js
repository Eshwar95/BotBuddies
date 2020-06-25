import React from 'react';

const Scroll = (props) =>{
	return(
		<div style= {{ overflowY: 'scroll' , border: '1px transparent', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;