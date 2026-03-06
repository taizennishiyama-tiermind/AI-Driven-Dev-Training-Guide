# AI駆動開発入門研修｜各章リソース・画面構成・ハンズオン設計

---

## 第1章｜AI駆動開発とは何か

### 参考リソース

**テックブログ：**
- **MIT Tech Review「バイブコーディングの衝撃——AI駆動開発が迫るIT業界の大転換」**（2025年8月）
  https://www.technologyreview.jp/s/366301/
  AIが生成するコードの比率が9割を超える企業の事例、エンジニアの役割が「実装者」→「監督者」に変わる話。研修冒頭で「今こういう世界になっている」と見せるインパクトに最適。

- **チャエン「Claude Code 完全入門ガイド【2026年最新版】」**（2026年1月）
  https://note.com/chaen_channel/n/n170fbfcd94bf
  非エンジニアでも政府開発案件を受託した海外事例、Boris Cherny（Claude Code開発者）のセットアップ公開など。「AIで本当にここまでできる」を伝える素材。

- **Zenn「Claude Codeで開発を10倍速にする完全ガイド【2026年版】」**（2026年3月）
  https://zenn.dev/riche/articles/claude-code-dev-guide-2026
  半年間の実務運用レポート。レビュー・テスト作成・リファクタリングの3領域での効果が大きいという実体験。

**書籍（研修後の深掘り用に紹介）：**
- **技術評論社『Claude CodeによるAI駆動開発入門』**（2025年12月刊）
  https://gihyo.jp/book/2025/978-4-297-15275-8
  ハンズオンでWebアプリ構築しながら学べる初の入門書。

- **技術評論社『実践Claude Code入門』**（2025年12月刊）
  https://gihyo.jp/book/2026/978-4-297-15354-0
  スペック駆動開発のフレームワークまで踏み込んだ実践書。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| MIT Tech Reviewの記事見出し | 「AIが生成するコードが9割超」の図 | 衝撃を与え、関心を引く |
| Claude Codeのターミナル画面（スクショ） | 自然言語→コード生成の流れ | 「こんな感じで作ってくれる」を見せる |
| Boris Chernyのツイート画像 | 開発者自身のセットアップが意外とシンプル | 「難しくないんだ」を伝える |
| 従来開発 vs AI駆動開発の比較図 | 自作スライド | 役割の違いを視覚化 |

### ハンズオンテーマ案

**この章ではハンズオンなし。** 講義＋デモ映像で思想の転換に集中する。

---

## 第2章｜最初に何を渡せばうまくいくか

### 参考リソース

**テックブログ：**
- **Zenn（GMOペパボ）「これ読めばOK。私が使ってるものだけの、Claude Code チュートリアル」**（2026年1月）
  https://zenn.dev/pepabo/articles/898cdc4839acb8
  社内チュートリアル資料をそのまま公開。プロンプトの出し方、起動オプション、CLAUDE.mdの育て方が実務目線で書かれている。

- **Qiita「Claude Codeベストプラクティス — 成果を安定させる7つの鉄則」**（2026年3月）
  https://qiita.com/nogataka/items/392934f79e943e8b9228
  「何を」「どこまで」の2点は常に含めたいという指示のコツ。研修で「伝え方のコツ」を教える素材として。

- **QUARTETCOM TECH BLOG「Claude Code 入門: 導入から基本操作・コスト管理まで」**（2026年2月）
  https://tech.quartetcom.co.jp/2026/02/24/claude-code-guide/
  セッション管理、コンテキスト管理、コスト管理の実務ノウハウ。受講者が実務で使うとき真っ先にぶつかる問題への回答。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| 音声入力 → テキスト化の様子 | iPhoneの音声入力 or Whisper等 | 「話すだけでいい」を実演 |
| 実際のプロンプト例（長文） | 音声で話した内容をそのままClaude Codeに投げる | ラフでも動くことを実証 |
| 自作スライド：7つの材料 | 願望・利用者・規模・機密性・環境・こだわり・実データ | チェックリスト的に使える |

### ハンズオンテーマ案

> **「自分の作りたいものを2〜3分、音声入力で話す」**

1. 受講者がスマホの音声入力 or PC音声入力で、作りたいものを一気に話す
2. そのテキストをそのまま `manifest.md` として保存
3. 「これだけで十分材料になる」と講師が確認
4. ペアワーク：隣の人のmanifest.mdを読んで「何が足りないか」を3点指摘

