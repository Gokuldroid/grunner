import * as vscode from 'vscode';
import { getConfig } from '../util/config';
import { getTerminal } from '../util/terminal';


export async function customCommands() {
  const commands = getConfig().get<any>('customCommands');


  interface CmdQuickPickItem extends vscode.QuickPickItem {
    cmd: string;
  }
  const cmds: CmdQuickPickItem[] = commands.map((command: any) => {
    return {
      label: `${command.title}`,
      cmd: command.cmd
    };
  });


  return vscode.window.showQuickPick(cmds).then((cmd: CmdQuickPickItem | undefined) => {
    if (!cmd) {
      return;
    }
    return cmd.cmd;
  }).then(async (cmd) => {
    if (!cmd) {
      return;
    }
    let terminal = await getTerminal(true);
    terminal.sendText(cmd);
  });
}