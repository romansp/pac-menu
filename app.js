var apiUrl = 'http://conf.pac.by/menu/api/getMenu.php?k=2';

var app = new Vue({
    el: '#app',
    data: {
        loading: false,
        menu: null
    },
    created: function () {
        this.fetchData()
    },
    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiUrl)
            self.loading = true;
            xhr.onload = function () {
                self.menu = JSON.parse(xhr.responseText)
                self.loading = false;
            }
            xhr.send()
        }
    }
});