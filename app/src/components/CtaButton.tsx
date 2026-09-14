import type { ButtonHTMLAttributes } from 'react'

export default function CtaButton({
  children,
  className = '',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`w-full shrink-0 rounded-2xl border-3 border-ink bg-cta p-4 text-base font-bold tracking-wide text-white uppercase
        shadow-[0_4px_0_0_var(--color-ink)] transition-all duration-100 outline-none
        hover:not-disabled:bg-pink hover:not-disabled:-translate-y-[1px] hover:not-disabled:shadow-[0_5px_0_0_var(--color-ink)]
        active:not-disabled:translate-y-[4px] active:not-disabled:shadow-[0_0_0_0_var(--color-ink)]
        focus-visible:ring-3 focus-visible:ring-purple/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg
        disabled:cursor-not-allowed disabled:border-[#9a92a8] disabled:bg-[#e3c7d6] disabled:text-[#f2eaf0] disabled:shadow-[0_4px_0_0_#9a92a8] ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
