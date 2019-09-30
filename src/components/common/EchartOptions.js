/**
 * 备注:每个option属性不能随意修改
 */
import EchartOptions2 from './EchartOptions2';

export let baseColors = ['#26D4FF','#FFBF01','#FB7A53','#8c65e6','#40cd84','#5aedc5','#26edff','#f8f242','#ff4401','#a2e178','#00b6ea','#008aea','#fb5377','#d94cf7','#704add']; 

export let baseMonth = ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"];

export let yAxis = [
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	},
	      	{
		        type: "value",
		        splitLine:{
		        	show:false
		        },
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12,
			        
			      },
			      formatter: '{value}%'
		        },

		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	}
	      ];



let options1 = {
	name:'chart1',
	type:'pie',
	clickHandler:function(params){
		console.log(params);
		//console.log(this.state.myChart);
	},
	width:'100%',
	height:300,
	
	option:{
		color:['#177DFF','#F3545D','#FFA534'],
		legend: {
			itemHeight:9,
	        left: 'center',
	        icon:'circle',
	        data: ['正面信息','中性信息','负面信息']
	    },
	   
		series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: ['35%', '50%'],
	             label:{
			    	normal:{
			    		formatter:'{b}: {d}%'
			    	}
			    },
	            data:[
	                {value:235, name:'正面信息'},
	                {value:310, name:'中性信息'},
	                {value:335, name:'负面信息'}
	            ]
	        }
	    ],
	    title:{
	    	//text:'标题',
	    	//link:'http://www.baidu.com',
	    	//target:'_blank'
	    }					
	}
};


let options2 = {
	name:'chart2',
	width:'100%',
	height:300,
	option:{
		  color:['#177dff','#ffa534','#f3545d'],
	      tooltip: {
					trigger: "axis",
					confine:true
	      },
	      legend: {
	      	itemHeight:9,
	        data: ["声量指数", "正面指数", "负面指数"],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	      },
	      grid: {
	        left: "5%",
	        right: "5%",
	        bottom: "3%",
	        containLabel: true
	      },
	      xAxis: {
	        type: "category",
	       // boundaryGap: false,

	        axisLabel: {
	          //inside:true,
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:false,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	      series: [
	        {
	          name: "声量指数",
	          type: "line",
	          smooth: true,
	          // symbol: "none",
	          data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	          name: "正面指数",
	          type: "line",
	          smooth: true,
	          // symbol: "none",
	          data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	          name: "负面指数",
	          type: "line",
	          smooth: true,
	          // symbol: "none",
	          data: [150, 232, 201, 154, 190, 330, 410]
	        }
	      ]
	}

};
let options3 = {
	name:'chart3',
	width:'100%',
	height:246,
	option:{
		  //color:['#177dff','#ffa534','#f3545d'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	      },
	      grid: {
		    left: "0%",
		    right: "0%",
		    bottom: "9px",
		    top:'3%',
		    containLabel: true
		  },

	      xAxis: {
	        type: "category",
	        name:'日期',
	        // boundaryGap: false,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["06/01", "06/02", "06/03", "06/04", "06/05", "06/06", "06/07"]
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	     
	      series: [
	        {
	          name: "",
	          type: "bar",
	          smooth: true,
	          barMaxWidth:'20px',
	          symbol: "none",
	          itemStyle:{
	          		normal:{
	          			color:'blue'
	          		}
		            
		      },
	          data: [
		          {
		          	value:80,
		          	itemStyle:{
		          		normal:{
		          			color:'#35CD3A'
		          		}
				    }
		          },
		          {
		          	value:200,
		          	itemStyle:{
		          		normal:{
		          			color:'#A3A3A3'
		          		}
				    }
		          },
		          {
		          	value:500,
		          	itemStyle:{
		          		normal:{
		          			color:'#FFDD40'
		          		}
				    }
		          },
		          {
		          	value:700,
		          	itemStyle:{
		          		normal:{
		          			color:'#FFA534'
		          		}
				    }
		          },
		          {
		          	value:800,
		          	itemStyle:{
		          		normal:{
		          			color:'#F3545D'
		          		}
				    }
		          },
		          {
		          	value:90,
		          	itemStyle:{
		          		normal:{
		          			color:'#0FBE15'
		          		}
				    }
		          },
		          {
		          	value:90,
		          	itemStyle:{
		          		normal:{
		          			color:'#0FBE15'
		          		}
				    }
		          }
	          ]
	        }
	      ]
	}
};

let options4 = {
	name:'chart4',
	width:'100%',
	height:300,
	option:{
		  color:['#2B88FF'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	        //formatter: "{a} <br/>{b} : {c} ({d}%)"
	      },
	      legend: {
			  show:true
	       // data: ["声量指数", "正面指数", "负面指数"]
	      },
	      grid: {
		    left: "0%",
		    right: "3%",
		    bottom: "3%",
		    top:'3%',
		    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["2018-06-01", "2018-06-02", "2018-06-01", "2018-06-01", "2018-06-01", "2018-06-01", "2018-06-01"]
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	      series: [
	        {
	          //name: "声量指数",
	          type: "line",
	          smooth: true,
	          symbol: "none",
	          data: [120, 132, 101, 134, 90, 230, 210],
	          areaStyle: {
	          	normal:{
	          		opacity:0.3
	          	}
	            
	          }
	        }
	      ]
	}

};


let options5 ={
	name:'chart5',
	width:'100%',
	height:300,

	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true
	      },
	      legend: {
	      	top:'3%',
	      	itemHeight:9,
	        data: ["易车网", "汽车之家", "搜狐汽车","太平洋汽车网"],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	      },
	      grid: {
			    left: "0%",
			    right: "30px",
			    bottom: "3%",
			    top:'21%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["2018-06-01", "2018-06-02", "2018-06-01", "2018-06-01", "2018-06-01", "2018-06-01", "2018-06-01"]
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "易车网",
	          type: "line",
	          smooth: true,
	          stack:'1',
	          symbol: "emptyCircle",
	          areaStyle:{
	              normal:{
	                  opacity:1,
	                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                      shadowBlur: 10
	              }
	          },
	          data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	          name: "汽车之家",
	          type: "line",
	          smooth: true,
	         symbol: "emptyCircle",
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	          name: "搜狐汽车",
	          type: "line",
	          smooth: true,
	          symbol: "emptyCircle",
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "太平洋汽车网",
	          type: "line",
	          smooth: true,
	          symbol: "emptyCircle",
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        }
	        
	      ]
	}	
};

let options6 = {
	name:'chart6',
	width:'100%',
	height:300,	
	option:{
	  tooltip: {
				confine:true
		},
	  animation:false,
	  series: [
	    {
	      type: "wordCloud",
				gridSize:6,
        shape:'circle',
        sizeRange: [12, 30],
        width:'80%',
        height:'80%',
	      // gridSize: 2,
	      //sizeRange: [12, 20],
	      // rotationRange: [-90, 90],
	      // rotationStep: 45,
	      textStyle: {
	        normal: {
	          color: function() {
	            return (
	              "rgb(" +
	              [
	                Math.round(Math.random() * 255),
	                Math.round(Math.random() * 255),
	                Math.round(Math.random() * 255)
	              ].join(",") +
	              ")"
	            );
	          }
	        },
	        emphasis: {
	          shadowBlur: 10,
	          shadowColor: "#333"
	        }
	      },
	      data: [
	      //{name:'漏油',value:1},{name:'车身异响',value:1}
	      ]
	    }
	  ]	
	}
};

export let options7Color = ['#177DFF','#12B9FF','#00EAFF','#28EE77','#35CD3A','#E9FA28','#FADF28','#FFA534','#FF7F29','#F3545D','#F6173C','#C207B3','#5F07C2','#5730FF','#DEE1E2'];

let options7 = {
	name:'chart7',
	type:'pie',
	clickHandler:function(params){
		console.log(params);
		//console.log(this.state.myChart);
	},
	width:'100%',
	height:'100%',
	option:{
		color:options7Color,
		// legend: {
	 //        left: 'center',
	 //        top:'5%',
	 //        data: ['微信','新浪微博','搜狐网','汽车之家','网易','太平洋汽车','易车网','搜狐汽车','腾讯','华商网','东方网','突袭网']
	 //    },
    	grid: {
		    left: "0%",
		    right: "0%",
		    bottom: "3%",
		    top:'2%',
		    containLabel: true
        },
		series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            startAngle:-90,
	            radius: ['30%', '45%'],
	            label:{
								normal:{
									formatter:'{d}%\n{b}',
									color:'#a3a3a3'

								}
							},
							labelLine:{
								normal:{
									lineStyle:{
										color:'#dcdcdc'
									}			    		
								}

							},
	            data:[
	                {value:235, name:'微信'},
	                {value:310, name:'新浪微博'},
	                {value:335, name:'搜狐网'},
	                {value:335, name:'汽车之家'},
	                {value:335, name:'网易'},
	                {value:335, name:'太平洋汽车网'},
	                {value:335, name:'易车网'},
	                {value:335, name:'搜狐汽车'},
	                {value:335, name:'腾讯'}

	            ]
	        }
	    ],
	    title:{
	    	//text:'标题',
	    	//link:'http://www.baidu.com',
	    	//target:'_blank'
	    }					
	}
};

