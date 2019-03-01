import {Route, BrowserRouter,HashRouter,Switch,Redirect,Link} from 'react-router-dom'
import Loading from './common/Loading';
import Loadable from 'react-loadable';

const Demo = Loadable({loader: () => import(/* webpackChunkName: "Demo" */'./Demo'),loading: Loading});
const Demo1 = Loadable({loader: () => import(/* webpackChunkName: "Demo1" */'./Demo1'),loading: Loading});


class Main extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let {i18nObj:i18n} = this.props.i18n;
		return (
		<div>
			main{i18n[1]}{util.name}
			<div>
				<Switch>
					<Route path='/demo' component={Demo}></Route>
					<Route path='/demo1' component={Demo1}></Route>
					<Redirect path="/*" to="/demo" />
				</Switch>
			</div>
		</div>
		)
	}
}




let mapStateToProps = (state,ownProps)=>{
	return {
		i18n:state.i18n
	}
}

export default ReactRedux.connect(mapStateToProps)(Main)