// 회원가입 버튼 클릭했을 경우
function check() {
	// id 공백 유효성 검사
	var id = document.getElementById("id");
	if (id.value.trim() == "") {
		alert("ID를 입력 하세요");
		id.focus();
		return false;
	}

	// 비밀번호 공백 유효성 검사
	var pass = document.getElementById("pass");
	if (pass.value.trim() == "") {
		alert("비밀번호를 입력 하세요");
		pass.focus();
		return false;
	}

	// 주민번호 앞자리 공백 유효성 검사
	var jumin1 = document.getElementById("jumin1");
	if (jumin1.value.trim() == '') {
		alert("주민번호 앞자리를 입력하세요");
		jumin1.focus();
		return false;
	}
	
	// 주민번호 앞자리 6자리 유효성 검사 -  일부분만 입력한 경우가 있어 체크합니다.
	if (jumin1.value.length != 6) {
		alert("주민번호 앞자리 6자리를 입력하세요");
		jumin1.value = "";
		jumin1.focus();
		return false;
	}	

     // 주민번호 뒷자리 공백 유효성 검사
	var jumin2 = document.getElementById("jumin2");
	if (jumin2.value.trim() == '') {
		alert("주민번호 뒷자리를 입력하세요");
		jumin2.focus();
		return false;
	}

	// 주민번호 뒷자리 7자리 유효성 검사
	if (jumin2.value.length != 7) {
		alert("주민번호 뒷자리 7자리를 입력하세요");
		jumin2.value = "";
		jumin2.focus();
		return false;
	}

	// email 아이디 공백 유효성 검사
	var email = document.getElementById("email");
	if (email.value.trim() == '') {
		alert("E-mail 아이디를 입력하세요");
		email.focus();
		return false;
	}

	// domain 공백 유효성 검사
	var domain = document.getElementById("domain");
	if (domain.value.trim() == '') {
		alert("E-mail 도메인을 입력하세요");
		domain.focus();
		return false;
	}

	// 라디오 버튼 선택 유효성 검사
	var gender1 = document.getElementById("gender1");
	var gender2 = document.getElementById("gender2");
	if (gender1.checked == false && gender2.checked == false) {
		alert("남, 여 중에서 1개를 선택하세요");
		return false;
	}

	// 취미를 2개 이상 체크하도록 하는 유효성 검사
    var cnt = 0;
	var hobbys = document.getElementsByName("hobby");
	for(var i=0;i<hobbys.length;i++){
		if(hobbys[i].checked)
			cnt++;
	}
	
	if (cnt < 2) {
		alert("2개이상 취미를 선택하세요")
		return false;
	}

	// 우편번호 공백 유효성 검사
	var post1 = document.getElementById("post1");
	if (post1.value.trim() == "") {
		alert("우편번호를 입력하세요")
		post1.focus();
		return false;
	}

	// 주소 공백 유효성 검사
	var address = document.getElementById("address");
	if (address.value.trim() == "") {
		alert("주소를 입력하세요")
		address.focus();
		return false;
	}

	// 자기소개 공백 유효성 검사
	var intro = document.getElementById("intro");
	if (intro.value.trim() == "") {
		alert("자기 소개를 입력하세요")
		intro.focus();
		return false;
	}

}//function check end


// ID 중복 검사 부분
function idcheck() {
	var id = document.getElementById("id");
	if (id.value.trim() == '') { // ID를 입력하지 않았을 경우
		alert("ID를 입력하세요");
		id.focus();
	} else { // ID를 입력했을 경우
		// 사용자가 입력한 방식을 get방식으로 넘깁니다.
		//var ref = "idcheck.html?id=" + id.value;
        var ref = `idcheck.html?id=${id.value}`;
		// 팝업창을 이용해 자료를 넘김
		window.open(ref, "", "width=300, height=250")
	}
}//idcheck()












function move() {
	var jumin1 = document.getElementById("jumin1");
	var jumin2 = document.getElementById("jumin2");

	// 주민번호 앞자리 6자리인 경우
	if (jumin1.value.trim().length == 6) {
		if (!isNaN(jumin1.value)) { // 6자리가 숫자인 경우
			jumin2.focus();
		} else { // 6자리가 숫자가 아닌 경우
			alert("숫자로 입력하세요");
			jumin1.value = ''; // 앞자리 모두 초기화
			jumin1.focus(); // 앞자리에 포커스 준다.
		}
	}

	// 주민번호 뒷자리 7자리인 경우
	if (jumin2.value.trim().length == 7) {
		if (isNaN(jumin2.value)){ // 7자리에 문자가 있는 경우
			alert("숫자로 입력하세요");
			jumin2.value = '';
			jumin2.focus();
		}//if
	}//if
}//move() end

// select 태그에서 선택한 도메인 설정하는 부분
function domain1() {
	var sel = document.getElementById("sel");
	var domain = document.getElementById("domain");
	if (sel.value == "") { // 직접입력 선택된 경우
		domain.readOnly = false;
		domain.value = "";
		domain.focus();
	} else { // option 중에서 선택한 경우
		domain.readOnly = true; // 수정 불가
		domain.value = sel.value;
	}
}//domain1()

// 우편 검색
function post() {
	window.open("post.html", "post", "width=400, height=500")
}

