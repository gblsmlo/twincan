import {
	Activity,
	DollarSign,
	Home,
	LinkIcon,
	type LucideIcon,
	Package2,
	Percent,
	PieChart,
	Settings,
	ShoppingBag,
	Sparkles,
	Store,
	TrendingUp,
	Users,
} from 'lucide-react'

export type SubRoute = {
	title: string
	link: string
	icon?: LucideIcon
}

export type Route = {
	id: string
	title: string
	icon?: LucideIcon
	link: string
	subs?: SubRoute[]
}

export const dashboardRoutes: Route[] = [
	{
		icon: Home,
		id: 'home',
		link: '/dashboard',
		title: 'Home',
	},
	{
		icon: Package2,
		id: 'products',
		link: '/dashboard/products',
		subs: [
			{
				icon: Package2,
				link: '/dashboard/products/catalogue',
				title: 'Catalogue',
			},
			{
				icon: LinkIcon,
				link: '/dashboard/products/checkout-links',
				title: 'Checkout Links',
			},
			{
				icon: Percent,
				link: '/dashboard/products/discounts',
				title: 'Discounts',
			},
		],
		title: 'Products',
	},
	{
		icon: PieChart,
		id: 'usage-billing',
		link: '/dashboard/usage-billing',
		subs: [
			{
				icon: PieChart,
				link: '/dashboard/usage-billing/meters',
				title: 'Meters',
			},
			{
				icon: Activity,
				link: '/dashboard/usage-billing/events',
				title: 'Events',
			},
		],
		title: 'Usage Billing',
	},
	{
		icon: Sparkles,
		id: 'benefits',
		link: '/dashboard/benefits',
		title: 'Benefits',
	},
	{
		icon: Users,
		id: 'customers',
		link: '/dashboard/customers',
		title: 'Customers',
	},
	{
		icon: ShoppingBag,
		id: 'sales',
		link: '/dashboard/sales',
		subs: [
			{
				icon: ShoppingBag,
				link: '/dashboard/sales/orders',
				title: 'Orders',
			},
			{
				icon: ShoppingBag,
				link: '/dashboard/sales/subscriptions',
				title: 'Subscriptions',
			},
		],
		title: 'Sales',
	},
	{
		icon: Store,
		id: 'storefront',
		link: '/dashboard/storefront',
		title: 'Storefront',
	},
	{
		icon: TrendingUp,
		id: 'analytics',
		link: '/dashboard/analytics',
		title: 'Analytics',
	},
	{
		icon: DollarSign,
		id: 'finance',
		link: '/dashboard/finance',
		subs: [
			{ link: '/dashboard/finance/incoming', title: 'Incoming' },
			{ link: '/dashboard/finance/outgoing', title: 'Outgoing' },
			{ link: '/dashboard/finance/payout-account', title: 'Payout Account' },
		],
		title: 'Finance',
	},
	{
		icon: Settings,
		id: 'settings',
		link: '/dashboard/settings',
		subs: [
			{ link: '/dashboard/settings/account/preferences', title: 'Preferences' },
			{ link: '/dashboard/settings/account/profile', title: 'Profile' },
		],
		title: 'Settings',
	},
]
