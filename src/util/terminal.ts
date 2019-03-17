import * as vscode from 'vscode';
import { getWorkspaceFolder } from './editor';

let terminal: vscode.Terminal | null = null;

export async function getTerminal(currentDir: Boolean): Promise<vscode.Terminal> {
  if (terminal === null) {
    terminal = vscode.window.createTerminal("Grunner");
  }
  await terminal.sendText(`cd ${getWorkspaceFolder()}`);
  return terminal;
}