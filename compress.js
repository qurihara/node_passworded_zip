const fs = require('fs');
const AdmZip = require('adm-zip');

// 圧縮するテキストファイルのパス
const filePath = 'sample.txt';

// ZIPファイルの出力先と名前
const zipFilePath = 'output.zip';

// パスワード
const password = 'your_password_here';

// AdmZipインスタンスを作成
const zip = new AdmZip();

// テキストファイルをZIPに追加
zip.addLocalFile(filePath);

// ZIPをパスワードで暗号化して保存
zip.writeZip(zipFilePath, password);

console.log('ZIPファイルが作成されました。');

// テキストファイルを削除
fs.unlink(filePath, (err) => {
  if (err) {
    console.error('テキストファイルの削除中にエラーが発生しました:', err);
  } else {
    console.log('テキストファイルが削除されました。');
  }
});
