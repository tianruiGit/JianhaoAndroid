<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="shimian"> 
    <div class="x-panel-top" xid="shimianTop"> 
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
    <div class="x-panel-content" xid="shimianContent" style="background-color:#f0f0f0;"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="shimianSolution"> 
        <div class="x-panel-top" xid="shimianSolutionTop" height="90"> 
          <table id="shimianTip" style="width:100%;height:80px;background-color:#fe6b5b;"> 
            <tr style="height:20px;"> 
              <td align="left" style="padding-left:10px;font-size:13px;color:white;">检测第一步,认真选择才有效呦！</td> 
            </tr>  
            <tr style="height:30px;"> 
              <td align="center"> 
                <img style="width:200px;" src="$UI/jhApp/images/step/step1.png"/> 
              </td> 
            </tr>  
            <tr style="height:40px;background-color:#f0f0f0;"> 
              <td align="center" style="font-size:14px;color:#fe6b5b;">请根据情况选择您的所属类型</td> 
            </tr> 
          </table> 
        </div>  
        <div class="x-panel-content" xid="shimianSolutionContent"> 
          <table id="shimianType" style="width:100%;background-color:white;border-left:8px solid #f0f0f0;border-right:8px solid #f0f0f0;"> 
            <tr class="typeItem" bind-click="shimianType1Click"> 
              <td style="width:80px;" align="center"> 
                <img style="width:60px;height:60px;" src="$UI/jhApp/images/shimiantype/byrs.png"/> 
              </td>  
              <td align="left"> 
                <div style="float:left;width:100%;height:25px;"> 
                  <span style="float:left;font-size:15px;">难入睡</span>  
                  <div class="progressDiv" style="float:left;height:10px;margin-top:5px;margin-left:10px;width:120px;background-color:#f0f0f0;border-radius:5px;"> 
                    <span id="progress1" style="float:left;width:30px;height:10px;background-color:#fe6b5b;border-radius:5px;"></span> 
                  </div>  
                  <span id="value1" style="float:right;margin-top:3px;font-size:13px; color:#999;"></span> 
                </div>  
                <div style="float:leftwidth:100%;font-size:12px;">总是在睡前浮想联翩,越想越精神,需要一个较长过程才能入睡.</div> 
              </td>  
              <td align="center" style="width:50px;"> 
                <img style="width:50px;" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType2Click"> 
              <td style="width:80px;" align="center"> 
                <img style="width:60px;height:60px;" src="$UI/jhApp/images/shimiantype/yx.png"/> 
              </td>  
              <td align="left"> 
                <div style="float:left;width:100%;height:25px;"> 
                  <span style="float:left;font-size:15px;">容易醒</span>  
                  <div class="progressDiv" style="float:left;height:10px;margin-top:5px;margin-left:10px;width:120px;background-color:#f0f0f0;border-radius:5px;"> 
                     <span id="progress2" style="float:left;width:30px;height:10px;background-color:#fe6b5b;border-radius:5px;"></span> 
                  </div>  
                  <span id="value2" style="float:right;margin-top:3px;font-size:13px; color:#999;"></span> 
                </div>  
                <div style="float:leftwidth:100%;font-size:12px;">容易莫名的惊醒或对房间的明暗、噪声敏感,容易醒来.</div> 
              </td>  
              <td align="center" style="width:50px;"> 
                <img style="width:50px;" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType3Click"> 
              <td style="width:80px;" align="center"> 
                <img style="width:60px;height:60px;" src="$UI/jhApp/images/shimiantype/dm.png"/> 
              </td>  
              <td align="left"> 
                <div style="float:left;width:100%;height:25px;"> 
                  <span style="float:left;font-size:15px;">易做梦</span>  
                  <div class="progressDiv" style="float:left;height:10px;margin-top:5px;margin-left:10px;width:120px;background-color:#f0f0f0;border-radius:5px;"> 
                     <span id="progress3" style="float:left;width:30px;height:10px;background-color:#fe6b5b;border-radius:5px;"></span> 
                  </div>  
                  <span id="value3" style="float:right;margin-top:3px;font-size:13px; color:#999;"></span> 
                </div>  
                <div style="float:leftwidth:100%;font-size:12px;">睡觉总是做梦,时感疲劳,导致睡眠质量下降,白天状态不佳.</div> 
              </td>  
              <td align="center" style="width:50px;"> 
                <img style="width:50px;" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType14Click"> 
              <td style="width:80px;" align="center"> 
                <img style="width:60px;height:60px;" src="$UI/jhApp/images/shimiantype/zx.png"/> 
              </td>  
              <td align="left"> 
                <div style="float:left;width:100%;height:25px;"> 
                  <span style="float:left;font-size:15px;">醒得早</span>  
                  <div class="progressDiv" style="float:left;height:10px;margin-top:5px;margin-left:10px;width:120px;background-color:#f0f0f0;border-radius:5px;"> 
                     <span id="progress4" style="float:left;width:30px;height:10px;background-color:#fe6b5b;border-radius:5px;"></span> 
                  </div>  
                  <span id="value4" style="float:right;margin-top:3px;font-size:13px; color:#999;"></span> 
                </div>  
                <div style="float:leftwidth:100%;font-size:12px;">醒的很早,并且醒来后很难入睡.</div> 
              </td>  
              <td align="center" style="width:50px;"> 
                <img style="width:50px;" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType5Click"> 
              <td style="width:80px;" align="center"> 
                <img style="width:60px;height:60px;" src="$UI/jhApp/images/shimiantype/dzz.png"/> 
              </td>  
              <td align="left"> 
                <div style="float:left;width:100%;height:25px;"> 
                  <span style="float:left;font-size:15px;">多症状</span>  
                  <div class="progressDiv" style="float:left;height:10px;margin-top:5px;margin-left:10px;width:120px;background-color:#f0f0f0;border-radius:5px;"> 
                     <span id="progress5" style="float:left;width:30px;height:10px;background-color:#fe6b5b;border-radius:5px;"></span> 
                  </div>  
                  <span id="value5" style="float:right;margin-top:3px;font-size:13px; color:#999;"></span> 
                </div>  
                <div style="float:leftwidth:100%;font-size:12px;">上述症状都有所涉及,内心焦虑,睡眠质量差.</div> 
              </td>  
              <td align="center" style="width:50px;"> 
                <img style="width:50px;" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr> 
          </table> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
