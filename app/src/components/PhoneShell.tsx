import type { ReactNode } from 'react'

export default function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-svh w-full justify-center bg-bg">
      <div className="flex h-svh w-full max-w-[430px] flex-col overflow-y-auto bg-bg">
        {children}
      </div>
    </div>
  )
}
