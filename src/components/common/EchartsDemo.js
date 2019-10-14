/**
 * echarts图形demo页
 */
import EchartsComp from './EchartsComp';
import EchartOptions from './EchartOptions';
class EchartsDemo extends React.Component{
	constructor(props){
		super(props);

		this.state = EchartOptions;

		this.changedData = this.changedData.bind(this);
	}
	componentDidMount(){
	}
	changedData(){
		let {options1} = this.state;
		options1.option.series[0]['data'] = [
		                {value:235, name:'视频广告'},
		                {value:274, name:'联盟广告'},
		                {value:310, name:'邮件营销'}];
		this.setState({options1});
	}
	render(){

		let elements = [];
		
		for(var i in EchartOptions){
			EchartOptions[i]['height'] = '300px';
			elements.push(
				<div key={i}>
					<div>{i}</div>
					<EchartsComp options={EchartOptions[i]}></EchartsComp>
					<br/>
				</div>);
		}


		let {options1,options2,options3,options4,options5,options6,options7} = this.state;
		return (<div style={{background:'#fff'}}>
			{elements}
		</div>);
	}
}

export default EchartsDemo