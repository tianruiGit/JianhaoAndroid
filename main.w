<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="main"> 
    <div class="x-panel-content" xid="mainContent"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents" swipe="false"> 
        <div class="x-contents-content" xid="bianzheng"> 
          <div id="bianzhengGuanggao"> 
            <div id="kinMaxShow"> 
              <div> 
                <a href="#" target="_blank"> 
                  <img style="height:150px;" src="$UI/JianhaoAndroid/images/bianzheng/lunbo/guanggao.jpg"/> 
                </a> 
              </div>  
              <div> 
                <a href="#" target="_blank"> 
                  <img style="height:150px;" src="$UI/JianhaoAndroid/images/bianzheng/lunbo/2.jpg"/> 
                </a> 
              </div> 
            </div> 
          </div>  
          <table id="bianzhengTable"> 
            <tr> 
              <td id="bzShimian" class="bzLeft" align="left"> 
                <img id="bzShimianImage" bind-click="shimianClick" class="bzIcon"
                  src="$UI/JianhaoAndroid/images/bianzheng/shimian/icon.png"/>  
                <img id="bzShimianState" bind-click="shimianSolutionClick"
                  class="bzState" src="$UI/JianhaoAndroid/images/bianzheng/common/jiaobiao.png"/> 
              </td>  
              <td id="bzQudou" class="bzRight" align="left"> 
                <img id="bzQudouImage" bind-click="qudouClick" class="bzIcon"
                  src="$UI/JianhaoAndroid/images/bianzheng/qudou/icon.png"/>  
                <img id="bzQudouState" bind-click="qudouSolutionClick" class="bzState"
                  src="$UI/JianhaoAndroid/images/bianzheng/common/jiaobiao.png"/> 
              </td> 
            </tr>  
            <tr> 
              <td id="bzHeitou" class="bzLeft" align="left"> 
                <img id="bzHeitouImage" bind-click="heitouClick" class="bzIcon"
                  src="$UI/JianhaoAndroid/images/bianzheng/heitou/icon.png"/>  
                <img id="bzHeitouState" bind-click="heitouSolutionClick" class="bzState"
                  src="$UI/JianhaoAndroid/images/bianzheng/common/jiaobiao.png"/> 
              </td>  
              <td id="bzJianfei" class="bzRight" align="left"> 
                <img id="bzJianfeiImage" bind-click="jianfeiClick" class="bzIcon"
                  src="$UI/JianhaoAndroid/images/bianzheng/jianfei/icon.png"/>  
                <img id="bzJianfeiState" bind-click="jianfeiSolutionClick"
                  class="bzState" src="$UI/JianhaoAndroid/images/bianzheng/common/jiaobiao.png"/> 
              </td> 
            </tr>  
            <tr> 
              <td id="bzBianmi" class="bzLeft" align="left"> 
                <img id="bzBianmiImage" bind-click="bianmiClick" class="bzIcon"
                  src="$UI/JianhaoAndroid/images/bianzheng/bianmi/icon.png"/>  
                <img id="bzBianmiState" bind-click="bianmiSolutionClick" class="bzState"
                  src="$UI/JianhaoAndroid/images/bianzheng/common/jiaobiao.png"/> 
              </td>  
              <td id="bzKouchou" class="bzRight" align="left"> 
                <img id="bzKouchouImage" bind-click="kouchouClick" class="bzIcon"
                  src="$UI/JianhaoAndroid/images/bianzheng/kouchou/icon.png"/>  
                <img id="bzKouchouState" bind-click="kouchouSolutionClick"
                  class="bzState" src="$UI/JianhaoAndroid/images/bianzheng/common/jiaobiao.png"/> 
              </td> 
            </tr>  
            <tr> 
              <td colspan="2" class="bzCenter" align="center"> 
                <img class="bzCenterTag" src="$UI/JianhaoAndroid/images/bianzheng/common/banyuan.png"/>  
                <table id="bzCenterTable" style="width:100%;height:100%;"> 
                  <tr> 
                    <td style="width:50px;"/>  
                    <td valign="top" align="center"> 
                      <img bind-click="huanjieClick" style="width:70%;" src="$UI/JianhaoAndroid/images/bianzheng/huanjie/icon.png"/> 
                    </td>  
                    <td style="float:right;width:50px;margin-top:0px;" valign="top"> 
                      <img bind-click="huanjieSolutionClick" id="bzHuanjieIcon"
                        class="bzState" src="$UI/jhApp/images/bianzheng/jiaobiao.png"/> 
                    </td> 
                  </tr> 
                </table> 
              </td> 
            </tr> 
          </table> 
        </div>  
        <div class="x-contents-content" xid="zaowu"/>  
        <div class="x-contents-content" xid="faxian"/>  
        <div class="x-contents-content" xid="me"/> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="mainBottom"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="menu" style="background-color:white;"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnBiangzheng" target="bianzheng" onClick="btnBiangzhengClick" style="background-color:transparent;"
          tabindex="0"> 
          <img id="btnBiangzhengIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/bz1.png"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnZaowu" target="zaowu" tabindex="1" onClick="btnZaowuClick"> 
          <img id="btnZaowuIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/zw2.png"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnFaxian" target="faxian" tabindex="2" onClick="btnFaxianClick"> 
          <img id="btnFaxianIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/fx2.png"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnMe" target="me" tabindex="3" onClick="btnMeClick"> 
          <img id="btnMeIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/me2.png"/> 
        </a> 
      </div> 
    </div> 
  </div> 
</div>
