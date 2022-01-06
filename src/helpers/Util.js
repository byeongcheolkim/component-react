import TweenMax from "gsap";
/* 사용방법 
    import * as Util from "helpers/Util";
    Util.unit1k(10000000) -> 1,000,000
*/

/* 화면 비율 transformOrigin
-------------------------------------------------------------------------------------- */
export const resize = () => {
  const WIDTH = 1920;
  const HEIGHT = 1080;

  const resizedWidth = window.innerWidth;
  const resizedHeight = window.innerHeight;

  TweenMax.set(".container", {
    scaleX: resizedWidth / WIDTH,
    scaleY: resizedHeight / HEIGHT,
    transformOrigin: "0% 0%",
  });
};

/* 소수점 자르기
-------------------------------------------------------------------------------------- */
export function decimal(number, digit) {
  // number:값, digit:소수점 자리수
  let value = Number(number);
  try {
    if (digit > 0) {
      const powNumber = Math.pow(10, digit);
      value = Math.round(value * powNumber) / powNumber;
    }
  } catch (e) {
    console.log(e);
  }
  return value;
}

/* 비례식
-------------------------------------------------------------------------------------- */
export function proportion(a1 = 0, b1 = 0, a2 = 0) {
  // a1 : b1 = a2 : x (x를 리턴)
  return (Number(b1) * Number(a2)) / Number(a1);
}

/* 랜덤 정수 ( n1 부터 n2 사이의 값 리턴 )
-------------------------------------------------------------------------------------- */
export function randomInt(n1, n2) {
  return parseInt(Math.random() * (n2 - n1)) + n1;
}

/* Object Key 정렬
-------------------------------------------------------------------------------------- */
export function sortOn($array, $key, $order = "asc") {
  const array = array.slice(0);
  const key = $key;
  const order = $order;
  array.sort((a, b) => {
    var p1 = a[key];
    var p2 = b[key];
    if (order == "desc") {
      if (p1 < p2) return 1;
      if (p1 > p2) return -1;
    } else {
      if (p1 > p2) return 1;
      if (p1 < p2) return -1;
    }
    return 0;
  });
  return array;
}

/* 천단위 콤마 찍기
-------------------------------------------------------------------------------------- */
export function unit1k(number) {
  // number:값
  let txtNumber = String(number);
  if (isNaN(txtNumber) || txtNumber === "") {
    // 숫자 형태의 값이 정상적으로 입력되었는지 확인
    txtNumber = "0";
  } else {
    const rxSplit = new RegExp("([0-9])([0-9][0-9][0-9][,.])"); // 정규식 형태 생성
    const arrNumber = txtNumber.split("."); // 입력받은 숫자를 . 기준으로 나눔. (정수부와 소수부분으로 분리)
    arrNumber[0] += "."; // 정수부 끝에 소수점 추가

    do {
      arrNumber[0] = arrNumber[0].replace(rxSplit, "$1,$2"); // 정수부에서 rxSplit 패턴과 일치하는 부분을 찾아 replace 처리
    } while (rxSplit.test(arrNumber[0])); // 정규식 패턴 rxSplit 가 정수부 내에 있는지 확인하고 있다면 true 반환. 루프 반복.

    if (arrNumber.length > 1) {
      // v를 마침표(.)로 분리한 부분이 2개 이상이라면 (즉 소수점 부분도 있다면)
      txtNumber = arrNumber.join(""); // 배열을 그대로 합칩. (join 함수에 인자가 있으면 인자를 구분값으로 두고 합침)
    } else {
      // v길이가 1이라면 정수부만 있다는 의미.
      txtNumber = arrNumber[0].split(".")[0]; // 위에서 정수부 끝에 붙여준 마침표(.)를 그대로 제거
    }
  }
  return txtNumber;
}
