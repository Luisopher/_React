<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@include file="../header.jsp"%>
<%@page import="com.ezen.exit.domain.Page"%>
<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="resources/main.css" rel="stylesheet">
<title>main</title>

</head>

<body>

	<%
	//사실 이 페이지는 무조건 로그인 성공해야 들어올수 있는 페이지임
	//밑에 if 문 사실 필요없음 ......꺄아아아아악!!!!!!!!!!
	if(session.getAttribute("id")==null){
	    out.println("<script>");
	    out.println("alert('로그인 실패..(┬┬﹏┬┬)엉엉엉ㅇㅇㅇ엉어어ㅓㅓㅇ엉');");
	    out.println("</script>");	    
	}
	else{}
	%>
	<!-- 여기서부터 -->
	<div class="container-main">
		<!-- 좌측 사이드바-->
		<div class="snb" id="menuotop">
			<div class="side_nav" id="menu-scroll">
				<div class="navmenu">
					<c:forEach items="${dailyBest}" var="post">
					<!-- 인기게시물 !-->
					<span style="background-color:black" class="menu_over">커뮤니티</span>
						<!-- 조회수 1위 -->
						<a class="menu-list rank1" href="#"> <span class="icon-rack">1</span>
							<span class="menu_over"> ${ post.getTag() }</span>

					</c:forEach>
						</a>
				</div>

			</div>
		</div>

		<!-- 내용 contents-->
		<div class="content-main" id="div_content">
			<div class="contents_main">
				<div class="section_contents top">
					<!-- 1-1) 공지사항 - 제목 -->
					<div class="section_list notice">
						<h2 class="section_title">
							<a class="news_title" href="#" title="공지사항">운영알림판 </a>
						</h2>
						<!-- 1-2) 공지사항 - 내용글-->
						<div class="list_item">
							<div class="list_title">
								<a class="list_subject" href="#"> <span class="subject"
									data-role="list-title" title="ENEZ 공지사항">ENEZ 공지사항</span>
								</a>
							</div>
						</div>
					</div>

					<!-- 2-1) 인기게시물 -->
					<div class="section_list hit">
						<h2 class="section_title">
							<a class="news_title" href="#" title="인기글"> 인기글</a>
						</h2>
						<!-- 2-2) 인기- 내용글 -->
						<div class="list_item">
							<div class="list_title">
								<c:forEach items="${dailyBest}" var="post">
									<a class="list_subject" href="#"> <span class="subject"
										data-role="list-title" title="인기글">${ post.getTitle() }</span>
									</a>
									<a class="list_subject" href="#"> <span class="subject"
										data-role="list-title" title="인기글">${ post.getTitle() }</span>
									</a>
								</c:forEach>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="content-main" id="div_content">
				<div class="contents_main">
					<div class="section_contents top">
						<!-- 1-1) 공지사항 - 제목 -->
						<div class="section_list notice">
							<h2 class="section_title">
								<a class="news_title" href="#" title="인기글"> 인기글</a>
							</h2>
							<!-- 1-2) 공지사항 - 내용글-->
							<div class="list_item">
								<div class="list_title">
									<c:forEach items="${weeklyBest}" var="post">
										<a class="list_subject" href="#"> <span class="subject"
											data-role="list-title" title="인기글">${ post.getTitle() }</span>
										</a>
										<%-- <a class="list_subject" href="#"> <span class="subject"
											data-role="list-title" title="인기글">${ post.getTitle() }</span>
										</a> --%>
									</c:forEach>
								</div>
							</div>
						</div>

						<!-- 2-1) 인기게시물 -->
						<div class="section_list hit">
							<h2 class="section_title">
								<a class="news_title" href="#" title="인기글"> 인기글</a>
							</h2>
							<!-- 2-2) 인기- 내용글 -->
							<div class="list_item">
								<div class="list_title">
									<c:forEach items="${MonthlyBest}" var="post">
										<a class="list_subject" href="#"> <span class="subject"
											data-role="list-title" title="인기글">${ post.getTitle() }</span>
										</a>
										<a class="list_subject" href="#"> <span class="subject"
											data-role="list-title" title="인기글">${ post.getTitle() }</span>
										</a>
									</c:forEach>
								</div>

							</div>
						</div>
					</div>
				</div>
</body>

</html>