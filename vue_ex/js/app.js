// new Vue({
//     //출력할 대상 위치 정하기
//     el:"#app",
//     data:{
//         message:'Hello Vue.js'
//     }
// });

//실습 #1 footer 컴포넌트 전역 등록
// <p> footer </p> template 으로 갖는 컴포넌트 등록
Vue.component('my-footer', {
    template: '<p>여기는 footer</p>'
});

// 실습 # - list 컴포넌트 지역 등록
let list = {
    template: '<ol> <li>1</li> <li>2</li> <li>3</li> </ol>'
}

let app = new Vue({
    el: '#app',
    components: {
        'my-list': list
    },
    data: {
        message: 'this is a parent component'
    }
});





