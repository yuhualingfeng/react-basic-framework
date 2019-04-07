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
        this.slideUpDown = this.slideUpDown.bind(this);
        
	}
	componentDidMount(){
			
    }
    getElements(){
        let {tree} = this.state;
        let that = this;
        function getEle(nodes){
            let elements = nodes.map((item,key)=>{
                // let hasChild = !util.isNull(item.children);
                let hasChild = !!item.children;
                let symbol = hasChild ? (item.slideDown?'-':'+'):'';
                let treeList = hasChild ? (<div className={`tree-list${item.slideDown?'':' hide'}`} style={{paddingLeft:20}}>{getEle(item.children)}</div>):null;
                return (<div key={key}>
                        <div className='tree-title' onClick={()=>that.slideUpDown(item.id)}>{symbol}{item.id}</div>
                        {treeList}
                    </div>);
            });
            return elements;            
        }

        return getEle(tree);
    }
    slideUpDown(id){
        let {tree} = this.state;
        function FindItem(nodes){
            for(let i in nodes){
                let item = nodes[i];
                let hasChild = !!item.children;
                if(item.id === id){
                    item.slideDown = !item.slideDown;
                    break;
                }else{
                    if(hasChild){
                        FindItem(item.children);
                    }
                }
            }
            

        }

        FindItem(tree);
        this.setState({tree});
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