/**
 * FORKED FROM hast-util-to-mdast/lib/handlers/table.js
 * Changes marked // TRIAEIOU
 */
/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast-util-to-hast').Handler} Handler
 * @typedef {import('mdast-util-to-hast/lib').Content} Content
 */
import { pointStart, pointEnd } from 'unist-util-position';
import { wrap } from 'mdast-util-to-hast/lib/wrap.js';
import { all } from 'mdast-util-to-hast/lib/traverse.js';
/**
 * @type {Handler}
 * @param {Table} node
 */
export function table(h, node) {
    const rows = node.children;
    let index = -1;
    const align = node.align || [];
    /** @type {Array<Element>} */
    const result = [];
    let hasHeader = false; // TRIAEIOU
    while (++index < rows.length) {
        const row = rows[index].children;
        // TRIAEIOU - BEGIN
        // @ts-ignore - FIXME: How to retype w/ JSDoc
        const name = rows[index].type === 'tableHeaderRow' ? 'th' : 'td';
        if (index === 0) {
            hasHeader = name === 'th';
        }
        // TRIAEIOU - END
        /** @type {Array<Content>} */
        const out = [];
        let cellIndex = -1;
        const length = node.align ? align.length : row.length;
        while (++cellIndex < length) {
            const cell = row[cellIndex];
            out.push(h(cell, name, { align: align[cellIndex] }, cell ? all(h, cell) : []));
        }
        result[index] = h(rows[index], 'tr', wrap(out, true));
    }
    return h(node, 'table', 
    // TRIAEIOU - BEGIN
    hasHeader
        ? wrap(
        // TRIAEIOU - END
        [h(result[0].position, 'thead', wrap([result[0]], true))].concat(result[1]
            ? h({
                start: pointStart(result[1]),
                end: pointEnd(result[result.length - 1])
            }, 'tbody', wrap(result.slice(1), true))
            : []), true)
        // TRIAEIOU - BEGIN
        : wrap([
            h({
                start: pointStart(result[0]),
                end: pointEnd(result[result.length - 1])
            }, 'tbody', result)
        ])
    // TRIAEIOU - END
    );
}
