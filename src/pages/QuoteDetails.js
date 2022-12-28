import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
	const param = useParams();
	return (
		<>
			<h1>Quote Details Page</h1>
			<p>{param.idQuote}</p>
			<Route path={`/quotes/${param.idQuote}/comments`}>
				<Comments />
			</Route>
		</>
	);
};
export default QuoteDetails;
