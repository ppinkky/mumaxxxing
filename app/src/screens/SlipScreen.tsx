import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import CtaButton from '../components/CtaButton'
import { slipCardMotion, slipCtaMotion } from '../figmaMotion'
import divider from '../assets/icons/divider.svg'
import { LOADOUT, type BuffDef } from '../types'

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
  onRestart: () => void
}

export default function SlipScreen({
  situation,
  situationScore,
  luckyNumbers,
  buffs,
  powerLevel,
  onRestart,
}: SlipScreenProps) {
  const [saved, setSaved] = useState(false)
  const reduceMotion = useReducedMotion()
  const still = reduceMotion ? {} : undefined

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-6 bg-bg px-3 py-8">
      <motion.div
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
          {LOADOUT.map((item) => (
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
        <CtaButton
          onClick={() => setSaved(true)}
          className="font-cousine whitespace-nowrap"
        >
          {saved ? 'Buff Saved ✓' : 'Save Your Buff'}
        </CtaButton>
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
