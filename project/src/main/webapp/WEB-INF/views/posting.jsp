<%@include file="header.jsp"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/ posting.css">
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
	<div id="root">
		<div class="post-container">
			<div class="post-box">
				<div class="head-wrapper">
					<h1>${ post.getTitle() }</h1>
					<!-- 닉네임 & 글쓴 시간 -->
					<div class="post-user">
						<div class="information">
							<span class="username">${post.getNum() }</span> <span
								class="seperator">·</span> <span class="usertime">${ post.getWritedate() }</span>
							<span class="seperator">·</span> <span class="userhit">${ post.getHits() }</span>
						</div>
					</div>
					<!-- 태그 -->
					<div class="post-tag">

						<c:forEach var="i" items="${post.getTag()}">   
 				<a class="usertag" href="#">#<c:out value="${i}" /></a>
						</c:forEach>
					</div>


					<div class="sub_mit">
						<button>
							<a href="delete?num=${ post.getNum() }&title=">삭제 
						</button>
						<button>
							<a href="update?num=${ post.getNum() }">수정 
						</button>
					</div>
					<!--
          ------------   공유하기   ------------
          <div class="post-link">
            <div class="linkbox">
              <div class="userLink">
                <div>
                  <div style="position:relative" class="mylink">
                    <img src="resources/image/link.png" width="24px" height="24px">
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ------------   ------------   ------------
          -->


					<!-- 인기태그 -->
					<div class="hitbox">
						<div class="hitbox-point">
							<div class="hit-tag-box">
								<div class="hit-deco-contain">
									<div class="hit-deco-head">
										<span>실시간 인기태그</span> <span style="color: black;">_____</span>
										<!--ㅎㅎ;;;-->
										<span
											onclick="this.parentElement.parentElement.style.display='none'"
											class="close">×</span>

									</div>
									<div class="hit-tag" style="margin-left: 0px;">

										<c:forEach var="i" items="${post.getTag()}">   
											 <a class="usertag" href="#">#<c:out value="${i}" /></a>
										</c:forEach>
									</div>


								</div>
							</div>
						</div>
					</div>



				</div>

				<div class="post-cotent-wrap">
					<div class="post-content">${ post.getContent() }</div>
				</div>

			</div>
			<div class="blank">
				<div class="container_reply">
					<div class="replyinfo">
						<div class="writerinfo">
							<div class="replyname">이름</div>
							<div class="replytime">10-05/10:30</div>
						</div>

					</div>
					<div class="replyarea">
						<form action="addReply" method="post">
							<input type="hidden" name="num" value="${ post.getNum() }">
							<input type="hidden" name="replyname" value="replyname">
							<textarea name="sample" id="sample" style="width: 900px"></textarea>
							<input type="submit" class="replysub">댓글 입력

						</form>
					</div>
				</div> 
				<div class="reply">
<div class="writerinfo">
							
					<c:forEach var  = "test" items = "${replies}">
						
							<div class="reply"><c:out value = "${test.content}"/></div>
						
					</c:forEach>
					</div>
				<!-- <div class="replysubmit">
					<button class="replydel">삭제</button>
					<button class="replyupdate">수정</button>-->
				</div>
			</div>

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