let options8 ={
	name:'chart8',
	width:'100%',
	height:'100%',
	option:{
		  color:['#177DFF','#FFA534','#F3545D'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	      },
	      legend: {
	      	itemHeight:9,
	      	top:'2%',
	        data: ["正面信息", "中性信息", "负面信息"],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	      },
	      grid: {
			    left: "0%",
			    right: "5%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: false,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["2018-06-01", "2018-06-02", "2018-06-01", "2018-06-01", "2018-06-01", "2018-06-01", "2018-06-01"]
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "正面信息",
	          type: "line",
	          symbol: "circle",
	          data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	          name: "中性信息",
	          type: "line",
	         symbol: "circle",
	          data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	          name: "负面信息",
	          type: "line",
	          symbol: "circle",
	          data: [150, 232, 201, 154, 190, 330, 410]
	        }
	      ]
	}	
};

let options9 = {
	name:'chart9',
	type:'pie',
	clickHandler:function(params){
		console.log(params);
		//console.log(this.state.myChart);
	},
	width:'100%',
	height:300,
	
	option:{
		color:['#177DFF','#FFA534','#F3545D'],
		legend: {
			itemHeight:9,
	        left: 'center',
	        icon:'circle',
	        data: ['正面信息','中性信息','负面信息'],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	    },
	   
		series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: ['35%', '50%'],
	             label:{
			    	normal:{
			    		formatter:'{d}%\n{b}',
			    		color:'#a3a3a3'

			    	}
			    },
			    labelLine:{
			    	normal:{
				    	lineStyle:{
				    		color:'#dcdcdc'
				    	}			    		
			    	}

			    },
	            data:[
	                {value:235, name:'正面信息'},
	                {value:310, name:'中性信息'},
	                {value:335, name:'负面信息'}
	            ]
	        }
	    ],
	    title:{
	    	//text:'标题',
	    	//link:'http://www.baidu.com',
	    	//target:'_blank'
	    }					
	}
};

let options10 = {
	name:'chart10',
	type:'pie',
	width:'100%',
	height:'100%',
	
	option:{
		color:['#177DFF','#eee'],
		series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: ['65%', '80%'],
	            label:{

			    	normal:{
			    		show:false,
			    		formatter:'{d}%\n{b}'
			    	}
			    },
	            data:[
	                {value:235, name:''},
	                {value:310, name:''}
	            ]
	        }
	    ],
	    animation:false,
	    tooltip:{
	    	show:false,
				confine:true
	    },
	    title:{
	    	//text:'标题',
	    	//link:'http://www.baidu.com',
	    	//target:'_blank'
	    }					
	}
};

