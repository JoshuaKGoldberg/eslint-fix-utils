import { Rule } from "eslint";

import {
	ObjectProperty,
	removeObjectProperty,
} from "./removeObjectProperty.js";

export function fixRemoveObjectProperty(
	context: Rule.RuleContext,
	property: ObjectProperty,
) {
	return (fixer: Rule.RuleFixer) =>
		removeObjectProperty(context, fixer, property);
}
