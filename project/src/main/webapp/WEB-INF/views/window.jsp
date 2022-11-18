<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />

<link rel="stylesheet" href="resources/window.css" />
<link rel="stylesheet" href="resources/footer.css" />
<link rel="stylesheet" href="resources/default.css" />
<link href="assets/fontawesome-free/css/all.min.css" rel="stylesheet"
	type="text/css">
<script
	src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>

<title>Insert title here</title>
</head>
<body>
	<div class="background">
		<div class="container">
			<div class="top">
				<div class="icon">
					<a href="main" target='_blank'><img
						src="resources/image/worldwide.png" class="icon1" />
						<div class="text">internet explorer</div> </a>
				</div>
				<div class="icon2">
					<a href="board" target='_blank'><img
						src="resources/image/worldwide.png" class="icon1_2" />
						<div class="text2">internet explorer</div> </a>
				</div>
			</div>
			<div class="center"></div>


		</div>


		<div class="footer">

			<div class="new-login">
				<!--👻 이미지를 클릭하면?👻-->
				<div class=img1>
					<a href="#" class="bottom-menu"></a>
					<div class="sub-menu">
						<!--👻 login-box 가 나타난다! 👻-->
						<div class="bottom-menu-nav">
							<div>×</div>
						</div>
						<ul class="sub-menu-list">
							<li><iframe src="https://service.dongledongle.com/enez"
									frameborder="0" width="100%" height="500"></iframe></li>
						</ul>

					</div>
				</div>

				<div class="finput">
					<div class="date">
						<div id="date"></div>
					</div>
					<form action="">
						<input type="text" name="finput"
							placeholder=" 🏸 검색하려면 여기에 입력하십시오" />
					</form>
				</div>
			</div>


		</div>

	</div>

</body>
<!--  <script src="window.js"></script> -->
<script type="text/javascript">
	function timer() {
		var nowtime = document.getElementById("date");
		nowtime.innerHTML = (new Date().toLocaleString());
		setInterval("timer()", 1000);
	}
	window.onload = function() {
		timer();
	}
</script>


</html>