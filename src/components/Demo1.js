import {Link} from 'react-router-dom'
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

export default Demo1