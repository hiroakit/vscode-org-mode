// import * as vscode from 'vscode';
import {
    Position,
    Range,
    TextEditor,
    TextEditorEdit,
} from "vscode";
import * as Util from './utils';

// Any potential data labels should go here
export const DATE = "DATE";
export const TODO = "TODO";

interface IContextData {
    dataLabel: string,
    data: string,
    line: number,
    range: Range
}

export default function getCursorContext(_textEditor: TextEditor, _edit: TextEditorEdit): IContextData {
    const document = Util.getActiveTextEditorEdit();
    const cursorPos = Util.getCursorPosition();
    const curLine = Util.getLine(document, cursorPos);

    // Match for timestamp
    const timestampRegexp = /\[\d{4}-\d{1,2}-\d{1,2}(?: \w{3})?\]/g;
    let match;

    while ((match = timestampRegexp.exec(curLine)) != null) {
        const timestampContext = getTimestampContext(match, cursorPos);
        if (timestampContext) {
            return timestampContext;
        }
    }

    // Match for TODO (or absence)
    const keywords = Util.getKeywords();
    const todoKeywords = keywords.filter((k) => k !== "").join("|");

    // For keyword matching, avoid `\b` because JS word boundaries are ASCII-based and
    // don't work for non-ASCII keywords (e.g. CJK). Instead require a delimiter that
    // we expect after a TODO keyword in a heading.
    if (todoKeywords) {
        const todoHeaderRegexp = new RegExp(`^(\\s*\\*+\\s+)(${todoKeywords})(?=\\s|\\[|$)`);
        match = todoHeaderRegexp.exec(curLine);
        if (match) {
            return getTodoContext(match, cursorPos);
        }
    }

    // If this is a heading without a keyword, treat it as the empty TODO keyword context.
    const headerPrefixRegexp = /^(\s*\*+\s+)/;
    match = headerPrefixRegexp.exec(curLine);
    if (match) {
        return getEmptyTodoContext(match, cursorPos);
    }

    return undefined;
}

function getTimestampContext(match: RegExpExecArray, cursorPos: Position): IContextData {
    const line = cursorPos.line;

    const startPos = new Position(line, match.index);
    const endPos = new Position(line, match.index + match[0].length);
    const range = new Range(startPos, endPos);
    if (range.contains(cursorPos)) {
        // We've found our match
        return {
            data: match[0],
            dataLabel: DATE,
            line,
            range
        };
    }

    // Should return undefined if no match contains the cursor
}

function getTodoContext(match: RegExpExecArray, cursorPos: Position): IContextData {
    const line = cursorPos.line;

    const todoWord = match[2];

    const start = match.index + match[1].length;
    const startPos = new Position(line, start);
    const end = start + todoWord.length;
    const endPos = new Position(line, end);
    const range = new Range(startPos, endPos);

    return {
        data: todoWord,
        dataLabel: TODO,
        line,
        range
    };
}

function getEmptyTodoContext(match: RegExpExecArray, cursorPos: Position): IContextData {
    const line = cursorPos.line;

    const start = match.index + match[1].length;
    const pos = new Position(line, start);
    const range = new Range(pos, pos);

    return {
        data: "",
        dataLabel: TODO,
        line,
        range
    };
}