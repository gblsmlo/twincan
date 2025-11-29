import { Logo } from '@components/logo'
import Link from 'next/link'
import type { ReactNode } from 'react'
import AuthGuard from './auth-guard'

export function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<AuthGuard>
			<div className="grid min-h-svh lg:grid-cols-3">
				<div className="flex flex-col gap-4 p-6 md:p-10 lg:col-span-2">
					<div className="flex justify-center gap-2 md:justify-start">
						<Link href="/">
							<Logo />
						</Link>
					</div>
					<div className="flex flex-1 items-center justify-center">
						<div className="w-full max-w-sm">{children}</div>
					</div>
				</div>
				<div className="relative hidden rounded-2xl bg-muted lg:m-6 lg:block">
					<div className="relative hidden bg-muted lg:block" />
				</div>
			</div>
		</AuthGuard>
	)
}
