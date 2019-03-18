
import { combineReducers } from 'redux'
import i18nJson from '../components/common/i18n.js'
import '../components/common/Cookies'

// 语言切换
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

function users(state={},action){
	// debugger;
	console.log(action.type);
	if(action.type == 'USER_FETCH_SUCCEEDED'){
		return action.user;
	}else if(action.type === 'USER_FETCH_FAILED'){
		return state;
	}else{
		return state;
	}
}


export default combineReducers({
	i18n,
	users
})