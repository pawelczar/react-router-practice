import { useParams } from 'react-router-dom';

const QuoteDetails = () => {
	const param = useParams();
	return <h1>Quote Details Page {param.idQoute}</h1>;
};

export default QuoteDetails;
