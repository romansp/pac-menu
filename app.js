const apiUrl = 'https://conf.pac.by/menu/api/getMenu.php?k=1';

const app = Vue.createApp({
  data() {
    return {
      loading: false,
      menu: null,
    }
  },
  
  async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;
      try {
        this.menu = await getMenu();
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});

const getMenu = async () => {
  const res = await fetch(apiUrl);
  return await res.json();
}

app.mount("#app");
