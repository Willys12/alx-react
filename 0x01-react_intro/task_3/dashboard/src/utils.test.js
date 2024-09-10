import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Testing if getFullYear returns the correct year
it('should return the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

// Test if getFooterCopy returns correct strings when arg is true or false
it('should return the correct strings', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});

// Test if getLatestNotification returns the expected string
it('should return expected string', () => {
    const expectedNot = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedNot);
});
