<%@page import="com.ezen.exit.domain.Page"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="header.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link
	href="https://fonts.googleapis.com/css2?family=Kanit:ital@0;1&family=Orbitron&display=swap"
	rel="stylesheet">
<link rel="stylesheet" href="resources/board.css">


<meta charset="UTF-8">
<title>ENEZ</title>
</head>

<body>



	<div class="board_all">
		<div class="notice">
			NOTICE<br>
			<div class="ce">
				1. 우리 이젠 엑싯은 자유로운 영혼입니다.<br> 2. 우리는 하나가 아닙니다 넷입니다.<br> 3.
				모든 걱정은 걱정이니 걱정하시다가 걱정하지말껄 이라고 걱정중이시길 빕니다.<br> 4. 공지글 작성하기 겁나
				힘드네요.<br> 5. 복붙 하겠습니다. 공지글 작성하기 겁나 힘드네요. 공지글 작성하기 겁나 힘드네요.
			</div>

		</div>
		<div class="area">
			<%
			if (session.getAttribute("id") == null) {
			%>
			<a href="login"><div class="writearea">로그인</div></a>
			<%
			} else if (session.getAttribute("id") == "admin") {
			%>
			<a href="login"><div class="writearea">공지사항작성</div></a>
			<%
			}

			else {
			%>
			<a href="write"><div class="writearea">글쓰기</div></a>
			<%
			}
			%>
		</div>
		<div class="wrap">
			<div class="wrap">
				<c:forEach items="${posts}" var="post">
					<a href="posting?num=${ post.getNum() }">
						<ul class="list">
							<div class="left_main">
								<li class="num">${ post.getNum() }번째글</li>
								<li class="title">${ post.getTitle() }</li>
								<li class="tag"><a href="#">${ post.getTag() }</li>
							</div>
							<div class="right_main">
								<li class="date">${ post.getWritedate() }</li>
								<li class="hits">🦾${ post.getHits() }</li>
								<li class="RECOMMEND">📃${ post.getRecommend() }</li>
							</div>
						</ul>
					</a>
				</c:forEach>
			</div>
			<div class="page">
				<%
				Page postpage = (Page) request.getAttribute("page");
				int totalpage = postpage.getTotalPage() / Page.getPerpage();
				if (postpage.getTotalPage() % Page.getPerpage() != 0) {
					totalpage++;
				}
				for (int i = 1; i <= totalpage; i++) {
					if (postpage.getCurrentPage() == i) {
						out.println("<font size=5>" + i + "</font>");
					} else {
						out.println("<a href='board?page=" + i + "'>" + i + "</a>");
					}
				}
				%>
			</div>
		</div>

	</div>
</body>

</html>