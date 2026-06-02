# SimpleVercelHTML

HTML、CSS、JavaScriptだけで構成した、Vercel向けの静的サイトです。

## ファイル構成

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── vercel.json
└── README.md
```

## Vercelへの接続

1. このリポジトリをGitHubにpushする
2. Vercelで「Add New...」→「Project」を選ぶ
3. GitHubリポジトリをImportする
4. Framework Presetは `Other` を選ぶ
5. Build Commandは空のままにする
6. Output Directoryは空のまま、または `.` を指定する
7. Deployを実行する

`vercel.json` はリポジトリ直下に置いてあります。VercelがGitHubと接続されたら、そのまま静的ファイルとして公開できます。
