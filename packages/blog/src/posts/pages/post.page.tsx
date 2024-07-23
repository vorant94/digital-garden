import { format } from "date-fns";
import type { FastifyPluginAsync } from "fastify";
import type { VFile } from "vfile";
import { isErrnoException } from "../../filesystem/models/error.model.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { sendNotFound } from "../../http/utils/send-not-found.js";
import { Caption } from "../../ui/components/caption.js";
import { Text } from "../../ui/components/text.js";
import { ThemedImage } from "../../ui/components/themed-image.js";
import { Title } from "../../ui/components/title.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { cn } from "../../ui/utils/cn.js";
import { render } from "../../ui/utils/render.js";
import { RelatedPosts } from "../components/related-posts.js";
import { Tag } from "../components/tag.js";
import { isPostWithCover, type PostModel } from "../models/post.model.js";
import { findPosts, getPostFile } from "../models/post.table.js";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";

export const postPage: FastifyPluginAsync = async (app) => {
	app.get<{ Params: PostParams }>("/posts/:slug", async (request, reply) => {
		let postFile: VFile;
		try {
			postFile = await getPostFile(request.params.slug);
		} catch (e) {
			if (isErrnoException(e)) {
				return sendNotFound(reply);
			}

			throw e;
		}

		// TODO: make VFile generic, didn't work first time, because Vfile.data is type and not interface
		const post = postFile.data as PostModel;
		const relatedPosts = post.matter.related
			? await findPosts(post.matter.related)
			: [];

		return reply
			.status(statusCode.ok)
			.type(contentType.html)
			.send(
				render(
					<DefaultLayout
						title={post.matter.title}
						description={post.matter.description}
						image={isPostWithCover(post) ? post.matter.coverImage : undefined}
						type={"article"}
						currentPath={post.path}
						env={app.env}
					>
						<div className={cn("flex flex-col gap-6")}>
							{isPostWithCover(post) && (
								<div className={cn("self-center")}>
									<ThemedImage
										src={post.matter.coverImage}
										srcDark={post.matter.darkCoverImage}
										alt={post.matter.coverAlt}
									/>
								</div>
							)}

							<Title base="h1">{post.matter.title}</Title>

							<div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
								<div className="flex gap-2 items-center">
									<Caption>
										{format(post.matter.publishedAt, publishedAtFormat.full)}
									</Caption>
									<Caption>&#x2022;</Caption>
									<Caption>{post.readingTime.text}</Caption>
								</div>

								<menu className={cn("flex list-none m-0 p-0 gap-1")}>
									{post.matter.tags.map((tag) => (
										<li
											key={tag}
											className={cn("p-0 m-0")}
										>
											<Tag tag={tag} />
										</li>
									))}
								</menu>
							</div>

							<Text base="em">{post.matter.description}</Text>

							{post.matter.codeUrl && (
								<p>
									All the code mentioned in the post can be found in my{" "}
									<a
										href={post.matter.codeUrl}
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</p>
							)}
						</div>

						<article
							className={cn("prose dark:prose-invert prose-img:mx-auto mt-6")}
							dangerouslySetInnerHTML={{ __html: postFile.toString() }}
						/>

						{relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

						<script
							src="https://giscus.app/client.js"
							data-repo="vorant94/digital-garden"
							data-repo-id="R_kgDOKWcyPw"
							data-category="Posts"
							data-category-id="DIC_kwDOKWcyP84Cc9LF"
							data-mapping="specific"
							data-term={post.id}
							data-strict="0"
							data-reactions-enabled="1"
							data-emit-metadata="0"
							data-input-position="bottom"
							data-theme="preferred_color_scheme"
							data-lang="en"
							data-loading="lazy"
							crossOrigin="anonymous"
							async
						/>
					</DefaultLayout>,
				),
			);
	});
};

interface PostParams {
	slug: string;
}