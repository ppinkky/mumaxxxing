import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react'
import { useEffect } from 'react'
import VendingMachine from '../components/VendingMachine'
import LoadingCopy from '../components/LoadingCopy'
import {
  BAR_FILL_EASE,
  BAR_FILL_TIMES,
  FIGMA_TIMELINE_S,
  headerMotion,
  progressRowMotion,
  statusPanelMotion,
} from '../figmaMotion'

/** Width of the bar track, i.e. a full bar. */
const TRACK_W = 223
/** Beat to hold on the finished bar before moving on. */
const HOLD_AFTER_MS = 400

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const reduceMotion = useReducedMotion()
  const fill = useMotionValue(reduceMotion ? TRACK_W : 1)
  const percent = useTransform(fill, (w) =>
    `${Math.round((w / TRACK_W) * 100)}%`,
  )

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(onDone, HOLD_AFTER_MS)
      return () => clearTimeout(t)
    }
    const controls = animate(fill, [1, 1, TRACK_W, TRACK_W], {
      duration: FIGMA_TIMELINE_S,
      times: BAR_FILL_TIMES,
      ease: BAR_FILL_EASE,
    })
    const t = setTimeout(onDone, FIGMA_TIMELINE_S * 1000 + HOLD_AFTER_MS)
    return () => {
      controls.stop()
      clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion])

  const still = reduceMotion ? {} : undefined

  return (
    <div className="flex w-full flex-1 flex-col items-start gap-2 p-3">
      <div className="w-full flex-1" />
      <motion.div
        className="flex w-full flex-col items-center gap-3 rounded-[10px] p-4"
        {...(still ?? statusPanelMotion)}
      >
        <motion.p
          className="w-full text-center text-sm text-purple-muted italic"
          {...(still ?? headerMotion)}
        >
          thinking...
        </motion.p>
        <VendingMachine
          bodyContent={
            <div className="flex flex-col items-start gap-2.5">
              <div className="w-full text-center font-cute text-2xl leading-tight text-text-reverse uppercase">
                <LoadingCopy />
              </div>
              <motion.div
                className="flex items-center gap-3"
                {...(still ?? progressRowMotion)}
              >
                <div className="h-4 w-[223px] overflow-clip rounded-md border border-text bg-white">
                  <motion.div
                    className="h-full rounded bg-green"
                    style={{ width: fill }}
                  />
                </div>
                <motion.p className="font-cousine text-[13px] font-bold whitespace-nowrap text-white">
                  {percent}
                </motion.p>
              </motion.div>
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
              {Array.from({ length: 4 }).map((_, i) => (
                <p key={i} className="text-[5px] text-[#999]">
                  - - - - - - - -
                </p>
              ))}
            </>
          }
        />
      </motion.div>
      <div className="w-full flex-1" />
    </div>
  )
}
