/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/bernardobatistelli.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Bernardo Batistelli
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          {' '}
          {/* truncate -> 3 propriedades em uma... não deixa a linha quebrar(white-space: nowrap) 3 pontinhos(text-overflow: ellipsis) não mostra nada além do tamanho do span(overflow: hidden) */}
          bebatistelli254@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
