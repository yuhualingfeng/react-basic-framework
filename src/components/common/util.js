// 公用方法
let util = {
	name:'welcome'
}

util.isNull = function(param){
	if(!param && typeof(param) != 'undefined' && param!=0){
		return true;
	}
	return false;
}

util.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * [eNum 科学计数转换]
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
util.eNum = function(number,nullStr){
	if(typeof number !== 'number' || isNaN(number)){
		return nullStr ? nullStr : 0;
	}
	return parseFloat(number).toLocaleString();
}

module.exports = util