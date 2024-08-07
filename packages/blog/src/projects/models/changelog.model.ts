import { z } from "zod";
import { contentSchema } from "../../content/models/content.model.js";

export const changelogSchema = contentSchema.extend({
	matter: z.object({
		publishedAt: z.coerce.date(),
		version: z.string().transform((value) => `v${value}`),
	}),
});

export type ChangelogModel = z.infer<typeof changelogSchema>;
