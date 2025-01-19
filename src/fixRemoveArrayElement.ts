import { Rule } from "eslint";

import {
	ArrayElement,
	ArrayElementsOrParent,
	removeArrayElement,
} from "./removeArrayElement";

export function fixRemoveArrayElement(
	context: Rule.RuleContext,
	elementOrIndex: ArrayElement | number,
	parentOrElements: ArrayElementsOrParent,
) {
	return (fixer: Rule.RuleFixer) =>
		removeArrayElement(context, fixer, elementOrIndex, parentOrElements);
}
