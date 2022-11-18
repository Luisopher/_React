<%@page import="com.ezen.exit.domain.Page"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@include file="header.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link
	href="https://fonts.googleapis.com/css2?family=Kanit:ital@0;1&family=Orbitron&display=swap"
	rel="stylesheet">
<link rel="stylesheet" href="resources/board.css">
<script src="https://cdn.jsdelivr.net/npm/@yaireo/tagify"></script>
<script
	src="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.css"
	rel="stylesheet" type="text/css" />

<meta charset="UTF-8">
<title>ENEZ</title>
</head>

<body>
	<div class="board_all">
		<div class="area">
			<a href="write"><div class="writearea">글쓰기</div></a>
		</div>
		<div class="wrap">
			<div class="wrap">
				<c:forEach items="${posts}" var="post">
					<a href="posting?num=${ post.getNum() }">
						<ul class="list">
							<div class="left_main">
								<li class="num">${ post.getNum() }번째글</li>
								<li class="title">${ post.getTitle() }</li>
								<li class="tag">${ post.getTag() }</li>
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
<script >

</script>
</html>