import { useEffect, useState, type ReactNode } from 'react'

/** Size of the Figma phone frame the screens are drawn against. */
const DESIGN_W = 430
const DESIGN_H = 860
const MAX_SCALE = 1.5

/**
 * The screens are pixel-matched to a phone frame, so on bigger viewports we
 * zoom the whole column up (never down) until it fits the shorter side.
 */
function getScale(): number {
  const fit = Math.min(
    window.innerWidth / DESIGN_W,
    window.innerHeight / DESIGN_H,
  )
  return Math.round(Math.min(MAX_SCALE, Math.max(1, fit)) * 100) / 100
}

function useViewport() {
  const read = () => ({ scale: getScale(), height: window.innerHeight })
  const [viewport, setViewport] = useState(read)
  useEffect(() => {
    const onResize = () => setViewport(read())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return viewport
}

export default function PhoneShell({ children }: { children: ReactNode }) {
  const { scale, height } = useViewport()

  return (
    <div className="flex min-h-svh w-full justify-center overflow-x-hidden bg-bg">
      <div
        className="flex min-h-svh w-full max-w-[430px] flex-col bg-bg"
        // lengths inside a zoomed box get scaled too, so divide the height back out
        style={scale > 1 ? { zoom: scale, minHeight: height / scale } : undefined}
      >
        {children}
        <footer className="sticky bottom-0 z-10 shrink-0 bg-[#4a4a4a] px-6 pb-6 pt-4 text-center text-xs text-white shadow-[0_-2px_8px_rgba(0,0,0,0.12)]">
          made irresponsibly by{' '}
          <a
            href="https://builds.pinkyarun.com/"
            target="_blank"
            rel="noreferrer"
            className="underline transition-opacity hover:opacity-75"
          >
            pinky
          </a>
          , play at your own risk.
        </footer>
      </div>
    </div>
  )
}
