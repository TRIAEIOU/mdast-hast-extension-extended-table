/**
 * @type {Handler}
 * @param {Table} node
 */
export function table(h: import("mdast-util-to-hast/lib").H, node: Table): import("hast").ElementContent | import("hast").ElementContent[] | null | undefined;
export type Table = import('mdast').Table;
export type TableCell = import('mdast').TableCell;
export type Element = import('hast').Element;
export type Handler = import('mdast-util-to-hast').Handler;
export type Content = import('mdast-util-to-hast/lib').Content;