let options11 = {
	name:'chart11',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		color:baseColors,
		legend: {
			itemHeight:9,
	        left: 'center',
	        icon:'circle',
	        data: ['CS10','CS9','迈途','Q6'],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	    },
	   	tooltip: {
            formatter: '{b}：{d}%',
						confine:true
        },
	   
		series : [
	        {
	            name: '占比',
	            type: 'pie',
	            radius: ['0%', '50%'],
	            startAngle:-90,
	             label:{
			    	normal:{
			    		formatter:function(params){
			    			return params.data.name + '\n' + util.eNum(params.data.value);
			    		},
			    		color:'#a3a3a3'

			    	}
			    },
			    labelLine:{
			    	normal:{
						length:5,
						length1:10,
				    	lineStyle:{
				    		color:'#dcdcdc'
				    	}			    		
			    	}

			    },
	            data:[
	                {value:235, name:'CS10'},
	                {value:310, name:'CS9'},
	                {value:335, name:'迈途'},
	                {value:335, name:'Q6'}
	            ]
	        }
	    ],
	    title:{
	    	//text:'标题',
	    	//link:'http://www.baidu.com',
	    	//target:'_blank'
	    }					
	}
};
let options12 = {
	name:'chart12',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		color:baseColors,
		legend: {
					itemHeight:9,
	        left: 'center',
	        itemHeight:9,
	        data: ['CS10','CS9','迈途','Q6'],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	    },
	   	icon:'circle',
	   	tooltip: {
            formatter: function(params){
            	return params.data.name + ': ' +params.percent+'%<br/>'+ util.eNum(params.data.value);
            },
						confine:true
        },
		series : [
	        {
	            name: '占比',
	            type: 'pie',
	            radius: ['35%', '50%'],
	            startAngle:-90,
	            label:{
								normal:{
									formatter:function(params){
										return params.data.name + '\n' + util.eNum(params.data.value);
									},
									color:'#a3a3a3'

								}
			   		  },
							labelLine:{
								normal:{
									lineStyle:{
										color:'#dcdcdc'
									}			    		
								}

							},
	            data:[
	                {value:235, name:'CS10'},
	                {value:310, name:'CS9'},
	                {value:335, name:'迈途'},
	                {value:335, name:'Q6'}
	            ]
	        }
	    ],
	    title:{
	    	//text:'标题',
	    	//link:'http://www.baidu.com',
	    	//target:'_blank'
	    }					
	}
};

let options13 = {
	name:'chart13',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
	    color:baseColors,
	    tooltip:{
	    	show:true,
				confine:true
	    },
	    xAxis: {
	       type: 'value',
	       show:false
	    },
	    yAxis: {
	        type: 'category',
	        show:false,
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','234'],
	        axisLabel:{
	       	show:false
	       }
	    },
	    grid: {
		    left: "0%",
		    bottom: "0%",
		    top:'0%',
		    right:'50px'
		    //containLabel: true
		},
	    title:{
	        	
	    },
	    series: [{
	        data: [120, 200, 150, 80, 70, 110, 130,130],
	        type: 'bar',
	        barWidth:'16px',
	        itemStyle:{
	            normal:{
	                barBorderRadius:[0,8,8,0]
	            }
	        },
	        label:{
	        	normal:{
		            show:true,
		            position:'right'	        		
	        	}
	        }
	    }]
	}
};

let options14 = {
	name:'chart14',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true
	      },
	      legend: {
	      	itemHeight:9,
	      	top:'0%',
	        data: [{name:"<90天",icon:'circle'},{name:"90-180天",icon:"circle"},{name:"181-270天",icon:"circle"} ,"超期比例"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis: [
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	},
	      	{
		        type: "value",
		        splitLine:{show:false},
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12,
			        
			      },
			      formatter: '{value}%'
		        },

		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	}
	      ],
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "<90天",
	          type: "bar",
	          smooth: true,
	          stack:'1',
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          areaStyle:{
	              normal:{
	                  opacity:1,
	                  shadowColor: 'rgba(0, 0, 0, 1)',
                      shadowBlur: 10
	              }
	          },
	          data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	          name: "90-180天",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	          name: "181-270天",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "超期比例",
	          type: "line",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          barMaxWidth:'35px',
	          yAxisIndex: 1,
	          data: [120, 132, 101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};



