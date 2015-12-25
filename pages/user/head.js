define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/JianhaoAndroid/baas");
	
	var Model = function() {
		this.callParent();
	};
	Model.prototype.initHeadImg = function(event) {
		var self = this;
		require(
				[ '$UI/JianhaoAndroid/plugin/head/js/jquery-1.11.1.min' ],
				function() {

					// 全局变量，触摸开始位置
					var startX = 0, startY = 0;

					// touchstart事件
					function touchSatrtFunc(evt) {
						try {
							evt.preventDefault(); // 阻止触摸时浏览器的缩放、滚动条滚动等

							var touch = evt.touches[0]; // 获取第一个触点
							var x = Number(touch.pageX); // 页面触点X坐标
							var y = Number(touch.pageY); // 页面触点Y坐标
							// 记录触点初始位置
							startX = x;
							startY = y;

							var text = 'TouchStart事件触发：（' + x + ', ' + y + '）';

						} catch (e) {

						}
					}

					// touchmove事件，这个事件无法获取坐标
					function touchMoveFunc(evt) {
						try {
							evt.preventDefault(); // 阻止触摸时浏览器的缩放、滚动条滚动等
							var touch = evt.touches[0]; // 获取第一个触点
							var x = Number(touch.pageX) - startX; // 页面触点X坐标
							var y = Number(touch.pageY) - startY; // 页面触点Y坐标
							var bg = $(".imageBox").css('background-position').split(' ');
							var bgX = x + parseInt(bg[0]);
							var bgY = y + parseInt(bg[1]);

							$(".imageBox").css('background-position', bgX + 'px ' + bgY + 'px');
							startX = Number(touch.pageX);
							startY = Number(touch.pageY);
						} catch (e) {

						}
					}

					// touchend事件
					function touchEndFunc(evt) {
						try {
							evt.preventDefault(); // 阻止触摸时浏览器的缩放、滚动条滚动等

						} catch (e) {

						}
					}

					document.getElementById("imagebox").addEventListener('touchstart', touchSatrtFunc, false);
					document.getElementById("imagebox").addEventListener('touchmove', touchMoveFunc, false);
					document.getElementById("imagebox").addEventListener('touchend', touchEndFunc, false);

					var options = {
						thumbBox : '.thumbBox',
						spinner : '.spinner',
						imgSrc : ''
					};
					var cropper = cropbox(options, $('.imageBox'));
					var img = "";
					$('#upload-file').on('change', function() {
						var reader = new FileReader();
						reader.onload = function(e) {
							options.imgSrc = e.target.result;
							cropper = cropbox(options, $('.imageBox'));
						}
						try {
							reader.readAsDataURL(this.files[0]);
							this.files = [];
						} catch (e) {
						}

					});
					$('#btnCrop').on('click', function() {

						if (options.imgSrc != "") {
							img = cropper.getDataURL();
							var user = self.comp("userData");
							user.setValue("fHead", img);
							options.imgSrc = "";
							baas.sendRequest({
								"url" : "/jhapi",
								"action" : "saveUser",
								"async" : false,
								"params" : {
									"userData" : user.toJson(true)
								},
								"success" : function(resultData, xhr) {
									user.applyUpdates();

								}
							});
						} else {
							justep.Util.hint("请先选择图片", {
								"type" : "danger"
							});
						}

					});

					$('#btnZoomIn').on('click', function() {
						cropper.zoomIn();
					});
					$('#btnZoomOut').on('click', function() {
						cropper.zoomOut();
					});
					$('#btnRotate').on('click', function() {
						cropper.Rotate();
					});

					function cropbox(options, el) {
						var el = el || $(options.imageBox), obj = {
							state : {},
							ratio : 1,
							options : options,
							imageBox : el,
							thumbBox : el.find(options.thumbBox),
							spinner : el.find(options.spinner),
							image : new Image(),
							getDataURL : function() {
								var width = this.thumbBox.width(), height = this.thumbBox.height(), canvas = document.createElement("canvas"), dim = el.css('background-position').split(' '), size = el
										.css('background-size').split(' '), dx = parseInt(dim[0]) - el.width() / 2 + width / 2, dy = parseInt(dim[1]) - el.height() / 2 + height / 2, dw = parseInt(size[0]), dh = parseInt(size[1]), sh = parseInt(this.image.height), sw = parseInt(this.image.width);

								canvas.width = width;
								canvas.height = height;
								var context = canvas.getContext("2d");
								context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
								var imageData = canvas.toDataURL('image/png');
								return imageData;
							},
							getBlob : function() {
								var imageData = this.getDataURL();
								var b64 = imageData.replace('data:image/png;base64,', '');
								var binary = atob(b64);
								var array = [];
								for (var i = 0; i < binary.length; i++) {
									array.push(binary.charCodeAt(i));
								}
								return new Blob([ new Uint8Array(array) ], {
									type : 'image/png'
								});
							},
							zoomIn : function() {
								this.ratio *= 1.6;
								setBackground();
							},
							zoomOut : function() {
								this.ratio *= 0.6;
								setBackground();
							},
							Rotate : function() {
								el.css({
									'transform' : 'rotate(90deg)'
								});
							}

						}, setBackground = function() {
							var w = parseInt(obj.image.width) * obj.ratio;
							var h = parseInt(obj.image.height) * obj.ratio;

							var pw = (el.width() - w) / 2;
							var ph = (el.height() - h) / 2;
							/*
							 * 'background-size': w/3.18 +'px ' + h/3.18 + 'px',
							 * 'background-position': pw/1.75 + 'px ' + ph/1.75 +
							 * 'px',
							 */
							el.css({
								'background-image' : 'url(' + obj.image.src + ')',
								'background-size' : w + 'px ' + h + 'px',
								'background-position' : pw + 'px ' + ph + 'px',
								'background-repeat' : 'no-repeat'
							});
						}, imgMouseDown = function(e) {
							e.stopImmediatePropagation();
							obj.state.dragable = true;
							obj.state.mouseX = e.clientX;
							obj.state.mouseY = e.clientY;
						}, imgMouseMove = function(e) {
							e.stopImmediatePropagation();

							if (obj.state.dragable) {
								var x = e.clientX - obj.state.mouseX;
								var y = e.clientY - obj.state.mouseY;

								var bg = el.css('background-position').split(' ');

								var bgX = x + parseInt(bg[0]);
								var bgY = y + parseInt(bg[1]);

								el.css('background-position', bgX + 'px ' + bgY + 'px');

								obj.state.mouseX = e.clientX;
								obj.state.mouseY = e.clientY;
							}
						}, imgMouseUp = function(e) {
							e.stopImmediatePropagation();
							obj.state.dragable = false;
						}, zoomImage = function(e) {
							e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio *= 1.1 : obj.ratio *= 0.9;
							setBackground();
						}

						obj.spinner.show();
						obj.image.onload = function() {
							obj.spinner.hide();
							setBackground();

							el.bind('mousedown', imgMouseDown);
							el.bind('mousemove', imgMouseMove);
							$(window).bind('mouseup', imgMouseUp);
							el.bind('mousewheel DOMMouseScroll', zoomImage);
						};
						obj.image.src = options.imgSrc;
						el.on('remove', function() {
							$(window).unbind('mouseup', imgMouseUp)
						});

						return obj;
					}

				});

	}
	Model.prototype.wrHeadReceive = function(event) {
		var user = this.comp("userData");
		user.loadData(event.data);
		user.refreshData();
	};

	Model.prototype.modelLoad = function(event) {
		this.initHeadImg();
	};

	Model.prototype.backBtnClick = function(event) {
		var user = this.comp("userData");
		this.comp("wrHead").windowEnsure({
			"data" : user.toJson()
		});
	};

	return Model;
});