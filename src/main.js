// const dayjs = require ('dayjs');
// const now  = dayjs();
// import { thisNotification } from "./module/notification";

// アプリケーション作成用のモジュールを読み込み
const {app, BrowserWindow, ipcMain} = require('electron');

// メインウィンドウ
let mainWindow;

function createWindow() {
  // メインウィンドウを作成します
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 800, height: 600,
  });

  // メインウィンドウに表示するURLを指定します
  // （今回はmain.jsと同じディレクトリのindex.html）
  mainWindow.loadFile('index.html');

  // デベロッパーツールの起動
  mainWindow.webContents.openDevTools();

  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

//  初期化が完了した時の処理
app.on('ready', createWindow);

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', () => {
  // メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});

// playwiright
const pw = require('playwright');

ipcMain.handle("start1", async () => {
    const browser = await pw.webkit.launch(); // or 'chromium', 'firefox'
    const context = await browser.newContext();
    const page = await context.newPage();
  
    await page.goto('https://www.yahoo.co.jp/');
    await page.screenshot({ path: 'example3.png' });
})
