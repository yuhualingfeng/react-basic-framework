import {Link} from 'react-router-dom'
class Demo extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            tree:[
                {
                    id:1,
                    children:[
                        {
                            id:2,
                            children:[
                                {
                                    id:3
                                }
                            ]
                        }
                    ]
                },
                {
                    id:4,
                    children:[
                        {
                            id:5,
                            children:[
                                {
                                    id:6
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        this.getElements = this.getElements.bind(this);
        
	}
	componentDidMount(){
			
    }
    getElements(){
        let {tree} = this.state;
        let elements = tree.map((item,key)=>{
            return (<div key={key}>{item.id}</div>);
        });
        return elements;

    }

	render(){
		return(
			<div>
                <div>树形组件</div>
                <div>
                    {this.getElements()}
                </div>
			</div>
			);
	}
}

const mapStateToProps = (state,ownProps)=>{
	return {
	}
}


export default ReactRedux.connect(mapStateToProps)(Demo)