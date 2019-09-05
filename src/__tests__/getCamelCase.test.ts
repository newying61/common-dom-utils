import { getCamelCase } from '..';

describe('getCamelCase', () => {
  it('should return camel case property name', () => {
    expect(getCamelCase('test-property-name')).toBe('testPropertyName');
  });
});
