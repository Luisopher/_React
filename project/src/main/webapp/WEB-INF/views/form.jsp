
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
</head>
<body>
	<div class="reply1">
			<div class="writerinfo">
				<div class="name">${post.getreplyId()}</div>
				<div class="time">${post.getpost_id()}</div>
				<div class="reply2">${post.getcontent()}</div>
			</div>
	</div>
	<div class="replysubmit">
		<button class="replydel">삭제</button>
		<button class="replyupdate">수정</button>
	</div>
	</div>
</body>
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

	editor.onChange = (contents,core) => {
      console.log("save")
      editor.save()
      console.log("current content", core.context.element.originElement.value)
     }
</script>
</html>