let options15 = {
	name:'chart15',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		title:{},
        tooltip: {
            trigger: 'item',
            formatter: function(params){
            	return params.name+'<br/>'+params.value[2];
            },
			confine:true

        },

        // visualMap: {
        //     // min: 800,
        //     // max: 50000,
		// 	text: ['High', 'Low'],
		// 	show:false,
        //     realtime: false,
        //     calculable: true,
        //     inRange: {
        //         color: ['#b6f9ff', '#176eff']
        //     }
		// },
		geo: {
			show: true,
			map: 'china',
			zoom:1.25,
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false,
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#212A4A',
					borderColor: '#111629',
				},
				emphasis: {
					areaColor: '#212A4A',
				}
			}
		},
        series: [{
			name: '散点',
			type: 'scatter',
			// tooltip:{
			// 	trigger: "item",
			// 	formatter:'fsdf'
			// },
			coordinateSystem: 'geo',
			data: [],
			symbol:"circle",
			symbolSize: function(val) {
				// return 30;
				return parseInt(val[2].toString().length*6)+10;
			},
			label: {
				normal: {
					formatter: '{b}',
					formatter:function(obj){
						return obj.data[2];
					},
					position: 'inside',
					show: true,
					color:'#fff'
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#0D7CB7'
				}
			}
		},{
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: function(val) {
				// return val[2];
				return parseInt(val[2].toString().length*8)+8;
			},
			
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
					formatter: '{b}',
					formatter:function(obj){
						return obj.data[2];
					},
					position: 'inside',
					show: true
				}
            },
            itemStyle: {
                normal: {
                    color: '#0B97B2',
                    shadowBlur: 8,
                    shadowColor: '#0B97B2'
                }
            },
            zlevel: 1
        }]
    }
};
let options16 = {
	name:'chart16',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
          color:['#8CE1B5'],
          grid:{
        	top:'8%',
        	left:'2%',
        	bottom:'2%',
        	right:'12%',
        	containLabel: true
	      },
	      title:{},
	      xAxis: {
      		name:'库销比',
      		nameLocation:'end',
      		boundaryGap:true,
      		scale:true,
      		min:function(value){
      		 	return parseInt(value.min-value.max*0.1);
      		},


      		nameTextStyle:{
      			color:'#a3a3a3'
      		},
	        axisLabel: {
	      		formatter:function(value,index){
	      			return index==0?'':value;
	      		},
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:true
	        }
	      },
	      yAxis: {
      		name:'库存量',
      		nameLocation:'end',
      		nameTextStyle:{
      			color:'#a3a3a3'
      		},
			min:function(value){
      		 	return parseFloat(value.min-Math.abs(value.max)*0.1);
      		},
	        axisLabel: {
	          formatter:function(value,index){
	      			return index==0?'':value;
	      	  },	
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	    series: [{
	        symbolSize: 20,
	        label:{
	        	normal:{
		        	show:true,
		        	position:'bottom',
		        	color:'#757575',
		        	fontSize:10,
		        	zIndex:2,
		        	formatter:function(params){
		        		return params.data[2];
		        	}	        		
	        	}

	        },
	        data: [
	            [10, 20,'四川'],
	            [8.0, 6.95,'云南'],
	            [13.0, 7.58,'河北'],
	            [9.0, 8.81,'山东'],
	            [11.0, 8.33,'广西'],
	            [14.0, 9.96,'陕西'],
	            [6.0, 7.24,'黑龙江'],
	            [4.0, 4.26,'天津'],
	            [12.0, 10.84,'北京'],
	            [7.0, 4.82,'贵州'],
	            [5.0, 5.68,'青海']
            ],
        tooltip:{
					  confine:true,
            formatter:function(params){
		        		return params.data[2]+'<br/>库存量：'+params.data[1]+'<br/>库销比：'+params.data[0];
		        	}
        },
        itemStyle:{
            normal:{
                // borderWidth:1,
                // borderColor:'red',
                
                // shadowColor: 'rgba(0, 0, 0, 1)',
                // shadowBlur: 10,
                // shadowColor:'#8CE1B5',
                // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                //     offset: 0,
                //     color: '#8ce1b5'
                // }, {
                //     offset: 1,
                //     color: '#5eaf85'
                // }])
                color:'rgba(75, 221, 75, 0.6)'
            }
            
        },
        type: 'scatter'
    }]
}
};

let options17 = {
	name:'chart17',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:['#26D4FF','#FFBF01','#FB7A53'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	        // formatter:function(params){
	        // 	return 'fdf';
	        // }

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'2%',
	        data: ["2018年批发开票量", "2017年批发开票量","同比增长率"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          interval:0,
	          rotate:45,
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["河北", "四川", "云南", "河南", "山东", "河北", "广东"]
	      },
	      yAxis: [
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	},
	      	{
		        type: "value",
		        splitLine:{
		        	show:false
		        },
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12,
			        
			      },
			      formatter: '{value}%'
		        },

		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	}
	      ],
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "2018年批发开票量",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          barGap:'0',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	          name: "2017年批发开票量",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "同比增长率",
	          type: "line",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          yAxisIndex: 1,
	          showSymbol:false,
	          data: [120, 132, 101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};

let options18 = {
	name:'chart18',
	type:'pie',
	width:'100%',
	height:'100%',
	
	option:{
		color:['#26D4FF','#eee'],
		series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius: ['60%', '75%'],
	            startAngle:-90,
	            silent:true,
	            label:{

			    	normal:{
			    		show:false,
			    		formatter:'{d}%\n{b}'
			    	}
			    },
	            data:[
	                {value:235, name:''},
	                {value:310, name:''}
	            ]
	        }
	  ],
		animation:false,
		tooltip:{
			show:true,
			confine:true
		},
		title:{
			//text:'标题',
			//link:'http://www.baidu.com',
			//target:'_blank'
		}					
	}
};


let options19 = {
	name:'chart19',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true
	      },
	      legend: {
	      	itemHeight:9,
					top:'2%',
					padding:[0,100],
	        data: [{name:"批发开票量",icon:'circle'},"月计划量"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis: [
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	},
	      	{
		        type: "value",
		        splitLine:{show:false},
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12,
			        
			      },
			      formatter: '{value}%'
		        },

		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	}
	      ],
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "批发开票量",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "月计划量",
	          type: "line",
	          smooth: false,
	          symbol: "circle",
	          barMaxWidth:'35px',
	          yAxisIndex:1,
	          data: [120, 132, 101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};


