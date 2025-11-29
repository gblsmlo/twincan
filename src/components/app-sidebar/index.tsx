'use client'

import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from '@components/ui/sidebar'
import { cn } from '@lib/utils'
import { dashboardRoutes } from '@shared/config/routes'
import Link from 'next/link'
import { Logo } from '../logo'
import { SidebarMainNav } from './sidebar-main-nav'

const sampleNotifications = [
	{
		avatar: '/avatars/01.png',
		fallback: 'OM',
		id: '1',
		text: 'New order received.',
		time: '10m ago',
	},
	{
		avatar: '/avatars/02.png',
		fallback: 'JL',
		id: '2',
		text: 'Server upgrade completed.',
		time: '1h ago',
	},
	{
		avatar: '/avatars/03.png',
		fallback: 'HH',
		id: '3',
		text: 'New user signed up.',
		time: '2h ago',
	},
]

const teams = [
	{ id: '1', logo: Logo, name: 'Alpha Inc.', plan: 'Free' },
	{ id: '2', logo: Logo, name: 'Beta Corp.', plan: 'Free' },
	{ id: '3', logo: Logo, name: 'Gamma Tech', plan: 'Free' },
]

export function AppSidebar() {
	const { state } = useSidebar()
	const isCollapsed = state === 'collapsed'

	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader
				className={cn(
					'flex md:pt-3.5',
					isCollapsed
						? 'flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start'
						: 'flex-row items-center justify-between',
				)}
			>
				<Link className="flex items-center gap-2" href="/">
					<Logo className="h-8 w-8" />
					{!isCollapsed && (
						<span className="font-semibold text-foreground dark:text-white">Acme</span>
					)}
				</Link>

				{/* <motion.div
					animate={{ opacity: 1 }}
					className={cn(
						'flex items-center gap-2',
						isCollapsed ? 'flex-row md:flex-col-reverse' : 'flex-row',
					)}
					initial={{ opacity: 0 }}
					key={isCollapsed ? 'header-collapsed' : 'header-expanded'}
					transition={{ duration: 0.8 }}
				>
					<NotificationsPopover notifications={sampleNotifications} />
					<SidebarTrigger />
				</motion.div> */}
			</SidebarHeader>
			<SidebarContent className="gap-4 px-2 py-4">
				<SidebarMainNav routes={dashboardRoutes} />
			</SidebarContent>
			{/* <SidebarFooter className="px-2">
				<TeamSwitcher teams={teams} />
			</SidebarFooter> */}
		</Sidebar>
	)
}
