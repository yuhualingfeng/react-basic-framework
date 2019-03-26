
import { combineReducers } from 'redux';
import i18nJson from '../components/common/i18n.js';
import '../components/common/Cookies';
import configs from './config'; 
import { red } from 'ansi-colors';

/*************************语言切换****************************/
let language = navigator.language || navigator.browserLanguage;
language =Cookies.get('language') || language.toLocaleLowerCase().replace('-','_');   // 读取 language Cookie,如果没有就通过浏览器所在地区来判断显示语言.
let languageJson;

if(language=='zh_cn'){
	languageJson= {
		i18nObj:i18nJson['zh_cn'],
		language:'zh_cn'
	} ;
}else{
 	languageJson= {
		i18nObj:i18nJson['en_us'],
		language:'en_us'
	};
}
function i18n(state=languageJson,action){

	if(action.type == 'i18n'){
		if(action.language == 'zh_cn'){
			return {
				i18nObj:i18nJson['zh_cn'],
				language:'zh_cn'
			};
		}else{
			return {
				i18nObj:i18nJson['en_us'],
				language:'en_us'
			};
		}
	}
	
	return state;
}
/*************************语言切换****************************/

/**
 * reudux生成器
 */
function reduxCreator(){
	let reducers = {};
	for(let i in configs){
		let config = configs[i];
		let {name} = config;
		reducers[config.reduxName] = function(state={state:'init'},action){
			if(action.type == 'FETCH_'+name+'_LOADING'){
				return {state:'loading'};
			}else if(action.type == 'FETCH_'+name+'_SUCCEEDED'){
				return {state:'success',result:action.result};
			}else if(action.type === 'FETCH_'+name+'_FAILD'){
				return {state:'faild',message:action.message};
			}else{
				return state;
			}
		};
	}
	return reducers;
}
let reducers = Object.assign({},reduxCreator(),{
	i18n
});

export default combineReducers(reducers)