<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!doctype html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ENEZ-Login</title>
<link rel="shortcut icon" href="img/favicon.ico" />
<link href="resources/login.css" rel="stylesheet">
<link href="resources/clippy.css" rel="stylesheet">


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script type="text/javascript">
	// 창 이동 함수
	$(function() {
		$(".content").draggable({
			handle : "h1.title"
		});
	});
</script>
</head>

<body>

	<!-- 로그인 -->
	<div class="login" id="login-box">
		<div id="content" class="content">
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
			<h1 class="title">Login</h1>
			<div class="inner">
				<div class="icon">
					<img src="img/msn3-4.png" />
				</div>
				<ul>
					<form action="session" method="post">
						<li class="s">
							<div class="form-holder">
								<input type="email" class="input" placeholder="이메일을 적어주세요"
									name="id" /> <input type="password" class="input"
									placeholder="Password" name="pwd" />
							</div>
						</li>
						<button type="submit" class="submit-btn">Log in</button>
					</form>
					<li>

					</li>
					<div id="signPage">
						<button onclick="openclose()" id="btn_sign">회원가입</button>
					</div>
				</ul>
			</div>
		</div>
	</div>
	<div class="puppy">
		<script src="resources/clippy/clippy.min.js"></script>    
		<script>
			clippy.load('Rover', function(agent) {
				// Do anything with the loaded agent
				agent.show();
				setTimeout(function() {
					agent.speak('주인님 어서오고');
				}, 2000);
			});
		</script>

	</div>
	<!-- 로그아웃 -->
	<div class="sign" id="sign-box">
		<div id="content" class="content">
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
			<h1 class="title">sign-in</h1>
			<div class="inner">
				<div class="icon">
					<img src="resources/image/msn3-4.png">
				</div>
				<ul>
					<li class="s">
						<form action="">
							<div class="form-holder">

								<input type="text" class="input" placeholder="Name" id="name" />
								<input type="email" class="input" placeholder="id" id="id" /> <input
									type="password" class="input" placeholder="Password" id="pwd" />
								<button type="submit" class="submit-btn">Sign up</button>
							</div>
						</form>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<script>
		function openclose() {
			let status = $('#sign-box').css('display');
			console.log(status);
			if (status == 'block') {
				$('#sign-box').hide();
			} else {
				$('#sign-box').show();
			}
		}
	</script>
	<script
		src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
		integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
		crossorigin="anonymous"></script>
		<%@include file="footer.jsp"%>
</body>

</html>