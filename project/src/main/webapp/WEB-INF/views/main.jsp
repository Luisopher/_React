<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page import="com.ezen.exit.domain.Page"%>
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="resources/main.css" rel="stylesheet">
<link href="resources/clippy.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
      $( ".content" ).draggable({ handle: "h1.title" });
  } );
  
  </script>
</head>
<body>

  <noscript><p><em>jquery</em></p></noscript>
<span></span>
  <div id="test1">
  
  <div id="content" class="content">
    <div class="control-box close-box"><a class="control-box-inner"></a></div>
    <div class="control-box zoom-box"><div class="control-box-inner"><div class="zoom-box-inner"></div></div></div>
    <div class="control-box windowshade-box"><div class="control-box-inner"><div class="windowshade-box-inner"></div></div></div>
    <h1 class="title">ENEZ</h1>
    <div class="inner">
      <div class="icon"><img src="resources/image/ezen.png" width="380px"/></div>
      <ul>
	<li class= "s">
	<h1>Hello, ENEZ!</h1>
	
	 <p style="font-family:neo;">국비소통을 위한 커뮤니티에 오신걸 환영합니다 !</p></li>
      </ul>
      <div class= "login">
      
			<%	if(session.getAttribute("id")==null){%>
		<button class="command_button" onclick="location.href='login'">로그인</button>
	   	<button class="command_button" onclick="location.href='login'">회원가입</button>
			<%} else{%>
		<button class="command_button" onclick="location.href='main'">로그아웃</button>	
			<%} %>

      	
      	
	</div>
    </div>
 </div>

 
	<!-- chatting -->

	<div id="content" class="content chat">
		<div class="control-box close-box">
			<a class="control-box-inner"></a>
		</div>
		<div class="control-box zoom-box">
			<div class="control-box-inner">
				<div class="zoom-box-inner"></div>
			</div>
		</div>
		<div class="control-box windowshade-box">
			<div class="control-box-inner">
				<div class="windowshade-box-inner"></div>
			</div>
		</div>
		<h1 class="title">chat</h1>
		<div class="inner">
			<ul class="sub-menu-list">
				<li><div class="bat">ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㅇㄴ</div></li>

			</ul>
		</div>
	</div>
			            <div id="app" style="min-height: 400px">
                <!-- Webamp will attempt to center itself within this div -->
            </div>
 </div>
 <!--  스크립트  -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="resources/clippy/clippy.min.js"></script>    
<script src="https://unpkg.com/webamp@1.4.0/built/webamp.bundle.min.js"></script>
<script>
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);

        const Webamp = window.Webamp;
        new Webamp({
            initialTracks: [{
                metaData: {
                    artist: "Kevin MacLeod",
                    title: "Study and Relax"
                },
                url: "resources/Study-and-Relax.mp3",
                duration: 223
            }],
        }).renderWhenReady(document.getElementById('app'));
 
        clippy.load('Rover', function(agent) {
            // Do anything with the loaded agent
            agent.show();
            agent.speak('어서오세요 주인님 왈왈왈');
        });
</script>  

</body>
<%@include file="footer.jsp"%>
</html>