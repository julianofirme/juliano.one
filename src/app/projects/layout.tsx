export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-zinc-900 pb-10">
			{children}
		</div>
	);
}
