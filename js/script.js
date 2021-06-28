debugger
Vue.config.devtools = true;
const app = new Vue({
    el: '#app',
    data: {
        listaImg: [
            "img/img1.jpg",
            "img/img2.jpg",
            "img/img3.jpg",
            "img/img4.jpg",
            "img/img5.jpg",
            "img/img6.jpg",
            "img/img7.jpg",

        ],
        imgIndex: 0,
    },
    created() {
        setInterval(() => {
            this.next();
        }, 3000)
    },
    methods: {
        next: function() {
            if (this.imgIndex === (this.listaImg.length - 1)) {
                this.imgIndex = 0;
            } else {
                this.imgIndex++;
            }
        },
        prev: function() {
            if (this.imgIndex === 0) {
                this.imgIndex = this.listaImg.length - 1;
            } else {
                this.imgIndex--;
            }
        },
        isCurrentDot: function(index) {
            if (index === this.imgIndex) {
                return "current";
            } else {
                return "";
            }
        },
        moveTo: function(index) {
            this.imgIndex = index;
        }
    }
});