const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// 解凍するZIPファイルのパス
const zipFilePath = 'encrypted.zip';

// パスワード
const password = 'your_password_here';

// AdmZipインスタンスを作成
const zip = new AdmZip(zipFilePath);

try {
    // 解凍先のディレクトリパスを現在の作業ディレクトリに設定
    const extractToPath = process.cwd();

    // パスワードでZIPファイルを解凍
    zip.extractAllTo(extractToPath, true, password);
    console.log('ZIPファイルが解凍されました。');

    // ZIPファイルのパスからファイル名を取得
    const zipFileName = path.basename(zipFilePath);

    // 解凍後に元のZIPファイルを削除
    fs.unlink(zipFilePath, (err) => {
        if (err) {
            console.error('ZIPファイルの削除中にエラーが発生しました:', err);
        } else {
            console.log(`ZIPファイル「${zipFileName}」が削除されました。`);
        }
    });
} catch (error) {
    console.error('ZIPファイルの解凍中にエラーが発生しました:', error.message);
}

