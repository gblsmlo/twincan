import {
	Activity,
	Bug,
	DollarSign,
	FileText,
	Folder,
	HelpCircle,
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
	User,
	Users,
} from 'lucide-react'

export type SubRoute = {
	title: string
	link: string
	icon?: LucideIcon
}

export type Route = {
	icon?: LucideIcon
	label: string
	link: string
	subs?: SubRoute[]
}

export const dashboardRoutes: Route[] = [
	{
		icon: Home,
		label: 'Home',
		link: '/dashboard',
	},
	{
		icon: Package2,
		label: 'Products',
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
	},
	{
		icon: PieChart,
		label: 'Usage Billing',
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
	},
	{
		icon: Sparkles,
		label: 'Benefits',
		link: '/dashboard/benefits',
	},
	{
		icon: Users,
		label: 'Customers',
		link: '/dashboard/customers',
	},
	{
		icon: ShoppingBag,
		label: 'Sales',
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
	},
	{
		icon: Store,
		label: 'Storefront',
		link: '/dashboard/storefront',
	},
	{
		icon: TrendingUp,
		label: 'Analytics',
		link: '/dashboard/analytics',
	},
	{
		icon: DollarSign,
		label: 'Finance',
		link: '/dashboard/finance',
	},
	{
		icon: Settings,
		label: 'Settissngs',
		link: '/dashboard/settings',
	},
]

export const documentsRoutes: Route[] = [
	{
		icon: FileText,
		label: 'Files',
		link: '/dashboard/docs/files',
	},
	{
		icon: PieChart,
		label: 'Reports',
		link: '/dashboard/docs/reports',
	},
	{
		icon: FileText,
		label: 'Resources',
		link: '/dashboard/docs/resources',
	},
]

export const mainRoutes: Route[] = [
	{
		icon: Home,
		label: 'Dashboard',
		link: '/dashboard',
	},
	{
		icon: PieChart,
		label: 'Analytics',
		link: '/dashboard/analytics',
	},
	{
		icon: Folder,
		label: 'Projects',
		link: '/dashboard/projects',
	},
	{
		icon: Users,
		label: 'Team',
		link: '/dashboard/team',
	},
]

export const secondaryRoutes: Route[] = [
	{
		icon: Settings,
		label: 'Settings',
		link: '/dashboard/settings',
	},
	{
		icon: HelpCircle,
		label: 'Help & Support',
		link: '/dashboard/help',
	},
	{
		icon: Bug,
		label: 'Bugs',
		link: '/dashboard/bugs',
	},
]

export const userRoutes: Route[] = [
	{
		icon: User,
		label: 'Profile',
		link: '/dashboard/settings/account/profile',
	},
	{
		icon: Settings,
		label: 'Preferences',
		link: '/dashboard/settings/account/preferences',
	},
]
