export default function TodoService() {

    /* 이런 변수들은 다른 함수에서 사용하고 있어서 메모리에 남아 있음. */
    let idx = 0
    // 배열 - 유지해야 할 데이터
    let arr = [ ]

    // 입력 받은 값 들어옴
    function add(title) {
        // 삭제 편하게 숫자 생성
        const obj = {tno: idx++, title: title}

        arr.push(obj)
        console.log(arr)
        // arr의 복사본을 만들어서 전달하면 더 안전 - 전개 연산자. 인캡슐레이션(진정한 접근 제한).
        return [...arr]

    }
    // null 체크 대신 기본값 줌.
    function remove(tno = 0) {

        // tno가 같지 않은 애들 필터링.
        const resultArr = arr.filter(todo => todo.tno !== tno )

        arr = resultArr

        return [...arr] // 삭제된 결과물만 다시 arr로 남음.

    }

    return {add: add, remove: remove}
}