const baseColors = ['#26D4FF', '#FFBF01', '#FB7A53', '#8c65e6', '#40cd84', '#5aedc5', '#26edff', '#f8f242', '#ff4401', '#a2e178', '#00b6ea', '#008aea', '#fb5377', '#d94cf7', '#704add'];
export const ADDPercentSignFormatter = params => {
	let str = params[0].name;
	params.forEach(item => {
		str += '<br/>' + item.marker + item.seriesName + '：';
		switch (item.seriesType) {
			default:
			case "bar":
				str += util.eNum(item.value);
				break;
			case "line":
				if (item.value == null) str += '-';
				else str += item.value + '%';
				break;
		}
	});
	return str;
};
let options1001 = {
	name: 'chart1001',
	width: '100%',
	height: '100%',
	option: {
		color: baseColors,
		title: {},
		tooltip: {
			trigger: 'axis',
			formatter: ADDPercentSignFormatter
		},
		legend: {
			itemHeight: 10,
			itemWidth: 10,
			type:'scroll',
			data: ['2016年新车数', '2017年新车数', '同比增长']
		},
		grid: {
			left: 0,
			right: 0,
			bottom: 0,
			top: '30px',
			containLabel: true
		},
		xAxis: [
			{
				splitLine: {show: false},
				splitArea: {show: false},
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisPointer: {
					type: 'line'
				}
			}
		],
		yAxis: [
			{
				splitLine: {show: true},
				splitArea: {show: true},
				type: 'value',
				name: '',
				axisLabel: {
					formatter: '{value}'
				}
			},
			{
				splitLine: {show: false},
				splitArea: {show: false},
				type: 'value',
				name: '',
				axisLabel: {
					formatter: '{value} %'
				}
			}
		],
		series: [
			{
				name: '2016年新车数',
				type: 'bar',
				barMaxWidth: '35px',
				barGap: '0',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name: '2017年新车数',
				type: 'bar',
				barMaxWidth: '35px',
				barGap: '0',
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			},
			{
				name: '同比增长',
				type: 'line',
				yAxisIndex: 1,
				smooth: false,
				symbol: "circle",
				data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
	}
};
let options1002 = {
	name: 'options1002',
	width: '100%',
	height: '100%',
	option: {
		title: {},
		color: baseColors,
		tooltip: {
			trigger: 'item',
			formatter: param => `${param.name}: ${util.eNum(param.value)}(${param.percent}%)`
		},
		legend: {
			icon: 'circle',
			itemHeight: 9,
			itemWidth: 9,
			data: ['紧凑型', '中型', '大型', '小型', '微型']
		},
		grid: {
			left: 0,
			right: 0,
			bottom: 0,
			top: '30px',
			containLabel: true
		},
		series: [
			{
				name: 'dsf',
				type: 'pie',
				radius: [0, '30%'],
				label: {
					normal: {
						fontSize: 12,
						position: 'inner',
						show: false
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [
					{value: 679, name: '全新', itemStyle: {normal: {color: '#FFBF01'}}},
					{value: 1548, name: '改款', itemStyle: {normal: {color: '#53DDFF'}}}
				]
			},
			{
				name: '细分类别',
				type: 'pie',
				radius: ['40%', '55%'],
				selectedMode: 'single',
				label: {
					normal: {
						fontSize: 12,
						formatter: param => param.name + '\n' + util.eNum(param.value),
						color: '#a3a3a3'
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: '#dcdcdc'
						}
					}

				},
				data: [
					{value: 335, name: '紧凑型', itemStyle: {normal: {color: '#FFBF01'}}},
					{value: 310, name: '中型', itemStyle: {normal: {color: '#FFE401'}}},
					{value: 234, name: '大型', itemStyle: {normal: {color: '#93FEFF'}}},
					{value: 1048, name: '小型', itemStyle: {normal: {color: '#7CF4FF'}}},
					{value: 251, name: '微型', itemStyle: {normal: {color: '#53DDFF'}}}
				]
			}
		]
	}
};
let options1003 = {
	name: 'options1003',
	width: '100%',
	height: '100%',
	option: {
		title: {},
		color: baseColors,
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: params => {
				let str = params[0].name;
				params.forEach(t => {
					str += '<br/>' + t.marker + t.seriesName + ':&nbsp;' + t.value + '%';
				});
				return str;
			}
		},
		legend: {
			left: '75%',
			align: 'left',
			top: '20%',
			right: 0,
			orient: 'vertical',
			itemWidth: 10,
			itemHeight: 10,
			data: ['非承载式', '承载式']
		},
		grid: {
			left: 0,
			right: '25%',
			bottom: 0,
			top: 0,
			containLabel: true
		},
		xAxis: {
			show: false,
			splitLine: {show: false},
			splitArea: {show: false},
			type: 'value'
		},
		yAxis: {
			splitLine: {show: false},
			splitArea: {show: false},
			type: 'category',
			data: ['2017', '2018']
		},
		series: [
			{
				name: '非承载式',
				type: 'bar',
				stack: '1',
				data: [69.12, 30.88]
			},
			{
				name: '承载式',
				type: 'bar',
				stack: '1',
				data: [30.88, 69.12]
			}
		]
	}
};
let options1004 = {
	name: 'options1004',
	width: '100%',
	height: '90px',//高度根据数据条数来修改，28*N + 44
	option: {
		title: {},
		color: baseColors,
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			}
		},
		legend: {
			left: 'center',
			itemWidth: 10,
			itemHeight: 10,
			data: ['全新', '改款']
		},
		grid: {
			left: 0,
			right: 0,
			bottom: 0,
			top: '30px',
			containLabel: true
		},
		xAxis: {
			splitLine: {show: false},
			splitArea: {show: false},
			show: false,
			type: 'value'
		},
		yAxis: {
			splitLine: {show: false},
			splitArea: {show: false},
			type: 'category',
			data: ['一汽大众', '北京汽车']
		},
		series: [
			{
				name: '全新',
				type: 'bar',
				stack: '1',
				data: [320, 220],
				barWidth: '15px'
			},
			{
				name: '改款',
				type: 'bar',
				stack: '1',
				data: [102, 210],
				barWidth: '15px'
			}
		]
	}
};
let options1005 = {
	name: 'options1005',
	width: '100%',
	height: '100%',
	option: {
		tooltip: {
			formatter: "{a} : {c}%"
		},
		grid: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			containLabel: false
		},
		series: [
			{
				name: '达成率',
				type: 'gauge',
				detail: {formatter: '{value}%'},
				axisLine: {
					lineStyle: {
						color: [
							[0.25, '#de4d22'],
							[0.8, '#ffbf01'],
							[1, '#197b02']
						]//仪表盘刻度背景色
					}
				},
				radius: '100%',
				startAngle: 180,
				endAngle: 0,
				animation: false,
				data: [90]
			}
		]
	}
};
let options1006 = {
	name: 'options1006',
	width: '100%',
	height: '100%',
	option: {
		color: baseColors,
		tooltip: {
			trigger: 'item',
			formatter: param => param.name + '<br/>销售总量：' + param.value.toLocaleString() + '台<br/>销售占比：' + param.percent + '%'
		},
		legend: {
			itemWidth: 9,
			itemHeight: 9,
			x: 'center',
			y: 'top',
			data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
		},
		calculable: true,
		series: [
			{
				name: '面积模式',
				type: 'pie',
				radius: ['10%', '50%'],
				center: ['50%', '60%'],
				roseType: 'area',
				label: {
					normal: {
						formatter: params => params.data.name + '\n' + util.eNum(params.data.value) + '台',
						color: '#a3a3a3'
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: '#dcdcdc'
						}
					}
				},
				data: [
					{value: 10, name: 'rose1'},
					{value: 5, name: 'rose2'},
					{value: 15, name: 'rose3'},
					{value: 25, name: 'rose4'},
					{value: 20, name: 'rose5'},
					{value: 35, name: 'rose6'},
					{value: 30, name: 'rose7'},
					{value: 40, name: 'rose8'}
				]
			}
		]
	}
};
let options1007 = {
	name: 'options1007',
	width: '100%',
	height: '100%',
	option: {
		color: baseColors,
		"tooltip": {"formatter": "{b}：{c}%"},
		"grid": {
			"left": "20px",
			"right": "20px",
			"bottom": 0,
			"top": "20px",
			"containLabel": true
		},
		"xAxis": {
			"type": "category",
			"boundaryGap": true,
			"axisLabel": {"interval": 0, "rotate": 45, "textStyle": {"color": "#a3a3a3", "fontSize": 12}},
			"axisLine": {"show": false, "lineStyle": {"color": "#f1f1f1"}},
			"splitLine": {"show": false},
			"data": ["长城汽车", "吉利汽车", "上汽通用五菱", "长安汽车", "广汽乘用车", "上汽集团", "其他"]
		},
		"yAxis": {"show": false},
		"series": [{
			"type": "bar",
			"smooth": true,
			"barMaxWidth": "35px",
			"label": {
				"normal": {
					"show": true,
					"align": "center",
					"position": "top",
					"color": "#a3a3a3",
					"fontSize": 12,
					formatter: ({value}) => value + '%'
				}
			},
			"areaStyle": {"normal": {"opacity": 1}},
			"data": [0.11197917, 0.04822242, 0.04746462, 0.03812998, 0.03399678, 0.02249231, 0.67187502]
		}]
	}
};
export default {
	options1001,
	options1002,
	options1003,
	options1004,
	options1005,
	options1006,
	options1007
};