---

## 第3章｜材料は言葉だけでなく"ファイル"で渡す

### 参考リソース

**テックブログ：**
- **Qiita「【Claude Code】マネできる！個人開発するときに最初に用意したドキュメント24種と機能要件書を全公開」**
  https://qiita.com/tomada （同著者の関連記事）
  実際に用意した24種のドキュメント一覧。受講者が「こういうものを入れればいいのか」と具体的にイメージできる。

- **note「非エンジニアのVibe coding体験記（Flutterアプリ）」**（2025年5月）
  https://note.com/akinat/n/n54ce0bc5b284
  非エンジニアが2ヶ月でアプリリリースした実体験。素材やアセットの準備がいかに大事かを語っている。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| プロジェクトのフォルダ構成（VS Code） | `assets/` にCSV・画像・PDFが入っている状態 | 「こう配置する」を見せる |
| CSV → AIが読み取って画面を作る過程 | Claude Codeにデータを渡して一発で表示される | 実物を渡す威力を実感 |
| 参考画像を渡す前後のUI比較 | 参考なし→汎用的 / 参考あり→ブランドに合致 | 「画像1枚でこんなに変わる」 |

### ハンズオンテーマ案

> **「assets フォルダを作って、手持ちのデータを入れる」**

1. 受講者がプロジェクトフォルダ内に `assets/` を作成
2. 手持ちのCSV、スクショ、参考画像など何でもいいから入れる
3. （データがない人向けに、講師側でサンプルCSV・サンプル画像を配布）
4. 第5章のハンズオンで実際にClaude Codeに使ってもらう

---

## 第4章｜`manifest.md` と `CLAUDE.md`

### 参考リソース

**テックブログ：**
- **izanami.dev「CLAUDE.md や AGENTS.md のベストプラクティスな書き方」**（2026年1月）
  https://izanami.dev/post/47b08b5a-6e1c-4fb0-8342-06b8e627450a
  WHY/WHAT/HOWの3要素を300行以内で書く。CLAUDE.mdの書き方を最も包括的に解説。

- **Zenn「【Claude Code】CLAUDE.md運用のベストプラクティス：失敗しないための7つの原則」**（2026年2月）
  https://zenn.dev/imohuke/articles/claude-code-best-practices-2026
  「悪いCLAUDE.md」と「良いCLAUDE.md」を対比して解説。コンテキスト汚染の概念が分かりやすい。

- **Zenn「効果的なCLAUDE.mdの書き方」**（2026年2月）
  https://zenn.dev/farstep/articles/how-to-write-a-great-claude-md
  CLAUDE.mdの内部メカニズム（コンテキストウィンドウ消費、無視される条件）を技術的に解説。500行以内推奨の根拠。

- **ENECHANGE Developer Blog「Claude Code を使いこなすためのベストプラクティス（実践検証付き）」**（2026年2月）
  https://tech.enechange.co.jp/entry/2026/02/16/195000
  公式ドキュメントのベストプラクティスを日本語で実践検証。セッション管理、/rename機能など。

- **Claude Code公式ドキュメント「ベストプラクティス」**
  https://code.claude.com/docs/ja/best-practices
  公式。CLAUDE.mdのフォーマット、/initの使い方、Hooksとの使い分け。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| 良いCLAUDE.md vs 悪いCLAUDE.md（スライド） | izanami.devやZennの記事を参考に作成 | 「短くていい」を実感 |
| 実際のCLAUDE.mdサンプル（VS Code上） | 研修配布のたたき台 | そのまま使えるものを見せる |
| manifest.mdのビフォーアフター | 音声入力ラフ → 整理後 | 「これくらいでいい」を見せる |
| Claude Codeが CLAUDE.md を読んで動く様子 | セッション開始時の挙動 | 「これが効いている」を証明 |

### ハンズオンテーマ案

> **「自分のCLAUDE.mdをカスタマイズする」**

1. 講師配布のたたき台をコピー
2. 第2章の音声入力で決めた「作りたいもの」に合わせて修正
3. Project Goal、Users、UI/UXの3箇所を最低限書き換え
4. ペアで見せ合い、フィードバック

---

## 第5章｜Claude Codeで実装する

### 参考リソース

**テックブログ：**
- **gihyo.jp「シンプルなTODOアプリを、Claude Codeを使って5分で作って30分で公開する」**（2025年11月）
  https://gihyo.jp/article/2025/11/get-started-claude-code-03
  5分でTODOアプリ作成→GitHub Pages/Vercelデプロイまで。研修のデモ1にそのまま使える構成。

