# Marumie Design System

> Marumie プロジェクトのデザインシステム仕様書

## 目次

1. [概要](#概要)
2. [カラーパレット](#カラーパレット)
3. [タイポグラフィ](#タイポグラフィ)
4. [スペーシング](#スペーシング)
5. [ボーダー・シャドウ・角丸](#ボーダーシャドウ角丸)
6. [ブレークポイント](#ブレークポイント)
7. [アニメーション・トランジション](#アニメーショントランジション)
8. [アイコン](#アイコン)
9. [コンポーネント](#コンポーネント)
10. [レイアウトパターン](#レイアウトパターン)
11. [アクセシビリティ](#アクセシビリティ)

---

## 概要

### 技術スタック

| 項目 | Webapp（ユーザー向け） | Admin（管理画面） |
|------|----------------------|------------------|
| フレームワーク | React 19 + Next.js 16 | React 19 + Next.js 16 |
| CSS | Tailwind CSS v4 | Tailwind CSS v4 |
| UIライブラリ | カスタムコンポーネント | shadcn/ui (Radix UI) |
| アイコン | — | lucide-react |
| バリアント管理 | — | class-variance-authority (CVA) |
| クラス結合 | clsx + tailwind-merge | clsx + tailwind-merge |

### モノレポ構成

```
marumie-develop/
├── webapp/          # ユーザー向けフロントエンド
├── admin/           # 管理画面
├── shared/          # 共通モジュール
├── prisma/          # DB スキーマ
├── supabase/        # Supabase設定
└── docs/            # ドキュメント
```

---

## カラーパレット

### Webapp（ライトテーマ・グラデーション背景）

#### プライマリカラー（グリーン/ティール系）

| トークン | 値 | 用途 |
|---------|-----|------|
| `--color-primary-400` | `#30BCA7` | ライトティール |
| `--color-primary-500` | `#2AA693` | **メインカラー** |
| `--color-primary-600` | `#238778` | ダークティール |

#### テキストカラー

| トークン | 値 | 用途 |
|---------|-----|------|
| `--color-black-900` | `#000000` | プライマリテキスト |
| `--color-black-800` | `#1F2937` | セカンダリテキスト |
| `--color-black-700` | `#4B5563` | ミディアムグレー |
| `--color-black-600` | `#6B7280` | ミュートテキスト |
| `--color-black-500` | `#85868E` | セカンダリテキスト |

#### セマンティックカラー

| トークン | 値 | 用途 |
|---------|-----|------|
| `--color-income` | `#2AA693` | 収入表示 |
| `--color-expense` | `#EF4444` | 支出表示 |
| `--color-danger-500` | `#EF4444` | エラー・危険 |
| `--color-white` | `#FFFFFF` | 背景・テキスト |

#### 背景

```css
--background: linear-gradient(135deg, rgba(226, 246, 243, 1) 0%, rgba(238, 246, 226, 1) 100%);
```

ティール → ライトイエローグリーンへの135度グラデーション。フォールバック: `#E2F6F3`

---

### Admin（ダークテーマ・OKLch カラースペース）

#### ベースカラー

| トークン | OKLch 値 | 用途 |
|---------|----------|------|
| `--color-background` | `oklch(0.141 0.005 285.823)` | 背景（ダークブルー） |
| `--color-card` | `oklch(0.21 0.006 285.885)` | カード背景 |
| `--color-foreground` | `oklch(0.985 0 0)` | テキスト（ほぼ白） |

#### インタラクティブカラー

| トークン | OKLch 値 | 用途 |
|---------|----------|------|
| `--color-primary` | `oklch(0.488 0.243 264.376)` | プライマリブルー |
| `--color-primary-foreground` | `oklch(0.97 0.014 254.604)` | プライマリ上のテキスト |
| `--color-destructive` | `oklch(0.704 0.191 22.216)` | 削除・エラー（赤） |

#### 構造カラー

| トークン | OKLch 値 | 用途 |
|---------|----------|------|
| `--color-border` | `oklch(1 0 0 / 10%)` | ボーダー（白10%透過） |
| `--color-input` | `oklch(1 0 0 / 15%)` | 入力フィールド背景 |
| `--color-ring` | `oklch(0.556 0 0)` | フォーカスリング |
| `--color-muted` | `oklch(0.274 0.006 286.033)` | ミュート背景 |
| `--color-muted-foreground` | `oklch(0.705 0.015 286.067)` | ミュートテキスト |

#### サイドバーカラー

| トークン | OKLch 値 | 用途 |
|---------|----------|------|
| `--color-sidebar` | `oklch(0.21 0.006 285.885)` | サイドバー背景 |
| `--color-sidebar-foreground` | `oklch(0.985 0 0)` | サイドバーテキスト |
| `--color-sidebar-primary` | `oklch(0.623 0.214 259.815)` | アクティブ項目 |
| `--color-sidebar-accent` | `oklch(0.274 0.006 286.033)` | ホバー背景 |
| `--color-sidebar-border` | `oklch(0.225 0.004 286)` | サイドバーボーダー |

#### チャートカラー

| トークン | OKLch 値 |
|---------|----------|
| `--color-chart-1` | `oklch(0.809 0.105 251.813)` |
| `--color-chart-2` | `oklch(0.623 0.214 259.815)` |
| `--color-chart-3` | `oklch(0.546 0.245 262.881)` |
| `--color-chart-4` | `oklch(0.488 0.243 264.376)` |
| `--color-chart-5` | `oklch(0.424 0.199 265.638)` |

---

## タイポグラフィ

### フォントファミリー

| トークン | フォント | ウェイト | 用途 |
|---------|--------|---------|------|
| `--font-noto-sans-jp` | Noto Sans JP | 400, 500, 700, 900 | 日本語テキスト |
| `--font-noto-sans` | Noto Sans | 400, 500, 700, 800, 900 | 英語テキスト |
| `--font-inter` | Inter | 400, 700 | 数値・補助 |
| `--font-geist-sans` | Geist Sans | — | システムフォント |
| `--font-geist-mono` | Geist Mono | — | 等幅フォント |

フォールバック: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Noto Sans", "Helvetica Neue", Arial`

ユーティリティクラス:
- `.font-japanese` → Noto Sans JP
- `.font-english` → Noto Sans

### フォントサイズ

| サイズ | 値 | 用途 |
|-------|-----|------|
| タイトル (SP) | `20px` | モバイル見出し |
| タイトル (PC) | `27px` | デスクトップ見出し |
| 本文 | `14px` | 標準テキスト |
| 小テキスト | `11px` - `13px` | タイムスタンプ・補助 |
| 極小 | `9px` | ラベル等 |

### フォントウェイト

| クラス | 値 | 用途 |
|-------|-----|------|
| `font-normal` | 400 | 本文 |
| `font-medium` | 500 | 中見出し・ラベル |
| `font-bold` / `font-semibold` | 700 | 見出し・強調 |
| `font-black` | 900 | 特大見出し |

### 行間・字間

| プロパティ | 値 | 用途 |
|-----------|-----|------|
| `leading-[1.52]` | 1.52 | タイトル |
| `leading-[1.21]` | 1.21 | サブタイトル |
| `leading-[1.5em]` | 1.5em | 本文 |
| `tracking-[0.01em]` | 0.01em | 見出し字間 |

---

## スペーシング

Tailwind CSS のデフォルトスペーシングスケール（1単位 = 4px）を使用。

### よく使うスペーシング値

| クラス | 値 | 主な用途 |
|-------|-----|---------|
| `gap-1` | 4px | アイコンとテキスト間 |
| `gap-2` | 8px | 小要素間 |
| `gap-3` | 12px | 中要素間 |
| `gap-4` | 16px | セクション内 |
| `gap-6` | 24px | カード内セクション間 |
| `p-6` | 24px | カードのパディング |
| `px-3 py-2` | 12px / 8px | 入力・ボタンの標準パディング |
| `px-6 py-4` | 24px / 16px | カードコンテンツ |

---

## ボーダー・シャドウ・角丸

### 角丸 (Border Radius)

| クラス | 値 | 用途 |
|-------|-----|------|
| `rounded-xs` | 2px | — |
| `rounded-sm` | 4px | チェックボックス |
| `rounded-md` | 6px | ボタン・入力 |
| `rounded-lg` | 8px | ダイアログ |
| `rounded-xl` | 12px | カード (Admin) |
| `rounded-2xl` | 16px | カード (Webapp) |
| `rounded-3xl` | 18px | — |
| `rounded-full` | 50% | アバター・バッジ |

### シャドウ

| クラス | 用途 |
|-------|------|
| `shadow-xs` | 入力フィールド・チェックボックス |
| `shadow-sm` | カード |
| `shadow-md` | セレクトドロップダウン |
| `shadow-lg` | ダイアログ・モーダル |

### ボーダー

| パターン | 用途 |
|---------|------|
| `border border-input` | 入力フィールド |
| `border border-[#E5E7EB]` | Webapp カード |
| `border-gray-600` | セレクター |

---

## ブレークポイント

Tailwind CSS 標準ブレークポイントを使用。

| プレフィックス | 最小幅 | 用途 |
|-------------|--------|------|
| `sm` | 640px | 小型タブレット |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 大画面 |

### レスポンシブパターン例

```html
<!-- テキストサイズ -->
<h1 class="text-[20px] sm:text-[27px]">タイトル</h1>

<!-- レイアウト切り替え -->
<div class="flex flex-col md:flex-row">...</div>

<!-- 表示切り替え -->
<nav class="hidden md:flex">デスクトップナビ</nav>

<!-- スペーシング -->
<section class="mt-0 sm:mt-16">...</section>
```

---

## アニメーション・トランジション

### トランジション

| クラス | 対象プロパティ |
|-------|-------------|
| `transition-opacity` | 透明度 |
| `transition-colors` | 色 |
| `transition-all` | 全プロパティ |
| `transition-shadow` | シャドウ |
| `transition-transform` | トランスフォーム |

### アニメーション（Admin コンポーネント）

| パターン | 用途 |
|---------|------|
| `animate-in` / `animate-out` | 出入りアニメーション |
| `fade-in-0` / `fade-out-0` | フェード |
| `zoom-in-95` / `zoom-out-95` | ズーム (95%) |
| `slide-in-from-top-2` | スライドイン |
| `duration-200` | 200ms（デフォルト） |

ダイアログ、セレクト、ツールチップで使用。

---

## アイコン

### ライブラリ

**lucide-react** v0.562.0（Admin で使用）

### サイズ規約

| クラス | サイズ | 用途 |
|-------|-------|------|
| `size-2.5` | 10px | 極小 |
| `size-3.5` | 14px | 小 |
| `size-4` | 16px | **標準**（デフォルト） |
| `size-10` | 40px | 大 |

### スタイリング規約

```css
[&_svg]:pointer-events-none  /* ポインターイベント無効 */
[&_svg]:shrink-0             /* flex での縮小防止 */
[&_svg:not([class*='size-'])]:size-4  /* デフォルトサイズ */
```

---

## コンポーネント

### Admin コンポーネント（shadcn/ui ベース）

#### Button

| バリアント | スタイル |
|-----------|---------|
| `default` | プライマリカラー背景 |
| `destructive` | 赤背景 |
| `outline` | ボーダーのみ |
| `secondary` | セカンダリカラー背景 |
| `ghost` | 背景なし、ホバーで表示 |
| `link` | テキストリンクスタイル |

| サイズ | 高さ |
|-------|------|
| `default` | h-9 (36px) |
| `sm` | h-8 (32px) |
| `lg` | h-10 (40px) |
| `icon` | size-9 (36x36) |
| `icon-sm` | size-8 (32x32) |
| `icon-lg` | size-10 (40x40) |

#### Card

```
bg-card, border, rounded-xl, p-6, shadow-sm, gap-6
├── CardHeader (px-6, py-6, grid auto-rows-min)
│   ├── CardTitle (font-semibold, leading-none)
│   ├── CardDescription (text-sm, text-muted-foreground)
│   └── CardAction (absolute positioned)
├── CardContent (px-6)
└── CardFooter (px-6, flex)
```

#### Input

```
bg-input/30, border-input, rounded-md, shadow-xs
h-9, px-3 py-1, text-base md:text-sm
focus: ring効果
aria-invalid: destructive色
```

#### Select

```
Trigger: h-9, rounded-md, border-input, bg-input/30
Content: rounded-md, border, shadow-md, bg-popover
Items: focus:bg-accent, rounded-sm, py-1.5, px-2
Animation: fade-in, zoom-in-95
```

#### Dialog

```
Overlay: fixed, inset-0, z-50, bg-black/50
Content: rounded-lg, border, p-6, shadow-lg, grid gap-4
Animation: animate-in/out, fade, zoom, slide
```

#### Table

```
Container: w-full, overflow-x-auto
Header: [&_tr]:border-b
Row: hover:bg-muted/50, transition-colors, border-b
Cell: p-2, align-middle, whitespace-nowrap
Head: h-10, px-2, text-left
```

#### その他

| コンポーネント | 主要スタイル |
|-------------|------------|
| Textarea | min-h-16, bg-input/30, px-3 py-2 |
| Checkbox | size-4, rounded-[4px], border |
| Switch | h-[1.15rem], w-8, rounded-full |
| Tabs | TabsList: h-9, rounded-lg, p-[3px], bg-muted |
| Label | flex items-center gap-2, text-sm, font-medium |
| Tooltip | bg-foreground, text-background, rounded-md, px-3 py-1.5, text-xs |

---

### Webapp コンポーネント（カスタム）

#### MainButton

```
w-[270px], h-[48px], px-6 py-2
bg-white, border border-[#1F2937], rounded-[6px]
text-[#1F2937], font-bold, text-base, leading-[1.5em]
hover:bg-gray-50, transition-colors
```

#### BaseCard

```
border border-[#E5E7EB], rounded-2xl, p-6
```

#### Typography

```
Title:    text-[20px] sm:text-[27px], leading-[1.52], tracking-[0.01em], font-bold
Subtitle: text-[14px], leading-[1.21], tracking-[0.01em], font-medium
```

#### Selector

```
Button:   px-2 py-2 lg:px-4 lg:py-2.5, border border-gray-600, rounded-md
Dropdown: absolute, bg-white, border, rounded-md, shadow-lg, z-50
```

---

## レイアウトパターン

### Admin レイアウト

```css
.container {
  display: grid;
  grid-template-columns: 220px 1fr;
  height: 100vh;
}
```

サイドバー（220px 固定幅） + メインコンテンツ（残り幅）の2カラム構成。

### 共通 Flexbox パターン

```html
<!-- 水平中央揃え -->
<div class="flex items-center justify-center gap-2">...</div>

<!-- 垂直スタック -->
<div class="flex flex-col gap-4">...</div>

<!-- レスポンシブ切り替え -->
<div class="flex flex-col md:flex-row">...</div>
```

### コンテナクエリ

```css
@container/card-header { ... }
```

CardHeader でコンテナクエリによるレスポンシブレイアウトを使用。

---

## アクセシビリティ

### フォーカス表示

```css
/* Webapp */
*:focus-visible {
  outline: 2px solid #2AA693;
}

/* Admin */
focus-visible:ring-[3px] ring-ring/50
```

### aria 属性

- `aria-invalid`: フォームバリデーションエラー時にスタイル切り替え
- `aria-label`: インタラクティブ要素のラベル
- キーボードナビゲーション: Radix UI によるサポート

### data 属性によるスタイリング

| 属性 | 用途 |
|------|------|
| `data-slot` | コンポーネント識別 |
| `data-variant` | バリアント切り替え |
| `data-size` | サイズ切り替え |
| `data-state` | 状態切り替え（open/closed, checked/unchecked） |

---

## ファイルリファレンス

| ファイル | 内容 |
|--------|------|
| `webapp/src/app/globals.css` | Webapp カラーシステム・フォーカススタイル |
| `admin/src/app/globals.css` | Admin ダークテーマ・レイアウト |
| `admin/src/client/components/ui/` | shadcn/ui コンポーネント群 |
| `webapp/src/client/components/ui/` | Webapp カスタムコンポーネント |
| `webapp/src/app/layout.tsx` | フォント設定 |
| `admin/src/app/layout.tsx` | Admin レイアウト設定 |
