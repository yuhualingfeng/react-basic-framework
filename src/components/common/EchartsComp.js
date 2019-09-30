/**
 * props属性
 * 			name         (String |   图表名) 
 * 		    option  	 (Object |   图表配置信息)
 * 			width 		 (String |   图表宽度)
 * 			height  	 (String |   图表高度)
 * 			type    	 (String | 	 图表类型,可选值:'line|pie|bar') 
 * 			clickHandler (Function | 图表点击处理程序) 
 */
import {Link,withRouter} from 'react-router-dom';
class EchartsComp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			chartId:props.options.name+new Date().getTime(),
			myChart:null
		};
		this.drawChart = this.drawChart.bind(this);
		this.setOption = this.setOption.bind(this);
		this.getLineOptions = this.getLineOptions.bind(this);
		this.getPieOptions = this.getPieOptions.bind(this);
		this.getBarOptions = this.getBarOptions.bind(this);
		this.getMixOptions = this.getMixOptions.bind(this);
		this.resize = this.resize.bind(this);
		
	}
	componentDidMount(){
		this.drawChart();
		$(window).on('resize',this.resize);
	}
	componentWillReceiveProps(nextProps){
		//debugger;
		// console.log(nextProps.options.tiems,oldProps.options);
	}
	componentWillUpdate(nextProps, nextState){
		// console.log(nextProps.options,this.props.options);
	}
	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.options.pureUpdate){

			if((nextProps.isShowLeftMenu!==this.props.isShowLeftMenu)){
				if(util.isMobile===false){
					return true;
				}else{
					return false;
				}
				
			}else{
				let result = nextProps.options.times !== this.props.options.times;
				return result;				
			}
		}else{
			return true;
		}

	}
	componentDidUpdate(){
		//console.log('update');
		this.setOption();
		this.resize();
		// setTimeout(this.resize,300);

	}
	resize(){
		let {myChart} = this.state;
		myChart.resize();
	}
	drawChart(){
		let {chartId} = this.state;

		let {render,options} = this.props;
		let myChart = echarts.init(document.getElementById(chartId),'westeros',{
			//renderer:util.isMobile?'svg':'canvas'
			renderer:'canvas'
		});
		// myChart.showLoading();
		if(typeof options.clickHandler == 'function'){
			myChart.on('click',options.clickHandler.bind(this));			
		}
		this.setState({myChart},()=>{
			
			// this.setOption();
		});
	}
	setOption(){
		let {chartId} = this.state;
		//console.log('setOption'+chartId);
		let {myChart} = this.state;
		let {options} = this.props;
		let option = {};
		switch(options.type){
			case 'pie':
			option = this.getPieOptions();
			break;
			default:
			option = this.getMixOptions();
			break;


		}



		let commonOption = {
			color:['#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
		};
		let isWordCloud = Array.isArray(option.series) && option.series.length>0 &&  option.series[0]['type'] == 'wordCloud';

		// if(window.innerWidth<580 && option.legend){
		// 	option.legend.show = false;
		// }
		
		myChart.setOption(Object.assign({},commonOption,option),{notMerge:isWordCloud?false:true});
		// myChart.hideLoading();
		
	}

	getLineOptions(){
		let options = {};
		return options;
	}

	getPieOptions(){

		let option = {
		    title:{
		    	text:'标题',
		    	link:'http://www.baidu.com',
		    	target:'_blank'
		    },
		    tooltip:{
		    	formatter:function(params){
		    		return `${params.data.name}:${params.data.value}`;
		    	}
		    },
		    selectedMode:'single',
		    animation:!util.isMobile
		};
		return Object.assign({},option,this.props.options.option);
	}
	getBarOptions(){
		let options = {};
		return options;
	}
	getMixOptions(){
		let option = {
			animation:!util.isMobile
		};
		return Object.assign({},option,this.props.options.option);
	}


	render(){
		let {chartId} = this.state;
		let {options} = this.props;
		let width = options.width ? options.width:'auto';
		let height = options.height ? options.height:'400px';

		return (
			<div style={{width,height,position:'relative'}}>
				{
					options.noData &&
					<div className="chart-no-data"></div>
				}
				
				<div id={chartId} style={{width,height}}></div>
			</div>
		);
	}
}

let mapStateToProps = (state,ownProps)=>{
	return {
		isShowLeftMenu:state.isShowLeftMenu
	}
}

export default ReactRedux.connect(mapStateToProps)(EchartsComp)
