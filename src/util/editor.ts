import * as vscode from 'vscode';


export function currentDocument(): vscode.TextDocument | null {
  let activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return null;
  }
  return activeEditor.document;
}


export function getWorkspaceFolder(): string | undefined {
  if (vscode.workspace.workspaceFolders) {
    if (currentDocument()) {
      const workspaceFolder = vscode.workspace.getWorkspaceFolder(currentDocument()!.uri);
      if (workspaceFolder) {
        return workspaceFolder.uri.fsPath;
      }
    }
    return vscode.workspace.workspaceFolders[0].uri.fsPath;
  } else {
    return undefined;
  }
}