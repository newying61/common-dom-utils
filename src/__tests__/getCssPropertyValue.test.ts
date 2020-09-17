import { getCssPropertyValue } from '..';

describe('getCssPropertyValue', () => {
  it('should return CSS value', () => {
    const value = getCssPropertyValue(document.body, "display");

    expect(value).toBe('block');
  });

  it('should return empty if el does not exist', () => {
    const value = getCssPropertyValue(null, 'display');

    expect(value).toBe('');
  });
});
