const api = {};
export default {
  install(app) {
    app.config.globalProperties.$api = api;
  },
  api,
};
