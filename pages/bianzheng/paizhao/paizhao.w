<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="paizhao"> 
    <div class="x-panel-top" xid="paizhaoTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        style="background-color:#fe6b5b;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title"> 
          <img style="width:50px;" src="$UI/jhApp/images/common/title.png"/> 
        </div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="paizhaoContent" style="background-color:#f0f0f0;"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="paizhaoTipPanel"> 
        <div class="x-panel-top" xid="paizhaoTipTop" height="50"> 
          <table id="paizhaoTip" style="width:100%;height:50px;background-color:#fe6b5b;"> 
            <tr style="height:20px;"> 
              <td align="left" style="padding-left:10px;font-size:13px;color:white;">请选择光线充足的环境拍摄</td> 
            </tr>  
            <tr style="height:30px;"> 
              <td align="center"> 
                <img style="width:200px;" src="$UI/jhApp/images/step/step2.png"/> 
              </td> 
            </tr>  
          
          </table> 
        </div>  
        <div class="x-panel-content" xid="paizhaoTipContent"> 
          <table id="paizhaoImage" style="width:100%;"> 
            <tr style="height:50px;background-color:#f0f0f0;"> 
              <td id="tipWord" align="left" style="font-size:13px;padding-top:10px;color:#333;padding-left:30px;padding-right:30px;"></td> 
            </tr> 
            <tr> 
              <td align="center"> 
                <img id="tipImage" style="width:60%;"/> 
              </td> 
            </tr>  
            <tr> 
              <td align="center" style="padding-top:10px;"> 
                <button xid="cameraBtn"  class="btn btn-danger" style="width:60%;" bind-click="cameraBtnClick">光线良好开始拍照</button>  
                <button bind-click="beginDatiClick" class="btn btn-success" style="width:60%; margin-top:10px;margin-bottom:10px;">光线不好跳过拍照进行检测</button> 
              </td> 
            </tr> 
          </table> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
