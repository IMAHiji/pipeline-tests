import { describe, it, expect, vi } from 'vitest';
import Alpine from 'alpinejs';

vi.mock('alpinejs', () => {
  return {
    default: {
      start: vi.fn(),
    },
  };
});

describe('main.ts', () => {
  it('should attach Alpine to window and call Alpine.start()', async () => {
    // Import main.ts dynamically to execute its side effects
    await import('./main');

    // Check if Alpine is attached to window
    expect(window.Alpine).toBeDefined();
    expect(window.Alpine).toBe(Alpine);

    // Check if Alpine.start was called
    expect(Alpine.start).toHaveBeenCalled();
  });
});
