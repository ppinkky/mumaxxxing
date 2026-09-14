import { motion, useReducedMotion } from 'motion/react'
import CtaButton from '../components/CtaButton'
import VendingMachine from '../components/VendingMachine'
import { headerMotion, introCtaMotion } from '../figmaMotion'

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-between gap-8 px-5 pt-8 pb-16">
      <div className="flex w-full shrink-0 flex-col items-center gap-8">
        <motion.div
          className="flex w-full flex-col items-center gap-2 [word-break:break-word]"
          {...(reduceMotion ? {} : headerMotion)}
        >
          <p className="text-[40px] leading-none font-bold tracking-[-1px] text-ink italic">
            MU MAXXING
          </p>
          <p className="text-xs font-bold tracking-[2px] text-pink">
            LUCK VENDING MACHINE
          </p>
          <p className="text-center text-sm text-purple-muted italic">
            Modern Problem requires
            <br />
            Ancient Solution
          </p>
        </motion.div>
        <VendingMachine
          entrance="intro"
          bodyContent={
            <p className="w-full text-center font-cute text-[52px] leading-none text-text-reverse uppercase">
              What&rsquo;s on your mind?
            </p>
          }
          receipt={
            <>
              <p
                className="text-[7px] font-bold text-black"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                มู Maxxing
              </p>
              <p className="text-[5px] text-[#999]">- - - - - - - -</p>
              <p className="text-[5px] text-black">POWER: 77/100</p>
            </>
          }
        />
      </div>
      <motion.div
        className="w-full shrink-0"
        {...(reduceMotion ? {} : introCtaMotion)}
      >
        <CtaButton onClick={onStart}>Tell me what&rsquo;s going on..</CtaButton>
      </motion.div>
    </div>
  )
}
