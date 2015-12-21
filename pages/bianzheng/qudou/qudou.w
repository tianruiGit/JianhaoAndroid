<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="qudou"> 
    <div class="x-panel-top" xid="qudouTop"> 
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
    <div class="x-panel-content" xid="qudouContent"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="qudouSolution"> 
        <div class="x-panel-top" xid="qudouSolutionTop" height="50"> 
          <table id="jianfeiTip" style="width:100%;height:50px;background-color:#fe6b5b;"> 
            <tr style="height:20px;"> 
              <td align="left" style="padding-left:10px;font-size:13px;color:white;">检测第一步,认真选择才有效呦！</td> 
            </tr>  
            <tr style="height:30px;"> 
              <td align="center"> 
                <img style="width:200px;" src="$UI/jhApp/images/step/step1.png"/> 
              </td> 
            </tr> 
          </table> 
        </div>  
        <div class="x-panel-content" xid="qudouSolutionContent"> 
          <table style="width:100%;"> 
            <tr> 
              <td align="center" style="height:80px;font-size:14px;color:#fe6b5b;">哪个位置最容易起痘痘?</td> 
            </tr>  
            <tr> 
              <td align="center"> 
                <div style="width:200px;"> 
                  <img style="float:left;width:100%;" src="$UI/jhApp/images/bianzheng/qdqy.png"/>  
                  <input id="qudouRadio1" style="float:right;margin-top:-141px;margin-right:-12px;" type="radio" value="" name="select" xid="radio1"/>
                  <input id="qudouRadio2" style="float:right;margin-top:-108px;margin-right:-12px;" type="radio" value="" name="select" xid="radio1"/>
                  <input id="qudouRadio3" style="float:right;margin-top:-77px;margin-right:-12px;" type="radio" value="" name="select" xid="radio1"/>
                  <input id="qudouRadio4" style="float:right;margin-top:-44px;margin-right:-12px;" type="radio" value="" name="select" xid="radio1"/>
                </div> 
              </td> 
            </tr> 
            <tr> 
              <td align="center" style="height:100px;">
              	 <button bind-click="nextClick" style="width:80px;height:30px;border-radius:15px;background-color:#fe6b5b;border:0px;color:white;font-size:14px;">下一步</button> 
              </td> 
            </tr>  
          </table> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
