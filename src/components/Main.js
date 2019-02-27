import {Route, BrowserRouter,HashRouter,Switch,Redirect,Link} from 'react-router-dom'
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
			my  {util['name']}
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

module.exports = ReactRedux.connect(mapStateToProps)(Main)