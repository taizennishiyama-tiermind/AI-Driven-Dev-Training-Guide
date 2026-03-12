export interface Section {
  readonly id: string
  readonly title: string
  readonly content: string
}

export interface Resource {
  readonly title: string
  readonly url: string
  readonly description: string
  readonly type: 'blog' | 'book' | 'docs' | 'video'
}

export interface PromptExample {
  readonly label: string
  readonly prompt: string
}

export interface ComparisonRow {
  readonly misconception: string
  readonly reality: string
}

export interface Chapter {
  readonly id: number
  readonly slug: string
  readonly title: string
  readonly subtitle: string
  readonly coreMessage: string
  readonly icon: string
  readonly color: string
  readonly duration: string
  readonly sections: readonly Section[]
  readonly resources: readonly Resource[]
  readonly prompts: readonly PromptExample[]
  readonly handsOn?: string
  readonly comparisons?: readonly ComparisonRow[]
}

export const chapters: readonly Chapter[] = [
  {
    id: 1,
    slug: 'what-is-ai-driven-dev',
    title: 'AI駆動開発とは何か',
    subtitle: '思想の転換',
    coreMessage: 'AIに作ってもらう。ただし、うまく作ってもらうための材料は人が渡す。',
    icon: 'Lightbulb',
    color: '#d4764e',
    duration: '20min',
    sections: [
      {
        id: 'definition',
        title: 'AI駆動開発の定義',
        content: `AI駆動開発とは、**人が願望・前提・制約・材料を渡し、AIが自律的に組み上げる**開発スタイルです。

- **願望** — 何を作りたいか
- **前提** — 誰が使うか、どこで使うか、何のためか
- **制約** — セキュリティ、人数、予算、環境、期限
- **材料** — データ、参考資料、既存ファイル、デザインの方向性`
      },
      {
        id: 'difference',
        title: '従来との違い',
        content: `**従来の開発：** 人が設計 → 人が実装 → AIは補完

**AI駆動開発：** 人が材料を渡す → AIが実装・整理・改善・テスト補助まで組み上げる

Claude Codeは「補助ツール」ではなく**「実装の主役」**です。`
      },
      {
        id: 'dont-overdesign',
        title: '「設計しすぎない」という考え方',
        content: `- 技術選定を細かく決めすぎると、AIの最適化余地を潰す
- 古い知識でライブラリを固定すると、最適でないものを指定してしまうリスク
- **基本はAIに任せる。こだわりたい部分だけ人が握る**
- 知識がある人は、その知識でこだわる箇所を明確にする`
      },
      {
        id: 'aidd-kit',
        title: 'AIDD Kit（研修用プリセット環境）',
        content: `この研修では、プロジェクトのひな形を **AIDD Kit** としてGitHubで配布しています。ディレクトリ構成、AIのルールファイル、ドキュメントのひな形があらかじめ入っているので、**ゼロから環境を作る手間が省けます。**

下のボタンからZIPをダウンロードして、展開したフォルダをVS Codeで開くだけで準備完了です。`
      }
    ],
    comparisons: [
      { misconception: 'AIは補助的に使うもの', reality: 'AIを主戦力として使い、材料設計を人がする' },
      { misconception: '全部自分で設計してからAIに渡す', reality: '目的・前提・制約・材料だけ渡せばいい' },
      { misconception: 'コード補完みたいなもの', reality: 'ゼロから組み上げまでやってくれる' },
      { misconception: '要件を短く正確に定義しないといけない', reality: 'ラフでもいいから多く伝えた方がいい' }
    ],
    resources: [
      { title: 'MIT Tech Review「バイブコーディングの衝撃」', url: 'https://www.technologyreview.jp/s/366301/', description: 'AIが生成するコードの比率が9割を超える。AI駆動開発の全体像を掴む記事', type: 'blog' },
      { title: 'もはやClaude Codeはエンジニア以外も全員が使うべきツールになった', url: 'https://note.com/kajiken0630/n/nc0cb92bc080f', description: '非エンジニアがClaude Codeを業務に活用した事例と考察', type: 'blog' },
      { title: '非エンジニアのための Claude Code / Cowork ベストプラクティス', url: 'https://zenn.dev/storehero/articles/18f7cf454ad947', description: 'ファイル読み書き・コマンド実行まで自律的にやってくれる「AI同僚」の使い方', type: 'blog' },
      { title: '技術評論社『Claude CodeによるAI駆動開発入門』', url: 'https://gihyo.jp/book/2025/978-4-297-15275-8', description: 'ハンズオンでWebアプリ構築しながら学べる初の入門書', type: 'book' },
      { title: '技術評論社『実践Claude Code入門』', url: 'https://gihyo.jp/book/2026/978-4-297-15354-0', description: 'スペック駆動開発のフレームワークまで踏み込んだ実践書', type: 'book' }
    ],
    prompts: [
      { label: '体験：丸投げしてみる', prompt: '問い合わせ対応アプリを作ってください。' },
      { label: '体験：ちょっと指定してみる', prompt: '問い合わせ対応アプリを作ってください。和モダンなデザインでお願いします。' }
    ],
    handsOn: undefined
  },
  {
    id: 2,
    slug: 'what-to-give-ai',
    title: '最初に何を渡せばうまくいくか',
    subtitle: '入力の質',
    coreMessage: '最初から綺麗に書かなくていい。まずはできるだけ多く伝える。',
    icon: 'MessageSquare',
    color: '#c06a44',
    duration: '20min',
    sections: [
      {
        id: 'seven-materials',
        title: 'AIに渡す7つの材料',
        content: `#### 1. 願望（何を作りたいか）
何を作りたいのか、どういう体験を作りたいのか。**綺麗に言語化しなくてよい。ラフでもいいので量を出す。**

#### 2. 利用者情報（誰が使うか）
社内向きか顧客向きか、ITリテラシーは高いか低いか。**最低限「誰が使うか」は明確にする。**

#### 3. 利用規模（何人くらいか）
何人くらいが使うのか、同時アクセスはあるか。**これでテストの厚み、構成の堅さが変わる。**

#### 4. 機密性・セキュリティ要件
機密情報を扱うか、外部公開するか。**機密性が高いなら最初に伝える。**

#### 5. 動作環境（どこで動かしたいか）
ローカルだけか、Vercelに出すか、社内環境で閉じたいか。

#### 6. こだわり（人が握るべき部分）
見た目の雰囲気、ブランドトーン、使ってほしくない技術。**ここだけは明確にする。それ以外はAIに任せる。**

#### 7. 実データ・既存資料・参考情報
CSV / Excel / 画像 / PDF / API仕様書。**言葉で説明するより実物を渡した方が早い。**`
      },
      {
        id: 'manifest-intro',
        title: 'manifest.md に書き出す',
        content: `7つの材料が出てきたら、プロジェクトの \`docs/manifest.md\` に書き出しましょう。**manifest.md は「作りたいものの前提メモ」**です。

- 要件定義書のように堅く書く必要はありません
- 音声入力の内容をそのまま貼ってもOK
- 箇条書きでも、話し言葉でも大丈夫
- **大事なのは「頭の中にあることを外に出す」こと**

このファイルがあると、Claude Codeは最初からあなたの意図を把握した状態で作業を始められます。第4章で詳しく解説しますが、**まずは「メモを1つ作る」くらいの感覚でOK**です。`
      },
      {
        id: 'voice-input',
        title: '音声入力の活用',
        content: `文章にしようとすると止まる人が多いですが、**話すなら意外と出てきます。**

「こういう人が使って」「こういう課題があって」「こんな画面がほしくて」

AI駆動開発では**「ラフな多量入力」**がとても強いです。最初から綺麗に書かなくていい。まずは音声入力で、やりたいことを一気に話してください。話した内容をそのまま manifest.md に貼るだけで、立派な「前提メモ」になります。`
      }
    ],
    resources: [
      { title: 'GMOペパボ「Claude Code チュートリアル」', url: 'https://zenn.dev/pepabo/articles/898cdc4839acb8', description: 'プロンプトの出し方、CLAUDE.mdの育て方が実務目線で解説', type: 'blog' },
      { title: 'Claude Codeベストプラクティス 7つの鉄則', url: 'https://qiita.com/nogataka/items/392934f79e943e8b9228', description: '「何を」「どこまで」の2点は常に含めたいという指示のコツ', type: 'blog' },
      { title: 'Claude Code 入門: 導入から基本操作まで', url: 'https://tech.quartetcom.co.jp/2026/02/24/claude-code-guide/', description: 'セッション管理、コンテキスト管理、コスト管理の実務ノウハウ', type: 'blog' }
    ],
    prompts: [
      { label: '願望を伝える（ラフでOK）', prompt: '経理部で毎月やってる販管費の分析を楽にしたいです。今はExcelの勘定科目データを手作業で前年と比較して、増えた項目・減った項目を1つずつ確認してシートにまとめています。月に2時間くらいかかります。当月と前年同月のExcelを読み込んだら、自動で増減を分析してくれるWebアプリがほしいです。' },
      { label: '制約を明示する', prompt: '利用者は経理部の3名で、Excelは使えますがプログラミングはできません。扱うデータは社内の財務データなので機密性は高いです。社内ネットワークのみで使い、外部には公開しません。月に1回、月初に使います。' },
      { label: 'デザインのこだわりを握る', prompt: 'マニュアルを見なくても操作方法が直感的にわかるデザインにしてください。数字は見やすい大きめのフォントで、増減が一目で分かるように色分けしてほしいです。グラフも付けて推移が視覚的に分かるようにしてください。技術選定やデータ構造はお任せします。' }
    ],
    handsOn: '自分の作りたいものを2〜3分、音声入力で話す。そのテキストをそのまま docs/manifest.md として保存。Claude Codeに渡して、何が生まれるか見る。'
  },
  {
    id: 3,
    slug: 'files-as-materials',
    title: '材料は言葉だけでなく"ファイル"で渡す',
    subtitle: 'assetsフォルダ',
    coreMessage: '言葉だけで説明しなくていい。材料があるなら最初から渡す。',
    icon: 'FolderOpen',
    color: '#a05839',
    duration: '10min',
    sections: [
      {
        id: 'assets-folder',
        title: 'assets/ フォルダの運用',
        content: `プロジェクトルートに \`assets/\` フォルダを作り、**手持ちの材料をそのまま入れます。**

#### 1. 具体例：経理部の入出金CSV変換アプリの場合

たとえば第2章で出てきた「銀行の入出金CSVを社内Excel書式に自動変換するアプリ」を作るなら：

- **銀行からエクスポートしたCSV** — そのまま \`assets/\` に入れる。AIがカラム構造（日付・摘要・入金・出金・残高 etc.）を読み取り、最適なデータ変換ロジックを組んでくれる
- **社内のExcelひな形** — 変換後のフォーマットを渡すことで、AIが「どこに何を入れるか」を理解できる
- **部門コード表・勘定科目表** — マッピングルールの元データ。CSVやExcelで渡せばAIが自動マッピング機能を組む

#### 2. 他にも入れてよいもの

| 種類 | 具体例 | AIがやってくれること |
|---|---|---|
| 過去のレポート | 月次分析シート、実績報告書 | 同じ書式で自動出力する機能を作る |
| 業務マニュアル | 操作手順書、社内規定PDF | 仕様の前提として読み取り、設計に反映 |
| ロゴ・アイコン | 会社ロゴ、アプリアイコン素材 | ヘッダーやファビコンに自動組み込み |
| 写真・イラスト | 製品写真、サンプル画像 | ギャラリーやカード表示に反映 |
| 参考UI画像 | 「こんな感じにしたい」スクショ | デザインの方向性として解釈して再現 |
| デザインガイド | ブランドカラー、フォント指定 | 色・余白・フォントを一貫して適用 |`
      },
      {
        id: 'why-files',
        title: 'なぜファイルを渡すと強いのか',
        content: `**AIはファイルの中身を読んで理解します。**

たとえばCSVを渡すと、AIは：
- カラム名と型（日付、数値、テキスト）を把握する
- データの件数や傾向を理解する
- そのデータに最適化した入力フォーム、表示画面、変換ロジックを設計する

Excelひな形を渡すと：
- どのセルに何が入るかを読み取る
- 入力データをひな形のどこにマッピングすればいいか判断する
- 書式やレイアウトを再現した出力を作る

**言葉で「CSVには日付と金額と摘要があって…」と説明するより、ファイルを1つ渡す方がはるかに正確。** AIにとって実物は最強の仕様書です。`
      }
    ],
    resources: [
      { title: '個人開発で用意したドキュメント24種を全公開', url: 'https://qiita.com/tomada', description: '実際に用意した24種のドキュメント一覧', type: 'blog' },
      { title: '非エンジニアのVibe coding体験記', url: 'https://note.com/akinat/n/n54ce0bc5b284', description: '非エンジニアが2ヶ月でアプリリリースした実体験', type: 'blog' }
    ],
    prompts: [
      { label: 'assets/ の中身を確認させる', prompt: 'assets/ フォルダの中身を確認して、それぞれのファイルがどんなデータか教えてください。このデータを使ってどんなアプリが作れそうか、提案もお願いします。' },
      { label: 'CSVの構造を理解させる', prompt: 'assets/ にある CSV ファイルを読み込んで、カラム構造とデータの中身を分析してください。このデータをどう活用するか提案してください。' }
    ],
    handsOn: 'assets/ フォルダを作り、自分の業務で使っている実データ（CSV、Excel、PDFマニュアル、ロゴ画像など）を入れる。Claude Codeに中身を確認させて、何が作れそうか提案してもらう。'
  },
  {
    id: 4,
    slug: 'requirements-and-claude-md',
    title: 'requirements.md と CLAUDE.md',
    subtitle: '中級者編：要件定義とAIの行動ルール',
    coreMessage: '基本は任せる。必要なところだけ人が握る。',
    icon: 'FileText',
    color: '#e08b63',
    duration: '25min',
    sections: [
      {
        id: 'intro',
        title: 'この章の位置づけ',
        content: `**この章は中級者編です。** 第2章（manifest.md）と第3章（assets/）の準備だけでも、Claude Codeは十分に動きます。

ここで紹介する requirements.md と CLAUDE.md は「**もっと自分の意図に近い仕上がりにしたい**」人向けです。飛ばして第5章に進んでもOK。余裕ができたら戻ってきてください。`
      },
      {
        id: 'requirements',
        title: 'requirements.md を作る',
        content: `manifest.md が「何を作りたいか」のラフメモなら、requirements.md は**「使う人にどんな体験をさせたいか」を具体的に書いた要件定義書**です。

**技術のことは書かなくてOK。** 「Reactで作る」のような技術選定はAIに任せましょう。あなたが書くのは**「使う人の目線」**だけです。`
      },
      {
        id: 'requirements-prompt',
        title: 'requirements.md の作り方',
        content: `自分でゼロから書く必要はありません。Claude Code に頼むだけで作れます。

- assets/ に参考画像や既存資料を入れておくと、AIがそれを読み取って要件に反映してくれる
- だから第3章で assets/ に材料を入れた後にこのステップを踏むのが効果的
- 生成されたら必ず読み返して「ここは違う」「ここはもっとこだわりたい」とフィードバック`
      },
      {
        id: 'claude-md',
        title: 'CLAUDE.md を作る',
        content: `requirements.md が「**使う人の体験**」を書いたものなら、CLAUDE.md は「**AIがどう動くか**」のルールファイルです。

**なぜ必要か：**
- AIは毎回同じ方向で動くとは限らない
- CLAUDE.md があると**ブレずに一貫性を持って働いてくれる**
- \`/clear\` した後も自動で読み込まれるので**引き継ぎの心配がない**

**作り方：** \`/init\` を実行するだけ。manifest.md・assets/・requirements.md を読み取って自動生成されます。`
      },
      {
        id: 'workflow',
        title: 'ここまでの流れ',
        content: `アプリを作り始めるまでの全体像です。**ステップ3・4はこの章の内容で、省略してもOKです。**`
      }
    ],
    resources: [
      { title: 'CLAUDE.md や AGENTS.md のベストプラクティスな書き方', url: 'https://izanami.dev/post/47b08b5a-6e1c-4fb0-8342-06b8e627450a', description: 'WHY/WHAT/HOWの3要素を300行以内で書く', type: 'blog' },
      { title: 'CLAUDE.md運用のベストプラクティス 7つの原則', url: 'https://zenn.dev/imohuke/articles/claude-code-best-practices-2026', description: '「悪いCLAUDE.md」と「良いCLAUDE.md」を対比して解説', type: 'blog' },
      { title: '効果的なCLAUDE.mdの書き方', url: 'https://zenn.dev/farstep/articles/how-to-write-a-great-claude-md', description: 'CLAUDE.mdの内部メカニズムを技術的に解説', type: 'blog' },
      { title: 'Claude Code公式 ベストプラクティス', url: 'https://code.claude.com/docs/ja/best-practices', description: '公式。CLAUDE.mdのフォーマット、/initの使い方', type: 'docs' }
    ],
    prompts: [
      { label: 'requirements.md をユーザー体験ベースで作成する', prompt: 'docs/manifest.md と assets/ の中身をすべて読んで、docs/requirements.md を作成してください。技術的なことではなく、ユーザーの体験に集中してください。以下の5つの観点を含めてください：\n1. ユーザージャーニー — 初回アクセスから目的達成までの流れ\n2. 画面ごとの体験 — 各ページでユーザーが何を見て何をするか\n3. 例外ケース — エラー時・データが空のとき・想定外の入力にどう対応するか\n4. 使い心地 — 読み込み中の表示、スマホ対応、文字の読みやすさ\n5. やらないこと — v1では対応しない機能の一覧' },
      { label: '/init で CLAUDE.md を生成', prompt: '/init' },
      { label: 'requirements.md をさらにブラッシュアップする', prompt: 'docs/requirements.md を読み直してください。以下の観点で不足や曖昧な箇所がないか確認して、改善案を提示してください：\n- ユーザーが迷いそうな画面遷移はないか\n- エラー時のユーザー体験が定義されているか\n- スマホでの使い勝手が考慮されているか\n- やらないことが明記されているか' }
    ],
    handsOn: 'manifest.md と assets/ が準備できている状態で、Claude Code に requirements.md の生成を依頼する。生成された内容を読み返し、「ユーザー体験」の観点でフィードバックして改善する。その後 /init で CLAUDE.md を自動生成し、内容を確認・調整する。'
  },
  {
    id: 5,
    slug: 'implement-with-claude-code',
    title: 'Claude Codeで実装する',
    subtitle: '実装と反復',
    coreMessage: '最初から完璧を狙わず、まず動くものを作る。見ながら直す。',
    icon: 'Terminal',
    color: '#d4764e',
    duration: '30min',
    sections: [
      {
        id: 'basic-flow',
        title: 'まず作ってみる',
        content: `準備したドキュメントを渡して、いきなりアプリを作らせましょう。Chapter 3〜4で用意した manifest.md、Requirements.md、CLAUDE.md、assets/ がここで活きます。`
      },
      {
        id: 'design',
        title: 'デザインシステムを渡す',
        content: `アプリが動いたら、次はデザインの質を上げます。**デザインシステム**を渡すだけで、AIが色・余白・フォントを一貫して適用してくれます。

| ステップ | やること |
|---|---|
| 選ぶ | 下の3種類からプロジェクトに近いものを選ぶ |
| 入れる | Markdownファイルをダウンロードして \`docs/\` フォルダに入れる |
| 伝える | 「docs/design_system.md に合わせてUI全体を調整して」と伝える |

**補足：** 参考にしたいデザインの画像や、アプリに埋め込みたいイラスト・写真なども \`assets/\` に入れておくと、AIがそれを読み取って活用してくれます。`
      },
      {
        id: 'localhost',
        title: 'localhost でアプリを確認する',
        content: `**localhost（ローカルホスト）とは：**
自分のPC上でアプリを動かすこと。インターネットに公開する前に、手元のブラウザで画面を見て触れます。Claude Codeが \`npm run dev\` などのコマンドを実行すると、ブラウザに自分だけのアプリが表示されます。

**なぜ必要か：**
AIの「できました」を鵜呑みにしない。実際に触ると必ず見つかる：

- 動線が分かりづらい
- 文言が不自然
- 思った動きと違う
- レイアウトが崩れている

**小さな違和感を早く見つける → すぐ伝える → すぐ直る。** このサイクルの速さがAI駆動開発の強みです。`
      },
      {
        id: 'feedback',
        title: 'フィードバックのコツ',
        content: `具体的に伝えるほど、AIの修正精度が上がります。

| こう伝えると伝わる | 避けたい伝え方 |
|---|---|
| 「ヘッダーの文字が小さくて読みにくい。大きくして」 | 「なんか違う」 |
| 「ボタンが目立たない。色を変えて目立たせて」 | 「もっといい感じにして」 |
| 「スマホだとテーブルがはみ出す。カード表示にして」 | 「レスポンシブにして」 |
| 「登録後に完了メッセージがない。不安になる」 | 「UXが悪い」 |

**ヒント：** 「レスポンシブ対応してください」「スマホでも使えるようにしてください」のような一言もフィードバックとして非常に有効です。`
      },
      {
        id: 'context-management',
        title: 'コンテキスト管理',
        content: `Claude Codeの入力欄の下に**コンテキストの使用量**（例：「63% used」）が表示されています。これはAIの「記憶のキャパシティ」です。`
      },
      {
        id: 'skills',
        title: 'さらにカスタマイズしたい方へ：スキル（Skills）',
        content: `Claude Codeには**スキル**という仕組みがあり、特定の作業（セキュリティチェック、コードレビューなど）の精度を上げるプリセットを追加できます。興味がある方はCLAUDE.mdに「セキュリティレビューのスキルを使ってチェックして」のように書くだけで使えます。詳しくは公式ドキュメントをご覧ください。`
      }
    ],
    resources: [
      { title: '非エンジニアがClaude Codeを使って1ヶ月でできたこと', url: 'https://qiita.com/ussu_ussu_ussu/items/33ba41fadad02215aede', description: '非エンジニアが1ヶ月間Claude Codeを使った実体験。フィードバックループの実例', type: 'blog' },
      { title: 'バイブコーディングチュートリアル：カンバンアプリケーション', url: 'https://azukiazusa.dev/blog/vibe-coding-tutorial-create-app-with-claude-code/', description: 'Claude Codeでアプリを作る一連の流れ。指示→確認→修正のループが学べる', type: 'blog' },
      { title: 'Claude Codeベストプラクティス2026 最新機能活用ガイド', url: 'https://qiita.com/dai_chi/items/63b15050cc1280c45f86', description: 'Skills、Custom Commands、Hooks、Sub Agentsの使い分け', type: 'blog' },
      { title: 'Claude Code 完全ガイド（30万字、無料）', url: 'https://zenn.dev/tmasuyama1114/books/claude_code_basic', description: '全10パート・約50チャプター。困ったときの自習用リファレンス', type: 'docs' }
    ],
    prompts: [
      { label: '実装してローカルで動かす', prompt: 'それでは実際にアプリを実装してください。ハイクオリティで、ユーザーがマニュアルなしでも直感的に迷わず操作できる洗練されたUI/UXで、機能を完全に作りきってください。ローカルでブラウザから動作確認できる状態までお願いします。' },
      { label: 'UI修正（具体的に伝える）', prompt: '一覧画面の数字が小さくて読みにくいです。フォントサイズを大きくして、前年比で増えている項目は赤、減っている項目は青で色分けしてください。スマホで見たときはテーブルではなくカード表示に切り替えてほしいです。' },
      { label: '機能追加（目的から伝える）', prompt: '毎回全データをスクロールして探すのが面倒なので、絞り込み機能をつけてください。部署名・勘定科目・期間で絞り込めるようにして、入力するたびにリアルタイムで結果が変わるようにしてほしいです。' },
      { label: 'エラー修正（ログを貼る）', prompt: '以下のエラーが出ています。修正してください。\n\nTypeError: Cannot read properties of undefined (reading \'map\')\n  at UserList (src/components/UserList.tsx:12:18)\n\nデータ取得前に画面を描画しようとしているのが原因のようです。データがない場合は「データがありません」と表示してください。' },
      { label: 'デザインの質を上げる', prompt: 'docs/design_system.md を読んで、このデザインシステムに合わせてUI全体を調整してください。特に、マニュアルを見なくても操作が分かるような、直感的で洗練されたデザインを目指してください。' }
    ],
    handsOn: 'manifest.md + CLAUDE.md + assets/ を使って、自分のアプリを作る。Claude Codeに指示 → localhost確認 → フィードバック → 修正のループを最低1回体験する。'
  },
  {
    id: 6,
    slug: 'github-workflow',
    title: 'GitHubと実務運用の流れ',
    subtitle: '変更管理とデプロイ',
    coreMessage: 'AIが高速に変更を加えるほど、差分管理の重要性が増す。',
    icon: 'GitBranch',
    color: '#c06a44',
    duration: '30min',
    sections: [
      {
        id: 'why-github',
        title: 'なぜGitHubが重要か',
        content: `AIに自由にコードを書いてもらうのは便利ですが、**何をいつ変えたのか分からなくなる**と大変です。

GitHubは**コードの変更履歴を記録する場所**です。ノートの「Ctrl+Z（元に戻す）」の超強力版だと思ってください。

| GitHubでできること | 日常での例え |
|---|---|
| 変更履歴の記録 | ファイルの「バージョン管理」。いつでも過去の状態に戻れる |
| 差分の確認 | 「前と何が違うのか」をハイライト表示で一目で分かる |
| 安全な実験 | 「ブランチ」で別の作業場を作り、元のコードに影響を出さず試せる |
| チームでの共有 | プッシュすれば、チーム全員が最新のコードを見られる |
| レビュー | 「Pull Request」で変更内容をチームに確認してもらえる |

**ポイント：** GitHubの操作はほぼ全てClaude Codeに任せられます。コマンドを覚える必要はありません。`
      },
      {
        id: 'github-setup',
        title: 'GitHubを使うための準備',
        content: `#### 1. GitHubアカウントを作る

GitHubの公式サイト（github.com）でアカウントを作成します。メールアドレスがあれば無料で作れます。

#### 2. 2段階認証（2FA）を設定する

GitHubでは**2段階認証が必須**です。ログインIDとパスワードに加えて、もう1つの確認手段を設定します。

**設定方法（スマホアプリが一番簡単）：**
1. GitHubにログイン → Settings → Password and authentication
2. 「Enable two-factor authentication」をクリック
3. **Authenticator app（認証アプリ）** を選択
4. スマホで Google Authenticator や Microsoft Authenticator をインストール
5. 表示されるQRコードをスマホアプリで読み取る
6. アプリに表示される6桁のコードを入力して完了

**認証アプリが使えない場合：** KeePassXC などのパスワード管理ソフトでもワンタイムパスワード（TOTP）を管理できます。

#### 3. VS Code との連携

VS Code で Git を使う場合、初回に GitHub ログインが求められます。ブラウザが開くので、そこでログインすれば自動連携されます。`
      },
      {
        id: 'github-basics',
        title: 'GitHubの基本用語（これだけ知っていればOK）',
        content: `| 用語 | 意味 | 日常での例え |
|---|---|---|
| **リポジトリ** | プロジェクトの保管場所 | 1つのプロジェクト用のフォルダ |
| **コミット** | 変更を記録すること | ファイルの「保存ボタン」+「何を変えたかメモ」 |
| **プッシュ** | ローカルの変更をGitHubに送ること | ファイルをクラウドにアップロード |
| **プル** | GitHubの最新版をローカルに取得 | クラウドからファイルをダウンロード |
| **ブランチ** | コードの「別の作業場」 | 下書きノート。失敗しても本番に影響なし |
| **Pull Request** | 変更をチームに確認依頼 | 「これで良いですか？」と提出すること |
| **マージ** | ブランチの変更を本番に取り込む | 下書きを清書に反映する |

**全部覚えなくても大丈夫。** Claude Codeに「コミットして」「プッシュして」と伝えれば、コマンドはAIが実行してくれます。`
      },
      {
        id: 'github-daily',
        title: '日常の使い方（Claude Codeに任せる）',
        content: `GitHubの操作は、以下のサイクルで進めます。**全てClaude Codeへの指示で完結します。**

#### 基本のサイクル

\`\`\`
① アプリを修正する（Claude Codeに指示）
② 動作確認する（localhost で触る）
③ 「コミットして」と伝える → 変更が記録される
④ 「プッシュして」と伝える → GitHubに反映される
⑤ ①に戻る
\`\`\`

#### もし壊してしまったら

「前の状態に戻してください」とClaude Codeに伝えるだけ。Gitの履歴から安全に巻き戻してくれます。**だからこそ、こまめにコミットしておくことが大事です。**`
      },
      {
        id: 'deploy-overview',
        title: 'デプロイ（公開）の全体像',
        content: `アプリが完成したら、次のステップは**デプロイ（公開）**です。ローカルでしか見れないアプリを、他の人もアクセスできる状態にします。

#### デプロイ先の選択肢

| デプロイ先 | 特徴 | 向いている用途 |
|---|---|---|
| **Vercel** | 最も簡単。GitHubと連携するだけ | 個人プロジェクト、素早い公開 |
| **Cloudflare Workers** | 高速・低コスト。AIDD Kit対応 | 本番寄りの運用 |
| **Azure App Service** | 企業のセキュリティポリシーに準拠 | 社内システム、データ国内保持が必要な場合 |

**どれを選ぶかは「誰が使うか」「セキュリティ要件は何か」で決まります。** 迷ったら、まずはVercelで素早く公開して体験するのがおすすめです。`
      },
      {
        id: 'azure-deploy',
        title: 'Azure デプロイ環境の使い方',
        content: `社内ポリシーでデータの国内保持が必要な場合や、企業のAzure環境を使う場合の手順です。

#### 開発環境の申請フロー

| ステップ | 誰が | 何をする |
|---|---|---|
| 1. 環境を申請 | あなた | JANDI等のチャットで管理者（大下さん）に「開発環境がほしい」と連絡 |
| 2. 環境を作成 | 管理者 | 空のAzure Web App + GitHubリポジトリを用意 |
| 3. URL を受け取る | あなた | アプリURL と GitHubリポジトリURL を受け取る |
| 4. 開発を始める | あなた | Claude Codeでアプリを作り、git push するだけ |

**タイミング：** アプリを作り始める時点で申請してください。環境作成は5〜10分程度で完了します。

#### 日常の開発フロー（Azure の場合）

\`\`\`
① Claude Code でアプリを作成・修正する
② git push origin main を実行する（Claude Codeに「プッシュして」と伝えればOK）
③ GitHub Actions が自動でAzureにデプロイしてくれる
④ https://アプリ名.azurewebsites.net で動作確認する
\`\`\`

**Vercelと同じ感覚です。** git push するだけで自動的にアプリが更新されます。

#### 技術スタック（Azure環境の場合）

Azure環境では、以下の構成が標準です：
- フロントエンド: **React (Vite)**
- バックエンド: **Node.js (Express)**
- データベース: **Cosmos DB**（必要な場合のみ）
- 認証: **Entra ID (Easy Auth)**（必要な場合のみ）

Claude Codeに「Azure App Service向けに作ってください」と伝えれば、この構成に合わせて実装してくれます。`
      }
    ],
    resources: [
      { title: 'Claude Code 公式：一般的なワークフロー', url: 'https://code.claude.com/docs/ja/common-workflows', description: '公式。コミット、PR作成、ブランチ運用のワークフローガイド', type: 'docs' },
      { title: 'Claude Code 個人的ベストプラクティス', url: 'https://qiita.com/sijiaoh/items/6aea2d31141e5c989bee', description: '小さい単位でレビューしながら進める、コミットメッセージをClaude Codeに書かせる', type: 'blog' },
      { title: 'Vibe Codingで非エンジニアに開発を担ってもらう技術', url: 'https://zenn.dev/coten/articles/c97af3aad358fd', description: '非エンジニアがPRまで作成する構想と実例', type: 'blog' }
    ],
    prompts: [
      { label: '初めてのGitHub登録', prompt: 'このプロジェクトをGitHubに登録してください。秘密情報（.env など）は含めないようにしてください。' },
      { label: '変更を保存する', prompt: '今までの変更を保存（コミット）してください。何を変えたか分かるように、変更内容の説明もつけてください。' },
      { label: '別の作業を始めるとき', prompt: '検索機能を追加したいので、新しいブランチを作って、そこで作業を進めてください。元のコードには影響が出ないようにしてください。' },
      { label: 'チームに変更を共有する', prompt: 'GitHub にプッシュして、変更内容をチームに共有してください。「何を変えたか」「なぜ変えたか」「確認してほしいポイント」を説明文に入れてください。' },
      { label: '変更内容の確認', prompt: '今の変更内容を確認して、意図しない変更（消し忘れ、不要なファイル）がないかチェックしてください。問題があれば教えてください。' },
      { label: '前の状態に戻す', prompt: '最後の変更で画面が崩れてしまいました。1つ前のコミットの状態に戻してください。' },
      { label: '秘密情報の確認', prompt: 'APIキーやパスワードなどの秘密情報がGitHubに上がっていないか確認してください。もし含まれていたら取り除いてください。' }
    ],
    handsOn: '第5章で作ったアプリをGitHubにプッシュする。1箇所修正 → コミット → 差分確認。'
  },
  {
    id: 7,
    slug: 'testing-and-quality',
    title: 'テストと品質',
    subtitle: '品質管理',
    coreMessage: '全部を完璧に守るより、壊れると困るところから守る。',
    icon: 'ShieldCheck',
    color: '#ecac8e',
    duration: '20min',
    sections: [
      {
        id: 'three-layers',
        title: 'テストの3層',
        content: `#### 層1：手で触る確認（必須）
\`localhost\` で実際に触る。主要導線が成立するか確認。UIの違和感をチェック。**これは毎回必ずやる。**

#### 層2：重要ロジックのテスト
対象：計算、バリデーション、データ変換、条件分岐、分類。壊れると困るロジックには簡単でもテストを書く。**テストもClaude Codeに作ってもらってよい。**

#### 層3：主要フローの確認
ログイン、登録、検索、保存、送信 etc. 全部を網羅する必要はない。**「重要な導線」だけは確認できる状態にする。**`
      },
      {
        id: 'test-depth',
        title: 'テストの厚みは前提条件で変わる',
        content: `| 前提 | テストの厚み |
|---|---|
| 自分だけが使う小さな試作 | 手で触る確認だけでもOK |
| 部署内で使う簡易ツール | 重要ロジックのテストまで |
| 顧客が使う本番プロダクト | 主要フローまでしっかり |
| 個人情報を扱う業務システム | ガチガチに固める |

**判断軸：** 何人が使うか / 機密情報を扱うか / 失敗した時の影響 / どのくらい継続運用するか`
      },
      {
        id: 'code-review',
        title: 'コードレビューで品質を上げる',
        content: `テストに加えて、**コードレビュー**も品質向上に効果的です。Claude Codeにコードの問題点をチェックしてもらいましょう。

#### Claude Codeでできるレビュー

| レビュー内容 | 何をチェックするか | いつやるか |
|---|---|---|
| **コードレビュー** | バグ、読みにくい箇所、改善点 | 実装がひと段落したとき |
| **セキュリティチェック** | APIキーの露出、入力検証漏れ | 公開・共有する前 |
| **パフォーマンス確認** | 読み込み速度、データ量への耐性 | 動作が遅いと感じたとき |

**レビューもAIに頼める。** 人間がやるのは「レビュー結果を見て、直すかどうか判断する」ことです。`
      },
      {
        id: 'refactor-performance',
        title: 'リファクタリングとパフォーマンス',
        content: `アプリが動くようになったら、**より良くする**段階です。

#### リファクタリング（コードを整理する）
- 同じ処理が何箇所にもコピーされている → まとめる
- ファイルが長すぎて見通しが悪い → 分割する
- 変数名が分かりにくい → 意味のある名前に変える

#### パフォーマンス向上（軽く・速くする）
- 画像が大きすぎて表示が遅い → 圧縮・最適化する
- データを毎回全件取得している → 必要な分だけ取得する
- 不要なライブラリが入っている → 削除して軽くする

**全てClaude Codeに頼めます。** 「コードを整理して読みやすくしてください」「表示速度を改善してください」と伝えるだけです。`
      }
    ],
    resources: [
      { title: 'バイブコーディングとは？ TDD的アプローチ', url: 'https://cloud-ace.jp/column/detail534/', description: '仕様からテストを書かせる手順を踏まないとバグごと肯定する無意味なテストが生成されるリスク', type: 'blog' },
      { title: '開発工数の8割減を実現させた「バイブコーディング」実装論', url: 'https://codezine.jp/article/detail/22685', description: 'テスト品質・ゴールラインの設定など、品質管理の考え方が参考になる', type: 'blog' },
      { title: 'Claude Code を使いこなすためのベストプラクティス（実践検証付き）', url: 'https://tech.enechange.co.jp/entry/2026/02/16/195000', description: 'テスト実行・品質チェックのワークフローを実務で検証したレポート', type: 'blog' }
    ],
    prompts: [
      { label: 'テストを作ってもらう', prompt: '経費精算の計算処理にテストを追加してください。正常に計算できる場合、入力データが空の場合、同じ経費を二重に登録しようとした場合をチェックしてほしいです。' },
      { label: 'テストを実行する', prompt: 'テストを全て実行して、結果を教えてください。失敗しているものがあれば原因と修正案を教えてください。' },
      { label: 'コードレビューを依頼', prompt: 'このプロジェクトのコード全体をレビューしてください。バグの可能性がある箇所、セキュリティ上の問題、読みにくい箇所があれば指摘して、改善案を教えてください。' },
      { label: 'リファクタリング', prompt: 'コードを整理してください。重複している処理をまとめ、読みやすい構成に改善してください。機能は変えずに、保守しやすいコードにしてください。' },
      { label: 'パフォーマンス改善', prompt: 'アプリの表示速度を改善してください。画像の最適化、不要なライブラリの削除、データ取得の効率化など、できることを提案して実行してください。' },
      { label: 'テスト方針の相談', prompt: 'このプロジェクトは経理部3人が使う経費精算の問い合わせ対応ツールです。どこまでテストすべきか提案してください。全部をテストする必要はないので、「壊れると業務が止まる部分」を優先してください。' }
    ],
    handsOn: '自分のアプリをlocalhostで触り、3つの改善点を見つける。そのうち1つをClaude Codeにフィードバックして修正。コードレビューを依頼してみる。'
  },
  {
    id: 8,
    slug: 'api-and-security',
    title: 'APIと外部連携',
    subtitle: 'つなぎ込み',
    coreMessage: 'AIが作ってくれても、何とどうつながるかは人が理解しておく。',
    icon: 'Plug',
    color: '#a05839',
    duration: '20min',
    sections: [
      {
        id: 'api-basics',
        title: 'APIの基本概念',
        content: `**APIとは：** アプリと外部サービスをつなぐ窓口。レストランで例えると、客（アプリ）がメニュー（API仕様）を見て注文し、キッチン（外部サービス）が料理（データ）を返す、その間の「注文伝票」がAPIです。

**最低限理解すべき6項目：**
1. **どことつながるのか**（連携先：LINE、Gmail、HubSpot、freee etc.）
2. **何を送るのか**（リクエスト：テキスト、画像、CSV etc.）
3. **何が返ってくるのか**（レスポンス：分類結果、生成文、ステータス etc.）
4. **認証が必要か**（APIキー、アクセストークン）
5. **どこに秘密情報を置くべきか**（環境変数 = \`.env\` ファイル）
6. **フロントだけで完結させてよいか**（セキュリティ判断）`
      },
      {
        id: 'line-example',
        title: '具体例：LINE Messaging API',
        content: `**LINE Botの基本的な仕組み：**

1. ユーザーがLINEでメッセージや写真を送信
2. LINEプラットフォームがWebhook URLに転送
3. あなたのサーバーがメッセージを受信
4. AIで内容を分析・分類
5. 結果に応じた返答をLINE APIで送信

**実務での活用例：**
- 製品写真を送ると → AIが品番・カテゴリを自動判定 → 仕様情報を返す
- 「このランプが点かない」と送ると → AIが「不具合報告」と分類 → 対応手順を自動返答
- 現場の施工写真を送ると → 過去の類似事例を検索 → 参考情報を返す

**必要な準備：**
- LINE Developersでチャネルを作成（無料）
- チャネルアクセストークンを取得
- Webhook URLを設定（サーバーが必要）

**ポイント：** LINE APIは無料枠が月200通あるので試作には十分です。Claude Codeに「LINE Botを作って」と伝えれば、Webhookサーバーの雛形まで作ってくれます。`
      },
      {
        id: 'secret-management',
        title: '秘密情報の扱い',
        content: `**鉄則：秘密情報はフロントエンドに直置きしない。**

**フロントに置いてはいけないもの：**
- APIキー / チャネルシークレット / DB接続情報 / 外部サービスの認証情報

**なぜダメか：**
- ブラウザの開発者ツールから丸見えになる
- 悪意あるユーザーに盗まれる
- 悪用される → 従量課金が暴走、不正利用、情報漏洩

**どうすべきか：**
- サーバー側で持つ（フロントからは見えない）
- 環境変数で管理する（\`.env\` ファイル）
- \`.env\` は \`.gitignore\` に入れてGitHubに上げない
- \`.env.example\` だけGitHubに上げて、チームに何が必要か伝える`
      },
      {
        id: 'api-patterns',
        title: 'よくあるAPI連携パターン',
        content: `| パターン | 具体例 | 難易度 |
|---|---|---|
| メール送信 | Gmail API / SendGrid でメール自動送信 | 低 |
| チャット連携 | LINE / Slack にメッセージ送信 | 低 |
| データ取得 | HubSpot / Salesforce から顧客情報を取得 | 中 |
| ファイル操作 | Google Drive にファイルを保存・取得 | 中 |
| 決済・会計 | freee / Stripe で請求書作成・決済処理 | 高 |
| AI処理 | OpenAI / Gemini API で文章生成・画像分析 | 中 |

**Claude Codeに伝えるとき：**
「LINE Messaging API を使って、ユーザーが送った写真を受け取って、その内容を分析して返答するBotを作ってください。LINE Developersのチャネルアクセストークンは .env に入れます。」

→ これだけで、Webhookサーバー + 画像取得 + 返信処理の雛形が生成されます。`
      }
    ],
    resources: [
      { title: 'LINE Messaging API 公式チュートリアル', url: 'https://developers.line.biz/ja/docs/messaging-api/building-bot/', description: 'LINE Botの作り方。チャネル作成→Webhook設定→メッセージ送受信', type: 'docs' },
      { title: 'AIエージェント時代の秘密情報管理 〜 .envを守る5つの防御層', url: 'https://qiita.com/kotaro_ai_lab/items/f8746a5ca8b883f7f5a7', description: 'Claude Code時代の.env管理。パーミッション、サンドボックス、Hooksの活用', type: 'blog' },
      { title: 'Claude Code でLINEミニアプリを開発してみた', url: 'https://dev.classmethod.jp/articles/claude-code-line-liff-app-development-tips/', description: 'Claude CodeでLINE連携アプリを開発した実践レポート', type: 'blog' },
      { title: 'Claudeと対話してLINEジャーナリングBotを作った話', url: 'https://zenn.dev/kamuigp/articles/1798ecbe97dffc', description: 'GAS×Claude APIでLINE Botを構築。Webhook〜返信の実装例', type: 'blog' }
    ],
    prompts: [
      { label: 'LINE Botの雛形を作る', prompt: 'LINE Messaging API を使って、ユーザーがLINEで送ったメッセージに自動で返信するBotを作ってください。チャネルアクセストークンとチャネルシークレットは .env に入れます。まずはオウム返し（送られたメッセージをそのまま返す）から始めてください。' },
      { label: '画像分析Botにする', prompt: 'LINE Botを拡張して、ユーザーが写真を送ったら内容を分析して返答する機能を追加してください。「これは何の製品か」「どんな状態か」を判定して、該当する対応手順を返すようにしてほしいです。' },
      { label: '環境変数を整理する', prompt: 'このプロジェクトで使っている環境変数を整理してください。.env.example を作って、何のキーが必要か・どこで取得するかをコメントで書いてください。.env が .gitignore に入っているかも確認してください。' },
      { label: '秘密情報の安全チェック', prompt: 'APIキーやパスワードなどの秘密情報がソースコードやGitHubに含まれていないか確認してください。フロントエンドのコードからAPIキーが見える状態になっていないかもチェックしてください。' }
    ],
    handsOn: 'LINE Messaging API のチャネルを作成し、Claude Codeでオウム返しBotを実装する。.envにトークンを設定し、Webhookで動作確認。余裕があれば写真送信→AI分類の機能を追加。'
  },
  {
    id: 9,
    slug: 'llm-integration',
    title: 'LLMをアプリに組み込むときの設計',
    subtitle: '番外編',
    coreMessage: 'LLMは、生成だけでなく分類にも使える。',
    icon: 'Brain',
    color: '#834932',
    duration: '30min',
    sections: [
      {
        id: 'two-patterns',
        title: 'LLMの使い方は2種類ある',
        content: `#### パターンA：生成に使う
LLMが最終出力を作る。例：チャット返答、要約文、メール文面、提案文、画像生成。最も「AIっぽい」見え方。

#### パターンB：判定・分類に使う
LLMが最終出力を作らず、**入力を解釈する役割だけ担う**。例：問い合わせ内容の分類、テキストのカテゴリ分け、緊急度判定、意図判定。

入門者には見落とされがちだが、**実務では非常に強い。**`
      },
      {
        id: 'classification-design',
        title: '「分類だけAIに任せる」設計',
        content: `**基本フロー：**
ユーザーが自由入力（非構造データ）
→ LLMで内容を分類（「不具合報告」「要望」「質問」「緊急対応」etc.）
→ 分類結果に応じて分岐
→ 定型メッセージを返す / 担当部署に振り分ける / 別画面に遷移させる

| 観点 | 生成型 | 分類型 |
|---|---|---|
| コスト | 毎回生成で従量課金高め | 入出力が短く安め |
| 安定性 | 文面がぶれる、想定外あり | 出力が安定、テストしやすい |
| 運用性 | 制御しづらい | ルールベースで制御可能 |
| 監査 | AIが何を答えるか不明 | AIは仕分けだけ。最終アクションは定義済み |`
      },
      {
        id: 'secure-design',
        title: 'LLM組み込み時のセキュア設計',
        content: `**必須ルール：**
- APIキーをフロントに置かない（鉄則・再掲）
- サーバー側からLLMを呼ぶ
- 利用量を管理する（従量課金の暴走防止）
- ログ・監査を考える

**LLMを組み込むときに増えるリスク：**
- 従量課金 / 情報送信 / レスポンス遅延 / 出力の揺れ / プロンプトインジェクション`
      }
    ],
    resources: [
      { title: 'KDDI「LLMとは？仕組みや種類、生成AIとの違い」', url: 'https://biz.kddi.com/content/column/smartwork/what-is-llm/', description: 'コンタクトセンター特化型LLMで問い合わせ分類の実務例', type: 'blog' },
      { title: 'Supabase x LINE Bot 編 - Claude Code で効率的に学ぶ', url: 'https://zenn.dev/4geru/books/fukuoka-supabase-line-messaging-api/viewer/intro-03-cursor-development-guide', description: 'LLM + LINE Messaging API + バックエンド連携の実装チュートリアル', type: 'blog' },
      { title: 'Google AI Studio', url: 'https://ai.google.dev/', description: 'LLM機能の試作をノーコードで体験可能。生成型と分類型の違いを試せる', type: 'docs' }
    ],
    prompts: [],
    handsOn: 'Google AI Studio で問い合わせ分類を体験する。生成型と分類型の出力の違いを比較。'
  }
]

