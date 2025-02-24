// export default 아예 위에다가 붙여서 쓰기도 함.
export default function cart() {

    // 자기한테 없는 함수를 막 가져다 씀 : 클로저
    let items = [] // 장바구니 상품들

    //function add (menu) { // 아예 받자마자 쪼개는 방법도 많이 사용함.
    function add ({mno,mname,price}) {
        // items에 추가 - menu의 일부만 필요함. 번호, 이름, 가격 // 구조분해할당
        // const {mno,mname,price} = menu
        // console.log(mno,mname,price) // 동작 확인

        // 만일 기존에 mno에 해당하는 것이 있다면 수량만 변경. items가 배열이니까 필터하면 배열이 나옴.
        //const old = items.filter(item => item.mno === mno).length > 0
        const old = items.filter(item => item.mno === mno)
        if(old.length > 0){
            old[0].qty += 1
        }else {
            //없다면 배열에 수량 추가
            const cartItem = {mno:mno, mname:mname, price:price, qty: 1}

            items.push(cartItem)
        }



        // 상품 추가하면 화면 갱신
        return [...items]

    }

    // 자바스크립트는 타입 상관 없이 리턴 가능
    // 여러 개 반환 (변수와 함수가 동일. 아래 쓴 게 객체 리터럴 => 외부에 노출하고 싶은 걸 리턴)
    //return {items: items, add:add}

    // 이건 복사본을 전달. 원본을 보여주고 싶지 않을 때.
    function getItems() {
        return [...items]
    }
    //return {getItems: getItems, add:add}
    return {getItems, add} // 이렇게 해도 같음. 키-값 이름이 같은 경우 줄여씀.

}

// 카트를 실행한 걸 반환. () 없이 쓰는 게 많이 쓰는 형태.
//export default cart