var js = require("./getjscontent")
var pep8 = require("./getpep8content")
var notes = require("./getnotescontent")
var mdcn = require("./getmdcncontent")
var rest = require("./getrestcontent")
var vim = require("./getvimcontent")
var vscode = require("vscode")

function activate(context) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.look-pep8', () => {
		const panel1 = vscode.window.createWebviewPanel('look pep8', 'Look PEP8', vscode.ViewColumn.One, {});
		panel1.webview.html = pep8.getpep8content();
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.look-js-styleguide', () => {
		const panel2 = vscode.window.createWebviewPanel('look js styleguide', 'Look js-StyleGuide', vscode.ViewColumn.One, {});
		panel2.webview.html = js.getjscontent();
	}));
	context.subscriptions.push(vscode.commands.registerCommand("extension.look-notes", () => {
		const panel3 = vscode.window.createWebviewPanel('look notes', 'Look Notes', vscode.ViewColumn.One, {});
		panel3.webview.html = notes.getnotescontent();
	}));
	context.subscriptions.push(vscode.commands.registerCommand("extension.look-rest", () => {
		const panel4 = vscode.window.createWebviewPanel('look rest', 'Look ReST', vscode.ViewColumn.One, {});
		panel4.webview.html = rest.getrestcontent();
	}));
	context.subscriptions.push(vscode.commands.registerCommand("extension.look-markdown-cn", () => {
		const panel5 = vscode.window.createWebviewPanel('look markdown cn', 'Look MarkDown CN', vscode.ViewColumn.One, {});
		panel5.webview.html = mdcn.getmdcncontent();
	}));
	context.subscriptions.push(vscode.commands.registerCommand("extension.look-vim", () => {
		const panel6 = vscode.window.createWebviewPanel('look vim', 'Look Vim', vscode.ViewColumn.One, {});
		panel6.webview.html = vim.getvimcontent();
	}));
}
exports.activate = activate;