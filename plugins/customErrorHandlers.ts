export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  app.config.warnHandler = (msg, vm, trace) => {
    // supress warning - score only loads from localStore on client side
    if (msg.includes('Hydration text content mismatch')) {
      console.log(
        'Hydration text content mismatch reason: score only loads from localStore on client side'
      );
      return;
    }
    console.warn(`[Vue warn]: ${msg}${trace}`);
  };

  app.config.errorHandler = (err, vm, info) => {
    const errorMsg = err instanceof Error ? err.message : '';

    console.error(`[Vue error]: ${err} - Info: ${info}`);
  };
});
