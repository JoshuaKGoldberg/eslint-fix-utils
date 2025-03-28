// 👋 Hi! This is an optional config file for create-typescript-app (CTA).
// Repos created with CTA or its underlying framework Bingo don't use one by default.
// A CTA config file allows automatic updates to the repo that preserve customizations.
// For more information, see Bingo's docs:
//   https://www.create.bingo/execution#transition-mode
// Eventually these values should be inferable, making this config file unnecessary:
//   https://github.com/JoshuaKGoldberg/bingo/issues/128
import {
	blockCodecov,
	blockCTATransitions,
	blockESLint,
	blockMain,
	blockPackageJson,
	blockTSup,
	blockTypeScript,
	createConfig,
} from "create-typescript-app";

export default createConfig({
	refinements: {
		addons: [
			blockCodecov({
				env: {
					CODECOV_TOKEN: "${{ secrets.CODECOV_TOKEN }}",
				},
			}),
			blockESLint({
				rules: [
					{
						entries: { "n/no-missing-import": "off" },
					},
				],
			}),
			blockPackageJson({
				properties: {
					exports: {
						".": {
							types: {
								import: "./lib/index.d.ts",
								require: "./lib/index.d.cts",
							},

							// These must come after types
							import: "./lib/index.js",
							require: "./lib/index.cjs",
						},
					},
					main: "lib/index.cjs",
					module: "lib/index.js",
					types: "lib/index.d.ts",
				},
			}),
			blockTSup({
				properties: {
					bundle: undefined,
					entry: ["src/index.ts"],
					format: ["cjs", "esm"],
				},
				runInCI: ["node lib/index.js"],
			}),
			blockTypeScript({
				compilerOptions: {
					module: "esnext",
					moduleResolution: "bundler",
				},
			}),
		],
		blocks: {
			add: [blockCTATransitions],
			exclude: [blockMain],
		},
	},
});
