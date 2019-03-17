import { getTerminal } from "../util/terminal";
import * as vscode from 'vscode';

export async function gitup() {
  let terminal = await getTerminal(true);
  terminal.show(false);
  await vscode.commands.executeCommand('workbench.action.terminal.focus');
  await terminal.sendText('git pull --rebase --autostash');
}