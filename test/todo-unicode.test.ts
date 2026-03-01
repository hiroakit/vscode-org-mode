import * as vscode from 'vscode';
import * as assert from 'assert';

interface TestEditorOptions {
    language?: string;
    content?: string;
}

type TestEditorAction = (editor: vscode.TextEditor, document: vscode.TextDocument) => void;

async function inTextEditor(options: TestEditorOptions, action: TestEditorAction) {
    const d = await vscode.workspace.openTextDocument(options);
    await vscode.window.showTextDocument(d);
    await vscode.extensions.getExtension('vscode-org-mode.org-mode')?.activate();
    await action(vscode.window.activeTextEditor!, d);
}

async function withTodoKeywords<T>(keywords: string[], action: () => Thenable<T>) {
    const config = vscode.workspace.getConfiguration('org');
    const original = config.get<string[]>('todoKeywords');
    try {
        await config.update('todoKeywords', keywords, vscode.ConfigurationTarget.Global);
        return await action();
    } finally {
        await config.update('todoKeywords', original, vscode.ConfigurationTarget.Global);
    }
}

suite('Todo switching (unicode)', () => {
    test('IncrementContext cycles unicode keywords', async () => {
        const steps = [
            '* Header',
            '* 待办 Header',
            '* 完成 Header',
            '* Header',
        ];

        await withTodoKeywords(['待办', '完成'], () =>
            inTextEditor({ language: 'org', content: steps[0] }, async (_, document) => {
                for (let i = 1; i < steps.length; ++i) {
                    await vscode.commands.executeCommand('org.incrementContext');
                    assert.equal(document.getText(), steps[i]);
                }
            })
        );
    });

    test('DecrementContext cycles unicode keywords', async () => {
        const steps = [
            '* 完成 Header',
            '* 待办 Header',
            '* Header',
            '* 完成 Header',
        ];

        await withTodoKeywords(['待办', '完成'], () =>
            inTextEditor({ language: 'org', content: steps[0] }, async (_, document) => {
                for (let i = 1; i < steps.length; ++i) {
                    await vscode.commands.executeCommand('org.decrementContext');
                    assert.equal(document.getText(), steps[i]);
                }
            })
        );
    });
});