let options20 = {
	name:'chart20',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'2%',
	        data: ["CS9","CS10","汇总"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis:{

		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "CS9",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "CS10",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "汇总",
	          type: "line",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          data: [120, 132, 101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};

let options21 = {
	name:'chart21',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:['#26D4FF','#FB7A53'],
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'2%',

	        data: [{name:"终端销量",icon:'circle'},"市占率"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          interval:0,
	          rotate:45,
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["河北", "四川", "云南", "河南", "山东", "河北", "广东"]
	      },
	      yAxis:
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	}
	      	// ,
	      	// {
		      //   type: "value",
		      //   axisLabel: {
		      //     textStyle: {
			     //    color: "#a3a3a3",
			     //    fontSize: 12,
			        
			     //  },
			     //  formatter: '{value}%'
		      //   },

		      //   axisLine:{
		      //   	show:true,
		      //   	lineStyle:{
		      //   		color:'#f1f1f1'
		      //   	}
		      //   }
	      	// }
	      ,
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "终端销量",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        }
	        // ,
	        // {
	        //   name: "市占率",
	        //   type: "line",
	        //   smooth: false,
	        //   symbol: "emptyCircle",
	        //   barMaxWidth:'35px',
	        //   yAxisIndex: 1,
	        //   data: [120, 132, 101, 134, 90, 230, 210]
	        // }
	        
	      ]
	}
};
let options22 = {
	name:'chart22',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'2%',
	        data: ["2018年","2017年","2016年"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis: [
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	},
	      	{
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12,
			        
			      },
			      formatter: '{value}%'
		        },

		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      	}
	      ],
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [

	        {
	          name: "2018年",
	          type: "line",
	          smooth: false,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          data: [10, 132, 101, 134, 90, 230, 210]
	        },
	        {
	          name: "2017年",
	          type: "line",
	          smooth: false,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          data: [50, 132, 101, 134, 90, 230, 210]
	        },
	        {
	          name: "2016年",
	          type: "line",
	          smooth: false,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          data: [80, 132, 101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};

let options23 = {
	name:'chart23',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'0%',
	      	//icon:'circle',
	      	//icon:'image://http://localhost:8082/734f4be4f7e00bd7800b710ba53e8901.png',
	        data: ["CS9","CS10","Q6"],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	        // ,
	        // type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis:{

		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "CS9",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "CS10",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "Q6",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        }
	        
	      ]
	}
};
let options24 = {
	name:'chart24',
	width:'100%',
	height:'100%',
	option:{
		  color:['#FF8E00','#05B4D8'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	        //formatter: "{a} <br/>{b} : {c} ({d}%)"
	      },
	      legend: {
	       itemHeight:9,
	       data: ["提车月计划拆解", "资金冻结量"]
	      },
	      grid: {
		    left: "0%",
		    right: "3%",
		    bottom: "3%",
		    top:'10%',
		    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: false,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	      series: [
	        {
	          name: "提车月计划拆解",
	          type: "line",
	          smooth: true,
	          symbol: "none",
	          data: [120, 132, 101, 134, 90, 230, 210,140,100,300,100,150],
	          areaStyle: {
	          	normal:{
	          		opacity:0.1
	          	}
	            
	          }
	        },
	        {
	          name: "资金冻结量",
	          type: "line",
	          smooth: true,
	          symbol: "none",
	          data: [10, 130, 180, 134, 120, 220, 110,200,120,200,120,120],
	          areaStyle: {
	          	normal:{
	          		opacity:0.1
	          	}
	            
	          }
	        }
	      ]
	}

};
let options25 = {
	name:'chart25',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'2%',
	        data: ["2018年","2017年","2016年"],
	        textStyle:{
	        	color:'#a3a3a3'
	        },
	        type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis: {
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "2018年",
	          type: "line",
	          smooth: false,
	          symbol: "circle",
	          barMaxWidth:'35px',
	          data: [10, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
	        },
	        {
	          name: "2017年",
	          type: "line",
	          smooth: false,
	          symbol: "circle",
	          barMaxWidth:'35px',
	          data: [50, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
	        },
	        {
	          name: "2016年",
	          type: "line",
	          smooth: false,
	          symbol: "circle",
	          barMaxWidth:'35px',
	          data: [80, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};
let options26 = {
	name:'chart26',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:['#40CD84'],
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	// top:'2%',
	       //  data: ["CS9","CS10","汇总"],
	       //  textStyle:{
	       //  	color:'#a3a3a3'
	       //  },
	       //  type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {

	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:false,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["华北地区", "东北地区", "华东地区", "中南地区", "西南地区", "西北地区"]
	      },
	      yAxis:{
	      		show:false,
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
	          tooltip:{
		          	formatter:function(params){
		          		return params.name+'<br/>'+params.value+'<br/>'+params.data.rate;
		          	},
								confine:true          		
	          },
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          //name: "CS9",
	          type: "bar",
	          smooth: true,
	          barMaxWidth:'35px',

	          label:{
			    	normal:{
						show:true,
			    		align:'center',
			    		position:'insideTop',
			    		formatter:function(params){

			    			return params.value;
			    		}
			    	}
			  },
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330]
	        }
	      ]
	}
};
let options27 = {
	name:'chart27',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		  color:['#26D4FF'],
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	// top:'2%',
	       //  data: ["CS9","CS10","汇总"],
	       //  textStyle:{
	       //  	color:'#a3a3a3'
	       //  },
	       //  type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis:{
		        type: "value",
		        axisLabel: {
                  show:true,
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
          label:{
		    	normal:{
					show:false,
		    		align:'center',
		    		position:'insideTop',
		    		formatter:function(params){
		    			return params.value;
		    		}
		    	}
		  },
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          //name: "CS9",
	          type: "bar",
	          smooth: true,
	          barMaxWidth:'35px',

	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330,150, 232, 201, 154, 190, 330]
	        }
	      ]
	}
};

let options28 = {
	name:'chart28',
	width:'100%',
	height:'100%',
	option: {
      tooltip: {
					confine:true
			},
      legend: {
          top: 20,
          show:true,
          itemWidth: 12,
          itemHeight: 12,
          data: ['各派系销量分布', '各派系销量分布占比'],
          textStyle: {
              color: '#a3a3a3'
          }
      },
      radar: {
          radius: '60%',
          splitNumber: 4,
          axisLine: {
              lineStyle: {
                  color: '#a3a3a3',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#a3a3a3',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: '#fff',
                  opacity: 0,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: '自主'
          }, {
              name: '日系'
          }, {
              name: '德系'
          }, {
              name: '美系'
          }, {
              name: '瑞系'
          }, {
              name: '英系'
          }]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 0.3
              }
          },
          data: [{
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: '各派系销量分布',
              z:2
          }, {
              value: [2500, 12000, 8000, 8500, 12000, 12000],
              name: '各派系销量分布占比',
              z:1
          }]
      }],
			// color: ['#FB7A53', '#4CDCFF']
			color:baseColors

  }
};

