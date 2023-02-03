let option=1;  //선택한 등록순과 최신순을 수정, 삭제, 추가 후에도 유지되도록 하기위한 변수로 사용됩니다.

function getList(state){//현재 선택한 댓글 정렬방식을 저장합니다. 1=>등록순, 2=>최신순
	    console.log(state)
	    option=state;
		$.ajax({
			type:"post",
			url:"CommentList.bo",
			data : {"comment_board_num" : $("#comment_board_num").val(), state:state},
			dataType:"json",
			success:function(rdata){
				
				
				
				
				
				
			 if(rdata.boardlist.length>0){
				   

					$(rdata.boardlist).each(function(){
						
						
					})//each end
			 }//if(rdata.boardlist.length>0)
			 else{ 
				
				
				
				
				
			 }
			}//success end
		});//ajax end
	}//function(getList) end
	
//더보기-수정 클릭한 경우에 수정 폼을 보여줍니다.
function updateForm(num){ //num : 수정할 댓글 글번호


    
	
}//function(updateForm) end

	
	
//더보기 -> 삭제 클릭한 경우 실행하는 함수
function del(num){//num : 댓글 번호
  	
  	
}//function(del) end


//답글 달기 폼
function replyform(num,lev,seq,ref){
	
}//function(replyform) end

$(function() {
	getList(option);  //처음 로드 될때는 등록순 정렬
	
	$('form[name="deleteForm"]').submit(function() {
		if ($("#board_pass").val() == '') {
			alert("비밀번호를 입력하세요");
			$("#board_pass").focus();
			return false;
		}
	})// form

	
	$('.comment-area').on('keyup','.comment-write-area-text', function() {
	
	});// keyup','.comment-write-area-text', function() {
	
	
	//댓글 등록을 클릭하면 데이터베이스에 저장 -> 저장 성공 후에 리스트 불러옵니다.
	$('ul+.comment-write .btn-register').click(function() {
		
	})// $('.btn-register').click(function(){
	
	
	//더보기를 클릭한 경우
	$(".comment-list").on('click', '.comment-tool-button', function() {        		
	
	})
	
	

	//수정 후 수정완료를 클릭한 경우
	$('.comment-area').on('click','.update',function(){
		
	})//수정 후 수정완료를 클릭한 경우
	
	
	//수정 후 취소 버튼을 클릭한 경우
	$('.comment-area').on('click','.btn-cancel',function(){
		
	})//수정 후 취소 버튼을 클릭한 경우
	
	
	
	//답글완료 클릭한 경우
	$('.comment-area').on('click','.reply',function(){
		
		
	})//답글완료 클릭한 경우
	
	
	//답글쓰기 후 취소 버튼을 클릭한 경우
	$('.comment-area').on('click','.reply-cancel',function(){
		
	})//답글쓰기  후 취소 버튼을 클릭한 경우
	
	//답글쓰기 클릭 후 계속 누르는 것을 방지하기 위한 작업
	$('.comment-area').on('click','.comment-info-button',function(event){
		
	})////답글쓰기 클릭 후 계속 누르는 것을 방지하기 위한 작업
	
	
	
})//ready










