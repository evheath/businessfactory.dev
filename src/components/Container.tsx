import clsx from 'clsx'

export function Container({ children, className, ...props }: {
  className?: string,
  children: React.ReactNode | React.ReactNode[],
}) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}

      {...props}
    >{children}</div>
  )
}
