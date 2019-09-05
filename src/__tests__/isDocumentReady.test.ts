import { isDocumentReady } from '..';

describe('isDocumentReady', () => {
  it('should return true when document is ready', () => {
    expect(isDocumentReady()).toBe(true);
  });
});
