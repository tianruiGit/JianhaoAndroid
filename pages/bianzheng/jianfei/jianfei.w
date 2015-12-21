<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="jianfei"> 
    <div class="x-panel-top" xid="jianfeiTop"> 
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
    <div class="x-panel-content" xid="jianfeiContent" style="background-color:#f0f0f0;"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="jianfeiSolution"> 
        <div class="x-panel-top" xid="jianfeiSolutionTop" height="90"> 
          <table id="jianfeiTipTable"> 
            <tr style="height:20px;"> 
              <td align="left" id="jianfeiTip">检测第一步,认真选择才有效呦！</td> 
            </tr>  
            <tr style="height:30px;"> 
              <td align="center"> 
                <img style="width:200px;" src="$UI/jhApp/images/step/step1.png"/> 
              </td> 
            </tr>  
            <tr> 
              <td align="center" id="jianfeiTipType">请根据情况选择您的所属类型</td> 
            </tr> 
          </table> 
        </div>  
        <div class="x-panel-content" xid="jianfeiSolutionContent"> 
          <table id="jianfeiType"> 
            <tr class="typeItem" bind-click="jianfeiType1Click"> 
              <td class="jianfeiTypeLeft" align="center"> 
                <img class="jianfeiTypeIcon" src="$UI/jhApp/images/jianfeitype/bztx.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="jianfeiTypeName">标准体型</span>  
                  <div class="jianfeiTypeProgressDiv"> 
                    <span id="jianfeiProgress1" class="jianfeiTypeProgress"/> 
                  </div>  
                  <span id="jianfeiValue1" class="jianfeiTypeProgressValue"/> 
                </div>  
                <div class="jianfeiTypeCenter2">体型较标准或微胖,要保持身形</div> 
              </td>  
              <td align="center" class="jianfeiTypeRight"> 
                <img class="jianfeiTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="jianfeiType2Click"> 
              <td class="jianfeiTypeLeft" align="center"> 
                <img class="jianfeiTypeIcon" src="$UI/jhApp/images/jianfeitype/qdfp.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="jianfeiTypeName">轻度肥胖</span>  
                  <div class="jianfeiTypeProgressDiv"> 
                    <span class="jianfeiTypeProgress" id="jianfeiProgress2"/> 
                  </div>  
                  <span id="jianfeiValue2" class="jianfeiTypeProgressValue"/> 
                </div>  
                <div class="jianfeiTypeCenter2">轻度肥胖,脂肪分布较均匀</div> 
              </td>  
              <td align="center" class="jianfeiTypeRight"> 
                <img class="jianfeiTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem" bind-click="jianfeiType3Click"> 
              <td class="jianfeiTypeLeft" align="center"> 
                <img class="jianfeiTypeIcon" src="$UI/jhApp/images/jianfeitype/ssfp.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="jianfeiTypeName">上身肥胖</span>  
                  <div class="jianfeiTypeProgressDiv"> 
                    <span id="jianfeiProgress3" class="jianfeiTypeProgress"/> 
                  </div>  
                  <span id="jianfeiValue3" class="jianfeiTypeProgressValue"/> 
                </div>  
                <div class="jianfeiTypeCenter2">体型较胖,脂肪多分布在腹部和背部</div> 
              </td>  
              <td align="center" class="jianfeiTypeRight"> 
                <img class="jianfeiTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem"> 
              <td class="jianfeiTypeLeft" align="center"> 
                <img class="jianfeiTypeIcon" src="$UI/jhApp/images/jianfeitype/xsfp.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="jianfeiTypeName">下身肥胖</span>  
                  <div class="jianfeiTypeProgressDiv"> 
                    <span id="jianfeiProgress4" class="jianfeiTypeProgress"/> 
                  </div>  
                  <span id="jianfeiValue4" class="jianfeiTypeProgressValue"/> 
                </div>  
                <div class="jianfeiTypeCenter2">体型较胖,脂肪多分布在臀部和腿部</div> 
              </td>  
              <td align="center" class="jianfeiTypeRight"> 
                <img class="jianfeiTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr>  
            <tr class="typeItem"> 
              <td class="jianfeiTypeLeft" align="center"> 
                <img class="jianfeiTypeIcon" src="$UI/jhApp/images/jianfeitype/qsfp.png"/> 
              </td>  
              <td align="left"> 
                <div class="jianfeiTypeCenter1"> 
                  <span class="jianfeiTypeName">全身肥胖</span>  
                  <div class="jianfeiTypeProgressDiv"> 
                    <span id="jianfeiProgress5" class="jianfeiTypeProgress"/> 
                  </div>  
                  <span id="jianfeiValue5" class="jianfeiTypeProgressValue"/> 
                </div>  
                <div class="jianfeiTypeCenter2">上述症状都有所涉及,内心焦虑,睡眠质量差.</div> 
              </td>  
              <td align="center" class="jianfeiTypeRight"> 
                <img class="jianfeiTypeRight" src="$UI/jhApp/images/common/right.png"/> 
              </td> 
            </tr> 
          </table> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
