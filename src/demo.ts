import { extendedTableSyntax, extendedTableHtml, extendedTableToMarkdown, extendedTableFromMarkdown, extendedTableToHast, extendedTable } from '.';
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toHast as mdastToHast } from 'mdast-util-to-hast';
import { toMarkdown } from 'mdast-util-to-markdown'
import { toHtml } from 'hast-util-to-html';
import { fromHtml } from 'hast-util-from-html';
import { toMdast as hastToMdast } from 'hast-util-to-mdast';
import { HastNode } from 'mdast-util-to-hast/lib';
import { micromark } from 'micromark';

const src = `# GFM style table

|h1|h2|
|:--|--|
|a|b|
|c|d|

# Delimiter row table6

|---|--:|
|a|b|
|c|d|


# Completely headerless table

|a|b|
|c|d|

and that concludes the demo input`;

console.log('STARTING WITH MARKDOWN ------------------------------------------------------');
console.log(src);

console.log('FROM MARKDOWN TO MDAST ------------------------------------------------------');
let mdast = fromMarkdown(src, {
    extensions: [extendedTableSyntax],
    mdastExtensions: [extendedTableFromMarkdown]
});
//console.log(JSON.stringify(mdast, null, 1));

console.log('FROM MDAST TO MARKDOWN ------------------------------------------------------');
// @ts-ignore
const dest = toMarkdown(mdast, { extensions: [extendedTableToMarkdown()] });
console.log(dest);

console.log('FROM MDAST TO HAST ------------------------------------------------------');
const hast = mdastToHast(mdast, {
    handlers: {
        table: extendedTableToHast
    }
});
//console.log(JSON.stringify(hast, null, 1))

console.log('FROM HAST TO HTML ------------------------------------------------------');
const html = toHtml(<HastNode>hast, {
    allowDangerousHtml: true,
    allowDangerousCharacters: true,

});
console.log(html)

console.log('FROM HTML TO HAST ------------------------------------------------------');
const hast2 = fromHtml(html, {
    fragment: true
});
//console.log(JSON.stringify(hast2, null, 1))

console.log('FROM HAST TO MDAST ------------------------------------------------------');
const mdast2 = hastToMdast(<HastNode>hast2, {
    handlers: {
        table: extendedTable
    }
});
//console.log(JSON.stringify(mdast2, null, 1))

console.log('FROM MDAST TO MARKDOWN ------------------------------------------------------');
// @ts-ignore
const dest2 = toMarkdown(mdast2, { extensions: [extendedTableToMarkdown()] });
console.log(dest2);

console.log('MICROMARK ------------------------------------------------------');
const html2 = micromark(src, 'utf-8', {
    extensions: [extendedTableSyntax],
    htmlExtensions: [extendedTableHtml]
})
console.log(html2);


