import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
	{ id: 'q1', author: 'Pawel', text: 'Learning React is fun!' },
	{ id: 'q2', author: 'Einstain', text: 'Two things are infinite: the universe and human stupidity' },
	{ id: 'q3', author: 'Paul', text: 'Learning front-end is awsome!' },
];

const AllQuotes = () => {
	return (
		<>
			<QuoteList quotes={DUMMY_DATA} />
		</>
	);
};

export default AllQuotes;
