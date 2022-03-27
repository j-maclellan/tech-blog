const { expect, test } = require("@jest/globals");
const {format_date } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-03-22 16:12:03');
    
    expect(format_date(date)).toBe('3/22/2022');
});