export const keyMessages = [
  'AIに作ってもらう。ただし、材料は人が渡す。',
  '最初から綺麗に書かなくていい。まずは多く伝える。',
  '言葉だけで説明しなくていい。材料があるなら最初から渡す。',
  '基本は任せる。必要なところだけ人が握る。',
  'まず動くものを作る。見ながら直す。',
  '壊れると困るところから守る。',
  'APIキーはフロントに置かない。',
  'LLMは、生成だけでなく分類にも使える。',
  '毎回フル生成しなくてもいい。分類だけAIに任せる設計は安くて安定しやすい。'
]

export const timeline = [
  { time: '0:00-0:20', content: 'AI駆動開発とは何か / 思想の転換', chapter: 1 },
  { time: '0:20-0:40', content: '何をAIに渡すか / 音声入力の活用', chapter: 2 },
  { time: '0:40-0:50', content: 'assets フォルダの考え方', chapter: 3 },
  { time: '0:50-1:15', content: 'requirements.md と CLAUDE.md（中級者編）', chapter: 4 },
  { time: '1:10-1:15', content: '休憩', chapter: 0 },
  { time: '1:15-1:50', content: 'デモ1: ゼロから作る', chapter: 5 },
  { time: '1:50-2:20', content: 'Claude Codeで実装 / localhost確認', chapter: 5 },
  { time: '2:20-2:30', content: '休憩', chapter: 0 },
  { time: '2:30-2:50', content: 'デモ2: localhost確認 → フィードバック', chapter: 5 },
  { time: '2:50-3:10', content: 'GitHub・PR', chapter: 6 },
  { time: '3:10-3:15', content: 'デモ3: GitHub・PR', chapter: 6 },
  { time: '3:15-3:35', content: 'テストと品質', chapter: 7 },
  { time: '3:35-3:55', content: 'API・外部連携・秘密情報', chapter: 8 },
  { time: '3:55-4:00', content: '休憩', chapter: 0 },
  { time: '4:00-4:30', content: '番外編: LLM組み込み設計', chapter: 9 },
  { time: '4:30-4:40', content: 'デモ4: LLMの2パターン比較', chapter: 9 },
  { time: '4:40-5:00', content: 'まとめ / 配布物説明 / Q&A', chapter: 0 }
]
