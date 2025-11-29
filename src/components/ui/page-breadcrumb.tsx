'use client'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@components/ui/breadcrumb'
import { dashboardRoutes, type Route } from '@shared/config/routes'
import type { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface PageBreadcrumbProps {
	items?: {
		label: string
		href: string
		icon?: LucideIcon
	}[]
	children?: ReactNode
}

export function PageBreadcrumb({ items: propItems }: PageBreadcrumbProps) {
	const pathname = usePathname()

	const getBreadcrumbItems = () => {
		if (propItems) return propItems

		const segments = pathname.split('/').filter(Boolean)

		const items = segments.map((segment, index) => {
			const href = `/${segments.slice(0, index + 1).join('/')}`

			let label = segment.charAt(0).toUpperCase() + segment.slice(1)
			let icon: LucideIcon | undefined

			const findRouteData = (
				routes: Route[],
				path: string,
			): { title: string; icon?: LucideIcon } | undefined => {
				for (const route of routes) {
					if (route.link === path) return { icon: route.icon, title: route.title }

					if (route.subs) {
						const subData = findRouteData(route.subs as any, path)
						if (subData) return subData
					}
				}

				return undefined
			}

			const foundData = findRouteData(dashboardRoutes, href)
			if (foundData) {
				label = foundData.title
				icon = foundData.icon
			}

			// Special case for dashboard root to match "Home" or just "Dashboard"
			if (href === '/dashboard') label = 'Dashboard'

			return { href, icon, label }
		})

		return items
	}

	const items = getBreadcrumbItems()

	return (
		<div className="flex min-h-10 items-center justify-between border-b px-4 py-2">
			<Breadcrumb>
				<BreadcrumbList>
					{items.map((item, index) => {
						const isLastItem = index === items.length - 1
						const Icon = item.icon

						return isLastItem ? (
							<BreadcrumbItem key={item.href}>
								<BreadcrumbPage className="flex items-center gap-2">
									{Icon && <Icon className="size-4" />}
									{item.label}
								</BreadcrumbPage>
							</BreadcrumbItem>
						) : (
							<div className="flex items-center gap-2" key={item.href}>
								<BreadcrumbItem>
									<BreadcrumbLink className="flex items-center gap-2" href={item.href}>
										{Icon && <Icon className="size-4" />}
										{item.label}
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
							</div>
						)
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	)
}
