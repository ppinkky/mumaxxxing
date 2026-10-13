import type { ReactNode } from 'react'

export default function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-svh w-full justify-center bg-bg">
      <div className="flex h-svh w-full max-w-[430px] flex-col overflow-y-auto bg-bg">
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
