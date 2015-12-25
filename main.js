define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/JianhaoAndroid/baas");
	require("$UI/system/components/justep/windowContainer/windowContainer");
	require("css!$UI/JianhaoAndroid/plugin/alert/sweetalert").load();
	require("$UI/JianhaoAndroid/plugin/alert/sweetalert.min");
	require("$UI/JianhaoAndroid/plugin/lunbo/js/jquery-1.10.2.min");
	require("$UI/JianhaoAndroid/plugin/lunbo/js/jquery.kinMaxShow-1.1.min");

	require("cordova!org.apache.cordova.geolocation");
	var Model = function() {
		this.callParent();
		this._userID = localStorage.getItem("UserId");
		this._userStatus = "0";// localStorage.getItem("UserStatus");
	};

	Model.prototype.modelLoad = function(event) {

		// 窗体初始化大小
		this.initWindow();
		// 初始轮播广告
		this.initGuanggao();
		// 初始检测状态
		this.initCheckState();
		// 初始用户状态
		this.initUserStatus();
	};
	// 初始窗口大小
	Model.prototype.initWindow = function() {

		$("#bianzhengTable").height(window.innerHeight - 150 - 48);
	};
	// 初始检测状态
	Model.prototype.initCheckState = function() {

		var rowsJianfei = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '01', "1" ]);
		if (rowsJianfei.length > 0) {
			this.initJiaobiao("Jianfei");
		}
		var rowsQudou = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '02', "1" ]);
		if (rowsQudou.length > 0) {
			this.initJiaobiao("Qudou");
		}
		var rowsBianmi = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '03', "1" ]);
		if (rowsBianmi.length > 0) {
			this.initJiaobiao("Bianmi");
		}
		var rowsKouchou = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '05', "1" ]);
		if (rowsKouchou.length > 0) {
			this.initJiaobiao("Kouchou");
		}
		var rowsShimian = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '06', "1" ]);
		if (rowsShimian.length > 0) {
			this.initJiaobiao("Shimian");
		}
		var rowsHeitou = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '07', "1" ]);
		if (rowsHeitou.length > 0) {
			this.initJiaobiao("Heitou");
		}
		var rowsHuanjie = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '08', "1" ]);
		if (rowsHuanjie.length > 0) {
			this.initJiaobiao("Huanjie");
		}
	}
	// 初始角标位置
	Model.prototype.initJiaobiao = function(imgs) {
		if (imgs != "huanjie") {
			var td = $("#bz" + imgs).height();
			var imgHeight = $("#bz" + imgs + "Image").height();
			var iconTop = (td - imgHeight) * 0.5 + imgHeight;
			$("#bz" + imgs + "State").css("margin-top", "-" + iconTop + "px");
			$("#bz" + imgs + "State").css("display", "block");
		} else {
			var td = $(".bzCenter").height();
			var tdTable = $("#bzCenterTable").height();
			$("#bzHuanjieIcon").css("margin-top", tdTable - td - 14);
			$("#bzHuanjieIcon").css("display", "block");
		}
	};

	// 初始轮播广告
	Model.prototype.initGuanggao = function() {
		$(function() {
			$("#kinMaxShow").kinMaxShow();
		});
	};

	// 初始用户状态
	Model.prototype.initUserStatus = function() {
		if (this._userStatus == "1" || this._userStatus == "0") {
			$(".user-info-bottom").css("display", "none");
		} else if (this._userStatus == "2") {
			$(".user-info-bottom").css("display", "block");
			var phone = this.getIDByXID("userPhone");
			$("#" + phone).val(this._userId);
		}
	}
	// 失眠检测
	Model.prototype.shimianClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "06");
		justep.Portal.openWindow("$UI/JianhaoAndroid/pages/bianzheng/shimian/shimian.w")
	}
	// 失眠方案
	Model.prototype.shimianSolutionClick = function(event) {
		alert("失眠方案");
	}
	// 祛痘检测
	Model.prototype.qudouClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "02");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/qudou/qudou.w"))
	}
	// 祛痘方案
	Model.prototype.qudouSolutionClick = function(event) {
		alert("祛痘方案");
	}
	// 黑头检测
	Model.prototype.heitouClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "07");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 黑头方案
	Model.prototype.heitouSolutionClick = function(event) {
		alert("黑头方案");
	}
	// 减肥检测
	Model.prototype.jianfeiClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "01");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/jianfei/jianfei.w"));
	}
	// 减肥方案
	Model.prototype.jianfeiSolutionClick = function(event) {
		alert("减肥方案");
	}
	// 便秘检测
	Model.prototype.bianmiClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "03");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 便秘方案
	Model.prototype.bianmiSolutionClick = function(event) {
		alert("便秘方案");
	}
	// 口臭检测
	Model.prototype.kouchouClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "05");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 口臭方案
	Model.prototype.kouchouSolutionClick = function(event) {
		alert("口臭方案");
	}
	// 缓解疲劳检测
	Model.prototype.huanjieClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "08");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 缓解疲劳方案
	Model.prototype.huanjieSolutionClick = function(event) {
		alert("缓解疲劳方案");
	}
	// 加载我信息
	Model.prototype.initMe = function() {

	}
	// 辩证按钮点击
	Model.prototype.btnBiangzhengClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz1.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw2.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx2.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me2.png");
	};
	// 造物按钮点击
	Model.prototype.btnZaowuClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz2.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw1.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx2.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me2.png");
	};
	// 发现按钮点击
	Model.prototype.btnFaxianClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz2.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw2.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx1.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me2.png");
	};
	// 我按钮点击
	Model.prototype.btnMeClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz2.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw2.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx2.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me1.png");
	};

	Model.prototype.userDataCustomRefresh = function(event) {
		var data = event.source;
		var params = {
			"id" : this._userID
		};
		var success = function(resultData) {
			var append = event.options && event.options.append;
			data.loadData(resultData, append);
		};
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "queryUser",
			"params" : params,
			"success" : success
		});
	};
	// 上传头像
	Model.prototype.uploadHeadClick = function(event) {
		var user = this.comp("userData");
		this.comp("wdHead").open({data:user.toJson(true)});
	}

	// 更新用户名称
	Model.prototype.updateNameClick = function(event) {
		var user = this.comp("userData");
		if (user.getCount() > 0) {
			swal({
				title : "更改昵称",
				text : "",
				type : "input",
				showCancelButton : true,
				closeOnConfirm : false,
				confirmButtonText : "确定",
				cancelButtonText : "取消",
				animation : "slide-from-top",
				inputPlaceholder : "请输入您的昵称"
			}, function(inputValue) {
				if (inputValue === false)
					return false;
				if (inputValue === "") {
					swal.showInputError("请输入您的昵称!");
					return false;
				}
				if (inputValue.length > 10) {
					swal.showInputError("昵称要在10字符以内!");
					return false;
				}
				user.setValue("fName", inputValue);
				baas.sendRequest({
					"url" : "/jhapi",
					"action" : "saveUser",
					"async" : false,
					"params" : {
						"userData" : user.toJson(true)
					},
					"success" : function(resultData, xhr) {
						user.applyUpdates();
						swal({
							title : "更改成功",
							type : "success",
							confirmButtonText : "确定",
							showConfirmButton : true
						});
					}
				});
			});
		}

	};
	// 用户登陆
	Model.prototype.userLoginClick = function(event) {
		if (this._userStatus == "0" || this._userStatus == "1") {
			window.location.href = "mainActivity.w";
		}
	}
	// 更新用户性别
	Model.prototype.updateSexClick = function(event) {
		var user = this.comp("userData");
		if (user.getCount() > 0) {
			swal({
				title : "更改性别",
				text : "",
				type : "input",
				showCancelButton : true,
				closeOnConfirm : false,
				confirmButtonText : "确定",
				cancelButtonText : "取消",
				animation : "slide-from-top",
				inputPlaceholder : "请输入您的性别（男/女）"
			}, function(inputValue) {
				if (inputValue === false)
					return false;
				if (inputValue === "") {
					swal.showInputError("请输入'男'或'女'!");
					return false;
				}
				if (inputValue != "男" && inputValue != "女") {
					swal.showInputError("请输入'男'或'女'!");
					return false;
				}

				if (inputValue == "男") {
					user.setValue("fSex", "1");
				} else if (inputValue == "女") {
					user.setValue("fSex", "2");
				}

				baas.sendRequest({
					"url" : "/jhapi",
					"action" : "saveUser",
					"async" : false,
					"params" : {
						"userData" : user.toJson(true)
					},
					"success" : function(resultData, xhr) {
						user.applyUpdates();
						swal({
							title : "更改成功",
							type : "success",
							confirmButtonText : "确定",
							showConfirmButton : true
						});
					}
				});
			});
		}

	};

	// 更新用户年龄
	Model.prototype.updateAgeClick = function(event) {
		var user = this.comp("userData");
		if (user.getCount() > 0) {
			swal({
				title : "更改年龄",
				type : "input",
				showCancelButton : true,
				closeOnConfirm : false,
				confirmButtonText : "确定",
				cancelButtonText : "取消",
				animation : "slide-from-top",
				inputPlaceholder : "请输入您的年龄"
			}, function(inputValue) {
				if (inputValue === false)
					return false;
				if (inputValue === "" || inputValue > 100) {
					swal.showInputError("请输入您的真实年龄!");
					return false;
				}

				var reg = new RegExp("^[0-9]*$");
				if (!reg.test(inputValue)) {
					swal.showInputError("请输入数字!");
					return false;
				}
				user.setValue("fAge", inputValue);

				baas.sendRequest({
					"url" : "/jhapi",
					"action" : "saveUser",
					"async" : false,
					"params" : {
						"userData" : user.toJson(true)
					},
					"success" : function(resultData, xhr) {
						user.applyUpdates();
						swal({
							title : "更改成功",
							type : "success",
							confirmButtonText : "确定",
							showConfirmButton : true
						});
					}
				});
			});
		}

	};
	// 更新用户身高
	Model.prototype.updateHeightClick = function(event) {
		var user = this.comp("userData");
		if (user.getCount() > 0) {
			swal({
				title : "更改身高",
				type : "input",
				showCancelButton : true,
				closeOnConfirm : false,
				confirmButtonText : "确定",
				cancelButtonText : "取消",
				animation : "slide-from-top",
				inputPlaceholder : "请输入您的身高"
			}, function(inputValue) {
				if (inputValue === false)
					return false;
				if (inputValue === "" || inputValue > 250) {
					swal.showInputError("请输入您的真实身高!");
					return false;
				}

				var reg = new RegExp("^[0-9]*$");
				if (!reg.test(inputValue)) {
					swal.showInputError("请输入数字!");
					return false;
				}
				user.setValue("fHeight", inputValue);

				baas.sendRequest({
					"url" : "/jhapi",
					"action" : "saveUser",
					"async" : false,
					"params" : {
						"userData" : user.toJson(true)
					},
					"success" : function(resultData, xhr) {
						user.applyUpdates();
						swal({
							title : "更改成功",
							type : "success",
							confirmButtonText : "确定",
							showConfirmButton : true
						});
					}
				});
			});
		}

	};
	// 更新用户位置
	Model.prototype.updateCityClick = function(event) {
		var self = this;
		require([ 'http://api.map.baidu.com/api?v=2.0&ak=q3aGfICnLzgY5i4FtjNAnO6O&callback=_queryAddr' ], function() {
			if (window.BMap && window.BMap.Map) {
				window._queryAddr();
			}
		});
		window._queryAddr = function() {

			var user = self.comp("userData");
			var gpsDtd = $.Deferred();
			var info;
			var confirmButtonText;
			if (user.getCount() > 0) {
				if (user.getValue("fCity") == "") {
					info = "您现在还没有定位自己的位置";
					confirmButtonText = "定位";
				} else {
					info = "您现在所在城市为：" + user.getValue("fCity");
					confirmButtonText = "重新定位";
				}
				swal({
					title : "定位城市",
					text : info,
					showCancelButton : true,
					closeOnConfirm : false,
					confirmButtonText : confirmButtonText,
					cancelButtonText : "取消",
					animation : "slide-from-top",
					showLoaderOnConfirm : true
				}, function(isConfirm) {
					if (isConfirm) {
						if (navigator.geolocation) {
							var success = function(data) {
								var geoc = new BMap.Geocoder();
								var pt = new BMap.Point(data.coords.longitude, data.coords.latitude);
								geoc.getLocation(pt, function(rs) {
									var addComp = rs.addressComponents;
									user.setValue("fCountry", "中国");
									user.setValue("fProvince", addComp.province);
									user.setValue("fCity", addComp.city);
									baas.sendRequest({
										"url" : "/jhapi",
										"action" : "saveUser",
										"async" : false,
										"params" : {
											"userData" : user.toJson(true)
										},
										"success" : function(resultData, xhr) {
											user.applyUpdates();
											swal({
												title : "更改成功",
												type : "success",
												confirmButtonText : "确定",
												showConfirmButton : true
											});
										}
									});

								});
							};

							var fail = function() {
								swal({
									title : "更改失败",
									type : "error",
									confirmButtonText : "确定",
									showConfirmButton : true
								});
							};
							navigator.geolocation.getCurrentPosition(success, fail);
						}
					}
				});
			}
		};

	};
	// 头像加载
	Model.prototype.wdHeadReceive = function(event) {
		var user = this.comp("userData");
		user.loadData(event.data);
		user.refreshData();
	};

	return Model;

});