let options29 = {
	name:'options29',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		title:{},
        tooltip: {
            trigger: 'item',
            formatter: function(params){
            	return params.name;
            },
						confine:true

        },

        visualMap: {
            type:'piecewise',
            colors:['#26D4FF','#40CD84','#FFBF01','#FB7A53','#5AEDC5','#8C65E6'],
            color:['#26D4FF','#40CD84','#FFBF01','#FB7A53','#5AEDC5','#8C65E6'],
            pieces:[
            	{value:200,label:'猎豹'},
            	{value:400,label:'长安'}
            ]
        },
        series: [{
            name: '中国地图',
            type: 'map',
            mapType: 'china', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                	//borderColor:'#fff',
                    label: {
                        show: false
                    }
                },
                emphasis: {
                	areaColor:'#ffe401',
                    label: {
                        show: false
                    }
                }
            },
            data: [{name:'四川省',value:200},{name:'重庆',value:400}]
        }]
    }
};

let options30 = {
	name:'chart30',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
	        formatter:function(params){
	        	let str = '';
	        	params.forEach((item,key)=>{
	        		if((item.seriesName.indexOf('辅助')===-1) && (item.data.name.length>0)){

	        			str += `${item.data.name}：${item.data.min}万-${item.data.max}万<br/>`;
	        		}
	        	});
	        	return str;
	        },
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'0%',
	      	//icon:'circle',
	      	//icon:'image://http://localhost:8082/734f4be4f7e00bd7800b710ba53e8901.png',
	        data: ["CS10","Q6"],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	        // ,
	        // type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ['紧凑型','小型','大型']
	      },
	      yAxis:{

		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        },
		        splitLine:{
		        	show:false
		        }
	      },
	      title:{},
	      // tooltip:{
	      // 	formatter:'fdsf'
	      // },
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "辅助1",
	          type: "bar",
	          barMaxWidth:'35px',
	          stack:'1',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [100, 200, 250]
	        },
	        {
	          name: "1",
	          type: "bar",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [120, 232, 201]
	        },
	        {
	          name: "辅助2",
	          type: "bar",
	          barMaxWidth:'35px',
	          stack:'2',
              itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
              },
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 150]
	        },
	        {
	          name: "2",
	          type: "bar",
	          barMaxWidth:'35px',
	          stack:'2',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232]
	        },
	         {
	          name: "辅助3",
	          type: "bar",
	          barMaxWidth:'35px',
	          stack:'3',
              itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
              },
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 150]
	        },
	        {
	          name: "3",
	          type: "bar",
	          barMaxWidth:'35px',
	          stack:'3',
	          label:{
	          	normal:{
	          		show:true,
	          		rotate:-90,
	          		formatter:function(params){
	          			return params.data.name;
	          		}
	          	}
	          },
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [{value:150,name:'猎豹cs10',itemStyle:{normal:{color:'red'}}}, 232]
	        }
	        
	      ]
	}
};

let options31 = {
	name:'chart31',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
          color:['#26D4FF','#40CD84','#FFBF01','#FB7A53','#5AEDC5','#8C65E6'],
          grid:{
        	top:'8%',
        	left:'2%',
        	bottom:'6%',
        	right:'12%',
        	containLabel: true
	      },
	      title:{},
	      xAxis: {
      		name:'库\n销\n比',
      		nameLocation:'center',
      		boundaryGap:true,
      		scale:true,
      		min:function(value){
      			 let num = (value.max == value.min)?Math.abs(value.min):(value.max-value.min);
      		 	 return parseInt(value.min-(num*0.2));
      		},


      		nameTextStyle:{
      			color:'#a3a3a3',
      			padding:[10,0,0,0]
      		},
	        axisLabel: {
	      		formatter:function(value,index){
	      			return index==0?'':util.eNum(value);
	      		},
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:true
	        }
	      },
	      yAxis: {
      		name:'库存量',
      		nameLocation:'end',
      		nameTextStyle:{
      			color:'#a3a3a3'
      		},
			min:function(value){
				let num = (value.max == value.min)?Math.abs(value.min):(value.max-value.min);
      		 	return parseFloat(value.min-(num*0.2));
      		},
	        axisLabel: {
	          formatter:function(value,index){
	      			return index==0?'':(value+'%');
	      	  },	
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
	      },
	    series: [{
	        symbolSize: function(value){
	        	return value[3];
	        },
	        label:{
	        	normal:{
		        	show:true,
		        	position:'inside',
		        	color:'#fff',
		        	fontSize:10,
		        	zIndex:2,
		        	formatter:function(params){
		        		return params.data.value[2];
		        	}	        		
	        	}

	        },
	        data: [
	            {value:[10, 20,'四川',70],itemStyle:{normal:{color:'#26D4FF'}}},
	            {value:[8.0, 6.95,'云南',60],itemStyle:{normal:{color:'#40CD84'}}},
	            {value:[13.0, 7.58,'河北',50],itemStyle:{normal:{color:'#FFBF01'}}},
	            {value:[9.0, 8.81,'山东',40],itemStyle:{normal:{color:'#FB7A53'}}},
	            {value:[11.0, 8.33,'广西',35],itemStyle:{normal:{color:'#5AEDC5'}}},
	            {value:[5.0, 5.68,'青海',30],itemStyle:{normal:{color:'#8C65E6'}}}
            ],
        	tooltip:{
	            formatter:function(params){
	        		return params.data.value[2]+'<br/>库存量：'+params.data.value[1]+'<br/>库销比：'+params.data.value[0];
	        	},
						confine:true
	        },
	        type: 'scatter'
	    }]
}
};

let options32 = {
	name:'chart32',
	width:'100%',
	height:'100%',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					confine:true

	      },
	      legend: {
	      	itemHeight:9,
	      	top:'0%',
	      	//icon:'circle',
	      	//icon:'image://http://localhost:8082/734f4be4f7e00bd7800b710ba53e8901.png',
	        data: ["CS9","CS10","Q6"],
	        textStyle:{
	        	color:'#a3a3a3'
	        }
	        // ,
	        // type:'scroll'
	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "3%",
			    top:'12%',
			    containLabel: true
		  },
	      yAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ['1月','2月','3月','4月','5月','6月','7月']
	      },
	      xAxis:{

		        type: "value",
		        show:false,
		        axisLabel: {
		          show:false,
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
			      }
		        },
		        axisLine:{
		        	show:false,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "CS9",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "CS10",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	          name: "Q6",
	          type: "bar",
	          smooth: true,
	          symbol: "emptyCircle",
	          barMaxWidth:'35px',
	          stack:'1',
	          areaStyle:{
	              normal:{
	                  opacity:1
	              }
	          },
	          data: [150, 232, 201, 154, 190, 330, 410]
	        }
	        
	      ]
	}
};

