import { getSessionAction } from '@/modules/auth'

export default async function Page() {
	const session = await getSessionAction()
	return (
		<div>
			<h1>Dashboard</h1>
			<p>{session?.user.name ? `${session.user.name} logado` : 'Não logado'}</p>
		</div>
	)
}
