import { motion, useReducedMotion } from 'motion/react'
import { useEffect } from 'react'
import VendingMachine from '../components/VendingMachine'
import { FIGMA_TIMELINE_S, headerMotion } from '../figmaMotion'

/** Let the 2s Figma timeline finish, then hold a beat before the slip. */
const HOLD_AFTER_PRINT_MS = 600

export default function PrintingScreen({ onDone }: { onDone: () => void }) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const total = reduceMotion
      ? HOLD_AFTER_PRINT_MS
      : FIGMA_TIMELINE_S * 1000 + HOLD_AFTER_PRINT_MS
    const timeout = setTimeout(onDone, total)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion])

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-8 px-5 pt-8 pb-16">
      <motion.p
        className="w-full text-center text-sm text-purple-muted italic"
        {...(reduceMotion ? {} : headerMotion)}
      >
        printing..
      </motion.p>
      <VendingMachine
        entrance="printing"
        tallReceipt
        bodyContent={
          <div className="w-full text-center font-cute text-2xl leading-tight text-text-reverse uppercase">
            <p>Applying good energy...</p>
            <p>Consulting the universe...</p>
            <p>Cross-checking grandma&rsquo;s advice...</p>
            <p>This might work...</p>
          </div>
        }
        receipt={
          <>
            <p
              className="text-[7px] font-bold text-black"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              มู Maxxing
            </p>
            {Array.from({ length: 18 }).map((_, i) => (
              <p key={i} className="text-[5px] text-[#999]">
                - - - - - - - -
              </p>
            ))}
          </>
        }
      />
    </div>
  )
}
