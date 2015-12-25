window.__justep.__ResourceEngine.loadCss([{url: '/v_9cc532df5ac644258c17a939189dac2cl_zh_CNs_d_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/form/css/form,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/accordion/css/accordion,$model/system/components/justep/common/css/scrollable,$model/system/components/bootstrap/pager/css/pager,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/bootstrap/navs/css/navs,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/bootstrap/navbar/css/navbar,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/bootstrap/dialog/css/dialog,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar,$model/system/components/bootstrap/tabs/css/tabs,$model/system/components/bootstrap/pagination/css/pagination'},{url: '/v_2ec8729478e840bf8bcd41dcd35c4678l_zh_CNs_d_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_024d079ea6a543baa2420d64d5899395l_zh_CNs_d_/system/components/comp.min.js','/v_35757b3960d947a5a2887ed3caf55dd4l_zh_CNs_d_/system/common.min.js','/v_cc5fa1f1ee86416b8a6480514f463de1l_zh_CNs_d_/system/core.min.js']);define(function(require){
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
