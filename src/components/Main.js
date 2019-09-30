import {Route, BrowserRouter,HashRouter,Switch,Redirect,Link} from 'react-router-dom'
import Loading from './common/Loading';
import Loadable from 'react-loadable';
import EchartsDemo from './common/EchartsDemo';

const Demo = Loadable({loader: () => import(/* webpackChunkName: "Demo" */'./Demo'),loading: Loading});
// const EchartsDemo = Loadable({loader: () => import(/* webpackChunkName: "EchartsDemo" */'./common/EchartsDemo'),loading: Loading});

class Main extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
	}
	render(){
		return (
		<div>
			<div>
				<Switch>
					<Route path='/demo' component={Demo}></Route>
					<Route path="/echartsdemo" component={EchartsDemo}></Route>
					<Redirect path="/*" to="/demo" />
				</Switch>
			</div>
		</div>
		)
	}
}




const mapStateToProps = (state,ownProps)=>{
	return {
		i18n:state.i18n
	}
}

const mapDispatchToProps = (dispatch,ownProps)=>{
	return {

	};
}

export default ReactRedux.connect(mapStateToProps)(Main)