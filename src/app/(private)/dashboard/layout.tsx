import { AppSidebar } from '@components/app-sidebar'
import { PageBreadcrumb } from '@components/ui/page-breadcrumb'
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar'
import { AuthPrivate } from '@modules/auth'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<AuthPrivate>
			<SidebarProvider>
				<section className="relative flex h-screen w-full">
					<AppSidebar />
					<SidebarInset className="flex flex-col">
						<PageBreadcrumb />
						{children}
					</SidebarInset>
				</section>
			</SidebarProvider>
		</AuthPrivate>
	)
}
