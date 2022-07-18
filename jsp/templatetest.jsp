<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<title>templatetest.jsp</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<style>

footer {
	position: fixed;
	bottom: 0px; 
	height: 3rem;
	background-color: #ccc;
	width: 100%;
	text-align:center;
	line-height:3rem;
	
}

section li {
  height:2rem;
}
</style>
</head>
<%
	String pagefile = request.getParameter("page");
	if (pagefile == null) {
		pagefile = "newitem";
	}
%>
<body>
	<header>
		<div class="jumbotron text-center" style="margin-bottom: 0">
			<h1>상품목록</h1>
		</div>
	</header>
	<nav>
		<jsp:include page="top.jsp" /><br> <br>
	</nav>
	<div class="container" style="margin-top: 10px">
		<div class="row">
			<div class="col-sm-4">
				<aside>
					<jsp:include page="left.jsp" />
				</aside>
			</div>
			<div class="col-sm-8">
				<section>
					<jsp:include page='<%=pagefile + ".jsp"%>' />
				</section>
			</div>
		</div>
	</div>

	<footer>
		<jsp:include page="bottom.jsp" />
	</footer>

    <script>
      var pagefile='<%=pagefile%>';
      var filelist = ["newitem", "bestitem","useditem"];
      
      for(var index=0;index<filelist.length;index++){
    	  if(pagefile==filelist[index]){
    		  $('.nav-pills> .nav-item > .nav-link').eq(index).addClass('active');
    	  }else{
    		  $('.nav-pills> .nav-item > .nav-link').eq(index).removeClass('active');
    	  }
      }
    </script>
</body>
</html>
