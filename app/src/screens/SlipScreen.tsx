import { motion, useReducedMotion } from 'motion/react'
import { useRef, useState } from 'react'
import CtaButton from '../components/CtaButton'
import { slipCardMotion, slipCtaMotion } from '../figmaMotion'
import divider from '../assets/icons/divider.svg'
import type { BuffDef, LoadoutItem } from '../types'
import { shareReceipt } from '../utils/receipt'

const Divider = () => (
  <div className="w-full shrink-0">
    <img src={divider} alt="" className="block w-full" />
  </div>
)

interface SlipScreenProps {
  situation: string
  situationScore: number
  luckyNumbers: number[]
  buffs: BuffDef[]
  powerLevel: number
  loadout: LoadoutItem[]
  includeSituation: boolean
  onIncludeSituationChange: (value: boolean) => void
  onRestart: () => void
}

export default function SlipScreen({
  situation,
  situationScore,
  luckyNumbers,
  buffs,
  powerLevel,
  loadout,
  includeSituation,
  onIncludeSituationChange,
  onRestart,
}: SlipScreenProps) {
  const [shared, setShared] = useState(false)
  const [error, setError] = useState('')
  const receiptRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const still = reduceMotion ? {} : undefined

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-6 bg-bg px-3 py-8">
      <motion.div
        ref={receiptRef}
        className="flex w-full max-w-[276px] shrink-0 flex-col items-start overflow-clip bg-white"
        {...(still ?? slipCardMotion)}
      >
        <div className="flex w-full flex-col items-center gap-0.5 px-5 pt-6 pb-3 text-center whitespace-nowrap">
          <p
            className="text-xl font-bold text-[#1a1a1a]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            มู Maxxing
          </p>
          <p className="text-[9px] text-[#555] italic">
            Modern Problem requires,Ancient Solution
          </p>
        </div>
        <Divider />

        <div className="flex w-full flex-col items-start gap-0.5 px-5 py-2">
          <p className="text-[8px] font-bold text-[#1a1a1a]">SITUATION</p>
          <div className="flex w-full items-start gap-0.5 text-[10px] text-[#333]">
            <p className="flex-1 [word-break:break-word]">{situation}</p>
            <p className="shrink-0">{situationScore}</p>
          </div>
        </div>
        <Divider />

        <div className="flex w-full flex-col items-start gap-3 px-5 py-2">
          <p className="text-[8px] font-bold whitespace-nowrap text-[#1a1a1a]">
            YOUR LUCKY NUMBER
          </p>
          <p className="w-full text-[10px] text-[#333]">
            {luckyNumbers.join(', ')}
          </p>
        </div>
        <Divider />

        <div className="flex w-full flex-col items-start gap-3 px-5 py-2">
          <p className="text-[8px] font-bold whitespace-nowrap text-[#1a1a1a]">
            YOUR LUCK LOADOUT
          </p>
          {loadout.map((item) => (
            <div key={item.title} className="flex w-full flex-col gap-[3px]">
              <p className="w-full text-[6px] text-[#333]">{item.origin}</p>
              <div className="flex w-full items-start justify-between text-[10px] text-[#333]">
                <p className="flex-1">{item.title}</p>
                <p className="shrink-0 whitespace-nowrap">+{item.points}</p>
              </div>
              <p className="w-full text-[8px] text-[#333]">{item.description}</p>
            </div>
          ))}
        </div>
        <Divider />

        <div className="flex w-full flex-col items-start gap-3 px-5 py-2">
          <p className="text-[8px] font-bold whitespace-nowrap text-[#1a1a1a]">
            BUFF{buffs.length > 1 ? 'S' : ''}
          </p>
          <div className="flex w-full flex-col items-start">
            {buffs.map((b) => (
              <div
                key={b.key}
                className="flex w-full items-start justify-between text-[10px] text-[#333]"
              >
                <p className="flex-1 uppercase">{b.key}</p>
                <p className="shrink-0 whitespace-nowrap">+{b.points}</p>
              </div>
            ))}
          </div>
        </div>
        <Divider />

        <div className="flex w-full items-start justify-between px-5 py-2 whitespace-nowrap text-[#1a1a1a]">
          <p className="text-[8px] font-bold">POWER LEVEL</p>
          <p className="text-sm font-bold">{powerLevel} / 100</p>
        </div>
        <Divider />
        <Divider />

        <div className="flex w-full flex-col items-center gap-1 px-5 pt-3 pb-6 text-center text-[7px] whitespace-nowrap">
          <p
            className="text-[#888]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            You&rsquo;ve done your มู. The rest is you.
          </p>
          <p className="text-[#aaa] italic">
            *The universe has not been peer reviewed.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex w-full shrink-0 flex-col items-start gap-3"
        {...(still ?? slipCtaMotion)}
      >
        <label className="flex items-start gap-2 px-2 text-xs text-[#333]">
          <input
            type="checkbox"
            checked={includeSituation}
            onChange={(event) => onIncludeSituationChange(event.target.checked)}
            className="mt-0.5 accent-cta"
          />
          <span>Include my text (visible when shared)</span>
        </label>
        <CtaButton
          onClick={async () => {
            try {
              setError('')
              if (!receiptRef.current) {
                throw new Error('Receipt preview is not available for sharing.')
              }
              await shareReceipt(receiptRef.current)
              setShared(true)
            } catch (shareError) {
              setError(
                shareError instanceof Error
                  ? shareError.message
                  : 'Receipt sharing failed. The on-screen receipt is still available.',
              )
            }
          }}
          className="font-cousine whitespace-nowrap"
        >
          {shared ? 'Receipt Shared ✓' : 'Share Receipt'}
        </CtaButton>
        {error && (
          <p className="w-full text-center text-xs text-cta" role="alert">
            {error}
          </p>
        )}
        <div className="flex w-full items-center justify-center">
          <button
            type="button"
            onClick={onRestart}
            className="rounded px-2 py-1 text-sm whitespace-nowrap text-[#2b2727] underline
              transition-colors duration-100 outline-none
              hover:text-cta active:text-purple
              focus-visible:ring-3 focus-visible:ring-purple/70"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Try Again
          </button>
        </div>
      </motion.div>

      <div className="w-full flex-1" />
    </div>
  )
}
