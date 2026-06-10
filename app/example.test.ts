import { describe, it, expect } from 'vitest';

describe('Example math tests', () => {
  it('should add two numbers correctly', () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
  });

  it('should handle string concatenation', () => {
    const result = 'Hello' + ' ' + 'World';
    expect(result).toBe('Hello World');
  });
});

