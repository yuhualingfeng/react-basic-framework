import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRedirect,browserHistory,Link} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducers'
import Main from './components/Main'

import "bootstrap/dist/css/bootstrap.css"


$(function(){
class Demo extends React.Component{
	constructor(props){
		super(props);

	}
	componentDidMount(){
		fetch('/package.json')
		  .then(function(response) {
		    return response.json()
		  }).then(function(json) {
		    console.log('parsed json', json)
		  }).catch(function(ex) {
		    console.log('parsing failed', ex)
		  })
	}
	render(){
		return(
			<div>
			my demo12dddsssd12 {util['name']}
			<Link to="/demo1">demo1</Link>
			</div>
			);
	}
}
class Demo1 extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
				my demo1{util['name']}
				<Link to="/demo">demo</Link>
			</div>
			);
	}
}

let store = createStore(reducer);

// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../redux/reducers', () => {
//       const nextRootReducer = require('../redux/reducers');
//       store.replaceReducer(nextRootReducer);
//     });
// }

class App extends React.Component{
	render(){
		return (
				<Provider store={store}>
					<Router history={hashHistory}>
						<Route path='/' component={Main}>
							<IndexRedirect to='/demo'/>
							<Route path='demo' component={Demo}></Route>
							<Route path='demo1' component={Demo1}></Route>

						</Route>
					</Router>
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







