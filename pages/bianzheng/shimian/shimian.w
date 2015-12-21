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
          <img style="width:50px;" src="$UI/JianhaoAndroid/images/bianzheng/common/title.png"/> 
        </div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="shimianContent" style="background-color:#f0f0f0;"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="shimianSolution"> 
        <div class="x-panel-top" xid="shimianSolutionTop" height="90"> 
          <table id="shimianTipTable"> 
            <tr style="height:20px;"> 
              <td align="left" id="shimianTip">检测第一步,认真选择才有效呦！</td> 
            </tr>  
            <tr style="height:30px;"> 
              <td align="center"> 
                <img style="width:200px;" src="$UI/jhApp/images/step/step1.png"/> 
              </td> 
            </tr>  
            <tr> 
              <td align="center" id="shimianTipType">请根据情况选择您的所属类型</td> 
            </tr> 
          </table> 
        </div>  
        <div class="x-panel-content" xid="shimianSolutionContent"> 
          <table id="shimianType"> 
            <tr class="typeItem" bind-click="shimianType1Click"> 
              <td class="shimianTypeLeft" align="center"> 
                <img class="shimianTypeIcon" src="$UI/jhApp/images/shimiantype/byrs.png"/> 
              </td>  
              <td align="left"> 
                <div class="shimianTypeCenter1"> 
                  <span class="shimianTypeName">难入睡</span>  
                  <div class="shimianTypeProgressDiv"> 
                    <span id="shimianProgress1" class="shimianTypeProgress"/> 
                  </div>  
                  <span id="shimianValue1" class="shimianTypeProgressValue"/> 
                </div>  
                <div class="shimianTypeCenter2">总是在睡前浮想联翩,越想越精神,需要一个较长过程才能入睡.</div> 
              </td>  
              <td align="center" class="shimianTypeRight"> 
                <img class="shimianTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType2Click"> 
              <td class="shimianTypeLeft" align="center"> 
                <img class="shimianTypeIcon" src="$UI/jhApp/images/shimiantype/yx.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="shimianTypeName">容易醒</span>  
                  <div class="shimianTypeProgressDiv"> 
                    <span id="shimianProgress2" class="shimianTypeProgress"/> 
                  </div>  
                  <span id="shimianValue2" class="shimianTypeProgressValue"/> 
                </div>  
                <div class="shimianTypeCenter2">容易莫名的惊醒或对房间的明暗、噪声敏感,容易醒来.</div> 
              </td>  
              <td align="center" class="shimianTypeRight"> 
                <img class="shimianTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType3Click"> 
              <td class="shimianTypeLeft" align="center"> 
                <img class="shimianTypeIcon" src="$UI/jhApp/images/shimiantype/dm.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="shimianTypeName">易做梦</span>  
                  <div class="shimianTypeProgressDiv"> 
                    <span id="shimianProgress3" class="shimianTypeProgress"/> 
                  </div>  
                  <span id="shimianValue2" class="shimianTypeProgressValue"/> 
                </div>  
                <div class="shimianTypeCenter2">睡觉总是做梦,时感疲劳,导致睡眠质量下降,白天状态不佳.</div> 
              </td>  
              <td align="center" class="shimianTypeRight"> 
                <img class="shimianTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType4Click"> 
              <td class="shimianTypeLeft" align="center"> 
                <img class="shimianTypeIcon" src="$UI/jhApp/images/shimiantype/zx.png"/> 
              </td>  
              <td align="left"> 
                <div class="shimianTypeCenter1"> 
                  <span class="shimianTypeName">醒得早</span>  
                  <div class="shimianTypeProgressDiv"> 
                    <span id="shimianProgress4" class="shimianTypeProgress"/> 
                  </div>  
                  <span id="shimianValue4" class="shimianTypeProgressValue"/> 
                </div>  
                <div class="shimianTypeCenter2">醒的很早,并且醒来后很难入睡.</div> 
              </td>  
              <td align="center" class="shimianTypeRight"> 
                <img class="shimianTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="shimianType5Click"> 
              <td class="shimianTypeLeft" align="center"> 
                <img class="shimianTypeIcon" src="$UI/jhApp/images/shimiantype/dzz.png"/> 
              </td>  
              <td align="left"> 
                <div class="shimianTypeCenter1"> 
                  <span class="shimianTypeName">多症状</span>  
                  <div class="shimianTypeProgressDiv"> 
                    <span id="shimianProgress5" class="shimianTypeProgress"/> 
                  </div>  
                  <span id="shimianValue5" class="shimianTypeProgressValue"/> 
                </div>  
                <div class="shimianTypeCenter2">上述症状都有所涉及,内心焦虑,睡眠质量差.</div> 
              </td>  
              <td align="center" class="shimianTypeRight"> 
                <img class="shimianTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr> 
          </table> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
