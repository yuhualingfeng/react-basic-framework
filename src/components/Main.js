import {Route, BrowserRouter,HashRouter,Switch,Redirect,Link} from 'react-router-dom'
import Loading from './common/Loading';
import Loadable from 'react-loadable';

const Demo = Loadable({loader: () => import(/* webpackChunkName: "Demo" */'./Demo'),loading: Loading});
const Demo1 = Loadable({loader: () => import(/* webpackChunkName: "Demo1" */'./Demo1'),loading: Loading});
const Demo2 = Loadable({loader: () => import(/* webpackChunkName: "Demo2" */'./Demo2'),loading: Loading});


class Main extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
	}
	render(){
		let {i18nObj:i18n} = this.props.i18n;
		return (
		<div>
			{/*
			   main{i18n[1]}{util.name}
			 */}
			 <Link to='/demo'>demo</Link>&#12288;
			 <Link to='/demo1'>demo1</Link>&#12288;
			 <Link to='/demo2'>demo2</Link>&#12288;
			 <div style={{borderBottom:'solid',marginBottom:20,paddingBottom:20}}></div>
			<div>
				<Switch>
					<Route path='/demo' component={Demo}></Route>
					<Route path='/demo1' component={Demo1}></Route>
					<Route path='/demo2' component={Demo2}></Route>
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