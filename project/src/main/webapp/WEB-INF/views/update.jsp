<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@include file="header.jsp"%>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="resources/write.css" />
    <meta charset="UTF-8" />
    <title>Insert title here</title>
    <script src="https://cdn.jsdelivr.net/npm/@yaireo/tagify"></script>
<script src="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.css" rel="stylesheet" type="text/css" />
  </head>

<body>
	<div class="write_all">
		<div class="write_main">궁금한점을 무엇이든 물어보세요.</div>
		<div class="form">
			<form action="updatePost" method="post">
				<input type="hidden" name="num" id="num" value="${ post.getNum() }">
				<div class="write title">
					<label for="title">제목</label><br /> <input type="text"
						name="title" id="title" />
				</div>
				<div class="write writer">
					<label for="writer">작성자</label><br /> <input type="text"
						name="writer" id="writer"  value="${ post.getWriter() }" />
				</div>
				<div class="write content">
					<label for="content">내용</label><br />
					<textarea name="content" id="content" cols="30" rows="10" ">${ post.getContent() }</textarea>
				</div>
				<div class="write tag">
					<label for="tag">태그</label><br /> <input name='tag' class='tag'
						 value="${ post.getTag() }">

				</div>

				<div class="write_submit">
					<input type="submit" value="보내기" />
				</div>
			</form>
		</div>
	</div>
</body>
<script src="resources/tag.js"></script>
</html>
