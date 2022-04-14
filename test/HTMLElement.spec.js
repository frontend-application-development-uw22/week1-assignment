import HTMLElement from '../src/components/HTMLElement';

describe('HTMLElement class', () => {
  let instance;

  beforeEach(() => {
    instance = new HTMLElement('p', 'content');
  });

  it('should be a class with the name HTMLElement', () => {
    expect(instance.constructor.name).toEqual('HTMLElement');
  });

  it('should have a function called "render()"', () => {
    expect(typeof instance.render).toEqual('function');
  });

  it('should set "tag" and "content" as instance variables', () => {
    expect(instance.tag).toEqual('p');
    expect(instance.content).toEqual('content');
  });

  it('should render valid HTML elements', () => {
    expect(instance.render()).toEqual('<p>content</p>');

    const paragraph = new HTMLElement('p', 'Hello');
    expect(paragraph.render()).toEqual('<p>Hello</p>');
  });
});
