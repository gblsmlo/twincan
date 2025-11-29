'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@components/ui/collapsible'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuItem as SidebarMenuSubItem,
	useSidebar,
} from '@components/ui/sidebar'
import { cn } from '@lib/utils'
import type { Route } from '@shared/config/routes'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function SidebarMainNav({ routes }: { routes: Route[] }) {
	const { state } = useSidebar()
	const isCollapsed = state === 'collapsed'
	const [openCollapsible, setOpenCollapsible] = useState<string | null>(null)

	return (
		<SidebarMenu>
			{routes.map((route) => {
				const isOpen = !isCollapsed && openCollapsible === route.id
				const hasSubRoutes = !!route.subs?.length
				const Icon = route.icon

				return (
					<SidebarMenuItem key={route.id}>
						{hasSubRoutes ? (
							<Collapsible
								className="w-full"
								onOpenChange={(open) => setOpenCollapsible(open ? route.id : null)}
								open={isOpen}
							>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton
										className={cn(
											'flex w-full items-center rounded-lg px-2 transition-colors',
											isOpen
												? 'bg-sidebar-muted text-foreground'
												: 'text-muted-foreground hover:bg-sidebar-muted hover:text-foreground',
											isCollapsed && 'justify-center',
										)}
									>
										{Icon && <Icon className="size-4" />}
										{!isCollapsed && <span className="ml-2 flex-1">{route.title}</span>}
										{!isCollapsed && hasSubRoutes && (
											<span className="ml-auto">
												{isOpen ? (
													<ChevronUp className="size-4" />
												) : (
													<ChevronDown className="size-4" />
												)}
											</span>
										)}
									</SidebarMenuButton>
								</CollapsibleTrigger>

								{!isCollapsed && (
									<CollapsibleContent>
										<SidebarMenuSub className="my-1 ml-3.5">
											{route.subs?.map((subRoute) => (
												<SidebarMenuSubItem
													className="h-auto"
													key={`${route.id}-${subRoute.title}`}
												>
													<SidebarMenuSubButton asChild>
														<Link
															className="flex items-center rounded-md px-4 py-1.5 font-medium text-muted-foreground text-sm hover:bg-sidebar-muted hover:text-foreground"
															href={subRoute.link}
															prefetch={true}
														>
															{subRoute.title}
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								)}
							</Collapsible>
						) : (
							<SidebarMenuButton asChild tooltip={route.title}>
								<Link
									className={cn(
										'flex items-center rounded-lg px-2 text-muted-foreground transition-colors hover:bg-sidebar-muted hover:text-foreground',
										isCollapsed && 'justify-center',
									)}
									href={route.link}
									prefetch={true}
								>
									{Icon && <Icon className="size-4" />}
									{!isCollapsed && <span className="ml-2">{route.title}</span>}
								</Link>
							</SidebarMenuButton>
						)}
					</SidebarMenuItem>
				)
			})}
		</SidebarMenu>
	)
}
