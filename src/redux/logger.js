const loggerWrapper = (isPayloadOutput = false) => (state) => (next) => (action) => {
  console.log('State', state);
  console.log('Action', action);

  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(time);

  if (isPayloadOutput) {
    console.log('Payload', action.payload);
  }

  return next(action);
};

const logger = loggerWrapper(true);

export default logger;
