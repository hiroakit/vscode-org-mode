import * as vscode from 'vscode';
import * as assert from 'assert';

interface TestEditorOptions {
    language?: string;
    content?: string;
}

type TestEditorAction = (editor: vscode.TextEditor, document: vscode.TextDocument) => Promise<void> | void;

async function inTextEditor(options: TestEditorOptions, action: TestEditorAction) {
    const d = await vscode.workspace.openTextDocument(options);
    await vscode.window.showTextDocument(d);
    await action(vscode.window.activeTextEditor!, d);
}

suite('Outline', () => {
    test('Document symbols should not break on empty heading with trailing space', async () => {
        const ext = vscode.extensions.getExtension('vscode-org-mode.org-mode');
        await ext?.activate();

        const content =
            '* Top level\n' +
            '** Sub level\n' +
            '** Next subheading is empty without a trailing space\n' +
            '**\n' +
            '** Next has a trailing space\n' +
            '** \n' +
            '** This heading should still be shown in outline\n' +
            '* And this one too\n';

        await inTextEditor({ language: 'org', content }, async (_, document) => {
            const symbols = await vscode.commands.executeCommand<vscode.DocumentSymbol[]>(
                'vscode.executeDocumentSymbolProvider',
                document.uri
            );

            assert.ok(Array.isArray(symbols), 'Expected symbols array');
            const collectNames = (items: vscode.DocumentSymbol[]): string[] => {
                const names: string[] = [];
                for (const s of items) {
                    names.push(s.name);
                    if (s.children?.length) {
                        names.push(...collectNames(s.children));
                    }
                }
                return names;
            };
            const names = collectNames(symbols);

            assert.ok(names.includes('Top level'));
            assert.ok(names.includes('Sub level'));
            assert.ok(names.includes('This heading should still be shown in outline'));
            assert.ok(names.includes('And this one too'));
        });
    });
});

