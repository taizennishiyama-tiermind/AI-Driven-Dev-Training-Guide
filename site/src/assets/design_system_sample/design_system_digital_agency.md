# デジタル庁デザインシステム (DADS) 導入ガイド

> Digital Agency Design System - 他プロジェクトへのインストール・統合ドキュメント
>
> ソース: `@digital-go-jp/design-system-example-components-react` v2.7.0
> ライセンス: MIT

---

## 目次

1. [概要](#1-概要)
2. [セットアップ](#2-セットアップ)
3. [デザイントークン](#3-デザイントークン)
   - 3.1 [カラーシステム](#31-カラーシステム)
   - 3.2 [タイポグラフィ](#32-タイポグラフィ)
   - 3.3 [エレベーション（シャドウ）](#33-エレベーションシャドウ)
   - 3.4 [角丸（Border Radius）](#34-角丸border-radius)
   - 3.5 [アスペクト比](#35-アスペクト比)
4. [コンポーネント一覧](#4-コンポーネント一覧)
   - 4.1 [ボタン (Button)](#41-ボタン-button)
   - 4.2 [リンク (Link)](#42-リンク-link)
   - 4.3 [入力フィールド (Input)](#43-入力フィールド-input)
   - 4.4 [テキストエリア (Textarea)](#44-テキストエリア-textarea)
   - 4.5 [セレクト (Select)](#45-セレクト-select)
   - 4.6 [チェックボックス (Checkbox)](#46-チェックボックス-checkbox)
   - 4.7 [ラジオボタン (Radio)](#47-ラジオボタン-radio)
   - 4.8 [見出し (Heading)](#48-見出し-heading)
   - 4.9 [ラベル (Label)](#49-ラベル-label)
   - 4.10 [凡例 (Legend)](#410-凡例-legend)
   - 4.11 [必須バッジ (RequirementBadge)](#411-必須バッジ-requirementbadge)
   - 4.12 [サポートテキスト (SupportText)](#412-サポートテキスト-supporttext)
   - 4.13 [エラーテキスト (ErrorText)](#413-エラーテキスト-errortext)
   - 4.14 [パンくずリスト (Breadcrumbs)](#414-パンくずリスト-breadcrumbs)
   - 4.15 [アコーディオン (Accordion)](#415-アコーディオン-accordion)
   - 4.16 [ディスクロージャー (Disclosure)](#416-ディスクロージャー-disclosure)
   - 4.17 [通知バナー (NotificationBanner)](#417-通知バナー-notificationbanner)
   - 4.18 [緊急バナー (EmergencyBanner)](#418-緊急バナー-emergencybanner)
   - 4.19 [チップラベル (ChipLabel)](#419-チップラベル-chiplabel)
   - 4.20 [ステータスバッジ (StatusBadge)](#420-ステータスバッジ-statusbadge)
   - 4.21 [区切り線 (Divider)](#421-区切り線-divider)
   - 4.22 [引用 (Blockquote)](#422-引用-blockquote)
   - 4.23 [リスト (List)](#423-リスト-list)
   - 4.24 [定義リスト (Dl)](#424-定義リスト-dl)
   - 4.25 [ファイルアップロード (FileUpload)](#425-ファイルアップロード-fileupload)
   - 4.26 [ユーティリティリンク (UtilityLink)](#426-ユーティリティリンク-utilitylink)
   - 4.27 [ハンバーガーメニューボタン (HamburgerMenuButton)](#427-ハンバーガーメニューボタン-hamburgermenubutton)
   - 4.28 [ドロワー (Drawer)](#428-ドロワー-drawer)
   - 4.29 [カルーセル (Carousel)](#429-カルーセル-carousel)
   - 4.30 [カレンダー (Calendar)](#430-カレンダー-calendar)
   - 4.31 [日付入力 (DatePicker / SeparatedDatePicker)](#431-日付入力-datepicker--separateddatepicker)
   - 4.32 [言語切替 (LanguageSelector)](#432-言語切替-languageselector)
   - 4.33 [テーブル (Table)](#433-テーブル-table)
   - 4.34 [Slot（ユーティリティ）](#434-slotユーティリティ)
   - 4.35 [v1コンポーネント（非推奨）](#435-v1コンポーネント非推奨)
5. [アセット（アイコン・イラスト）](#5-アセットアイコンイラスト)
6. [アクセシビリティ設計方針](#6-アクセシビリティ設計方針)
7. [フォーカスシステム](#7-フォーカスシステム)
8. [開発ポリシー](#8-開発ポリシー)

---

## 1. 概要

デジタル庁デザインシステム（DADS）は、日本政府のデジタルサービスにおけるUI/UXの一貫性とアクセシビリティを確保するためのデザインシステムです。

### 技術スタック

| パッケージ | バージョン | 用途 |
|---|---|---|
| `@digital-go-jp/design-system-example-components-react` | v2.7.0 | Reactコンポーネント実装例 |
| `@digital-go-jp/tailwind-theme-plugin` | ^0.3.4 | Tailwind CSSテーマプラグイン（全デザイントークン自動注入） |
| `@digital-go-jp/design-tokens` | ^1.1.9 | デザイントークンパッケージ |
| `react` | ^18.3.1 | UIライブラリ |
| `tailwindcss` | ^3.4.19 | ユーティリティファーストCSS |
| `react-aria-components` | ^1.14.0 | アクセシブルなカレンダー/日付ピッカー |

### 対応環境

- **ブラウザ**: Chrome / Edge / Firefox / Safari（最新版）
- **スクリーンリーダー**: NVDA / VoiceOver / ナレーター
- **OS**: Windows / macOS / iOS / Android
- **Windows High Contrast Mode**: `forced-colors:` 対応

---

## 2. セットアップ

### 2.1 パッケージインストール

```bash
npm install @digital-go-jp/design-tokens @digital-go-jp/tailwind-theme-plugin
npm install -D tailwindcss@^3.4 postcss autoprefixer @tailwindcss/container-queries
```

### 2.2 Tailwind設定

```js
// tailwind.config.js
export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin'),
    require('@tailwindcss/container-queries'),
  ],
};
```

`@digital-go-jp/tailwind-theme-plugin` を plugins に追加するだけで、全デザイントークン（カラー、タイポグラフィ、シャドウ、角丸等）が Tailwind ユーティリティクラスとして自動的に利用可能になります。手動でのトークン定義は不要です。

### 2.3 PostCSS設定

```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 2.4 レスポンシブブレークポイント

DADSでは `desktop:` プレフィックスを使用します（標準の `sm:` `md:` 等は不使用）。

```html
<!-- モバイルファースト → デスクトップ -->
<div class="px-4 desktop:px-10">...</div>
```

---

## 3. デザイントークン

### 3.1 カラーシステム

#### カラーパレット（10色 x 13ステップ）

各色に 50〜1200 の13段階のスケールがあります。

| カラー名 | Tailwindプレフィックス | 代表色（900） |
|---|---|---|
| Blue | `blue-{step}` | 政府ブランドの主色 |
| Light Blue | `light-blue-{step}` | 情報系の補助色 |
| Cyan | `cyan-{step}` | アクセント |
| Green | `green-{step}` | 成功・完了状態 |
| Lime | `lime-{step}` | 補助的な成功表示 |
| Yellow | `yellow-{step}` | 警告 |
| Orange | `orange-{step}` | 注意・緊急 |
| Red | `red-{step}` | エラー・危険 |
| Magenta | `magenta-{step}` | リンク既読状態 |
| Purple | `purple-{step}` | 装飾・アクセント |

**スケールステップ**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200

使用例:
```html
<span class="text-blue-900">プライマリテキスト</span>
<div class="bg-red-50 border-red-900">エラーエリア</div>
```

#### Solid Gray（特殊スケール）

グレー系は独自スケールを持ちます。

| クラス | 用途 |
|---|---|
| `solid-gray-50` | 背景（最淡） |
| `solid-gray-100` | ボーダー（淡） |
| `solid-gray-200` | ボーダー（標準） |
| `solid-gray-300` | 無効化ボーダー |
| `solid-gray-420` | 区切り線 |
| `solid-gray-536` | 補助テキスト、ステータスバッジ |
| `solid-gray-560` | プレースホルダー |
| `solid-gray-600` | サポートテキスト |
| `solid-gray-700` | ボーダー（濃）、アイコン |
| `solid-gray-800` | 本文テキスト |
| `solid-gray-900` | 見出しテキスト |

使用例:
```html
<p class="text-solid-gray-800">本文テキスト</p>
<hr class="border-solid-gray-420" />
```

#### セマンティックカラー

| トークン | 用途 |
|---|---|
| `text-error-1` / `border-error-1` | フォームエラー |
| `text-success-1` / `text-success-2` | 成功表示 |
| `text-warning-yellow-1` / `text-warning-yellow-2` | 警告（黄） |
| `text-warning-orange-1` / `border-warning-orange-1` | 警告（橙）/ 緊急バナー |
| `focus-yellow` / `bg-yellow-300` | フォーカスリング |
| `outline-black` | フォーカスアウトライン |
| `bg-opacity-gray-100` | モーダルオーバーレイ |

---

### 3.2 タイポグラフィ

命名規則: `text-{category}-{size}{weight}-{lineHeight}`

- **category**: `dsp`(Display), `std`(Standard), `dns`(Dense), `oln`(One Line), `mono`(Monospace)
- **size**: px単位の数値
- **weight**: `B`(Bold) or `N`(Normal)
- **lineHeight**: 百分率（例: 150 = 1.5）

#### Display (dsp) - ヒーロー・大見出し

| クラス | フォントサイズ | ウェイト | 行高 |
|---|---|---|---|
| `text-dsp-64B-100` | 64px (4rem) | Bold | 1.0 |
| `text-dsp-57B-100` | 57px (3.5625rem) | Bold | 1.0 |
| `text-dsp-48B-100` | 48px (3rem) | Bold | 1.0 |

#### Standard (std) - 本文・見出し

| クラス | フォントサイズ | ウェイト | 行高 |
|---|---|---|---|
| `text-std-45B-130` | 45px | Bold | 1.3 |
| `text-std-38B-130` | 38px | Bold | 1.3 |
| `text-std-32B-150` | 32px | Bold | 1.5 |
| `text-std-32N-150` | 32px | Normal | 1.5 |
| `text-std-28B-150` | 28px | Bold | 1.5 |
| `text-std-28N-150` | 28px | Normal | 1.5 |
| `text-std-26B-150` | 26px | Bold | 1.5 |
| `text-std-26N-150` | 26px | Normal | 1.5 |
| `text-std-24B-150` | 24px | Bold | 1.5 |
| `text-std-24N-150` | 24px | Normal | 1.5 |
| `text-std-22B-150` | 22px | Bold | 1.5 |
| `text-std-22N-150` | 22px | Normal | 1.5 |
| `text-std-20B-160` | 20px | Bold | 1.6 |
| `text-std-20N-160` | 20px | Normal | 1.6 |
| `text-std-18B-160` | 18px | Bold | 1.6 |
| `text-std-18N-160` | 18px | Normal | 1.6 |
| `text-std-17B-170` | 17px | Bold | 1.7 |
| `text-std-17N-170` | 17px | Normal | 1.7 |
| `text-std-16B-170` | 16px | Bold | 1.7 |
| `text-std-16N-170` | 16px | Normal | 1.7 |

#### Dense (dns) - 詰め表示

| クラス | フォントサイズ | ウェイト | 行高 |
|---|---|---|---|
| `text-dns-17B-120` | 17px | Bold | 1.2 |
| `text-dns-17N-120` | 17px | Normal | 1.2 |
| `text-dns-16B-120` | 16px | Bold | 1.2 |
| `text-dns-16N-120` | 16px | Normal | 1.2 |
| `text-dns-16B-130` | 16px | Bold | 1.3 |
| `text-dns-16N-130` | 16px | Normal | 1.3 |
| `text-dns-14B-120` | 14px | Bold | 1.2 |
| `text-dns-14N-120` | 14px | Normal | 1.2 |

#### One Line (oln) - 単行表示（ボタン・ラベル）

| クラス | フォントサイズ | ウェイト | 行高 |
|---|---|---|---|
| `text-oln-17B-100` | 17px | Bold | 1.0 |
| `text-oln-17N-100` | 17px | Normal | 1.0 |
| `text-oln-16B-100` | 16px | Bold | 1.0 |
| `text-oln-16N-100` | 16px | Normal | 1.0 |
| `text-oln-14B-100` | 14px | Bold | 1.0 |
| `text-oln-14N-100` | 14px | Normal | 1.0 |

#### Monospace (mono) - コード・数値

| クラス | フォントサイズ | ウェイト | 行高 |
|---|---|---|---|
| `text-mono-17B-150` | 17px | Bold | 1.5 |
| `text-mono-17N-150` | 17px | Normal | 1.5 |
| `text-mono-16B-150` | 16px | Bold | 1.5 |
| `text-mono-16N-150` | 16px | Normal | 1.5 |
| `text-mono-14B-150` | 14px | Bold | 1.5 |
| `text-mono-14N-150` | 14px | Normal | 1.5 |

---

### 3.3 エレベーション（シャドウ）

| クラス | 用途 |
|---|---|
| `shadow-1` | 最も軽いシャドウ（カード等） |
| `shadow-2` | 軽いシャドウ（ドロワー等） |
| `shadow-3` | 中程度 |
| `shadow-4` | やや強め |
| `shadow-5` | 強めのシャドウ |
| `shadow-6` | より強め |
| `shadow-7` | かなり強め |
| `shadow-8` | 最も強いシャドウ（モーダル等） |

---

### 3.4 角丸（Border Radius）

| クラス | 値 |
|---|---|
| `rounded-none` | 0px |
| `rounded-4` | 4px |
| `rounded-6` | 6px |
| `rounded-8` | 8px |
| `rounded-12` | 12px |
| `rounded-16` | 16px |
| `rounded-32` | 32px |
| `rounded-full` | 9999px |

---

### 3.5 アスペクト比

| クラス | 比率 |
|---|---|
| `aspect-16/9` | 16:9 |
| `aspect-3/2` | 3:2 |
| `aspect-1/1` | 1:1 |

---

## 4. コンポーネント一覧

### 4.1 ボタン (Button)

```tsx
import { Button } from '@digital-go-jp/design-system-example-components-react';

<Button variant="solid-fill" size="lg">送信</Button>
<Button variant="outline" size="md">キャンセル</Button>
<Button variant="text" size="sm">詳細</Button>
```

**Props:**

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `variant` | `'solid-fill' \| 'outline' \| 'text'` | `'solid-fill'` | ボタンスタイル |
| `size` | `'lg' \| 'md' \| 'sm' \| 'xs'` | `'lg'` | サイズ |
| `asChild` | `boolean` | `false` | Slotパターンによる多態対応 |
| `aria-disabled` | `boolean` | - | 無効化（HTML `disabled` ではなく `aria-disabled` を使用） |

**サイズ別スタイル:**

| サイズ | 最小幅 | 高さ | パディング | フォント |
|---|---|---|---|---|
| `lg` | 192px | 56px | 16px 32px | `text-oln-16N-100` |
| `md` | 160px | 48px | 12px 24px | `text-oln-16N-100` |
| `sm` | 128px | 40px | 8px 16px | `text-oln-16N-100` |
| `xs` | 80px | 32px | 4px 12px | `text-oln-14N-100` |

**バリアント別カラー:**

- `solid-fill`: `bg-blue-900 text-white` → hover: `bg-blue-1000` → active: `bg-blue-1200`
- `outline`: `border-blue-900 text-blue-900` → hover: `border-[3px] bg-blue-50`
- `text`: `text-blue-900` → hover: `underline`

**asChildパターン（Slotを使ったリンクボタン等）:**

```tsx
<Button asChild variant="outline">
  <a href="/next">次へ進む</a>
</Button>
```

---

### 4.2 リンク (Link)

```tsx
import { Link } from '@digital-go-jp/design-system-example-components-react';

<Link href="/page">ページリンク</Link>
<Link href="https://example.com" target="_blank">外部リンク</Link>
```

**Props:**

| Prop | 型 | 説明 |
|---|---|---|
| `asChild` | `boolean` | Slotパターン対応 |
| `target` | `string` | `_blank` で外部リンクアイコン自動表示 |

**スタイル:**
- デフォルト: `text-blue-900 underline`
- ホバー: `decoration-[3px]`
- 訪問済み: `text-magenta-900`
- アクティブ: `text-orange-800`
- 外部リンク: 末尾にアイコン自動追加 + `aria-label="新規タブで開きます"`

**エクスポートされるスタイル定数:**

```tsx
import { linkDefaultStyle, linkHoverStyle, linkVisitedStyle, linkActiveStyle } from '...';
```

---

### 4.3 入力フィールド (Input)

```tsx
import { Input } from '@digital-go-jp/design-system-example-components-react';

<Input blockSize="lg" placeholder="氏名を入力" />
<Input blockSize="md" isError aria-invalid="true" />
<Input blockSize="sm" aria-disabled="true" />
```

**Props:**

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `blockSize` | `'lg' \| 'md' \| 'sm'` | `'lg'` | 高さサイズ |
| `isError` | `boolean` | `false` | エラー状態（`aria-invalid="true"` も設定） |
| `aria-disabled` | `boolean` | - | 無効化状態 |

**サイズ別高さ:**
- `lg`: 56px (3.5rem)
- `md`: 48px (3rem)
- `sm`: 40px (2.5rem)

**スタイル:**
- ボーダー: `border-solid-gray-600` → hover: `border-black`
- エラー: `border-error-1` → hover: `border-red-1000`
- 無効化: `border-solid-gray-300 bg-solid-gray-50 text-solid-gray-420`

---

### 4.4 テキストエリア (Textarea)

```tsx
import { Textarea } from '@digital-go-jp/design-system-example-components-react';

<Textarea placeholder="内容を入力" />
<Textarea isError />
```

**Props:**

| Prop | 型 | 説明 |
|---|---|---|
| `isError` | `boolean` | エラー状態 |
| `aria-disabled` | `boolean` | 無効化 |

**スタイル:** Input と同様のボーダー・フォーカス・エラーパターン。フォント: `text-std-16N-170`

---

### 4.5 セレクト (Select)

```tsx
import { Select } from '@digital-go-jp/design-system-example-components-react';

<Select blockSize="lg" aria-label="都道府県">
  <option value="">選択してください</option>
  <option value="tokyo">東京都</option>
</Select>
```

**Props:**

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `blockSize` | `'lg' \| 'md' \| 'sm'` | `'lg'` | 高さサイズ（lg:56px, md:48px, sm:40px） |
| `isError` | `boolean` | - | エラー状態 |
| `aria-disabled` | `boolean` | - | 無効化 |

カスタム矢印SVGアイコン付き。`appearance-none` でネイティブスタイルをリセット。

---

### 4.6 チェックボックス (Checkbox)

```tsx
import { Checkbox } from '@digital-go-jp/design-system-example-components-react';

<Checkbox size="md">利用規約に同意する</Checkbox>
<Checkbox size="sm" defaultChecked>オプション</Checkbox>
```

**Props:**

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | チェックボックスサイズ |
| `isError` | `boolean` | - | エラー状態 |
| `aria-disabled` | `boolean` | - | 無効化 |

**サイズ:**
- `sm`: 24x24px
- `md`: 32x32px
- `lg`: 40x40px

SVG `clip-path` によるチェックマーク表示。`forced-colors:` 対応あり。

---

### 4.7 ラジオボタン (Radio)

```tsx
import { Radio } from '@digital-go-jp/design-system-example-components-react';

<Radio name="plan" size="md">プランA</Radio>
<Radio name="plan" size="md">プランB</Radio>
```

**Props:** Checkbox と同一（`size`, `isError`, `aria-disabled`）。サイズも同一。

---

### 4.8 見出し (Heading)

```tsx
import { Heading } from '@digital-go-jp/design-system-example-components-react';

<Heading as="h1">ページタイトル</Heading>
<Heading as="h2" hasChip>セクション見出し</Heading>
<Heading as="h3" rule>区切り付き見出し</Heading>
```

**Props:**

| Prop | 型 | 説明 |
|---|---|---|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | HTML見出しレベル |
| `hasChip` | `boolean` | 左端にチップ（装飾線）表示 |
| `rule` | `boolean` | 下部に区切り線表示 |

**サブコンポーネント:** `HeadingShoulder`（肩見出し）, `HeadingTitle`（本見出し）

**サイズマッピング:**

| タグ | フォント |
|---|---|
| `h1` | `text-std-45B-130` → desktop: `text-dsp-57B-100` |
| `h2` | `text-std-32B-150` → desktop: `text-std-38B-130` |
| `h3` | `text-std-28B-150` → desktop: `text-std-32B-150` |
| `h4` | `text-std-24B-150` → desktop: `text-std-26B-150` |
| `h5` | `text-std-20B-160` → desktop: `text-std-22B-150` |
| `h6` | `text-std-18B-160` → desktop: `text-std-20B-160` |

---

### 4.9 ラベル (Label)

```tsx
import { Label } from '@digital-go-jp/design-system-example-components-react';

<Label size="md" htmlFor="name-input">氏名</Label>
```

**Props:**

| Prop | 型 | デフォルト |
|---|---|---|
| `size` | `'lg' \| 'md' \| 'sm'` | `'md'` |

**サイズ別フォント:**
- `lg`: `text-std-18B-160`
- `md`: `text-std-17B-170`
- `sm`: `text-std-16B-170`

---

### 4.10 凡例 (Legend)

```tsx
import { Legend } from '@digital-go-jp/design-system-example-components-react';

<fieldset>
  <Legend size="md">お支払い方法</Legend>
  ...
</fieldset>
```

**Props:** Label と同一（`size`: `lg` | `md` | `sm`）。`<legend>` 要素としてレンダリング。

---

### 4.11 必須バッジ (RequirementBadge)

```tsx
import { RequirementBadge } from '@digital-go-jp/design-system-example-components-react';

<Label>氏名 <RequirementBadge /></Label>
<Label>備考 <RequirementBadge isOptional /></Label>
```

| Prop | 型 | 説明 |
|---|---|---|
| `isOptional` | `boolean` | `true`: "任意"表示（gray）、`false`: "必須"表示（赤） |

---

### 4.12 サポートテキスト (SupportText)

```tsx
import { SupportText } from '@digital-go-jp/design-system-example-components-react';

<SupportText>半角英数字8文字以上で入力してください</SupportText>
```

フォント: `text-dns-16N-130`、色: `text-solid-gray-600`

---

### 4.13 エラーテキスト (ErrorText)

```tsx
import { ErrorText } from '@digital-go-jp/design-system-example-components-react';

<ErrorText>入力内容に誤りがあります</ErrorText>
```

色: `text-error-1`。SVGアイコン（!マーク）が先頭に自動表示。

---

### 4.14 パンくずリスト (Breadcrumbs)

```tsx
import { Breadcrumbs, BreadcrumbItem } from '@digital-go-jp/design-system-example-components-react';

<Breadcrumbs>
  <BreadcrumbItem><a href="/">ホーム</a></BreadcrumbItem>
  <BreadcrumbItem><a href="/about">概要</a></BreadcrumbItem>
  <BreadcrumbItem aria-current="page">現在のページ</BreadcrumbItem>
</Breadcrumbs>
```

`<nav>` + `<ol>` でマークアップ。`aria-current="page"` で現在地表示。`asChild` 対応。

---

### 4.15 アコーディオン (Accordion)

```tsx
import { Accordion, AccordionItem } from '@digital-go-jp/design-system-example-components-react';

<Accordion>
  <AccordionItem heading="よくある質問1" headingLevel="h3">
    回答テキストがここに入ります。
  </AccordionItem>
</Accordion>
```

**Props:**

| Prop | 型 | 説明 |
|---|---|---|
| `heading` | `string` | 見出しテキスト |
| `headingLevel` | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | 見出しレベル |
| `isDesktop` | `boolean` | デスクトップ時は常時展開表示 |

HTML `<details>` / `<summary>` ベース。開閉アイコンはSVG（+/−）。

---

### 4.16 ディスクロージャー (Disclosure)

```tsx
import { Disclosure } from '@digital-go-jp/design-system-example-components-react';

<Disclosure heading="詳細情報" headingLevel="h3">
  追加コンテンツ
</Disclosure>
```

Accordion と似た構造だが、円形トグルアイコンバリアント。

---

### 4.17 通知バナー (NotificationBanner)

```tsx
import { NotificationBanner } from '@digital-go-jp/design-system-example-components-react';

<NotificationBanner type="info1" bannerStyle="standard" headingLevel="h2">
  重要なお知らせがあります。
</NotificationBanner>
```

**Props:**

| Prop | 型 | 説明 |
|---|---|---|
| `type` | `'info1' \| 'info2' \| 'warning' \| 'error' \| 'success'` | バナータイプ |
| `bannerStyle` | `'standard' \| 'color-chip'` | 表示スタイル |
| `headingLevel` | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | 見出しレベル |

**タイプ別カラー:**
- `info1`: `text-blue-900`
- `info2`: `text-solid-gray-536`
- `warning`: `text-warning-yellow-2`（color-chip: `yellow-400`）
- `error`: `text-error-1`
- `success`: `text-success-2`

**スタイル:**
- `standard`: 3px border + 12px border-radius
- `color-chip`: 2px border + 左端に太いカラーチップ（8px mobile / 16px desktop）

**サブコンポーネント:** `NotificationBannerIcon`, `NotificationBannerBody`, `NotificationBannerClose`, `NotificationBannerMobileClose`

---

### 4.18 緊急バナー (EmergencyBanner)

```tsx
import { EmergencyBanner, EmergencyBannerHeading, EmergencyBannerBody, EmergencyBannerButton }
  from '@digital-go-jp/design-system-example-components-react';

<EmergencyBanner>
  <EmergencyBannerHeading>緊急のお知らせ</EmergencyBannerHeading>
  <EmergencyBannerBody>詳細テキスト</EmergencyBannerBody>
  <EmergencyBannerButton href="/detail">詳細を見る</EmergencyBannerButton>
</EmergencyBanner>
```

ボーダー: `border-warning-orange-1`（上部8px太線）。

---

### 4.19 チップラベル (ChipLabel)

```tsx
import { ChipLabel } from '@digital-go-jp/design-system-example-components-react';

<ChipLabel variant="filled-outline" color="blue">新着</ChipLabel>
<ChipLabel variant="fill" color="red">緊急</ChipLabel>
```

**Props:**

| Prop | 型 | デフォルト |
|---|---|---|
| `variant` | `'text' \| 'outline' \| 'filled-outline' \| 'fill'` | `'text'` |
| `color` | `'gray' \| 'blue' \| 'light-blue' \| 'cyan' \| 'green' \| 'lime' \| 'yellow' \| 'orange' \| 'red' \| 'magenta' \| 'purple'` | `'gray'` |

4バリアント x 11色 = **44パターン**。フォント: `text-oln-16N-100`。

---

### 4.20 ステータスバッジ (StatusBadge)

```tsx
import { StatusBadge } from '@digital-go-jp/design-system-example-components-react';

<StatusBadge>NEW</StatusBadge>
```

背景: `bg-solid-gray-536`、テキスト: `text-white`、角丸: `rounded-lg`。

---

### 4.21 区切り線 (Divider)

```tsx
import { Divider } from '@digital-go-jp/design-system-example-components-react';

<Divider />                     {/* デフォルト: gray-420 */}
<Divider color="gray-536" />
<Divider color="black" />
```

| Prop | 型 | デフォルト |
|---|---|---|
| `color` | `'gray-420' \| 'gray-536' \| 'black'` | `'gray-420'` |

---

### 4.22 引用 (Blockquote)

```tsx
import { Blockquote } from '@digital-go-jp/design-system-example-components-react';

<Blockquote>引用テキスト</Blockquote>
```

左ボーダー8px（`border-l-[calc(8/16*1rem)]`）、`border-solid-gray-300`。

---

### 4.23 リスト (List)

```tsx
import { List, ListItem } from '@digital-go-jp/design-system-example-components-react';

<List spacing="normal" marker="disc">
  <ListItem>項目1</ListItem>
  <ListItem>項目2</ListItem>
</List>
```

**Props:**

| Prop | 型 | 説明 |
|---|---|---|
| `spacing` | `'normal' \| 'condensed'` | 行間 |
| `marker` | `'disc' \| 'decimal' \| 'none'` | マーカースタイル |

---

### 4.24 定義リスト (Dl)

```tsx
import { Dl, Dt, Dd } from '@digital-go-jp/design-system-example-components-react';

<Dl marker="bullet">
  <Dt>用語</Dt>
  <Dd>説明テキスト</Dd>
</Dl>
```

| Prop | 型 | 説明 |
|---|---|---|
| `marker` | `'none' \| 'bullet'` | `bullet` でリストマーカー付き |

---

### 4.25 ファイルアップロード (FileUpload)

```tsx
import { FileUpload } from '@digital-go-jp/design-system-example-components-react';

<FileUpload
  label="ファイルを選択"
  onChange={(files) => handleFiles(files)}
/>
```

複合コンポーネント。ドラッグ&ドロップ対応。`aria-disabled` パターン対応。

---

### 4.26 ユーティリティリンク (UtilityLink)

```tsx
import { UtilityLink } from '@digital-go-jp/design-system-example-components-react';

<UtilityLink href="/terms">利用規約</UtilityLink>
<UtilityLink href="https://example.com" target="_blank">外部サイト</UtilityLink>
```

Link とは異なるスタイル: `text-solid-gray-800`（Link は `text-blue-900`）。フッターナビ等に使用。
`asChild` 対応。`target="_blank"` で外部リンクアイコン自動追加。

**エクスポートされるスタイル定数:** `utilityLinkStyle`

---

### 4.27 ハンバーガーメニューボタン (HamburgerMenuButton)

```tsx
import { HamburgerMenuButton, HamburgerIcon, CloseIcon }
  from '@digital-go-jp/design-system-example-components-react';

<HamburgerMenuButton onClick={openDrawer}>
  <HamburgerIcon />
  メニュー
</HamburgerMenuButton>
```

**サブコンポーネント:**
- `HamburgerIcon` / `HamburgerWithLabelIcon`
- `CloseIcon` / `CloseWithLabelIcon`
- `HamburgerMenuIconButton`（アイコンのみバリアント）

---

### 4.28 ドロワー (Drawer)

コンポーネントは提供されていません。HTML `<dialog>` 要素を使用した実装パターンが提供されています。

**パターン:**
- **Full Drawer**: 画面全体をカバー
- **Right Drawer**: 右からスライドイン（`start-auto w-72`）
- **Left Drawer**: 左からスライドイン（`end-auto w-72`）
- **Scroll Only Menu Area**: メニュー部分のみスクロール

```tsx
<dialog
  aria-labelledby="drawer-heading"
  className="m-[unset] max-w-full max-h-[unset] w-72 h-dvh start-auto
    bg-white shadow-2 border-l border-l-transparent
    backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]"
  ref={drawerRef}
>
  <h2 id="drawer-heading" className="sr-only">メニュー</h2>
  {/* メニューコンテンツ */}
</dialog>
```

---

### 4.29 カルーセル (Carousel)

```tsx
import { Carousel, CarouselSingle } from '@digital-go-jp/design-system-example-components-react';
```

複数スライドとシングルスライドの2パターン。ナビゲーション（前/次ボタン + ドットインジケーター）付き。

---

### 4.30 カレンダー (Calendar)

コンポーネントは提供されていません。2つのパターンが提供されています:

1. **静的マークアップ**: `<table>` ベースの純HTMLカレンダー
2. **react-aria-components使用**: `Calendar`, `CalendarGrid`, `CalendarCell` を使用した動的カレンダー

```tsx
import { Calendar, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell }
  from 'react-aria-components';
```

**日付セルスタイル:**
```
rounded-full hover:bg-solid-gray-50
data-[selected]:!bg-blue-900 data-[selected]:text-white
focus-visible:bg-yellow-300 focus-visible:outline-4 focus-visible:outline-black
```

---

### 4.31 日付入力 (DatePicker / SeparatedDatePicker)

```tsx
import { DatePicker } from '@digital-go-jp/design-system-example-components-react';
import { SeparatedDatePicker } from '@digital-go-jp/design-system-example-components-react';
```

- **DatePicker**: 単一入力フィールド + カレンダーポップアップ
- **SeparatedDatePicker**: 年・月・日を個別のSelect/Inputで入力

サブコンポーネント: `DatePickerDate`, `DatePickerMonth`, `DatePickerYear`, `DatePickerCalendarButton`

---

### 4.32 言語切替 (LanguageSelector)

```tsx
import { LanguageSelector } from '@digital-go-jp/design-system-example-components-react';
```

**サブコンポーネント:**
- `LanguageSelectorButton` + `GlobeIcon` / `GlobeWithLabelIcon`
- `LanguageSelectorMenu` + `LanguageSelectorMenuItem`
- `ArrowIcon`

多言語対応サイト用。ドロップダウンメニュー方式。

---

### 4.33 テーブル (Table)

コンポーネントは提供されていません。HTML `<table>` を使用した実装ガイドが提供されています。

**推奨パターン:**
- 横スクロール時のシャドウ表示（OverflowShadow パターン）
- ソートヘッダー（`aria-sort` 属性）
- 行選択（チェックボックス連携）
- レスポンシブ対応

**テーブルセルスタイル:**
```
<th class="border border-solid-gray-300 bg-solid-gray-50 px-4 py-3 text-left font-bold">
<td class="border border-solid-gray-300 px-4 py-3">
```

---

### 4.34 Slot（ユーティリティ）

```tsx
import { Slot } from '@digital-go-jp/design-system-example-components-react';
```

Radix UI の Slot 相当。`asChild` パターンを実現するためのユーティリティコンポーネント。

```tsx
// Button, Link, Breadcrumbs, UtilityLink 等で asChild と共に使用
<Button asChild>
  <a href="/page">リンクとして描画</a>
</Button>
```

子要素にpropsとclassNameをマージして渡す。単一の有効なReact要素のみ受け付け。

---

### 4.35 v1コンポーネント（非推奨）

以下はv1のみで提供され、v2では非推奨です。

#### Dialog（v1）

```tsx
import { Dialog, DialogBody } from '@digital-go-jp/design-system-example-components-react';
```

`<dialog>` ベース。背景クリックで閉じる。v2対応版は今後提供予定。

#### Pagination（v1）

```tsx
import { Pagination, PaginationItem, PaginationPrev, PaginationNext, PaginationFirst, PaginationLast, PaginationEllipsis, PaginationCurrent }
  from '@digital-go-jp/design-system-example-components-react';
```

ページネーションUI。各アイテムは `rounded-full border border-solid-gray-200` の円形ボタン。

---

## 5. アセット（アイコン・イラスト）

### ライセンス

デジタル庁デザインシステムアセット。商用利用可能（CC BY 4.0に準拠）。

### 5.1 アイコン

**提供形式:** SVG（推奨）/ PNG（24px, 48px, 72px）

**スタイル:** 各アイコンに `fill`（塗りつぶし）と `line`（線画）の2バリアントあり。

**アイコン一覧（59種）:**

| カテゴリ | アイコン名 |
|---|---|
| ナビゲーション | arrow-b-down, arrow-b-left, arrow-b-right, arrow-b-up, arrow-l-right, check, close, minus, plus, open-in-new |
| 情報 | alert, error, help, info, warning |
| アクション | download, upload, edit, delete, search, copy, filter, share, print, save, attach, setting, translate |
| UI | calendar, clock, map-pin, notification, visible, invisible, sort, external-link |
| コンテンツ | home, person, group, document, mail, phone, folder, image, movie, bookmark, comment, flag |
| ステータス | loading, lock, unlock, star, favorite, like, verified |
| デバイス | desktop, mobile, tablet |
| その他 | menu, more-vert, more-horiz, language, accessibility, dark-mode, light-mode, qr-code |

使用例:
```html
<svg width="24" height="24" role="img" aria-label="検索">
  <use href="/icons/search-line.svg" />
</svg>
```

### 5.2 イラスト

**提供形式:** PNG

**サイズバリエーション:** L（大）, M（中）, S（小）

**カテゴリ:**
- **hand**: 手のイラスト（ジェスチャー表現）
- **human**: 人物イラスト（ユーザー表現）
- **object**: オブジェクト・シーンイラスト

---

## 6. アクセシビリティ設計方針

### 6.1 `aria-disabled` パターン

DADSでは HTML の `disabled` 属性ではなく `aria-disabled` を使用します。

**理由:**
- `disabled` はフォーカス不可になるため、スクリーンリーダーが要素を見つけられない
- `aria-disabled` はフォーカス可能なまま無効化状態を伝える

**実装パターン:**
```tsx
// NG: フォーカスできなくなる
<button disabled>送信</button>

// OK: フォーカス可能、操作は無効
<button aria-disabled="true">送信</button>
```

コンポーネント内部では `pointer-events-none` + キーイベント抑制で操作を無効化しています。

### 6.2 Windows High Contrast Mode対応

全コンポーネントで `forced-colors:` メディアクエリに対応:

```css
/* 例: 無効化時のテキスト */
aria-disabled:forced-colors:text-[GrayText]
aria-disabled:forced-colors:border-[GrayText]

/* ドロワーの背景 */
forced-colors:backdrop:bg-[#000b]
```

### 6.3 スクリーンリーダー対応

- 全アイコンに `role="img"` + `aria-label`
- 装飾アイコンは `aria-hidden="true"`
- 外部リンクは `aria-label="新規タブで開きます"` 自動付与
- ドロワーは `aria-labelledby` でヘッディング参照
- カレンダーセルは日付の詳細ラベル付与（例: `aria-label="2025年2月18日 火曜日"`)
- ページネーションは `aria-label="ページナビゲーション"` + `aria-current="page"`

---

## 7. フォーカスシステム

DADSのフォーカスシステムは、4px黒アウトライン + 黄色リングの2層構造です。

### 標準フォーカススタイル

```css
focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
focus-visible:outline-offset-[calc(2/16*1rem)]
focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
```

### ボタン・リンクのフォーカス

```css
focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
focus-visible:bg-yellow-300 focus-visible:text-blue-1000
focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
```

### フォーム要素のフォーカス

```css
focus:outline focus:outline-4 focus:outline-black
focus:outline-offset-[calc(2/16*1rem)]
focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
```

### カレンダーセルのフォーカス

```css
data-[focus-visible]:bg-yellow-300
data-[focus-visible]:outline data-[focus-visible]:outline-4 data-[focus-visible]:outline-black
data-[focus-visible]:outline-offset-[calc(2/16*1rem)]
data-[focus-visible]:ring-[calc(2/16*1rem)] data-[focus-visible]:ring-yellow-300
```

---

## 8. 開発ポリシー

### 8.1 設計思想

- **HTML標準に忠実**: セマンティックなHTML要素を最優先
- **最小限の依存**: Tailwind CSS + React のみ。UIライブラリ不要
- **コピー&カスタマイズ**: コンポーネントはコピーして使用し、プロジェクトに合わせてカスタマイズ可能
- **アクセシビリティファースト**: WCAG 2.1 AA準拠を目標

### 8.2 CSS方針

- Tailwind CSS ユーティリティクラスのみ使用
- カスタムCSSは原則不使用
- `data-*` 属性でバリアント制御（例: `data-[variant=outline]:`）
- `aria-*` 属性でステート制御（例: `aria-[invalid=true]:`）

### 8.3 コンポーネント提供パターン

1. **完全なReactコンポーネント**: Button, Input, Select, Checkbox, Radio 等
2. **実装パターン（コンポーネントなし）**: Table, Drawer, Calendar
3. **スタイル定数エクスポート**: `linkDefaultStyle`, `utilityLinkStyle`, `paginationItemStyle` 等

### 8.4 プロジェクトへの統合方法

```
1. npm install で依存パッケージをインストール
2. tailwind.config.js に theme-plugin を追加
3. コンポーネントをコピーまたはインポート
4. プロジェクトの要件に合わせてカスタマイズ
```

### 8.5 バージョン管理

- コンポーネント: v2系が現行（v1は非推奨）
- デザイントークン: `@digital-go-jp/design-tokens` ^1.1.9
- Tailwindプラグイン: `@digital-go-jp/tailwind-theme-plugin` ^0.3.4

---

> 本ドキュメントは `design-system-example-components-react-main` および `designsystem-assets` の内容に基づいて作成されています。