- **azukiazusa.dev「バイブコーディングチュートリアル：Claude Code でカンバンアプリケーションを作成しよう」**
  https://azukiazusa.dev/blog/vibe-coding-tutorial-create-app-with-claude-code/
  Next.jsでカンバンボード。CLAUDE.mdの効果やフィードバックループの実例が丁寧。

- **DevelopersIO「v0 + Claude Codeで生成したフルスタックアプリをVercel + TiDB Cloudを使って公開」**
  https://dev.classmethod.jp/articles/v0-claude-code-vercel-tidb-cloud/
  v0でフロント → Claude Codeでバックエンド → Vercelデプロイの実例。

- **Qiita「【2026年最新】Claude Skillsを今すぐ学べる！おすすめ記事・YouTube動画まとめ」**（2026年3月）
  https://qiita.com/kamome_susume/items/acbfcae9e61ec9a90b51
  Skillsの入門動画リスト。frontend-designスキルでLPデザインを刷新するデモ動画の紹介あり。

- **Qiita「Claude Codeベストプラクティス2026 — 最新機能活用ガイド」**（2026年1月）
  https://qiita.com/dai_chi/items/63b15050cc1280c45f86
  Skills、Custom Commands、Hooks、Sub Agentsの使い分け。2026年最新の機能マップ。

- **Zenn「Claude Code 完全ガイド — 入門から実践的なカスタマイズまで」**（約30万字、無料）
  https://zenn.dev/tmasuyama1114/books/claude_code_basic
  全10パート・約50チャプター。受講後の自習用リファレンスとして最適。

**YouTube動画（Skillsの紹介に）：**
- Qiitaまとめ記事内で紹介されている **Claude Code Skills入門動画**（2026年1月14日公開、9,800回再生超）
  frontend-designスキルでLPデザインを刷新するデモ収録。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| Claude Codeターミナル（ライブデモ） | manifest.md + CLAUDE.md → 実装開始 | メインの実演 |
| localhost:3000 のブラウザ画面 | 出来上がったアプリを実際に触る | 「動いた！」の成功体験 |
| フィードバック → 修正の往復 | 「この文言を変えて」→ 即反映 | 「見ながら直す」感覚を体験 |
| Skills適用前後の比較 | デザインスキル無し → 有り | クオリティの差を視覚化 |
| VS Code画面 | ファイル構成・エラー確認 | 「作業の現場」としてのVS Code |

### ハンズオンテーマ案

> **「manifest.md + CLAUDE.md + assets/ を使って、自分のアプリを作る」**

**テーマ候補（受講者が選択）：**
1. **シンプルなTODOアプリ**（最も汎用的、初心者向き）
2. **社内FAQ検索ツール**（CSV/JSONデータを assets に入れて活用）
3. **日報入力フォーム**（フォーム → 表示の基本パターン）
4. **自分の業務で使いたいもの**（音声入力で定義済みなら挑戦）

**進め方：**
1. Claude Codeに `manifest.md と CLAUDE.md を読んで最小構成で実装して` と指示
2. localhost で起動確認
3. 最低1回はフィードバック → 修正を体験
4. 隣の人に見せて感想をもらう

---

## 第6章｜GitHubと実務運用の流れ

### 参考リソース

**テックブログ：**
- **gihyo.jp のClaude Code連載（同上）** — ghコマンドでGitHubリポジトリ作成→プッシュの実演

- **Qiita（sijiaoh）「Claude Code 個人的ベストプラクティス」**（2025年12月）
  https://qiita.com/sijiaoh/items/6aea2d31141e5c989bee
  小さい単位でレビューしながら進める、コミットメッセージをClaude Codeに書かせる、`/commit`カスタムコマンドの例。

- **Zenn（COTEN）「Vibe Codingで非エンジニアに開発を担ってもらう技術」**
  https://zenn.dev/coten/articles/c97af3aad358fd
  非エンジニアがPRまで作成する構想と、そのメリット・課題の実例。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| GitHub差分表示（Pull Request画面） | 「AIがこれだけ変えた」のdiff | 変更管理の重要性を実感 |
