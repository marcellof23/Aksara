import React, { useState, useEffect } from "react";
import Axios from "axios";
import parse from "html-react-parser";
import "./style.scss";

export default function Cerita(props) {
	const [fullStory, setFullStory] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const storyHtml = await Axios.get(
					`${process.env.REACT_APP_URL}/cerita`,
					{ params: { cerita: props.location.state.fileParams } }
				);
				setFullStory(storyHtml.data);
			} catch (err) {
				console.log(err);
			}
		})();
	});
	return (
		<div className="container-cerita">
			{fullStory && <div className="cerita-full">{parse(fullStory)}</div>}
		</div>
	);
}
