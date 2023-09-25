/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  bracketSameLine: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
