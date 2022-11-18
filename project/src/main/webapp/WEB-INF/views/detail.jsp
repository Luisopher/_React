<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>

<body>
    <div>
        ${ post.getTitle() }
    </div>
    <div>
        ${ post.getContent() }
    </div>
    <div>
        조회수: ${ post.getHits() }
    </div>
    <div>
        <a href="update?num=${ post.getNum() }">수정</a>
        <a href="delete?num=${ post.getNum() }">삭제</a>
    </div>
</body>

</html>