import { documentReady } from '..';

describe('documentReady', () => {
  it('should fulfil the promis is document is ready', () => {
    documentReady().then((doc) => {
      expect(doc).not.toBeNull();
    })
  });
});
