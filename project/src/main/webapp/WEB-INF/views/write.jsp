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
<script
	src="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.css"
	rel="stylesheet" type="text/css" />
<link
	href="https://cdn.jsdelivr.net/npm/suneditor@latest/dist/css/suneditor.min.css"
	rel="stylesheet" />
<link
	href="https://cdn.jsdelivr.net/npm/suneditor@latest/assets/css/suneditor.css"
	rel="stylesheet" />
<link
	href="https://cdn.jsdelivr.net/npm/suneditor@latest/assets/css/suneditor-contents.css"
	rel="stylesheet" />
<script
	src="https://cdn.jsdelivr.net/npm/suneditor@latest/dist/suneditor.min.js"></script>

<script
	src="https://cdn.jsdelivr.net/npm/suneditor@latest/src/lang/ko.js"></script>
</head>

<body>
	<div class="write_all">
		<div class="write_main">궁금한점을 무엇이든 물어보세요.</div>
		<div class="form">
			<form action="insertPost" method="post">
				<div class="write title">
					<label for="title">제목</label><br /> <input type="text"
						name="title" id="title" />
				</div>
				<div class="write writer">
					<label for="writer">작성자</label><br /> <input type="text"
						name="writer" id="writer" />
				</div>
				<div class="write content">
					<label for="content">내용</label><br />
					<textarea name="sample" id="sample" cols="30" rows="10"
						style="width: 900px">aaa</textarea>
				</div>
				<div class="write tag">
					<label for="tag">태그</label><br /> <input name='tag' class='tag'
						id='tag' placeholder='#해시태그'>

				</div>

				<div class="write_submit">
					<input type="submit" value="보내기" />
				</div>
			</form>
		</div>
	</div>
</body>
<script src="resources/tag.js"></script>
<script type="text/javascript">
	/**
	 * ID : 'suneditor_sample'
	 * ClassName : 'sun-eidtor'
	 */
	// ID or DOM object
	const editor = SUNEDITOR.create(document.getElementById("sample")
			|| "sample", {
		// All of the plugins are loaded in the "window.SUNEDITOR" object in dist/suneditor.min.js file
		// Insert options
		// Language global object (default: en)
		lang : SUNEDITOR_LANG["ko"],
	});
</script>
</html>
