import {DiffAndAstStringOptimizeStrategy} from "../../../src/util/whitespace/DiffAndAstStringOptimizeStrategy";
import {CustomReporter} from "../testUtils";

const assert = require("assert");
const fs = require("fs");
const rootDir = "./test/util/whitespace/diffandastresources/";

const EOL_REGEXP = /\r?\n/g;

describe("DiffAndAstStringOptimizeStrategy", () => {
	const aCommonLogs = [
		"trace: DIFF: Found 125 diffs",
		"trace: DIFF Added 103:  '[\\t]'",
		"trace: DIFF Skipped 104:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 118:  '[\\t]'",
		"trace: DIFF Skipped 119:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 144:  '[\\t]'",
		"trace: DIFF Skipped 145:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 173:  '[\\t]'",
		"trace: DIFF Skipped 174:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 203:  '[\\t]'",
		"trace: DIFF Skipped 204:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 221:  '[\\t]'",
		"trace: DIFF Skipped 222:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 243:  '[\\t]'",
		"trace: DIFF Skipped 244:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 262:  '[\\t]'",
		"trace: DIFF Skipped 263:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 280:  '[\\t]'",
		"trace: DIFF Skipped 281:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 303:  '[\\t]'",
		"trace: DIFF Skipped 304:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 332:  '[\\t]'",
		"trace: DIFF Skipped 333:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 358:  '[\\t]'",
		"trace: DIFF Skipped 359:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 389:  '[\\t]'",
		"trace: DIFF Skipped 390:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 422:  '[\\t]'",
		"trace: DIFF Skipped 423:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 456:  '[\\t]'",
		"trace: DIFF Skipped 457:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 485:  '[\\t]'",
		"trace: DIFF Skipped 486:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 515:  '[\\t]'",
		"trace: DIFF Skipped 516:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 540:  '[\\t]'",
		"trace: DIFF Skipped 541:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 578:  '[\\t]'",
		"trace: DIFF Skipped 579:  '[ ][ ][ ][ ]'",
		"trace: DIFF Added 651:  '[ ]'",
	];

	const commonLogs = (begin, end) => {
		return [
			`trace: Performing DiffStringOptimizeStrategy ${begin} and ${end}`,
		].concat(aCommonLogs);
	};

	[
		{
			baseName: "batch",
			fileEOL: "\r\n",
			logs: [
				...commonLogs(76171, 76259),
				"trace: DIFF Skipped 653:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 661:  '[ ]'",
				"trace: DIFF Skipped 662:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 683:  '[ ]'",
				"trace: DIFF Skipped 684:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 702:  '[ ]'",
				"trace: DIFF Skipped 703:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 722:  '[ ]'",
				"trace: DIFF Skipped 723:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 732:  '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]'",
				"trace: DIFF Skipped 745:  '[\\t]'",
				"trace: DIFF Added 756:  '[ ]'",
				"trace: DIFF Skipped 757:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 765:  '[ ]'",
				"trace: DIFF Skipped 766:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 770:  '[ ]'",
				"trace: DIFF Skipped 771:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 775:  '[ ]'",
				"trace: DIFF Skipped 776:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 788:  '[ ]'",
				"trace: DIFF Skipped 789:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 797:  '[ ]'",
				"trace: DIFF Skipped 798:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 811:  '[ ]'",
				"trace: DIFF Skipped 812:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 829:  '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]'",
				"trace: DIFF Skipped 842:  '[\\t]'",
				"trace: DIFF Added 858:  '[ ]'",
				"trace: DIFF Skipped 859:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 870:  '[ ]'",
				"trace: DIFF Skipped 871:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 883:  '[ ]'",
				"trace: DIFF Skipped 884:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 891:  '[ ]'",
				"trace: DIFF Skipped 892:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 906:  '[ ]'",
				"trace: DIFF Skipped 907:  '[\\r][\\n][\\t]'",
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 611",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][\\t]'",
				"trace: AST: add '[ ]'",
				"trace: AST: index: 916",
				"trace: AST: whitespace diff for succeeding element",
				"trace: AST: remove '[\\r][\\n]'",
				"trace: AST: add '[]'",
				"trace: AST: index: 921",
			],
		},
		{
			baseName: "list",
			fileEOL: "\r\n",
			logs: [
				...commonLogs(1363, 1476),
				"trace: DIFF Skipped 653:  '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: DIFF Added 661:  '[ ]'",
				"trace: DIFF Skipped 662:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 683:  '[ ]'",
				"trace: DIFF Skipped 684:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 702:  '[ ]'",
				"trace: DIFF Skipped 703:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 722:  '[ ]'",
				"trace: DIFF Skipped 723:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 732:  '[\\t][\\t]'",
				"trace: DIFF Skipped 734:  '[\\t]'",
				"trace: DIFF Added 745:  '[ ]'",
				"trace: DIFF Skipped 746:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 754:  '[ ]'",
				"trace: DIFF Skipped 755:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 759:  '[ ]'",
				"trace: DIFF Skipped 760:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 764:  '[ ]'",
				"trace: DIFF Skipped 765:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 777:  '[ ]'",
				"trace: DIFF Skipped 778:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 786:  '[ ]'",
				"trace: DIFF Skipped 787:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 800:  '[ ]'",
				"trace: DIFF Skipped 801:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 818:  '[\\t][\\t]'",
				"trace: DIFF Skipped 820:  '[\\t]'",
				"trace: DIFF Added 836:  '[ ]'",
				"trace: DIFF Skipped 837:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 848:  '[ ]'",
				"trace: DIFF Skipped 849:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 861:  '[ ]'",
				"trace: DIFF Skipped 862:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 869:  '[ ]'",
				"trace: DIFF Skipped 870:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 884:  '[ ]'",
				"trace: DIFF Skipped 885:  '[\\r][\\n][\\t]'",
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 611",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][\\t]'",
				"trace: AST: add '[ ]'",
				"trace: AST: index: 894",
				"trace: AST: whitespace diff for succeeding element",
				"trace: AST: remove '[\\r][\\n]'",
				"trace: AST: add '[]'",
				"trace: AST: index: 899",
			],
		},
		{
			baseName: "actions",
			fileEOL: "\r\n",
			logs: [
				"trace: Performing DiffStringOptimizeStrategy 496 and 576",
				"trace: DIFF: Found 33 diffs",
				"trace: DIFF Added 576:  '[\\r][\\n]'",
				"trace: Performing AstStringOptimizeStrategy",
			],
		},
		{
			baseName: "abap",
			fileEOL: "\r\n",
			logs: [
				"trace: Performing DiffStringOptimizeStrategy 408 and 428",
				"trace: DIFF: Found 14 diffs",
				"trace: DIFF Added 16:  '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: DIFF Added 74:  '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: DIFF Skipped 80:  '[ ]'",
				"trace: DIFF Added 111:  '[\\r][\\n]'",
				"trace: DIFF Added 152:  '[ ]'",
				"trace: DIFF Added 442:  '[\\r][\\n]'",
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[ ]'",
				"trace: AST: add '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: index: 114",
				"trace: AST: whitespace diff for succeeding element",
				"trace: AST: remove '[\\r][\\n]'",
				"trace: AST: add '[]'",
				"trace: AST: index: 111",
				"trace: AST: whitespace diff for succeeding element",
				"trace: AST: remove '[]'",
				"trace: AST: add '[\\r][\\n]'",
				"trace: AST: index: 141",
			],
		},
		{
			baseName: "endless",
			fileEOL: "\r\n",
			logs: [
				"trace: Performing DiffStringOptimizeStrategy 189 and 93",
				"trace: DIFF: Found 22 diffs",
				"trace: DIFF Added 48:  '[ ]'",
				"trace: DIFF Added 81:  '[\\r][\\n]'",
				"trace: DIFF Added 93:  '[\\r][\\n]'",
				"trace: DIFF Added 98:  '[\\r][\\n]'",
				"trace: Performing AstStringOptimizeStrategy",
			],
		},
		{
			baseName: "structure",
			fileEOL: "\r\n",
			description:
				"structural change by wrapping everything inside a sap.ui.define",
			logs: [
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 35",
			],
		},
		{
			baseName: "structure2",
			fileEOL: "\r\n",
			description:
				"structural change by wrapping everything inside a sap.ui.define",
			logs: [
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 35",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[]'",
				"trace: AST: add '[\\r][\\n]'",
				"trace: AST: index: -1",
			],
		},
		{
			baseName: "newlines",
			fileEOL: "\r\n",
			description: "new lines",
			logs: [
				"trace: Performing DiffStringOptimizeStrategy 2226 and 2407",
				"trace: DIFF: Found 40 diffs",
				"trace: DIFF Added 17:  '[\\t]'",
				"trace: DIFF Skipped 18:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 44:  '[\\t]'",
				"trace: DIFF Skipped 45:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 62:  '[\\t]'",
				"trace: DIFF Skipped 63:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 88:  '[\\t]'",
				"trace: DIFF Skipped 89:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 117:  '[\\t]'",
				"trace: DIFF Skipped 118:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 133:  '[\\t]'",
				"trace: DIFF Skipped 134:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 162:  '[ ]'",
				"trace: DIFF Added 232:  '[\\t]'",
				"trace: DIFF Skipped 233:  '[ ][ ][ ][ ]'",
				"trace: Performing AstStringOptimizeStrategy",
			],
		},
		{
			baseName: "multiline",
			fileEOL: "\r\n",
			description: "multiple lines",
			logs: [
				"trace: Performing DiffStringOptimizeStrategy 13025 and 13082",
				"trace: DIFF: Found 55 diffs",
				"trace: DIFF Added 43:  '[\\t]'",
				"trace: DIFF Skipped 44:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 79:  '[\\t]'",
				"trace: DIFF Skipped 80:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 130:  '[\\t]'",
				"trace: DIFF Skipped 131:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 167:  '[\\t]'",
				"trace: DIFF Skipped 168:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 202:  '[\\t]'",
				"trace: DIFF Skipped 203:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 234:  '[\\t]'",
				"trace: DIFF Skipped 235:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 434:  '[\\t]'",
				"trace: DIFF Skipped 435:  '[ ][ ][ ][ ]'",
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 262",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 301",
			],
		},
		{
			baseName: "multilineprop",
			fileEOL: "\r\n",
			description: "multiple lines in property",
			logs: [
				"trace: Performing DiffStringOptimizeStrategy 10125 and 10441",
				"trace: DIFF: Found 124 diffs",
				"trace: DIFF Added 17:  '[\\t]'",
				"trace: DIFF Skipped 18:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 70:  '[\\t]'",
				"trace: DIFF Skipped 71:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 97:  '[\\t]'",
				"trace: DIFF Skipped 98:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 130:  '[\\t]'",
				"trace: DIFF Skipped 131:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 155:  '[\\t]'",
				"trace: DIFF Skipped 156:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 171:  '[\\t]'",
				"trace: DIFF Skipped 172:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 205:  '[\\t]'",
				"trace: DIFF Skipped 206:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 249:  '[\\t]'",
				"trace: DIFF Skipped 250:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 274:  '[\\t]'",
				"trace: DIFF Skipped 275:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 307:  '[\\t]'",
				"trace: DIFF Skipped 308:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 336:  '[\\t]'",
				"trace: DIFF Skipped 337:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 373:  '[\\t]'",
				"trace: DIFF Skipped 374:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 396:  '[\\t]'",
				"trace: DIFF Skipped 397:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 438:  '[\\t]'",
				"trace: DIFF Skipped 439:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 579:  '[ ]'",
				"trace: DIFF Skipped 581:  '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: DIFF Added 596:  '[ ]'",
				"trace: DIFF Skipped 597:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 603:  '[ ]'",
				"trace: DIFF Skipped 604:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 614:  '[ ]'",
				"trace: DIFF Skipped 615:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 627:  '[ ]'",
				"trace: DIFF Skipped 628:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 633:  '[ ]'",
				"trace: DIFF Skipped 634:  '[\\r][\\n][\\t]'",
				"trace: DIFF Skipped 646:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 708:  '[ ]'",
				"trace: DIFF Skipped 709:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 724:  '[ ]'",
				"trace: DIFF Skipped 725:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 736:  '[ ]'",
				"trace: DIFF Skipped 737:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 747:  '[ ]'",
				"trace: DIFF Skipped 748:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 760:  '[ ]'",
				"trace: DIFF Skipped 761:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 777:  '[ ]'",
				"trace: DIFF Skipped 778:  '[\\r][\\n][\\t]'",
				"trace: DIFF Added 835:  '[\\t]'",
				"trace: DIFF Skipped 836:  '[ ][ ][ ][ ]'",
				"trace: DIFF Added 10363:  '[\\r][\\n]'",
				"trace: DIFF Added 10368:  '[\\r][\\n]'",
				"trace: Performing AstStringOptimizeStrategy",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 475",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 503",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][ ][ ][ ][ ]'",
				"trace: AST: add '[\\r][\\n][\\t]'",
				"trace: AST: index: 536",
				"trace: AST: whitespace diff for succeeding element",
				"trace: AST: remove '[\\r][\\n]'",
				"trace: AST: add '[\\r][\\n][\\r][\\n]'",
				"trace: AST: index: 566",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][\\t]'",
				"trace: AST: add '[ ]'",
				"trace: AST: index: 680",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][\\t]'",
				"trace: AST: add '[ ]'",
				"trace: AST: index: 792",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][\\t]'",
				"trace: AST: add '[ ]'",
				"trace: AST: index: 807",
				"trace: AST: whitespace diff for preceding element",
				"trace: AST: remove '[\\r][\\n][\\t]'",
				"trace: AST: add '[ ]'",
				"trace: AST: index: 817",
				"trace: AST: whitespace diff for succeeding element",
				"trace: AST: remove '[\\r][\\n]'",
				"trace: AST: add '[]'",
				"trace: AST: index: 828",
			],
		},
	].forEach(oTestConfig => {
		it(
			"Should optimize " +
				oTestConfig.baseName +
				(oTestConfig.description
					? " (" + oTestConfig.description + ")"
					: ""),
			async () => {
				let source = fs.readFileSync(
					rootDir + oTestConfig.baseName + ".source.js",
					"UTF-8"
				);
				let modified = fs.readFileSync(
					rootDir + oTestConfig.baseName + ".modified.js",
					"UTF-8"
				);
				let expected = fs.readFileSync(
					rootDir + oTestConfig.baseName + ".expected.js",
					"UTF-8"
				);

				if (oTestConfig.fileEOL) {
					source = source.replace(EOL_REGEXP, oTestConfig.fileEOL);
					modified = modified.replace(
						EOL_REGEXP,
						oTestConfig.fileEOL
					);
					expected = expected.replace(
						EOL_REGEXP,
						oTestConfig.fileEOL
					);
				}

				const reports = [];
				const diffAndAstStringOptimizeStrategy =
					new DiffAndAstStringOptimizeStrategy(
						new CustomReporter(reports, "trace")
					);
				const sOptimized =
					await diffAndAstStringOptimizeStrategy.optimizeString(
						source,
						modified
					);

				assert.deepStrictEqual(
					sOptimized,
					expected,
					"string should be optimized"
				);
				assert.deepStrictEqual(
					reports,
					oTestConfig.logs,
					"logs should match"
				);
			}
		);
	});
});
