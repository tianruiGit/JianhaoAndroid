define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	require("css!$UI/JianhaoAndroid/plugin/alert/sweetalert").load();
	require("$UI/JianhaoAndroid/plugin/alert/sweetalert.min");

	var Model = function() {
		this.callParent();
		this.sex;
	};

	Model.prototype.initInfoSureClick = function(event) {
		var nickname = this.getIDByXID("nickName");
		if ($("#" + nickname).val() == "") {
			swal({
				title : "您忘了输入昵称哟!",
				type : "error",
				confirmButtonText : "确定",
				showConfirmButton : true
			});
			return;
		}
		var age = this.getIDByXID("age");
		if ($("#" + age).val() == "") {
			swal({
				title : "您忘了输入年龄哟!",
				type : "error",
				confirmButtonText : "确定",
				showConfirmButton : true
			});
			return;
		}
		var reg = new RegExp("^[0-9]*$");
		if (!reg.test($("#" + age).val())) {
			swal({
				title : "您输入的年龄不对哟!",
				type : "error",
				confirmButtonText : "确定",
				showConfirmButton : true
			});
			return;
		}
		var height = this.getIDByXID("height");
		if ($("#" + height).val() == "") {
			swal({
				title : "您忘了输入年龄哟!",
				type : "error",
				confirmButtonText : "确定",
				showConfirmButton : true
			});
			return;
		}
		if (!reg.test($("#" + height).val())) {
			swal({
				title : "您输入的年龄不对哟!",
				type : "error",
				confirmButtonText : "确定",
				showConfirmButton : true
			});
			return;
		}
		if(this.sex == null){
			swal({
				title : "您忘了选择性别哟!",
				type : "error",
				confirmButtonText : "确定",
				showConfirmButton : true
			});
			return;
		}
		var id = justep.UUID.createUUID();
		localStorage.setItem("UserId",id);
		localStorage.setItem("UserStatus","0");
		
		var user = this.getParent().comp("userData");
		user.clear();
		//创建新用户
		var newUser = user.newData({
			index : 0,
			defaultValues : [ {
				"fUserId" : id,
				"fPhone" :  "",
				"fName" : $("#" + nickname).val(),
				"fPassword" : "",
				"fType" : "1",
				"fAge" : $("#" + age).val(),
				"fSex" : this.sex,
				"fCountry" : "",
				"fProvince" : "",
				"fCity" : "",
				"fHead":"",
				"fCreateTime" : justep.Date.toString(new Date())
			} ]
		});
 
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "saveUser",
			"async" : true,
			"params" : {
				"userData":user.toJson(true)
			},
			"success" : function(resultData, xhr) {
				user.applyUpdates();
				window.location.href="mainActivity.w";
			}
		});
	};

	Model.prototype.boyImageClick = function(event) {
		var boyImage = this.getIDByXID("boyImage");
		$("#" + boyImage).attr("src",require.toUrl("$UI/JianhaoAndroid/images/user/sexboy1.png"));
		var girlImage = this.getIDByXID("girlImage");
		$("#" + girlImage).attr("src", require.toUrl("$UI/JianhaoAndroid/images/user/sexgirl2.png"));
		var boyName = this.getIDByXID("boyName");
		$("#" + boyName).css("color", "#FE6B5B");
		var girlName = this.getIDByXID("girlName");
		$("#" + girlName).css("color", "#999");
		this.sex = 1;
	};

	Model.prototype.girlImageClick = function(event) {
		var boyImage = this.getIDByXID("boyImage");
		$("#" + boyImage).attr("src", require.toUrl("$UI/JianhaoAndroid/images/user/sexboy2.png"));
		var girlImage = this.getIDByXID("girlImage");
		$("#" + girlImage).attr("src", require.toUrl("$UI/JianhaoAndroid/images/user/sexgirl1.png"));
		var boyName = this.getIDByXID("boyName");
		$("#" + boyName).css("color", "#999");
		var girlName = this.getIDByXID("girlName");
		$("#" + girlName).css("color", "#FE6B5B");
		this.sex = 2;
	};

	return Model;
});