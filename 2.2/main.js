var app1 = new Vue({
    el: '#apple',
    data: {
        time: new Date()
    },
    mounted: function () {
        var _this = this
        this.timer = setInterval(function () {
            _this.time = new Date()
        })
    },
    beforeDestroy: function () {
        if (this.time) {
            clearInterval(this.time)
        }
    },
    // computed: {
    //     thisTime: function () {
    //         return Date.now()
    //     }
    // },
    filters: {
        fixTime: function (value) {
            var date = new Date(value)
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()
            var hour = date.getHours()
            var min = date.getMinutes()
            var sec = date.getSeconds()
            return year + '年' + month + '月' + day + '日' + hour + '时' + min + '分' + sec + '秒'
        }
    }
})

var app2 = new Vue({
    el: '#checkme',
    data: {
        content: 0
    },
    methods: {
        increase: function(){
            this.content += 1
        }
    }

})