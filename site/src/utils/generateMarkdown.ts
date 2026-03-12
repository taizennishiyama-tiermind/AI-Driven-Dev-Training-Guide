import type { Chapter } from '../data/chapters'
import { chapterQA, concreteExamples } from '../data/qa'
import { chapters, keyMessages, timeline } from '../data/chapters'

export function generateChapterMarkdown(chapter: Chapter): string {
  const lines: string[] = []

  lines.push(`# Chapter ${chapter.id}: ${chapter.title}`)
  lines.push('')
  lines.push(`> ${chapter.coreMessage}`)
  lines.push('')
  lines.push(`**${chapter.subtitle}** | ${chapter.duration}`)
  lines.push('')

  for (const section of chapter.sections) {
    lines.push(`## ${section.title}`)
    lines.push('')
    lines.push(section.content)
    lines.push('')
  }

  if (chapter.comparisons && chapter.comparisons.length > 0) {
    lines.push('## よくある誤解 vs 実際')
    lines.push('')
    lines.push('| 誤解 | 実際 |')
    lines.push('|---|---|')
    for (const row of chapter.comparisons) {
      lines.push(`| ${row.misconception} | ${row.reality} |`)
    }
    lines.push('')
  }

  const examples = concreteExamples[chapter.id]
  if (examples && examples.length > 0) {
    lines.push('## 具体例')
    lines.push('')
    for (const ex of examples) {
      lines.push(`### ${ex.situation}`)
      lines.push('')
      lines.push(`**入力:** ${ex.input}`)
      lines.push('')
      lines.push(`**結果:** ${ex.result}`)
      lines.push('')
    }
  }

  if (chapter.prompts.length > 0) {
    lines.push('## Prompt Collection')
    lines.push('')
    for (const prompt of chapter.prompts) {
      lines.push(`### ${prompt.label}`)
      lines.push('')
      lines.push('```')
      lines.push(prompt.prompt)
      lines.push('```')
      lines.push('')
    }
  }

  const qa = chapterQA[chapter.id]
  if (qa && qa.length > 0) {
    lines.push('## よくある質問')
    lines.push('')
    for (const item of qa) {
      lines.push(`**Q: ${item.q}**`)
      lines.push('')
      lines.push(`A: ${item.a}`)
      lines.push('')
    }
  }

  if (chapter.handsOn) {
    lines.push('## ハンズオン')
    lines.push('')
    lines.push(chapter.handsOn)
    lines.push('')
  }

  if (chapter.resources.length > 0) {
    lines.push('## Resources')
    lines.push('')
    for (const resource of chapter.resources) {
      lines.push(`- [${resource.title}](${resource.url}) - ${resource.description}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

export function generateHomeMarkdown(): string {
  const lines: string[] = []

  lines.push('# AI駆動開発 入門研修')
  lines.push('')
  lines.push('Claude Code ではじめる AI駆動開発の研修資料です。')
  lines.push('')
  lines.push('AIに作ってもらう。ただし、うまく作ってもらうための**材料は人が渡す。**')
  lines.push('Claude Codeを主役に、実務で自走できる状態を目指します。')
  lines.push('')

  lines.push('## Curriculum')
  lines.push('')
  for (const chapter of chapters) {
    lines.push(`- **Chapter ${chapter.id}: ${chapter.title}** (${chapter.duration}) - ${chapter.coreMessage}`)
  }
  lines.push('')

  lines.push('## Design Philosophy')
  lines.push('')
  lines.push('1. **まず作れるようにする** - 成功体験を通じて感覚を掴む (Ch.1-5)')
  lines.push('2. **品質を上げるコツ** - デザイン・スキル・テストの活用 (Ch.5-7)')
  lines.push('3. **実務運用の勘所** - API連携、セキュリティ、LLM設計 (Ch.8-9)')
  lines.push('')

  lines.push('## Key Messages')
  lines.push('')
  for (const msg of keyMessages) {
    lines.push(`- ${msg}`)
  }
  lines.push('')

  lines.push('## Timeline (5h)')
  lines.push('')
  lines.push('| 時間 | 内容 |')
  lines.push('|---|---|')
  for (const entry of timeline) {
    const chapterLabel = entry.chapter > 0 ? ` (Ch.${entry.chapter})` : ''
    lines.push(`| ${entry.time} | ${entry.content}${chapterLabel} |`)
  }
  lines.push('')

  lines.push('## Toolchain')
  lines.push('')
  lines.push('- Claude Code - 実装の主役')
  lines.push('- GitHub - 変更履歴と共同開発')
  lines.push('- VS Code - 人とAIの作業ハブ')
  lines.push('- Vercel - 最短で公開')
  lines.push('- Google AI Studio - 発想整理・試作')
  lines.push('- Cloudflare Workers - 本番拡張先')
  lines.push('')

  return lines.join('\n')
}
