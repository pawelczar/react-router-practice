import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
	{ id: 'q1', author: 'Pawel', text: 'Learning React is fun!' },
	{ id: 'q2', author: 'Einstain', text: 'Two things are infinite: the universe and human stupidity' },
	{ id: 'q3', author: 'Paul', text: 'Learning front-end is awsome!' },
];

const QuoteDetails = () => {
	const param = useParams();
	const quote = DUMMY_DATA.find((elem) => elem.id === param.idQuote);

	if (!quote) {
		return <p>No qoute found!</p>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${param.idQuote}/comments`}>
				<Comments />
			</Route>
		</>
	);
};
export default QuoteDetails;
