var apiUrl = 'https://conf.pac.by/menu/api/getMenu.php?k=1';

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
            this.loading = true;
            fetch(apiUrl)
                .then(res => res.text())
                .then(text => {
                    this.menu = JSON.parse(text);
                    this.loading = false;
                })
                .catch(err => console.error(err));
        }
    }
});
