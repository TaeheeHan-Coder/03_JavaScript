/* 전역 변수(JS 전체에서 공용으로 사용할 수 있는 변수) */

// 잔액이 출력 되는 span 요소
const output= document.getElementById("output");

// 금액이 입력되는 input 요소
const amount = document.getElementById("amount");

// 잔액을 기록할 변수(초기값 10000)
let balance = 10000;

// 비밀번호 저장 변수(초기값 "1234")
const password = "1234";

// --------------------------------------------------

// 함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩 (랜더링)시
// Script 파일이 전체 해석되면서 같이 해석/수행 된다

output.innerText=balance;

// 금액 입력 input 태그의 value 값을 ""(빈칸)으로 변경
amount.value=""; // input에 작성된 값을 삭제하는 효과
//-> 입,출금 함수 마지막에 사용하세요!!

// 연습용 함수
function test(){
    //   prompt("내용")
    // - 알림창에 값을 입력할 수 있는 형태
    // - 확인 클릭 : 입력 된 값 반환
    // - 취소 클릭 : null 반환
    const pw = prompt("비밀번호를 입력하세요");

    console.log("pw : ", pw);

    if(pw===null){ //취소 클릭 시
        alert("비밀번호 입력 취소 됨");
        return;
    }

    if(pw !== password){ // 비밀번호 불일치
        alert("비밀번호가 일치하지 않습니다");
        return;
    }

    //비밀번호 일치
    alert("출금 기능 수행");
}

/* 입금 */
function deposit(){
    const val= Number(amount.value); // 입력된 값을 숫자로 변환해서 val 변수에 저장 // input의 결과를 가져오려면 .value

    balance= balance+val; // balance에 입력받은 금액을 추가
    output.innerText=balance; // 화면에 누적된 잔액 출력
    amount.value="";
}

/* 출금 */
function withdrawal(){
    const val = Number(amount.value);

    const pw = prompt("비밀번호를 입력하세요"); 
    console.log("pw = ",pw);

    if(pw===null){
        alert("비밀번호 입력 취소 됨");
        return; // pw값에 아무것도 안 들어 왔을때
    }

    if(pw!==password){
        alert("비밀번호가 틀립니다.");
        return; // pw 값이 틀렸을 경우
    }

    if (val > balance){
        alert("출금 금액이 잔액보다 클 수 없습니다");
        return;
    }

    if(pw===password){
        balance= balance-val;
        output.innerText=balance;
        amount.value=""; // pw 값이 같을경우 출금 가능
        alert(`${val}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
        
    }
    
}