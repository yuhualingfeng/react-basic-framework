let util = {
	name:'welcome'
}

util.isNull = function(param){
	if(!param && typeof(param) != 'undefined' && param!=0){
		return true;
	}
	return false;
}

module.exports = util