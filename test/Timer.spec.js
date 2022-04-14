import Timer from '../src/timer/Timer';

describe('Timer class', () => {
  let instance;

  beforeEach(() => {
    instance = new Timer(10);
  });

  it('should be a class with the name Timer', () => {
    expect(instance.constructor.name).toEqual('Timer');
  });

  it('should have a function called "start()"', () => {
    expect(typeof instance.start).toEqual('function');
  });
});
