import {Link} from 'react-router-dom'
import {Button,Row,Col} from 'antd';
import 'antd/dist/antd.css';
class Demo extends React.Component{
	constructor(props){
		super(props);
		this.request = this.request.bind(this);
	}
	componentDidMount(){
			
	}
	request(){
		const {dispatch} = this.props;
		dispatch({type: 'FETCH_CONFIG_FILE_REQUESTED'});
		dispatch({type: 'FETCH_GITHUB_REQUESTED'});		
	}
	render(){
		let {github,configFile} = this.props;
		return(
			<div>
			my  {util['name']}
			<div onClick={this.request}>点击请求数据{github.state}{configFile.state}</div>
			<Link to="/demo1">demo1</Link>
			<Button type="primary">Primary</Button>
			<div>
				<Row>
				<Col span={12}>col-12</Col>
				<Col span={12}>col-12</Col>
				</Row>
				<Row>
				<Col span={8}>col-8</Col>
				<Col span={8}>col-8</Col>
				<Col span={8}>col-8</Col>
				</Row>
				<Row>
				<Col span={6}>col-6</Col>
				<Col span={6}>col-6</Col>
				<Col span={6}>col-6</Col>
				<Col span={6}>col-6</Col>
				</Row>
			</div>
			</div>
			);
	}
}

const mapStateToProps = (state,ownProps)=>{
	return {
		i18n:state.i18n,
		configFile:state.configFile,
		github:state.github
	}
}


export default ReactRedux.connect(mapStateToProps)(Demo)