let options33 = {
	name:'chart33',
	type:'pie',
	width:'100%',
	height:'36px',
	option:{
		  color:baseColors,
	      tooltip: {
	        trigger: "axis",
					show:true,
					confine:true,
					formatter:function(params){
						let str = `${params[0]['name']}<br/>销量：${util.eNum(params[0]['value'])}`;
						return str;
					}

	      },
	      grid: {
			    left: "0%",
			    right: "0%",
			    bottom: "5%",
			    top:'5%',
			    containLabel: true
		  },
	      xAxis: {
	      	show:false,
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: baseMonth
	      },
	      yAxis: {
	      		show:false,
		        type: "value",
		        axisLabel: {
		          textStyle: {
			        color: "#a3a3a3",
			        fontSize: 12
						},
						formatter:''
		        },
		        axisLine:{
		        	show:true,
		        	lineStyle:{
		        		color:'#f1f1f1'
		        	}
		        }
	      },
	      title:{},
	      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
	      series: [
	        {
	          name: "2018年",
	          type: "line",
	          smooth: false,
	          symbol: "none",
	          barMaxWidth:'35px',
	          data: [10, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
	        }
	        
	      ]
	}
};

let options34 = {
	name:'chart34',
	type:'pie',
	width:'100%',
	height:'100%',
	option:{
		title:'',
	    grid: {
		    left: "0%",
		    right: "0%",
		    bottom: "5%",
		    top:'5%',
		    containLabel: true
		},
	    xAxis: {
	    	axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
	    },
	    tooltip:{
	    	trigger: "axis",
	      formatter:function(params){
	        	let str = `${params[0]['name']}<br/>优惠后价格区间：${params[0]['value'][1]}万-${params[0]['value'][2]}万`;

	            return str;
	      },
				confine:true
	    },
	    yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#a3a3a3",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
	        }
		},
	    series: [{
	        type: 'k',
	        barMaxWidth:'35px',
	        itemStyle:{
	            normal:{
	                color:'#FB7A53',
	                borderColor:'#FB7A53',
	                borderColor0:'#40CD804',
	                color0:'#40CD84'
	            }
	        },
	        data: [
	            [20, 30, 20, 30],
	            [40, 35, 40, 35],
	            [33, 3, 30, 3],
	            [40, 46, 40, 46]
	        ]
	    }]
   }
}

let data35 = [
    [5000, 10000, 6785.71],
    [4000, 10000, 6825],
    [3000, 6500, 4463.33],
    [2500, 5600, 3793.83],
    [2000, 4000, 3060],
    [2000, 4000, 3222.33],
    [2500, 4000, 3133.33],
    [1800, 4000, 3100],
    [2000, 3500, 2750],
    [2000, 3000, 2500],
    [1800, 3000, 2433.33],
    [2000, 2700, 2375],
    [1500, 2800, 2150],
    [1500, 2300, 2100],
    [1600, 3500, 2057.14],
    [1500, 2600, 2037.5],
    [1500, 2417.54, 1905.85],
    [1500, 2000, 1775],
    [1500, 1800, 1650]
];
var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
var barHeight = 50;
let options35 = {
	name:'chart35',
	width:'100%',
	height:'100%',
	option:{
	    title: '',
	    grid: {
	        top: 100
	    },
	    angleAxis: {
	        type: 'category',
	        data: ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台']
	    },
	    tooltip: {
	        show: true,
	        formatter: function (params) {
	            var id = params.dataIndex;
	            return cities[id] + '<br>最低：' + data35[id][0] + '<br>最高：' + data35[id][1] + '<br>平均：' + data35[id][2];
	        },
					confine:true
	    },
	    radiusAxis: {
				zlevel:10
	    },
	    polar: {
	    },
	    series: [{
	        type: 'bar',
	        itemStyle: {
	            normal: {
	                color: 'transparent'
	            }
	        },
	        data: data35.map(function (d) {
	            return d[0];
	        }),
	        coordinateSystem: 'polar',
	        stack: '最大最小值',
	        silent: true
	    }, {
	        type: 'bar',
	        data: data35.map(function (d) {
	            return d[1] - d[0];
	        }),
	        itemStyle: {
	            normal: {
	                color: '#26D4FF'
	            }
	        },
	        coordinateSystem: 'polar',
	        name: '价格范围',
	        stack: '最大最小值'
	    }]
	}
}
let options36 = {
	name:'chart36',
	width:'100%',
	height:'100%',
	option:{
          title:{},
		  color:['#26D4FF','#FFBF01','#FB7A53'],
	      tooltip: {
            trigger: "axis",
            axisPointer: {
				type: 'none'
			},
	        formatter:function(params){
	        	let _str = params[0].name + ': '
                        + params[0].data.cnt + '人<br/>'
                        + "占比: " +params[0].value + "%";
                return _str;
            }
	      },
	      legend: {
	      	show:false
          },
          label:{
            normal:{
                show:true,
                align:'left',
                position:'right',
                color:'#a3a3a3',
                formatter:function(params){
                    return params.value+'%';
                }
            }
          },
          
          grid: {
			left: 0,
			right:'20px',
			bottom:'30px',
			top: '20px',
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
            inverse:true,
			data: ['公务员','职员','教师','医生']
          },
	      series: [
	        {
				name: '客户分布',
				type: 'bar',
                barMaxWidth:'35px',
                smooth: true,
				data: [12,18,33,220],
			}
	      ]
	}
};

