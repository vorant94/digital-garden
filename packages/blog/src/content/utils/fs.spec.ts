import { describe, expect, it } from "vitest";
import { getIdFromContentFilePath } from "./fs.js";

describe("getIdFromContentFilePath", () => {
	it("should return the slug from the file path", () => {
		const input =
			"posts/branding-an-angular-app-with-docker-volumes-and-css3-variables/index.md";
		const expected =
			"branding-an-angular-app-with-docker-volumes-and-css3-variables";

		const actual = getIdFromContentFilePath(input);

		expect(actual).toEqual(expected);
	});

	it("should throw an error if the file path is invalid", () => {
		const input =
			"posts/branding-an-angular-app-with-docker-volumes-and-css3-variables";

		expect(() => getIdFromContentFilePath(input)).toThrowError(
			`Invalid content file path: ${input}`,
		);
	});

	it("should throw an error if the slug cannot be extracted", () => {
		const input = "posts/index.md";

		expect(() => getIdFromContentFilePath(input)).toThrowError(
			`Invalid content file path: ${input}`,
		);
	});
});
