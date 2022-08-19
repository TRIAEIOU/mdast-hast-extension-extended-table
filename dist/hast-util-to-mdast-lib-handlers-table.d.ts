/**
 * @type {Handle}
 * @param {Element} node
 */
export function table(h: import("hast-util-to-mdast/lib/types").H, node: Element): void | import("mdast").Content | import("mdast").Content[];
export type Handle = import('hast-util-to-mdast').Handle;
export type Element = import('hast-util-to-mdast/lib').Element;
export type MdastNode = import('hast-util-to-mdast/lib').MdastNode;
export type MdastTableContent = import('hast-util-to-mdast/lib/handlers/table').MdastTableContent;
export type MdastRowContent = import('hast-util-to-mdast/lib/handlers/table').MdastRowContent;
export type MdastPhrasingContent = import('hast-util-to-mdast/lib/handlers/table').MdastPhrasingContent;
export type Info = {
    align: Array<string | null>;
    headless: boolean;
};
