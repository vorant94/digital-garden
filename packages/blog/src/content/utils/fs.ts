import path from "node:path";
import fg from "fast-glob";
import { read } from "to-vfile";
import type { VFile } from "vfile";
import { resolveContentPath } from "./path.js";

/**
 * content-specific replacement for fs.readdir with filter for only content files (excluding content assets files)
 * @returns list of content file paths relative to content root directory
 */
export async function readContentDir(prefix = ""): Promise<Array<string>> {
	const prefixAdjusted = `${prefix}/**/index.md`;

	return await fg(prefixAdjusted, {
		absolute: false,
		cwd: resolveContentPath(),
		/**
		 * need here in order to exclude nested content entries like changelogs
		 * from requests for parent only entries like projects
		 */
		deep: prefixAdjusted.split("/").length - 1,
	});
}

/**
 * content-specific replacement for fs.readFile resulting in VFile for easier integration with unified package
 * @param filepath path of the target file relative to the content root directory
 */
export async function readContentFile(filepath: string): Promise<VFile> {
	return await read(resolveContentPath(filepath));
}

export function getIdFromContentFilePath(filePath: string): string {
	if (path.basename(filePath) !== "index.md") {
		throw new Error(`Invalid content file path: ${filePath}`);
	}

	const filepathParts = filePath.split(path.sep);
	if (filepathParts.length < minValidContentFilePathLength) {
		throw new Error(`Invalid content file path: ${filePath}`);
	}

	return filepathParts.at(-2) as string;
}

const minValidContentFilePathLength = 3;
