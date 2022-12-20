import { Route, Redirect, Switch } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import QuoteDetails from './components/pages/QuoteDetails';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/quotes" />
				</Route>
				<Route path="/quotes" exact>
					<AllQuotes />
				</Route>
				<Route path="/quotes/:idQoute">
					<QuoteDetails />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
