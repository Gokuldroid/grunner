// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getTerminal } from './util/terminal';
import { gitup } from './actions/github';
import { customCommands } from './actions/customCommands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// vscode.window.showInformationMessage('Congratulations, your extension "grunner" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let gitupDisposable = vscode.commands.registerCommand('grunner.gitup', () => {
		gitup();
	});

	let customCommandsDisposable = vscode.commands.registerCommand('grunner.custom-commands', () => {
		customCommands();
	});

	context.subscriptions.push(gitupDisposable);
	context.subscriptions.push(customCommandsDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
