define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/contents/contents');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/JianhaoAndroid/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='false';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cQfiqYb';
	this._flag_='b2a9a0e4b9a37546dfdfadfeac52891b';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fBelongDemand":{"define":"fBelongDemand","label":"所属需求","name":"fBelongDemand","relation":"fBelongDemand","type":"String"},"fBelongSolutionId":{"define":"fBelongSolutionId","label":"方案","name":"fBelongSolutionId","relation":"fBelongSolutionId","type":"String"},"fBelongUserId":{"define":"fBelongUserId","label":"所属用户","name":"fBelongUserId","relation":"fBelongUserId","type":"String"},"fFeature":{"define":"fFeature","label":"类别","name":"fFeature","relation":"fFeature","type":"String"},"fID":{"define":"fID","label":"检测ID","name":"fID","relation":"fID","type":"String"},"fMediaId":{"define":"fMediaId","label":"图片","name":"fMediaId","relation":"fMediaId","type":"String"},"fScore":{"define":"fScore","label":"分数","name":"fScore","relation":"fScore","type":"String"},"fStatus":{"define":"fStatus","label":"状态","name":"fStatus","relation":"fStatus","type":"String"},"fTime":{"define":"fTime","label":"检测时间","name":"fTime","relation":"fTime","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"checkDataCustomRefresh"},"idColumn":"fID","limit":20,"xid":"checkData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fDemandId":{"define":"fDemandId","label":"需求ID","name":"fDemandId","relation":"fDemandId","type":"String"},"fFeatureId":{"define":"fFeatureId","label":"检测类别","name":"fFeatureId","relation":"fFeatureId","type":"String"},"fMediaId":{"define":"fMediaId","label":"图片","name":"fMediaId","relation":"fMediaId","type":"String"},"fScore":{"define":"fScore","label":"分数","name":"fScore","relation":"fScore","type":"String"}},"directDelete":false,"events":{},"idColumn":"fDemandId","limit":20,"xid":"checkTemp"});
}}); 
return __result;});