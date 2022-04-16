import HTMLElement from '../src/components/HTMLElement';
import DivElement from '../src/components/DivElement';

describe('DivElement class', () => {
  let instance;

  beforeEach(() => {
    instance = new DivElement('content');
  });

  it('should be a class with the name DivElement', () => {
    expect(instance.constructor.name).toContain('DivElement');
  });

  it('should be an instance of HTMLElement', () => {
    expect(instance).toBeInstanceOf(HTMLElement);
  });

  it('should set "tag" and "content" as instance variables', () => {
    expect(instance.tag).toEqual('div');
    expect(instance.content).toEqual('content');
  });

  it('should render valid div elements', () => {
    expect(instance.render()).toEqual('<div>content</div>');

    const div = new DivElement('University of Washington');
    expect(div.render()).toEqual('<div>University of Washington</div>');
  });
});
