import {render} from 'react-dom'
import {Route, BrowserRouter,HashRouter,Switch,Redirect,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducers'
import Main from './components/Main'

import 'bootstrap/dist/css/bootstrap.min.css';


$(function(){


let store = createStore(reducer);

// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../redux/reducers', () => {
//       const nextRootReducer = require('../redux/reducers');
//       store.replaceReducer(nextRootReducer);
//     });
// }

const Routes = (<div>
	<Switch>
		<Route path='/' component={Main}></Route>
	</Switch>
</div>);

class App extends React.Component{

	render(){
		return (
				<Provider store={store}>
					<HashRouter>{Routes}</HashRouter>
				</Provider>
			);
	}
}

render(
<App></App>
	,document.getElementById('root'));

});

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept();
}