let options37 = {
	name:'chart37',
	width:'100%',
	height:'100%',
	option:{
		tooltip : {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [
			{
				name: '业务指标',
				type: 'gauge',
				splitNumber:5,
				radius: "85%",
				pointer:{
					show:false
				},
				axisLine:{
					show:true,
					lineStyle:{
						color:[
							[
								30/100, new echarts.graphic.LinearGradient(
								1, 1, 0, 0, [{
								offset: 0,
								color: '#9E39FF'
								},
								{
									offset: 1,
									color: '#24ADFF'
								}
								]
								)
							],
							[1, "#1D5698"]
						],
						width:14,
						opacity:0.8
					}
				},
				splitLine:{
					show:false
				},
				axisTick:{
					show:false
				},
				axisLabel:{
					distance:-52,
					color:'#577dff',
					formatter:'{value}'
				},
				itemStyle:{
					color:'#fff'
				},
				detail: {
					formatter:'{value}%',
					fontSize:25,
					color:'#fff',
					offsetCenter:[0, '0%']
	
					
				},
				data: [{value: 60}]
			}
		]
	}
};

let options38 = {
	name:'chart38',
	width:'100%',
	height:'100%',
	option:{
		  color:['#00B4FF','#FB4D7B'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	        //formatter: "{a} <br/>{b} : {c} ({d}%)"
		  },
		  icon:'circle',
	      legend: {
			  show:true,
			  itemHeight:9,
			  textStyle: {
		        color: "#b1bef7",
				fontSize: 12,
			  }
			  
	       // data: ["声量指数", "正面指数", "负面指数"]
	      },
	      grid: {
		    left: "3%",
		    right: "3%",
		    bottom: "3%",
		    top:'10%',
		    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#b1bef7",
				fontSize: 12,
				
			  },
			  formatter:'{value}月'
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#2F3856'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
	      },
	      yAxis: {
	        type: "value",
	        axisLabel: {
	          textStyle: {
		        color: "#b1bef7",
		        fontSize: 12
		      }
	        },
	        axisLine:{
	        	show:false,
	        	lineStyle:{
	        		color:'#f1f1f1'
	        	}
			},
			splitLine:{
				lineStyle:{
					color:'#2F3856'
				}
			}
			
	      },
	      series: [
	        {
	          //name: "声量指数",
	          type: "line",
	          smooth: false,
	          symbol: "emptyCircle",
	          data: [120, 132, 101, 134, 90, 230, 210],
	          areaStyle: {
	          	normal:{
	          		opacity:0.3
	          	}
	            
	          }
	        }
	      ]
	}

};

let options39 = {
	name:'chart39',
	width:'100%',
	height:'100%',
	option:{
		  color:['#8C65E6','#FFBF01','#00B4FF','#31DD7B'],
	      tooltip: {
	        trigger: "axis",
					confine:true
	        //formatter: "{a} <br/>{b} : {c} ({d}%)"
		  },
		  icon:'circle',
	      legend: {
			  show:true,
			  itemHeight:9,
			  textStyle: {
		        color: "#b1bef7",
				fontSize: 12,
			  },
			  data: ["声量指数", "声量指数1", "负面指数"]
	      },
	      grid: {
		    left: "3%",
		    right: "3%",
		    bottom: "3%",
		    top:'10%',
		    containLabel: true
		  },
	      xAxis: {
	        type: "category",
	        boundaryGap: true,
	        axisLabel: {
	          textStyle: {
		        color: "#b1bef7",
				fontSize: 12,
				
			  },
			  formatter:'{value}月'
	        },
	        axisLine:{
	        	show:true,
	        	lineStyle:{
	        		color:'#2F3856'
	        	}
	        },
	        splitLine:{
	        	show:false
	        },
	        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
	      },
	      yAxis: [
			{
				type: "value",
				axisLabel: {
				textStyle: {
					color: "#b1bef7",
					fontSize: 12
				}
				},
				axisLine:{
					show:false,
					lineStyle:{
						color:'#f1f1f1'
					}
				},
				splitLine:{
					lineStyle:{
						color:'#2F3856'
					}
				}
			},
			{
				type: "value",
				axisLabel: {
					textStyle: {
						color: "#b1bef7",
						fontSize: 12
					},
					formatter:'{value}%'
				},
				axisLine:{
					show:false,
					lineStyle:{
						color:'#f1f1f1'
					}
				},
				splitLine:{
					show:false,
					lineStyle:{
						color:'#2F3856'
					}
				}
			} 
		  ],
	      series: [
	        {
	          name: "声量指数",
	          type: "line",
	          smooth: false,
	          symbol: "circle",
	          data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: "声量指数1",
				type: "line",
				smooth: false,
				symbol: "circle",
				data: [130, 142, 141, 154, 40, 240, 230]
			},
			{
				name: "",
				type: "bar",
				barGap:'0.1',
				barWidth:10,
				yAxisIndex:1,
				smooth: true,
				barMaxWidth:'20px',
				symbol: "none",
				itemStyle:{
						normal:{
							barBorderRadius: [5, 5, 0, 0]
						}
					  
				},
				data:[130, 122, 111, 124, 10, 23, 310]
			},
			{
				name: "",
				type: "bar",
				barGap:'0.1',
				barWidth:10,
				yAxisIndex:1,
				smooth: true,
				barMaxWidth:'20px',
				symbol: "none",
				itemStyle:{
						normal:{
							barBorderRadius: [5, 5, 0, 0]
						}
					  
				},
				data:[130, 122, 111, 124, 10, 23, 310]
			}
	      ]
	}

};





// 1-9 舆情动态
// 10-16 库存分析
// 17-20 提车分析
// 21-22 终端分析


let EchartOptions = {
	options1,
	options2,
	options3,
	options4,
	options5,
	// options6,
	options7,
	options8,
	options9,

	options10,
	options11,
	options12,
	options13,
	options14,
	// options15,
	options16,

	options17,
	options18,
	options19,
	options20,

	options21,
	options22,

	options23,
	options24,
	options25,
	options26,
	options27,

	options28,
	options29,
	options30,
	options31,
	options32,
	options33,
	options34,
    options35,
	options36,
	options37,
	options38,
	options39
};
export default Object.assign({},EchartOptions2,EchartOptions) 