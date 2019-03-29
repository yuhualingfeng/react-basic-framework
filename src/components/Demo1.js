import {Link} from 'react-router-dom'
import {Button,Row,Col} from 'antd';
class Demo1 extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
				my demo1{util['name']}
				<Link to="/demo">demo</Link>
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

export default Demo1