import { Rule } from "eslint";
import * as ESTree from "estree";

export type ObjectProperty = ESTree.Property | ESTree.SpreadElement;

export function* removeObjectProperty(
	context: Rule.RuleContext,
	fixer: Rule.RuleFixer,
	property: ObjectProperty,
) {
	const tokenAfter = context.sourceCode.getTokenAfter(property);
	const tokenBefore = context.sourceCode.getTokenBefore(property);

	// If this is not the only entry, then the line above this one
	// will become the last line, and should not have a trailing comma.
	if (tokenAfter?.value !== "," && tokenBefore?.value === ",") {
		yield fixer.remove(tokenBefore);
	}

	yield fixer.remove(property);

	// If this is not the last entry, then we need to remove the comma from this line.
	if (tokenAfter?.value === ",") {
		yield fixer.remove(tokenAfter);
	}
}
