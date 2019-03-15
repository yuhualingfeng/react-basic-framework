import {Link} from 'react-router-dom'
class Demo extends React.Component{
	constructor(props){
		super(props);

	}
	componentDidMount(){
		async function f(){
			let a =  await fetch('/package.json');
			return a;
		}
		// f().then(function(response) {
		//     return response.json()
		//   }).then(function(json) {
		//     console.log('parsed json', json)
		//   }).catch(function(ex) {
		//     console.log('parsing failed', ex)
		// 	})
			
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

export default Demo