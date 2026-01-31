//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';

import * as utils from '../src/utils';
import * as simpleDatetime from '../src/simple-datetime';

async function withLeftZero(enabled: boolean, action: () => Promise<void>) {
    const config = vscode.workspace.getConfiguration("org");
    const previous = config.inspect<boolean>("addLeftZero")?.workspaceValue;
    await config.update("addLeftZero", enabled, vscode.ConfigurationTarget.Workspace);
    try {
        await action();
    } finally {
        await config.update("addLeftZero", previous, vscode.ConfigurationTarget.Workspace);
    }
}


// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    // Defines a Mocha unit test
    test("Dummy test", async () => {
        const expected = '***';
        const headerPrefix = utils.getHeaderPrefix('*** Header');

        assert.equal(headerPrefix, expected);
    });
});

suite("Simple datetime", () => {
    test("parseDate parses weekday when present", async () => {
        const parsedWithWeekday = simpleDatetime.parseDate("[2024-1-2 Tue]");
        assert.deepStrictEqual(parsedWithWeekday, {
            year: 2024,
            month: 1,
            day: 2,
            weekday: "Tue",
        });

        const parsedWithoutWeekday = simpleDatetime.parseDate("[2024-1-2]");
        assert.deepStrictEqual(parsedWithoutWeekday, {
            year: 2024,
            month: 1,
            day: 2,
            weekday: undefined,
        });
    });

    test("buildDateString respects left zero setting", async () => {
        const date = { year: 2024, month: 1, day: 2, weekday: "Tue" };
        await withLeftZero(false, async () => {
            assert.equal(simpleDatetime.buildDateString(date), "[2024-1-2 Tue]");
        });
        await withLeftZero(true, async () => {
            assert.equal(simpleDatetime.buildDateString(date), "[2024-01-02 Tue]");
        });
    });

    test("buildDateTimeString pads date and time", async () => {
        const dateTime = {
            year: 2024,
            month: 1,
            day: 2,
            weekday: "Tue",
            hours: 3,
            minutes: 4,
        };
        await withLeftZero(true, async () => {
            assert.equal(simpleDatetime.buildDateTimeString(dateTime), "[2024-01-02 Tue 03:04]");
        });
    });

    test("modifyDate adjusts by one day", async () => {
        await withLeftZero(false, async () => {
            assert.equal(simpleDatetime.modifyDate("[2024-1-2 Tue]", "UP"), "[2024-1-3 Wed]");
            assert.equal(simpleDatetime.modifyDate("[2024-1-2 Tue]", "DOWN"), "[2024-1-1 Mon]");
            assert.equal(simpleDatetime.modifyDate("[2024-1-2]", "UP"), "[2024-1-3]");
        });
    });

    test("getClockTotal handles ranges and padding", async () => {
        await withLeftZero(false, async () => {
            assert.equal(simpleDatetime.getClockTotal("CLOCK: 10:05--11:45"), "1:40");
        });
        await withLeftZero(true, async () => {
            assert.equal(simpleDatetime.getClockTotal("CLOCK: 10:05--11:45"), "01:40");
        });
        assert.equal(simpleDatetime.getClockTotal("CLOCK: 10:05"), "");
    });
});
