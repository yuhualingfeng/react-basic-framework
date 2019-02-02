
class Main extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let {i18nObj:i18n} = this.props.i18n;
		return (
		<div>
			main{i18n[1]}{util.name}
			<div>
				{this.props.children}
			</div>
		</div>
		)
	}
}


let mapStateToProps = (state,ownProps)=>{
	return {
		i18n:state.i18n
	}
}

module.exports = ReactRedux.connect(mapStateToProps)(Main)