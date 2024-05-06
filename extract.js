const fs = require('fs');
const AdmZip = require('adm-zip');

// 解凍するZIPファイルのパス
const zipFilePath = 'encrypted.zip';

// 解凍先のディレクトリパス
const extractToPath = 'extracted';

// パスワード
const password = 'your_password_here';

// AdmZipインスタンスを作成
const zip = new AdmZip(zipFilePath);

try {
    // パスワードでZIPファイルを解凍
    zip.extractAllTo(extractToPath, true, password);
    console.log('ZIPファイルが解凍されました。');
} catch (error) {
    console.error('ZIPファイルの解凍中にエラーが発生しました:', error.message);
}

