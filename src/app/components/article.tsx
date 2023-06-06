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
