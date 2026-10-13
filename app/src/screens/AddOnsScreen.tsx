import BuffTile from '../components/BuffTile'
import CtaButton from '../components/CtaButton'
import { BUFFS, type BuffKey } from '../types'

interface AddOnsScreenProps {
  selected: BuffKey[]
  onToggle: (key: BuffKey) => void
  onSubmit: () => void
}

export default function AddOnsScreen({
  selected,
  onToggle,
  onSubmit,
}: AddOnsScreenProps) {
  return (
    <div className="flex w-full flex-1 flex-col items-start justify-between gap-8 px-5 pt-8 pb-16">
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full items-start justify-center rounded-lg bg-purple px-3 pt-2 pb-2.5">
          <p className="flex-1 text-center text-xl font-bold text-white uppercase">
            Select Your Buff
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <p className="w-full text-[10px] text-black">
            Add optional buffs &middot; pick up to three
          </p>
          <div className="w-full rounded-2xl border border-[#6f533c] bg-[#fbd1da] p-5 drop-shadow-[0px_8px_10px_rgba(91,74,138,0.19)]">
            <div className="grid grid-cols-3 gap-2.5">
              {BUFFS.map((buff) => (
                <BuffTile
                  key={buff.key}
                  buff={buff}
                  selected={selected.includes(buff.key)}
                  onSelect={() => onToggle(buff.key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CtaButton onClick={onSubmit} disabled={selected.length > 3}>
        {selected.length === 0
          ? 'Continue Without Buffs'
          : `Select Your Buff${selected.length > 1 ? 's' : ''}`}
      </CtaButton>
    </div>
  )
}
