import {Link} from 'react-router-dom'
import {Button,Row,Col} from 'antd';
class Demo extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
			
	}
	render(){
		return(
			<div>
				demo
				<br></br>
				<Button type="primary">Primary</Button>
			</div>
			);
	}
}

const mapStateToProps = (state,ownProps)=>{
	return {
		i18n:state.i18n,
		configFile:state.configFile
	}
}


export default ReactRedux.connect(mapStateToProps)(Demo)