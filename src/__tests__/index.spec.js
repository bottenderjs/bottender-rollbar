const rollbar = require('../');

const mockRollbar = { error: jest.fn() };

jest.mock('rollbar', () => jest.fn().mockImplementation(() => mockRollbar));

function setup() {
  return {
    context: {},
    next: jest.fn(),
  };
}

it('should catch error and send to rollbar', async () => {
  const { context, next } = setup();

  const err = new Error('Boom');

  next.mockImplementation(() => {
    throw err;
  });

  await rollbar({ accessToken: 'xxx' })(context, next);

  expect(mockRollbar.error).toBeCalledWith(err, context);
});
