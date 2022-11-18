<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
</head>
<style>
@charset "UTF-8";

.footer {
  background-color: rgb(216, 216, 216);
  position: relative;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  z-index: 2;
  width: 100%;
  display: flex;
  background: rgba(196, 196, 196);
  border-top: 2px solid white;
}

.img1 {
  background-image: url(image/windows.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 10px;
}

.finput button {
  border: 0.5px solid rgba(128, 128, 128, 0.295);
  height: 39px;
  width: 50px;
  margin-left: 50px;
  margin-top: 1px;
}

.date {
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 2px;
  margin-right: 5px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
}

/*여기에다가 추가*/
/*가로 272px 세로 480px */

.img1{
  cursor: pointer;
 }
 
 
 .new-login{
   cursor: point;
 }
 
 .login-box{
   float: left;
   position: fixed;
   left: 0;
   padding: 3px;
   display: flex;
   flex-direction: column;
   align-items: stretch;
   background: rgb(100, 178, 246);
   width: 300px;
   height: 500px;
 }
 
 .sub-menu ul{
   list-style: none;
   padding: 0;
 }
 
 .sub-menu{
   position: fixed;
   width:  300px;
   height: 100px;
   transition: 0.5s;
 }
 
 .sub-menu{
   position: fixed;
   bottom:  40px;
   width:  272px;
   height: 0%;
   /*height: 480px;*/
   overflow: hidden;
   background: rgb(219, 218, 218);
   border-width: 2px;
  /* border-style: solid;
   border-color: rgb(255, 255, 255) rgb(0, 0, 0) rgb(0, 0, 0) rgb(255, 255, 255);
   */
   transition-duration: 0.5s;
   /*추가한 내용*/
   flex-direction: column;
 }
 /*가로 272px 세로 480px */
 /*
 .img1:hover > .sub-menu{
   position: fixed;
   bottom:  40px;
   width:  272px;
   height: 480px;
   overflow: hidden;
   border-width: 2px;
   border-style: solid;
   border-color: rgb(255, 255, 255) rgb(0, 0, 0) rgb(0, 0, 0) rgb(255, 255, 255);
 }
*/ 
 
 .sub-menu-list{
   line-height: 3rem;
 }
 
 .bottom-menu-nav{
   margin-right: auto;
   margin-left: auto;
   margin-top: 2px;
   display: flex;
   align-items: flex-start;
   justify-content: flex-end;
   background: rgb(81, 142, 219);
   width: 266px;
   height: 30px;
 }
 
 .bottom-menu-nav div{
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgb(219, 218, 218);
   font-size: 19px;
   font-weight: 900;
   width: 20px;
   height: 20px;
   text-align: center;
   margin: 1px;
   border-width: 2px;
   border-style: solid;
   border-color: rgb(255, 255, 255) rgb(0, 0, 0) rgb(0, 0, 0) rgb(255, 255, 255);
   padding-bottom: 3px;
 }
 


</style>
<body>
  <div class="footer">

    <div class="new-login">
      <!--👻 이미지를 클릭하면?👻-->
      <div class=img1>
     <a href="#" class="bottom-menu"></a>
       <!--  <button name="finput" id="chat_btn">chat</button> --> 
                    <!--  <div id= "chat-box"><iframe src="https://service.dongledongle.com/enez"
                frameborder="0" width="100%" height="500"></iframe></div>-->
   
        <div class="sub-menu">
          <!--👻 login-box 가 나타난다! 👻-->
          <div class="bottom-menu-nav">
          </div>
          <ul class="sub-menu-list">
          </ul>

        </div>
      </div>

      <div class="finput">
        <div class="date">
          <div id="date"></div>
        </div>
        <form action="">
          <button name="finput" id="chat_btn">chat</button>
   
        </form>
      </div>
    </div>


  </div>

</div>
  <script>
  $(function() {
    $(".div1").click(function() {
      $("#chat-box").toggle();
    });
  });

  function timer() {
		var nowtime = document.getElementById("date");
		nowtime.innerHTML = (new Date().toLocaleString());
		setInterval("timer()", 1000);
	}
	window.onload = function() {
		timer();
	}
</script>
</body>
</html>