| Claude Codeが `git diff` → コミットメッセージ生成 | ライブデモ | 「管理もAIがやってくれる」 |
| PR説明文の自動生成 | Claude Codeに依頼 → 出力 | 実務で即使える |
| プロンプト集（配布用PDF） | よく使うGitHub指示の一覧 | 持ち帰り資料 |

### ハンズオンテーマ案

> **「第5章で作ったアプリをGitHubにプッシュする」**

1. Claude Codeに `ghコマンドでリモートリポジトリを作成し、プッシュして` と指示
2. GitHubでリポジトリが出来ていることを確認
3. 1箇所修正 → `変更内容を要約してコミットして` と指示
4. 差分が記録されていることを確認

---

## 第7章｜テストと品質

### 参考リソース

**テックブログ：**
- **Qiita「Claude Codeベストプラクティス — 成果を安定させる7つの鉄則」**（前出）
  「生成したら検証する」を徹底するセクション。git diffでの差分確認 → テスト実行 → /costでトークン消費チェックの3ステップ。

- **アイソルート開発者ブログ「今からでも遅くない！Claude Code入門解説」**（2026年3月）
  https://www.isoroot.jp/blog/9273/
  セキュリティ・品質・操作性を意識した運用ガイドラインの必要性を解説。

- **クラウドエース「バイブコーディングとは？」** の「TDD的アプローチ」セクション
  https://cloud-ace.jp/column/detail534/
  「仕様からテストを書かせる」手順を踏まないと「バグごと肯定する無意味なテスト」が生成されるリスク。研修で必ず伝えるべきポイント。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| localhost での手動確認（ライブデモ） | 実際に触ってUIの違和感を見つける | 「まず手で触る」の実演 |
| Claude Codeにテスト生成を依頼 | `重要なロジックにテストを追加して` | 「テストもAIが書く」 |
| テストの3層図（スライド） | 手で触る / ロジックテスト / フロー確認 | 構造を整理 |
| テスト厚みの判断マトリクス（スライド） | 規模 × 機密性 → テストの厚み | 実務判断の軸 |

### ハンズオンテーマ案

> **「自分のアプリをlocalhost で触り、3つの改善点を見つける」**

1. 第5章で作ったアプリをlocalhost で確認
2. 違和感・改善点を最低3つメモ
3. そのうち1つをClaude Codeにフィードバックして修正
4. `重要なロジックにテストを追加して` を実行

---

## 第8章｜APIと外部連携

### 参考リソース

**テックブログ：**
- **SBクリエイティブ（ビジネス+IT）「Claude Codeで"地味作業"消滅、Excel作業も『秒で終わる』凄ワザ」**（2026年2月）
  https://www.sbbit.jp/article/cont1/179458
  初期設定3選（VS Code拡張、環境変数、.envファイル）が分かりやすく解説。

- **Vercel公式「AI Gateway support for Claude Code」**
  https://vercel.com/changelog/ai-gateway-support-for-claude-code
  Claude Code → Vercel AI Gateway 経由でAPIを呼ぶ構成。本番運用の秘密情報管理の実例。

- **Vercel公式「React Best Practices as Agent Skills」**
  https://vercel.com/blog/introducing-react-best-practices
  VercelがClaude Code用Skillとしてベストプラクティスを公開。スキル図として研修で紹介可能。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| `.env.example` ファイル（VS Code上） | APIキーの置き場所 | 「ここに書く」を見せる |
| ブラウザDevTools → Networkタブ | フロントからAPIが叩かれている様子 | APIの概念をビジュアルで |
| 「見える場所に鍵を置かない」図（スライド） | フロントに置く vs サーバーに置く比較 | セキュリティの基本を視覚化 |
| Vercelの環境変数設定画面 | デプロイ先での秘密情報管理 | 「本番ではここに入れる」 |

### ハンズオンテーマ案

> **「.env.example を作り、環境変数の設定を体験する」**

1. Claude Codeに `環境変数が必要な場合は .env.example を用意して` と指示
2. .env.exampleの中身を確認
3. 講師が「これが本番ではVercelのどこに入るか」を解説
4. （時間があれば）Vercelにデプロイして環境変数を設定

---

## 第9章（番外編）｜LLMを組み込むときの設計

### 参考リソース

**テックブログ：**
- **KDDI法人「LLM (大規模言語モデル) とは？仕組みや種類、生成AIとの違いを解説」**
  https://biz.kddi.com/content/column/smartwork/what-is-llm/
  KDDI × ELYZA × アルティウスリンクの事例（コンタクトセンター特化型LLMで問い合わせ分類→応対メモ自動作成）。まさに「分類型LLM」の実務例。

