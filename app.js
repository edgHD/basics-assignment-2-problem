const app = Vue.createApp({
  data() {
    return {
        keydownOutput: '',
        enterOutput: '',
        gitHubProfile: 'https://github.com/edgHD'
    };
  },
  methods: {
    showAlert() {
        alert(`Cooking in progress... 🗣️‼️🔥\n\nCheck out my Github Profile:\n${this.gitHubProfile}`)
    },
    keydownInput(event) {
        this.keydownOutput = event.target.value;
    },
    enterInput(event) {
        this.enterOutput = event.target.value;
    }
  }
});
app.mount("#assignment")