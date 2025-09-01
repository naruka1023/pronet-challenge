import { EmptyPipe } from './empty-pipe';

describe('EmptyPipe', () => {
  const pipe = new EmptyPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "-" when value is empty string', () => {
    expect(pipe.transform('')).toBe('-');
  });

  it('should return the value itself when value is not empty', () => {
    expect(pipe.transform('Hello')).toBe('Hello');
    expect(pipe.transform(42)).toBe(42);
    expect(pipe.transform(true)).toBe(true);
  });
});