- **DevelopersIO「2026年のローカルLLM事情を整理してみた」**（2026年1月）
  https://dev.classmethod.jp/articles/local-llm-guide-2026/
  モデルの使い分け、コスト、セキュリティの全体観。「外部に出せないデータ」問題への回答。

- **Google AI Studio Build機能の公式ドキュメント**
  https://ai.google.dev/
  LLM機能の試作をノーコードで体験可能。デモ4でのプロトタイプ作成に使用。

### 見せるべき画面・資料

| 画面 | 内容 | 目的 |
|---|---|---|
| 生成型 vs 分類型の比較図（スライド） | チャット応答 vs ラベル付け→ルールベース分岐 | 2パターンの違いを視覚化 |
| Google AI Studio Build画面 | 問い合わせ分類のプロトタイプ | 「分類だけAIに任せる」を体験 |
| API呼び出しのシーケンス図（スライド） | ユーザー→サーバー→LLM API→分類結果→分岐 | アーキテクチャをシンプルに |
| コスト比較表（スライド） | 毎回生成 vs 分類のみ のトークン消費比較 | 「分類の方が安い」を数字で |
| 実際のLLM APIレスポンス | JSON形式の分類結果 | 「こういうデータが返ってくる」 |

### ハンズオンテーマ案

> **「Google AI Studio で問い合わせ分類を体験する」**

**デモ4: LLMの2パターン比較を受講者も体験する形式**

1. **パターンA（生成型）：** Google AI Studioに「ユーザーの問い合わせに回答して」と指示 → 自由回答が生成される
2. **パターンB（分類型）：** Google AI Studioに「以下のカテゴリに分類して：不具合/要望/質問/緊急」と指示 → ラベルだけ返す
3. 同じ入力に対して両方を試し、出力の違いを比較
4. 「分類結果に応じて定型文を返す」フローを講師が解説

---

## 全体を通しての推奨YouTube動画

| 動画 | 内容 | 使う章 |
|---|---|---|
| **Claude Code Skills 入門動画**（2026年1月、Qiitaまとめ記事経由） | Skillsの意味・作り方・マーケットプレイス導入 | 第5章（デザインスキルの紹介） |
| **チャエンnote内リンクのYC事例動画**（Anthropic公式ブログ） | YCスタートアップ3社がClaude Codeで製品構築した事例 | 第1章（インスピレーション） |
| **Vibe Coding Studio（tmasuyama氏）のUdemy/YouTube講座** | 非エンジニア向けClaude Code体験 | 第1章〜第5章の副教材 |
| **gihyo.jp連載のデモ動画**（TODOアプリ5分構築） | 最もシンプルなデモ例 | 第5章（デモ1の参考） |
| **Qiita無料チュートリアル全11回（tomada氏）** | インストール〜カスタムコマンドまで網羅 | 受講後の自習用 |

---

## 配布物に含めるリソースリンク集

受講者に渡す「参考リンク集」として、以下を1枚PDFにまとめて配布する：

### 入門（まずここから）
- Claude Code 公式ドキュメント: https://docs.anthropic.com/ja/docs/claude-code/overview
- Claude Code ベストプラクティス: https://code.claude.com/docs/ja/best-practices
- Zenn 完全ガイド（30万字、無料）: https://zenn.dev/tmasuyama1114/books/claude_code_basic
- ClaudeCode JP（日本語ポータル）: https://claudecode.jp/ja

### 実践（使い始めたら）
- GMOペパボ チュートリアル: https://zenn.dev/pepabo/articles/898cdc4839acb8
- QUARTETCOM 導入ガイド: https://tech.quartetcom.co.jp/2026/02/24/claude-code-guide/
- ENECHANGE ベストプラクティス検証: https://tech.enechange.co.jp/entry/2026/02/16/195000
- CLAUDE.md の書き方: https://zenn.dev/farstep/articles/how-to-write-a-great-claude-md

### 深掘り（書籍）
- 技術評論社『Claude CodeによるAI駆動開発入門』
- 技術評論社『実践Claude Code入門』

### デプロイ
- gihyo.jp「5分で作って30分で公開」: https://gihyo.jp/article/2025/11/get-started-claude-code-03
- DevelopersIO「Vercel + TiDB Cloud」: https://dev.classmethod.jp/articles/v0-claude-code-vercel-tidb-cloud/
