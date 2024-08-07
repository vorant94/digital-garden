import { format } from "date-fns";
import type { FastifyPluginCallback } from "fastify";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { ArchiveListItem } from "../../ui/components/archive-list-item.js";
import { ArchiveList } from "../../ui/components/archive-list.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { render } from "../../ui/utils/render.js";
import { findPosts } from "../models/post.datasource.js";

export const tagHandler: FastifyPluginCallback = (app, _, done) => {
	// biome-ignore lint/style/useNamingConvention: 3-rd party type
	app.get<{ Params: { tag: string } }>("/tags/:tag", async (request, reply) => {
		const allPosts = await findPosts();

		const postsByTag = allPosts.filter((post) =>
			post.matter.tags.includes(request.params.tag),
		);

		return reply
			.status(statusCode.ok)
			.type(contentType.html)
			.send(
				render(
					<DefaultLayout
						title={`${request.params.tag} posts`}
						currentPath={`/tags/${request.params.tag}`}
						env={app.env}
					>
						<ArchiveList title={`#${request.params.tag}`}>
							{postsByTag.map((post) => (
								<ArchiveListItem
									key={post.id}
									left={post.matter.title}
									right={format(
										post.matter.publishedAt,
										publishedAtFormat.short,
									)}
									href={post.path}
								/>
							))}
						</ArchiveList>
					</DefaultLayout>,
				),
			);
	});

	done();
};
