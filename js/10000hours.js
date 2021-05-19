// 버튼
const shareButton = document.querySelector('.share_btn');
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const startButton = document.querySelector('.start_btn');

// 요소를 추가하거나 display 하는것들
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if (fieldValue.value == "") {
        alert('분야를 입력해주세요');
        fieldValue.focus();
        return false;
    } else if (timeValue.value == "") {
        alert('시간을 입력해주세요');
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24) {
        alert('24이하의 값으로 입력해주세요');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function () {
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000 / timeValue_int), 10);

        loading.style.display = 'none';
        result.style.display = 'flex';
    }, 1800);
}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == modal) {
        closeModal();
    }
}

function copyUrl() {
    let url = window.location.href;
    let temp = document.createElement('input');

    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert('주소가 복사되었습니다');
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);
