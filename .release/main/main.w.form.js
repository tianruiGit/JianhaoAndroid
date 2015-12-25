define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/JianhaoAndroid/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='ceQFZr2';
	this._flag_='5512e7a3fbcc8b85721297e8e871969e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAge":{"define":"fAge","label":"用户年龄","name":"fAge","relation":"fAge","rules":{"integer":true},"type":"Integer"},"fCity":{"define":"fCity","label":"用户所在城市","name":"fCity","relation":"fCity","type":"String"},"fCountry":{"define":"fCountry","label":"用户所在国家","name":"fCountry","relation":"fCountry","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"用户创建时间","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fHead":{"define":"fHead","label":"用户头像","name":"fHead","relation":"fHead","type":"String"},"fHeight":{"define":"fHeight","label":"用户身高","name":"fHeight","relation":"fHeight","type":"String"},"fName":{"define":"fName","label":"用户昵称","name":"fName","relation":"fName","type":"String"},"fPassword":{"define":"fPassword","label":"用户密码","name":"fPassword","relation":"fPassword","type":"String"},"fPhone":{"define":"fPhone","label":"用户手机","name":"fPhone","relation":"fPhone","type":"String"},"fProvince":{"define":"fProvince","label":"用户所在省份","name":"fProvince","relation":"fProvince","type":"String"},"fSex":{"define":"fSex","label":"用户性别","name":"fSex","relation":"fSex","type":"String"},"fType":{"define":"fType","label":"用户类型","name":"fType","relation":"fType","type":"String"},"fUserId":{"define":"fUserId","label":"用户ID","name":"fUserId","relation":"fUserId","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"userDataCustomRefresh"},"idColumn":"fUserId","limit":20,"xid":"userData"});
}}); 
return __result;});