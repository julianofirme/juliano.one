import Link from "next/link";

type Props = {
	project: Repository;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link target="_blank" href={`${project.html_url}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="-mt-4 mb-4 text-xs duration-1000 text-zinc-400 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
							<time dateTime={new Date(project.updated_at).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.updated_at),
								)}
							</time>
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.name}
				</h2>
				<p className="z-20 mt-2 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-200 group-hover:text-zinc-200">
					View on Github {'->'}
				</p>
			</article>
		</Link>
	);
};
