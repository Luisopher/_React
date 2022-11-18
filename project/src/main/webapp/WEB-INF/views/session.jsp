<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="utf-8"%>
<%
System.out.println("sessionPage");
String id = request.getParameter("id");
String pwd = request.getParameter("pwd");

String dbid = "user2@naver.com";
String dbpwd = "1234";
System.out.println("Ttt" + id + " " + pwd);

if (dbid.equals(id)) {
	if (dbpwd.equals(pwd)) {
		session.setAttribute("id", id);
		response.sendRedirect("main");


	} else {
%>
<script>
	function add() {
		alert("비밀번호를 확인해주세요. \n"); // 경고창
		history.back(); // 이전 페이지로 돌아가기 1
		history.go(-1); // 이전 페이지로 돌아가기 2
	}
</script>
<body onload="add()">
	<%
	}
	} else {
	%>
	<script>
		function add() {
			alert("아이디를 확인해주세요. \n"); // 경고창
			history.back(); // 이전 페이지로 돌아가기 1
			history.go(-1); // 이전 페이지로 돌아가기 2
		}
	</script>
<body onload="add()">
	// 페이지 열리면 alert창 즉시 실행
	<%
}
%>