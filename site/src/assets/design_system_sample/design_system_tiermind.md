# デザインシステム仕様書

> **目的**: 本ドキュメントは、TierMindプロジェクトで確立されたデザイン言語を体系化し、他のアプリケーションやWebサイトに移植・適用するためのリファレンスです。すべてのデザイン決定は、このドキュメントに基づいて行ってください。

---

## 目次

1. [デザインコンセプト](#1-デザインコンセプト)
2. [技術スタック](#2-技術スタック)
3. [カラーシステム](#3-カラーシステム)
4. [タイポグラフィ](#4-タイポグラフィ)
5. [スペーシングシステム](#5-スペーシングシステム)
6. [レイアウトシステム](#6-レイアウトシステム)
7. [ボーダーとラディウス](#7-ボーダーとラディウス)
8. [シャドウシステム](#8-シャドウシステム)
9. [グラスモーフィズム](#9-グラスモーフィズム)
10. [グラデーション](#10-グラデーション)
11. [アニメーション](#11-アニメーション)
12. [UIコンポーネント](#12-uiコンポーネント)
13. [背景装飾](#13-背景装飾)
14. [アイコン](#14-アイコン)
15. [フォーム要素](#15-フォーム要素)
16. [レスポンシブデザイン](#16-レスポンシブデザイン)
17. [アクセシビリティ](#17-アクセシビリティ)
18. [パフォーマンス](#18-パフォーマンス)
19. [開発規約](#19-開発規約)
20. [インストールガイド](#20-インストールガイド)
21. [チェックリスト](#21-チェックリスト)

---

## 1. デザインコンセプト

### 1.1 デザイン原則

| 原則 | 説明 |
|------|------|
| **シンプルさ** | 無駄を削ぎ落とした直感的なUI。複雑さを隠蔽し、ユーザーに考えさせない |
| **透明感** | グラスモーフィズム・半透明レイヤーによる奥行きと軽やかさの表現 |
| **一貫性** | 全コンポーネントで統一されたカラー・スペーシング・アニメーション言語 |
| **モーション** | 物理ベース（Spring）のアニメーションによる自然で心地よいインタラクション |
| **モダンさ** | 最新のデザイントレンドを取り入れた洗練された見た目 |

### 1.2 トーン & マナー

- プロフェッショナルでありながら親しみやすい
- スピード感と信頼性を表現
- 透明感と軽やかさを重視
- Cool（クール）よりWarm（温かみ）寄りのテック感

---

## 2. 技術スタック

| カテゴリ | ライブラリ | バージョン | 用途 |
|---------|-----------|-----------|------|
| UI フレームワーク | React | ^19.2.0 | コンポーネントベースUI |
| 型安全性 | TypeScript | ^5.8.2 | 静的型付け |
| スタイリング | Tailwind CSS | CDN版 | ユーティリティファーストCSS |
| アニメーション | Framer Motion | ^12.23.24 | 物理ベースアニメーション |
| アイコン | Lucide React | ^0.554.0 | SVGアイコンセット |
| ルーティング | React Router DOM | ^7.3.0 | SPA ルーティング |
| フォント | Google Fonts | - | Noto Sans JP, Inter |

---

## 3. カラーシステム

### 3.1 プライマリカラー（Sky / Blue系）

ブランドの中核色。CTA、アクセント、グラデーションに使用。

```css
/* Sky系 - メインアクセント */
--sky-50:  #f0f9ff;   /* 背景・軽いアクセント */
--sky-100: #e0f2fe;   /* ボーダー・バッジ背景・軽い背景 */
--sky-200: #bae6fd;   /* シャドウカラー・装飾 */
--sky-300: #7dd3fc;   /* ホバー状態シャドウ */
--sky-400: #38bdf8;   /* グラデーション開始・アイコン */
--sky-500: #0ea5e9;   /* メインアクセント・ボタン */
--sky-600: #0284c7;   /* ホバー・強調 */
--sky-700: #0369a1;   /* テキスト（濃い）・バッジテキスト */

/* Blue系 - グラデーション終点 */
--blue-50:  /* 背景の補助 */
--blue-100: /* 軽い装飾・ボーダー */
--blue-400: /* アイコン・装飾 */
--blue-500: /* グラデーション終了（ボタン） */
--blue-600: /* グラデーション終了（テキスト）・強調 */
```

### 3.2 ニュートラルカラー

テキスト・背景・ボーダーの階層表現。

```css
/* Gray系 - テキストとUI要素 */
--gray-50:  #f8fafc;   /* 軽い背景（入力フィールド） */
--gray-100: #f1f5f9;   /* 入力フィールド背景・閉じるボタン */
--gray-200: #e2e8f0;   /* ボーダー・区切り */
--gray-300: #cbd5e1;   /* プレースホルダー（入力） */
--gray-400: #94a3b8;   /* 軽いテキスト・無効状態 */
--gray-500: #64748b;   /* セカンダリテキスト・ボディ */
--gray-600: #475569;   /* ボディテキスト（やや濃い） */
--gray-700: #334155;   /* 見出し・ロゴテキスト */
--gray-800: #1e293b;   /* 強調見出し（H1, H2） */
--gray-900: #0f172a;   /* 最も濃いテキスト（ダーク背景） */

/* Slate系 - 中立的なセクション（保守運用等） */
--slate-50  ~ --slate-500  /* 落ち着いたトーンのUI要素 */
```

### 3.3 セマンティックカラー

```css
/* 成功 */
--green-100: /* 成功状態の背景 */
--green-400: #4ade80;  /* ステータスインジケーター */
--green-500: #22c55e;  /* 成功バッジ・チェックマーク */

/* 警告・ハイライト */
--orange-100: /* ハイライトタグ背景 */
--orange-400: #fb923c;  /* 人気バッジグラデーション開始 */
--orange-600: /* ハイライトタグテキスト */

/* エラー */
--red-50:  /* エラーメッセージ背景 */
--red-200: /* エラーボーダー */
--red-500: /* エラーテキスト */
--red-600: /* エラーメッセージテキスト */

/* プロフェッショナル（バリエーションテーマ） */
--indigo-50:  /* タグ背景 */
--indigo-100: /* タグ背景（濃い） */
--indigo-600: /* アクセントテキスト */
--indigo-700: /* タグテキスト */
```

### 3.4 カラー使用ルール

| 用途 | カラー |
|------|--------|
| プライマリアクション | `from-sky-400 to-blue-500` グラデーション |
| セカンダリアクション | `bg-white` + `text-sky-500` + `border-sky-100` |
| 見出しテキスト | `text-gray-800` |
| ボディテキスト | `text-gray-600` / `text-gray-500` |
| プレースホルダー | `text-gray-300` |
| メイン背景 | `bg-white` |
| セクション背景 | `from-white to-sky-50` グラデーション |
| カード背景 | `bg-white/80` + `backdrop-blur-xl` |

---

## 4. タイポグラフィ

### 4.1 フォントファミリー

```css
/* プライマリフォント（本文・見出し） */
font-family: "Noto Sans JP", sans-serif;

/* 数値・コード表示用 */
font-family: "Inter", sans-serif;
```

**Google Fonts 読み込み:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
```

**Tailwind設定:**
```javascript
fontFamily: {
  sans: ['"Noto Sans JP"', 'sans-serif'],
  heading: ['"Noto Sans JP"', 'sans-serif'],
  number: ['"Inter"', 'sans-serif'],
}
```

### 4.2 フォントウェイト

| ウェイト | 用途 | Tailwindクラス |
|---------|------|---------------|
| 400 | 本文テキスト | `font-normal` |
| 500 | 見出しベース（h1-h6のデフォルト） | `font-medium` |
| 700 | ボタン・強調テキスト・バッジ | `font-bold` |
| 900 | 特大見出し（予約枠） | `font-black` |

### 4.3 タイポグラフィスケール

#### 見出し

```css
/* H1 - ヒーローセクション */
text-4xl sm:text-5xl lg:text-7xl      /* 36px → 48px → 72px */
font-bold
leading-[1.2] ~ leading-[1.25]
text-gray-800

/* H2 - セクション見出し */
text-3xl md:text-5xl                    /* 30px → 48px */
font-bold
leading-tight
text-gray-800

/* H3 - サブセクション */
text-xl lg:text-2xl                     /* 20px → 24px */
font-bold
text-gray-800

/* H4 - カード見出し */
text-base md:text-xl                    /* 16px → 20px */
font-bold
text-gray-800
```

#### ボディテキスト

```css
/* リードテキスト（セクション説明文） */
text-base sm:text-lg lg:text-xl         /* 16px → 18px → 20px */
font-medium
leading-relaxed ~ leading-loose ~ leading-[1.9]
text-gray-500

/* 通常テキスト */
text-sm md:text-base                    /* 14px → 16px */
font-medium
leading-relaxed
text-gray-600

/* 小さいテキスト */
text-xs md:text-sm                      /* 12px → 14px */
font-medium
text-gray-500
```

#### 特殊テキスト

```css
/* セクションラベル（英語） */
text-sm uppercase tracking-widest font-bold text-sky-500

/* バッジ・タグ */
text-xs font-bold tracking-wide

/* ボタンテキスト */
text-sm md:text-base font-bold
```

### 4.4 テキストラッピング

```css
/* グローバルCSS */
body { word-break: auto-phrase; }
h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
p, span, li { text-wrap: pretty; }
```

### 4.5 行間（Line Height）

| クラス | 用途 |
|--------|------|
| `leading-[1.2]` | ヒーロー見出し |
| `leading-[1.25]` | 大型見出し |
| `leading-tight` | セクション見出し |
| `leading-relaxed` | ボディテキスト |
| `leading-loose` / `leading-[1.9]` | 長文説明テキスト |

---

## 5. スペーシングシステム

### 5.1 セクション間隔

```css
/* セクション上下パディング */
py-24 md:py-32                /* 96px → 128px */

/* セクション左右パディング */
px-6 md:px-12                 /* 24px → 48px */
px-4 md:px-8                  /* 16px → 32px */

/* セクションヘッダー下マージン */
mb-16 ~ mb-20                 /* 64px → 80px */
```

### 5.2 コンポーネント間隔

```css
/* カード内パディング */
p-6 md:p-8                    /* 24px → 32px（標準） */
p-5 md:p-8                    /* 20px → 32px（コンパクト） */
p-8 md:p-16                   /* 32px → 64px（大型CTA） */

/* 要素間ギャップ */
gap-2                          /* 8px   - 小さいギャップ（タグ群） */
gap-3                          /* 12px  - コンパクトギャップ */
gap-4                          /* 16px  - 標準ギャップ（ボタン群） */
gap-6                          /* 24px  - カードグリッド */
gap-8                          /* 32px  - 大きいギャップ（ナビ） */
gap-12                         /* 48px  - セクション内要素間 */
gap-16                         /* 64px  - 大型レイアウト分割 */
```

### 5.3 マージン

```css
mb-2 ~ mb-4                   /* 8px ~ 16px   - 最小〜小さいマージン */
mb-6 ~ mb-8                   /* 24px ~ 32px  - 中程度マージン */
mb-10 ~ mb-12                 /* 40px ~ 48px  - 大きいマージン */
mb-16 ~ mb-20                 /* 64px ~ 80px  - セクション内分割 */
```

---

## 6. レイアウトシステム

### 6.1 コンテナ

```css
/* 標準コンテナ */
container mx-auto px-6 md:px-12
/* max-w-7xl を必要に応じて付与 */

/* 中央コンテンツ幅 */
max-w-4xl mx-auto             /* FAQ・テキスト中心セクション */
max-w-5xl mx-auto             /* やや広めのセクション */
max-w-6xl mx-auto             /* CTA・保守運用セクション */
max-w-7xl mx-auto             /* カードグリッドなど全幅セクション */
```

### 6.2 グリッドシステム

```css
/* 3カラム（カードグリッド） */
grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8

/* 4カラム（プロセスステップ） */
grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-12

/* 2カラム（保守運用） */
grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8
```

### 6.3 フレックスレイアウト

```css
/* Hero: テキスト + ビジュアル */
flex flex-col lg:flex-row items-center gap-16 lg:gap-12

/* Corporate Hero: 逆順モバイル */
flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20

/* Portfolio: 交互配置 */
flex flex-col lg:flex-row items-center gap-12 md:gap-16
flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16

/* 中央揃え */
flex items-center justify-center
```

### 6.4 セクション構造テンプレート

```html
<section class="py-24 md:py-32 relative overflow-hidden scroll-mt-24" id="セクションID">
  <!-- 背景装飾 -->
  <div class="absolute ..."><!-- アンビエントブロブ --></div>

  <div class="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
    <!-- セクションヘッダー -->
    <div class="text-center mb-16 ~ mb-20">
      <span class="text-sky-500 font-bold tracking-widest text-sm uppercase mb-4 block">SECTION LABEL</span>
      <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">...</h2>
      <p class="text-gray-500 font-medium max-w-2xl mx-auto leading-loose">...</p>
    </div>

    <!-- コンテンツ -->
    <div class="grid / flex ...">...</div>
  </div>
</section>
```

---

## 7. ボーダーとラディウス

### 7.1 ボーダーラディウス

| クラス | サイズ | 用途 |
|--------|--------|------|
| `rounded-full` | 完全円形 | ボタン・バッジ・アバター・アイコンコンテナ |
| `rounded-2xl` | 16px | フォーム入力・小さなカード・モーダル内ボタン |
| `rounded-xl` | 12px | ロゴアイコン・アコーディオン内テキスト・トグル |
| `rounded-lg` | 8px | タグ・小さい装飾要素 |
| `rounded-[2rem]` | 32px | **標準カード**（最も多用） |
| `rounded-[2.5rem]` | 40px | 大きなカード・ヒーロービジュアル |
| `rounded-[3rem]` | 48px | CTA セクション・大型モーダル（デスクトップ） |

### 7.2 ボーダースタイル

```css
/* 標準ボーダー */
border border-white/60            /* グラスモーフィズムカード */
border border-sky-100             /* SKYテーマカード */
border border-gray-100            /* ニュートラルカード */

/* 太いボーダー */
border-2 border-sky-400           /* アウトラインボタン */
border-2 border-transparent       /* フォーム入力（非フォーカス時） */
border-4 border-white/50          /* ポートフォリオ画像 */
border-[6px] border-white         /* モックアップフレーム */

/* セパレーター */
border-b border-sky-100           /* アコーディオン区切り */
border-t border-white/60          /* フッター上ボーダー */
border-t border-gray-100          /* リスト内区切り */

/* グラデーションセパレーター（疑似要素的） */
w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent
```

---

## 8. シャドウシステム

### 8.1 シャドウ階層

```css
/* Level 1: 最小シャドウ（ナビ・フローティングタグ） */
shadow-sm

/* Level 2: 軽いシャドウ（カード・入力フォーカス） */
shadow-lg shadow-sky-100/50
shadow-lg shadow-sky-100/40

/* Level 3: 標準シャドウ（カード・モーダル要素） */
shadow-xl shadow-sky-100/50       /* ← 最も多用 */
shadow-xl shadow-sky-200/30

/* Level 4: 強調シャドウ（ホバー・ポートフォリオ） */
shadow-2xl shadow-sky-200/40
shadow-2xl shadow-sky-200/50

/* Level 5: 最大シャドウ（モーダル・CTA） */
shadow-2xl shadow-sky-900/20      /* モーダル */
shadow-2xl shadow-sky-400/40      /* CTA セクション */
```

### 8.2 ボタンシャドウ

```css
/* Primary ボタン */
shadow-xl shadow-sky-300/50       /* デフォルト */
hover:shadow-sky-400/60           /* ホバー時 */

/* Secondary ボタン */
shadow-lg shadow-sky-100/50       /* デフォルト */
hover:shadow-sky-200/60           /* ホバー時 */
```

### 8.3 ホバーシャドウトランジション

```css
/* カードのホバー */
shadow-xl shadow-sky-100/50                    /* デフォルト */
hover:shadow-2xl hover:shadow-sky-200/30       /* ホバー時 */
transition-all duration-300
```

---

## 9. グラスモーフィズム（Glassmorphism）

本デザインシステムの中核的な視覚表現。

### 9.1 バリエーション

```css
/* 標準グラス効果（カード） */
bg-white/80
backdrop-blur-xl
border border-white/60
shadow-xl shadow-sky-100/50

/* 軽いグラス効果（フッター・フローティング要素） */
bg-white/50
backdrop-blur-md
border border-white/50

/* 濃いグラス効果（モバイルメニュー） */
bg-white/95
backdrop-blur-xl

/* 極薄グラス効果（ヒーローバッジ） */
bg-white/80
backdrop-blur-md
border border-sky-100
```

### 9.2 適用箇所

| コンポーネント | スタイル |
|--------------|---------|
| カード | `bg-white/80 backdrop-blur-xl border border-white/60` |
| ヘッダー（スクロール時） | `bg-white/80 ~ bg-white/90 backdrop-blur-lg` |
| フッター | `bg-white/50 backdrop-blur-md` |
| モバイルメニュー | `bg-white/95 backdrop-blur-xl` |
| モーダルバックドロップ | `bg-slate-900/60 backdrop-blur-sm` |
| フローティングバッジ | `bg-white/90 backdrop-blur-sm border border-white` |

---

## 10. グラデーション

### 10.1 プライマリグラデーション

```css
/* ボタン・CTA（左→右） */
bg-gradient-to-r from-sky-400 to-blue-500

/* テキストグラデーション */
bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent
bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent
```

### 10.2 背景グラデーション

```css
/* セクション背景（上→下） */
bg-gradient-to-b from-white to-sky-50

/* CTA背景（左上→右下） */
bg-gradient-to-br from-sky-500 to-blue-600

/* オーバーレイ（上→下） */
bg-gradient-to-b from-white to-transparent
bg-gradient-to-t from-white to-transparent
```

### 10.3 装飾グラデーション

```css
/* ロゴ・アイコンボックス */
bg-gradient-to-tr from-sky-400 to-blue-500

/* 人気バッジ */
bg-gradient-to-r from-orange-400 to-pink-500

/* コネクタライン */
bg-gradient-to-r from-sky-200 to-sky-400       /* 水平 */
bg-gradient-to-b from-sky-200 to-sky-400       /* 垂直 */

/* セパレーター */
bg-gradient-to-r from-transparent via-sky-200 to-transparent
```

### 10.4 カードテーマバリエーション

```css
/* Sky テーマ（デフォルト） */
bg-white/80, border-sky-100, text-sky-500, shadow-sky-100/50

/* Blue テーマ（人気・推奨） */
bg-gradient-to-b from-white to-sky-50, border-blue-200, text-blue-600, shadow-blue-200/50

/* Indigo テーマ（プロフェッショナル） */
bg-white/90, border-indigo-100, text-indigo-600, shadow-indigo-100/50
```

---

## 11. アニメーション

### 11.1 ライブラリ

**Framer Motion** を使用。すべてのアニメーションは物理ベース（Spring）を基本とする。

### 11.2 エントランスアニメーション

```javascript
// フェードイン + スライドアップ（最も多用）
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ type: "spring", stiffness: 300, damping: 30, delay }}

// スケールアニメーション（CTA・成功状態）
initial={{ scale: 0.95 ~ 0.98, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
viewport={{ once: true }}
transition={{ type: "spring", stiffness: 80 }}

// Hero テキスト（ゆっくりフェード）
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```

### 11.3 インタラクションアニメーション

```javascript
// ボタンホバー・タップ
whileHover={{ scale: 1.02, y: -2 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}

// カードホバー（CSSトランジション）
hover:-translate-y-1 ~ hover:-translate-y-2
hover:shadow-2xl hover:shadow-sky-200/30
transition-all duration-300
```

### 11.4 ループアニメーション

```javascript
// フローティング（上下）
animate={{ y: [0, -15, 0] }}
transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}

// フローティング（回転付き）
animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
transition={{ duration: 4, delay: 0.5, repeat: Infinity }}

// パルス（スケール）
animate={{ scale: [1, 1.05, 1] }}
transition={{ duration: 2, repeat: Infinity }}

// ロゴ回転
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

// スクロールインジケーター
animate={{ y: [0, 6, 0] }}
transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
```

### 11.5 ページ遷移アニメーション

```javascript
// モバイルメニュー（右からスライドイン）
initial={{ opacity: 0, x: '100%' }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: '100%' }}
transition={{ type: "spring", damping: 25, stiffness: 200 }}

// モーダル（スケール + フェード）
initial={{ opacity: 0, scale: 0.95, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.95, y: 20 }}
transition={{ type: "spring", damping: 25, stiffness: 300 }}

// アコーディオン（高さアニメーション）
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ type: "spring", stiffness: 300, damping: 30 }}
```

### 11.6 スタッガードアニメーション

```javascript
// リスト要素の連続出現
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 ~ 0.15 }}
  />
))}
```

### 11.7 Spring設定プリセット

| プリセット名 | stiffness | damping | 用途 |
|-------------|-----------|---------|------|
| 標準 | 300 | 30 | カード出現・アコーディオン |
| 高速 | 400 | 17 | ボタンホバー・タップ |
| 柔らかい | 200 | 25 | メニュー遷移 |
| 重い | 80 | - | CTA スケールアニメーション |

### 11.8 CSS カスタムアニメーション

```javascript
// Tailwind config
animation: {
  'bounce-slow': 'bounce 3s infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

---

## 12. UIコンポーネント

### 12.1 ボタン（Button）

#### TypeScript インターフェース

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: 'primary' | 'secondary' | 'outline';
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly icon?: React.ReactNode;
}
```

#### バリアント

**Primary（プライマリ）**
```css
bg-gradient-to-r from-sky-400 to-blue-500
text-white
shadow-xl shadow-sky-300/50
hover:shadow-sky-400/60
rounded-full
font-bold
px-8 py-4
```

**Secondary（セカンダリ）**
```css
bg-white
text-sky-500
border border-sky-100
shadow-lg shadow-sky-100/50
hover:shadow-sky-200/60
rounded-full
font-bold
px-8 py-4
```

**Outline（アウトライン）**
```css
bg-transparent
border-2 border-sky-400
text-sky-500
hover:bg-sky-50
rounded-full
font-bold
px-8 py-4
```

#### アニメーション

```javascript
whileHover={{ scale: 1.02, y: -2 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}
```

#### 光沢エフェクト（Primaryのみ）

```html
<!-- ホバー時のシーンオーバーレイ -->
<div class="absolute inset-0 bg-white/20 skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
```

### 12.2 カード（Card）

#### TypeScript インターフェース

```typescript
interface CardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly delay?: number;
}
```

#### 基本スタイル

```css
bg-white/80
backdrop-blur-xl
border border-white/60
shadow-xl shadow-sky-100/50
rounded-[2rem]
p-6 md:p-8
```

#### アニメーション

```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ type: "spring", stiffness: 300, damping: 30, delay }}
```

### 12.3 モーダル（ContactModal）

#### 構造

```
┌─────────────────────────────────────────┐
│ Backdrop: bg-slate-900/60 backdrop-blur  │
│  ┌──────────────────────────────────────┐│
│  │ Modal: md:max-w-4xl md:h-[650px]    ││
│  │ ┌──────────┬───────────────────────┐ ││
│  │ │ Left 1/3 │    Right 2/3          │ ││
│  │ │ gradient │    bg-white           │ ││
│  │ │ sky→blue │    Form / Calendar    │ ││
│  │ └──────────┴───────────────────────┘ ││
│  └──────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

```css
/* バックドロップ */
bg-slate-900/60 backdrop-blur-sm z-[100]

/* モーダルコンテナ */
bg-white md:rounded-[2rem] shadow-2xl shadow-sky-900/20
w-full h-full md:h-[650px] md:max-w-4xl z-[101]

/* 左パネル */
w-full md:w-1/3
bg-gradient-to-br from-sky-500 to-blue-600
text-white

/* 右パネル */
w-full md:w-2/3
bg-white
```

#### モーダルアニメーション

```javascript
// バックドロップ
initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}

// モーダル本体
initial={{ opacity: 0, scale: 0.95, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.95, y: 20 }}
transition={{ type: "spring", damping: 25, stiffness: 300 }}
```

### 12.4 ヘッダー（Header）

```css
/* デフォルト */
py-6 bg-transparent

/* スクロール後（Serviceバリアント） */
py-3 bg-white/80 backdrop-blur-lg border-b border-white/50 shadow-sm shadow-sky-50/50

/* スクロール後（Corporateバリアント） */
py-3 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm

/* 固定配置 */
fixed top-0 left-0 right-0 z-50 transition-all duration-300
```

#### ナビゲーションリンク

```css
text-gray-500 hover:text-sky-500 font-bold transition-colors text-sm tracking-wide
```

### 12.5 ロゴ（Logo）

```css
/* コンテナ */
flex items-center gap-3

/* アイコン部分 */
w-10 h-10
bg-gradient-to-tr from-sky-400 to-blue-500
rounded-xl
text-white font-bold text-xl
shadow-lg shadow-sky-200/50

/* アイコン背面の光彩 */
absolute inset-0 bg-gradient-to-tr from-sky-400 to-blue-500 rounded-xl opacity-80 blur-sm
/* ※ 20秒で360度回転のアニメーション */

/* テキスト部分 */
font-medium text-2xl text-gray-700 tracking-wide

/* バッジ（右上の小さな円） */
absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-sky-200
/* ※ 2秒間隔で上下にフロート */
```

### 12.6 アコーディオン（FAQ）

```css
/* コンテナ */
bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl shadow-sky-100/50 border border-sky-100

/* アイテム */
border-b border-sky-100 last:border-0

/* 質問ボタン */
font-bold text-base md:text-lg
text-gray-700 (closed) → text-sky-600 (open)
group-hover:text-sky-500

/* 開閉アイコン */
w-8 h-8 rounded-full flex items-center justify-center
bg-white border border-sky-100 text-sky-400      /* 閉じた状態 */
bg-sky-500 text-white                              /* 開いた状態 */

/* 回答テキスト */
text-gray-600 leading-relaxed font-medium text-sm md:text-base
bg-white/50 p-4 rounded-xl border border-sky-100/50
```

### 12.7 バッジとタグ

```css
/* セクションラベルバッジ */
inline-flex items-center gap-2
bg-sky-100 text-sky-600
px-4 py-1 ~ py-1.5 rounded-full
text-sm font-bold tracking-wide

/* ステータスバッジ（Heroバッジ） */
inline-flex items-center gap-2
bg-white/80 backdrop-blur-md border border-sky-100
px-4 py-2 rounded-full shadow-sm
text-sky-700 text-sm font-bold tracking-wide
/* ドット: w-2 h-2 bg-sky-500 rounded-full animate-pulse */

/* コンテンツタグ */
px-3 py-1.5
bg-sky-50 border border-sky-100
text-sky-600 text-xs font-bold
rounded-lg

/* ハイライトタグ */
bg-orange-100 text-orange-600

/* プロフェッショナルタグ */
bg-indigo-100 text-indigo-600

/* 人気バッジ（フローティング） */
bg-gradient-to-r from-orange-400 to-pink-500
text-white px-6 py-1.5 rounded-full text-sm font-bold
shadow-lg shadow-orange-200/50
```

### 12.8 フローティングカード

```css
/* ヒーローセクションのフローティングアイコンカード */
bg-white p-4 rounded-2xl shadow-xl shadow-sky-100
/* Framer Motionでフローティングアニメーション */

/* CorporateHeroの小さなフローティングカード */
bg-white p-2.5 sm:p-3 rounded-2xl shadow-lg shadow-sky-100/40 border border-sky-50
/* flex items-center gap-2 + アイコン + テキスト */
```

### 12.9 プロセスステップカード

```css
/* カードコンテナ */
bg-white/80 backdrop-blur-sm rounded-[2rem]
border border-sky-100
shadow-lg shadow-sky-100/20
hover:shadow-2xl hover:shadow-sky-200/30
hover:-translate-y-1 transition-all duration-300

/* 数字（背景装飾） */
text-6xl lg:text-8xl font-bold text-gray-200/80

/* アイコンボックス */
w-12 h-12 rounded-full
bg-gradient-to-br from-sky-400 to-blue-500

/* コネクタライン */
/* モバイル: 垂直 */ w-0.5 h-12 bg-gradient-to-b from-sky-200 to-sky-400
/* デスクトップ: 水平 */ h-1 w-8 lg:w-12 bg-gradient-to-r from-sky-200 to-sky-400
```

### 12.10 ローディングスクリーン

```css
/* フルスクリーンオーバーレイ */
fixed inset-0 z-[9999] bg-white

/* ニューラルネットワークキャンバス */
opacity-30（背景アニメーション）

/* ロゴスピナー */
w-16 h-16
/* 外側リング: border-2 border-sky-200, 回転アニメーション */
/* 内側円: bg-sky-500, "T" テキスト */

/* 表示時間: 1.2秒 → 0.5秒フェードアウト */
```

---

## 13. 背景装飾

### 13.1 アンビエントブロブ

ページ全体に柔らかい雰囲気を与えるぼかした大きな円形要素。

```css
/* パターン A: Heroセクション */
absolute top-[-10%] left-[-10%]
w-[60vw] h-[60vw]
bg-sky-100/40
rounded-full blur-3xl animate-pulse

absolute bottom-[10%] right-[-5%]
w-[40vw] h-[40vw]
bg-blue-100/30
rounded-full blur-3xl

/* パターン B: FAQなどの控えめなセクション */
absolute top-[20%] right-[-10%]
w-[500px] h-[500px]
bg-sky-50/50
rounded-full blur-3xl

/* パターン C: CTAセクション内 */
absolute -top-24 -right-24
w-80 h-80
bg-white/20
rounded-full blur-3xl

/* パターン D: Careersページ */
absolute top-20 right-0
w-96 h-96
bg-sky-100/30
rounded-full blur-[100px]
```

**必須ルール:**
- `pointer-events-none` を付与（操作を妨げない）
- `overflow-hidden` を親要素に設定

### 13.2 テクスチャオーバーレイ

```css
/* パターン背景（Cubesテクスチャ） */
absolute top-0 left-0 w-full h-full
bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
opacity-10
mix-blend-overlay
```

### 13.3 グラデーションオーバーレイ

```css
/* ページ上部フェード（Corporateヒーロー） */
absolute top-0 left-0 w-full h-24
bg-gradient-to-b from-white to-transparent
pointer-events-none

/* ページ下部フェード */
absolute bottom-0 left-0 w-full h-32
bg-gradient-to-t from-white to-transparent
pointer-events-none

/* 左→右フェード（テキスト読みやすさ確保） */
absolute inset-0
bg-gradient-to-r from-white via-white/80 to-white/40
pointer-events-none
```

---

## 14. アイコン

### 14.1 ライブラリ

**Lucide React** (`lucide-react`)

### 14.2 サイズガイドライン

| サイズ | ピクセル | 用途 |
|--------|---------|------|
| Tiny | 10-12px | バッジインジケーター・ネスト要素 |
| Small | 14-16px | インラインテキスト・セカンダリアクション |
| Medium | 18-20px | ボタンアイコン・フォームアイコン |
| Large | 24-28px | ナビゲーション・ヘッダー・プロセスステップ |
| Display | 32-48px | ビジュアル要素・引用マーク |
| Hero | 64px | 大型装飾アイコン |

### 14.3 アイコンカラー

```css
text-sky-400 ~ text-sky-500    /* プライマリアクセント */
text-blue-400 ~ text-blue-600  /* セカンダリアクセント */
text-gray-400 ~ text-gray-500  /* ニュートラル・ミュート */
text-white                      /* 色付き背景上 */
text-green-400 ~ text-green-500 /* 成功・ステータス */
text-slate-400                  /* 中立セクション内 */
```

### 14.4 アイコンコンテナ

```css
/* 円形アイコンボックス（プライマリ） */
w-12 h-12 rounded-full
bg-gradient-to-br from-sky-400 to-blue-500
/* アイコン: text-white */

/* 円形アイコンボックス（ライト） */
w-5 h-5 rounded-full
bg-sky-50 ~ bg-slate-100
/* アイコン: text-sky-500 ~ text-slate-400 */

/* 角丸アイコンボックス（フローティング） */
p-4 rounded-2xl bg-white
shadow-xl shadow-sky-100
/* アイコン: text-sky-400 ~ text-blue-400 */
```

---

## 15. フォーム要素

### 15.1 入力フィールド

```css
w-full
px-5 py-3
bg-gray-50
border-2 border-transparent
focus:border-sky-200
focus:bg-white
rounded-2xl
outline-none
transition-all
text-gray-700
font-medium
placeholder:text-gray-300
```

### 15.2 テキストエリア

```css
/* 入力フィールドと同じスタイル + */
resize-none
rows={3}
```

### 15.3 ラベル

```css
text-xs font-bold text-gray-500 ml-3
```

### 15.4 フォームレイアウト

```css
/* フォームコンテナ */
space-y-4 md:space-y-5

/* 各フィールドグループ */
space-y-1
```

### 15.5 エラー表示

```css
bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3
```

### 15.6 成功状態

```css
/* 成功アイコン */
w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center

/* 成功テキスト */
text-2xl font-bold text-gray-800       /* タイトル */
text-gray-500 text-sm                   /* 説明 */
```

### 15.7 トグルスイッチ

```css
/* コンテナ */
h-8 w-14 rounded-full
bg-slate-200 hover:bg-slate-300        /* OFF */
bg-sky-500                              /* ON */

/* ノブ */
w-6 h-6 bg-white rounded-full shadow-sm
/* Framer Motion: animate={{ x: isEnabled ? 24 : 4 }} */
```

### 15.8 セレクションカード（ラジオ的UI）

```css
cursor-pointer rounded-xl p-4 border-2 transition-all duration-200
border-sky-400 bg-sky-50/30            /* 選択時 */
border-slate-100 hover:border-slate-200 /* 非選択時 */
```

---

## 16. レスポンシブデザイン

### 16.1 ブレークポイント

| プレフィックス | 最小幅 | 対象デバイス |
|-------------|--------|------------|
| (なし) | 0px | モバイル（デフォルト） |
| `sm` | 640px | 大型スマートフォン |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | ワイドスクリーン |

### 16.2 モバイル（〜640px）

```css
/* レイアウト */
flex-col                            /* 縦積み */
grid-cols-1                         /* 1カラム */
w-full                              /* 全幅ボタン */

/* タイポグラフィ */
text-4xl (H1) / text-3xl (H2) / text-base (body)

/* スペーシング */
px-6 py-24

/* ナビゲーション */
/* ハンバーガーメニュー（lg:hidden で表示） */
```

### 16.3 タブレット（768px〜）

```css
/* レイアウト */
md:flex-row                         /* 横並び */
md:grid-cols-3                      /* 3カラム */
md:w-auto                           /* 自動幅ボタン */

/* タイポグラフィ */
md:text-5xl (H2) / md:text-base (body)

/* スペーシング */
md:px-12 md:py-32
```

### 16.4 デスクトップ（1024px〜）

```css
/* レイアウト */
lg:flex-row                         /* 確定横並び */
lg:grid-cols-4                      /* 4カラム（プロセス） */
lg:text-left                        /* 左寄せ */

/* タイポグラフィ */
lg:text-7xl (H1) / lg:text-2xl (H3)

/* スペーシング */
lg:px-12 lg:gap-12
```

### 16.5 よく使うレスポンシブパターン

```css
/* ボタン: モバイル全幅 → デスクトップ自動幅 */
w-full sm:w-auto

/* テキスト: 中央揃え → 左揃え */
text-center lg:text-left

/* 改行の表示制御 */
hidden md:block                     /* タブレット以上で改行表示 */
hidden sm:block                     /* SMスクリーン以上で改行表示 */

/* 要素の表示・非表示 */
hidden lg:flex                      /* デスクトップのみ表示（ナビ） */
lg:hidden                          /* モバイルのみ表示（ハンバーガー） */
hidden sm:block                    /* フローティング要素（最小画面で非表示） */

/* コンテンツ最大幅 */
max-w-xs sm:max-w-sm lg:max-w-lg   /* 段階的拡大 */
```

---

## 17. アクセシビリティ

### 17.1 セマンティックHTML

```html
<header>    <!-- 固定ヘッダー -->
<nav>       <!-- ナビゲーション -->
<main>      <!-- メインコンテンツ -->
<section>   <!-- 各セクション -->
<footer>    <!-- フッター -->
```

### 17.2 ARIA属性

```html
<!-- ハンバーガーメニュー -->
<button aria-label="メニューを開く">
<button aria-label="メニューを閉じる">

<!-- アコーディオン -->
<button aria-expanded={isOpen}>

<!-- モーダル -->
<!-- body.style.overflow = 'hidden' でスクロールロック -->
```

### 17.3 キーボードナビゲーション

- すべてのインタラクティブ要素は `<button>` または `<a>` を使用
- フォーカスインジケーター: `focus:border-sky-200` / `focus:ring-2 focus:ring-sky-400`
- `outline-none` は代替のフォーカス表現と必ず併用

### 17.4 カラーコントラスト

- テキストと背景のコントラスト比: WCAG AA基準以上
- 重要な情報は色だけでなくアイコン・テキストでも表現
- タッチターゲット最小サイズ: 44px

### 17.5 モーションの配慮

- `prefers-reduced-motion` メディアクエリへの対応を推奨
- 装飾的アニメーション（フローティング・パルス等）は無効化可能に

---

## 18. パフォーマンス

### 18.1 画像最適化

```typescript
// 遅延読み込み
loading="lazy"                      // 初期画面外の画像
loading="eager"                     // ファーストビューの画像

// アスペクト比固定
aspect-[16/10]                      // ポートフォリオ画像

// スライドショートランジション
opacity ベースのクロスフェード（0.8秒）
```

### 18.2 アニメーション最適化

- `viewport={{ once: true }}` でスクロールアニメーションを1回のみ実行
- Canvas アニメーション（ニューラルネットワーク）は `requestAnimationFrame` 使用
- ローディングスクリーンは1.2秒で自動消去

### 18.3 スムーズスクロール

```css
html { scroll-behavior: smooth; }
```

```css
/* アンカーリンク対応 */
scroll-mt-24                        /* ヘッダー高さ分のオフセット */
```

---

## 19. 開発規約

### 19.1 コンポーネント設計

- **TypeScript**: すべてのPropsに `readonly` 修飾子
- **スタイリング**: Tailwind CSS ユーティリティクラスのみ使用
- **アニメーション**: Framer Motion を使用
- **レスポンシブ**: モバイルファーストで設計

### 19.2 命名規則

| 対象 | 形式 | 例 |
|------|------|-----|
| コンポーネント | PascalCase | `Button`, `ContactModal` |
| ファイル名 | コンポーネント名と一致 | `Button.tsx` |
| Props型 | PascalCase + Props | `ButtonProps` |
| CSS | Tailwind ユーティリティ | - |

### 19.3 ファイル構成

```
components/
├── ui/                    # 汎用UIコンポーネント
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ContactModal.tsx
│   └── ImageSlideshow.tsx
├── sections/              # ページセクション
│   ├── Hero.tsx
│   ├── Process.tsx
│   ├── Portfolio.tsx
│   ├── Plan.tsx
│   ├── Maintenance.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── corporate/             # 企業ページコンポーネント
├── careers/               # 採用ページコンポーネント
├── Header.tsx
├── Footer.tsx
├── Logo.tsx
└── LoadingScreen.tsx
pages/                     # ページコンポーネント
types/                     # 型定義
```

### 19.4 コードスタイル

- インデント: 2スペース
- 引用符: シングルクォート
- セミコロン: 使用する
- 行の長さ: 80-100文字目安
- `const` > `let` > `let`（`let` は避ける）
- イミュータブルパターンの徹底

---

## 20. インストールガイド

### 20.1 依存関係のインストール

```bash
npm install react react-dom framer-motion lucide-react react-router-dom
npm install -D typescript @types/react @types/react-dom tailwindcss
```

### 20.2 Tailwind CSS 設定

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        heading: ['"Noto Sans JP"', 'sans-serif'],
        number: ['"Inter"', 'sans-serif'],
      },
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
}
```

### 20.3 グローバルCSS

```css
body {
  background-color: #ffffff;
  overflow-x: hidden;
  font-family: "Noto Sans JP", sans-serif;
  word-break: auto-phrase;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  text-wrap: balance;
}

p, span, li {
  text-wrap: pretty;
}

html {
  scroll-behavior: smooth;
}
```

### 20.4 Google Fonts 読み込み

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
```

### 20.5 カラーテーマのカスタマイズ

他ブランドへの適用時は、Sky/Blue系カラーを置換:

```javascript
// 例: グリーン系テーマへの変更
colors: {
  primary: {
    50: '#f0fdf4',   // sky-50 相当
    100: '#dcfce7',  // sky-100 相当
    200: '#bbf7d0',  // sky-200 相当
    300: '#86efac',  // sky-300 相当
    400: '#4ade80',  // sky-400 相当
    500: '#22c55e',  // sky-500 相当
    600: '#16a34a',  // sky-600 相当
    700: '#15803d',  // sky-700 相当
  }
}
```

カラー置換時のチェックポイント:
- グラデーション（`from-sky-*` → `from-primary-*`）
- シャドウカラー（`shadow-sky-*` → `shadow-primary-*`）
- テキストカラー（`text-sky-*` → `text-primary-*`）
- ボーダーカラー（`border-sky-*` → `border-primary-*`）
- 背景カラー（`bg-sky-*` → `bg-primary-*`）

---

## 21. チェックリスト

### 新規コンポーネント作成時

#### デザイン
- [ ] カラーパレットに準拠しているか
- [ ] タイポグラフィスケールが統一されているか
- [ ] スペーシングが適切か（セクション: py-24, カード: p-6 md:p-8）
- [ ] ボーダーラディウスが統一されているか（カード: rounded-[2rem]）
- [ ] シャドウが階層ルールに沿っているか
- [ ] グラスモーフィズムが適切に適用されているか

#### インタラクション
- [ ] ホバーエフェクトが実装されているか（scale + y + shadow）
- [ ] Spring ベースのアニメーション設定か
- [ ] `viewport={{ once: true }}` でスクロールアニメーションが1回限りか
- [ ] トランジション duration が 300ms を基本としているか

#### レスポンシブ
- [ ] モバイルファーストで設計されているか
- [ ] `flex-col → md/lg:flex-row` のパターンに従っているか
- [ ] テキストサイズがブレークポイントで適切に変化するか
- [ ] タッチターゲットが 44px 以上か

#### アクセシビリティ
- [ ] セマンティックHTMLを使用しているか
- [ ] `aria-label` / `aria-expanded` が適切か
- [ ] キーボードで全操作が可能か
- [ ] カラーコントラストが WCAG AA 基準を満たすか

#### パフォーマンス
- [ ] 画像に `loading="lazy"` が設定されているか
- [ ] 不要な再レンダリングがないか
- [ ] アニメーションが `once: true` で制御されているか

#### コード品質
- [ ] TypeScript の型定義が適切か（`readonly` 修飾子）
- [ ] Propsインターフェースが定義されているか
- [ ] コンポーネントが再利用可能な設計か
- [ ] イミュータブルパターンに従っているか

---

## 更新履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v1.0.0 | 2024 | 初版作成 |
| v2.0.0 | 2026-03 | 全面改訂。実コードベースからの完全抽出。インストールガイド・カラーテーマカスタマイズ・全コンポーネント仕様の追加 |

---

**このドキュメントは、デザイン開発における唯一の情報源（Single Source of Truth）として機能します。すべてのデザイン決定は、このドキュメントに基づいて行ってください。**
