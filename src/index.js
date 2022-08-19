export { extendedTable as extendedTableSyntax, extendedTableHtml } from 'micromark-extension-extended-table';
export { extendedTableToMarkdown, extendedTableFromMarkdown } from 'mdast-util-extended-table';
export { table as extendedTableToHast } from './lib/mdast-util-to-hast-lib-handlers-table';
export { table as extendedTable } from './lib/hast-util-to-mdast-lib-handlers-table';
