import radioDefault from '../assets/icons/radio-indicator.svg'
import radioHover from '../assets/icons/radio-indicator-hover.svg'
import radioSelected from '../assets/icons/radio-indicator-selected.svg'
import type { BuffDef } from '../types'

interface BuffTileProps {
  buff: BuffDef
  selected: boolean
  onSelect: () => void
}

export default function BuffTile({ buff, selected, onSelect }: BuffTileProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative flex h-[88px] w-full flex-col items-center justify-center gap-2 rounded-[10px] pb-2 pt-3
        transition-all duration-100 outline-none
        focus-visible:ring-3 focus-visible:ring-purple/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbd1da]
        active:scale-[0.96] ${
          selected
            ? 'border-[2.5px] border-purple bg-[#6b5191] drop-shadow-[0px_3px_4px_rgba(91,74,138,0.25)]'
            : 'border border-[#c4a8d4] bg-[#f2deee] drop-shadow-[0px_2px_2px_rgba(196,168,212,0.13)] hover:border-2 hover:border-[#a582c4] hover:bg-[#e8d4f0]'
        }`}
    >
      {/* radio-indicator: default / hover ring / filled when selected */}
      <span
        className={`absolute size-1.5 ${selected ? 'left-[3.5px] top-[3.5px]' : 'left-[5px] top-[5px] group-hover:left-1 group-hover:top-1'}`}
      >
        <img
          src={selected ? radioSelected : radioDefault}
          alt=""
          className={`block size-full ${selected ? '' : 'group-hover:hidden'}`}
        />
        {!selected && (
          <img
            src={radioHover}
            alt=""
            className="hidden size-full group-hover:block"
          />
        )}
      </span>
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-100 group-hover:scale-105"
        style={{ backgroundColor: buff.iconBg }}
      >
        <img src={buff.icon} alt="" className="size-6" />
      </span>
      <span
        className={`w-full overflow-hidden text-ellipsis text-center font-cousine text-[10px] font-bold uppercase whitespace-nowrap ${
          selected ? 'text-white' : 'text-purple'
        }`}
      >
        {buff.key}
      </span>
    </button>
  )
}
