import { Readable } from "node:stream";
import type { FastifyPluginCallback } from "fastify";
import { type IndexItem, SitemapStream, streamToPromise } from "sitemap";
import type { ContentModel } from "../../content/models/content.model.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { findPosts } from "../../posts/models/post.datasource.js";
import { getUniqueTags } from "../../posts/utils/get-unique-tags.js";
import { findChangelogs } from "../../projects/models/changelog.datasource.js";
import { findProjects } from "../../projects/models/project.datasource.js";

export const sitemapHandler: FastifyPluginCallback = (app, _, done) => {
	app.get("/sitemap.xml", async (_, reply) => {
		const sitemapStream = new SitemapStream({
			hostname: app.env.BASE_URL,
		});

		const [posts, projects, changelogs] = await Promise.all([
			findPosts(),
			findProjects(),
			findChangelogs(),
		]);
		const tags = getUniqueTags(posts);

		const links: Array<IndexItem> = [
			{ url: "/" },
			{ url: "/about" },
			{ url: "/posts" },
			{ url: "/projects" },
			...posts.map(contentToIndexItem),
			...tags.map(tagToIndexItem),
			...projects.map(contentToIndexItem),
			...changelogs.map(contentToIndexItem),
		];

		const sitemap = await streamToPromise(
			Readable.from(links).pipe(sitemapStream),
		);

		return reply
			.status(statusCode.ok)
			.type(contentType.xml)
			.send(sitemap.toString());
	});

	done();
};

function contentToIndexItem(content: ContentModel): IndexItem {
	return {
		url: content.path,
	};
}

function tagToIndexItem(tag: string): IndexItem {
	return {
		url: `/tags/${tag}`,
	};
}
