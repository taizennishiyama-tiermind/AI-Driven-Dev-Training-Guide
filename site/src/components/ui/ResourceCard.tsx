import { ExternalLink } from 'lucide-react'
import type { Resource } from '../../data/chapters'

const typeLabel: Record<Resource['type'], string> = {
  blog: 'Blog',
  book: 'Book',
  docs: 'Docs',
  video: 'Video',
}

interface ResourceCardProps {
  readonly resource: Resource
  readonly index: number
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors truncate">
            {resource.title}
          </h4>
          <ExternalLink className="w-3 h-3 shrink-0 text-gray-300 group-hover:text-primary-400 transition-colors" />
        </div>
        <p className="text-xs text-gray-400 mt-0.5 truncate">{resource.description}</p>
      </div>
      <span className="shrink-0 text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
        {typeLabel[resource.type]}
      </span>
    </a>
  )
}
