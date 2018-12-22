import { HttpClient } from '.';

describe('HttpClient', () => {
  it('should add a header', () => {
    const sut = new HttpClient('');
    sut.addHeader('DummyHeader', 'DummyValue');

    const headers = sut.client.defaults.headers;
    expect(headers.DummyHeader).toEqual('DummyValue');
  });
});
