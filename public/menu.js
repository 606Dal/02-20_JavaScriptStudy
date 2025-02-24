
function makeMenu() {
    let menus = [
        {mno: 1, mname: 'Americano', price:4000, img1:'1.jpg', img2:'2.jpg', cat:'coffee}'},
        {mno: 2, mname: 'Latte', price:4500, img1:'2.jpg', img2:'2.jpg', cat:'coffee}'},
        {mno: 3, mname: 'Chocolate Cake', price:24000, img1:'3.jpg', img2:'2.jpg', cat:'coffee}'},
        {mno: 4, mname: 'Cheese Cake', price:7000, img1:'4.jpg', img2:'2.jpg', cat:'cake}'},
        {mno: 5, mname: '촉촉한 초코 쿠키', price:4000, img1:'5.jpg', img2:'2.jpg', cat:'cookie}'},
        {mno: 6, mname: '마들렌', price:6000, img1:'6.jpg', img2:'2.jpg', cat:'cookie}'},
    ]
    // 메뉴 번호로 목록 중 일치하는 메뉴 가져오기
    function getMenu(mno) {
        // 받은 mno와 같은 것 찾기.
        const result = menus.findLast(m => m.mno === mno)
        return result
    }

    function getMenus() {
        return [...menus]
    }

    return {getMenus, getMenu}
}

// default가 없을 때
export function getCategories() {
    return ['A', 'B', 'C', 'D']
}

export default makeMenu