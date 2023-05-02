import { validateUserName } from './work';

describe('validateUserName', () => {
  it('should return valid for valid username', () => {
    expect(validateUserName('')).toEqual(false);
  });

  it('should not allow number', () => {
    expect(validateUserName('123 Bob')).toEqual(false);
  });
});
