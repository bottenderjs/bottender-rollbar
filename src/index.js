const Rollbar = require('rollbar');

module.exports = config => {
  const rollbar = new Rollbar(config);
  return async (context, next) => {
    try {
      await next();
    } catch (err) {
      rollbar.error(err, context);
    }
  };
};
