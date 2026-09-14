import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import {
  machineMotion,
  receiptMotion,
  receiptPrintMotion,
} from '../figmaMotion'

interface VendingMachineProps {
  bodyContent: ReactNode
  receipt: ReactNode
  tallReceipt?: boolean
  /**
   * Which Figma entrance to play: 'intro' is Screen 0's, 'printing' is
   * Screen 4's (same tracks plus the slip's feed-out clip).
   */
  entrance?: 'none' | 'intro' | 'printing'
}

export default function VendingMachine({
  bodyContent,
  receipt,
  tallReceipt,
  entrance = 'none',
}: VendingMachineProps) {
  const reduceMotion = useReducedMotion()
  const play = entrance !== 'none' && !reduceMotion

  const machineProps = play ? machineMotion : {}
  const receiptProps = play
    ? entrance === 'printing'
      ? receiptPrintMotion
      : receiptMotion
    : {}

  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-3">
      <motion.div
        className="flex w-full max-w-[302px] shrink-0 items-start rounded-[28px] border-3 border-black bg-white p-2"
        {...machineProps}
      >
        <div className="relative flex h-[261px] w-full shrink-0 flex-col overflow-clip rounded-3xl border-3 border-ink bg-white">
          <div className="h-[37px] w-full shrink-0 border-b-3 border-ink bg-pink" />
          <div className="flex h-56 w-full shrink-0 flex-col items-center justify-center bg-[#38342e] p-5">
            {bodyContent}
          </div>
        </div>
      </motion.div>
      {/* The receipt paper is absolutely positioned so it hangs out of the slot;
          reserve that height below the slot so it never overlaps the CTA. */}
      <div
        className={`relative flex shrink-0 flex-col items-start gap-2.5 rounded-lg border border-black bg-white p-1 ${
          tallReceipt ? 'mb-[168px]' : 'mb-[40px]'
        }`}
      >
        <div className="h-1 w-[135px] rounded shrink-0 border border-black bg-black" />
        <motion.div
          className={`absolute left-[21px] top-[9px] flex w-[100px] flex-col items-center gap-0.5 overflow-clip whitespace-nowrap border-[1.5px] border-black bg-white px-2 py-1 ${tallReceipt ? 'h-[167px]' : ''}`}
          {...receiptProps}
        >
          {receipt}
        </motion.div>
      </div>
    </div>
  )
}
