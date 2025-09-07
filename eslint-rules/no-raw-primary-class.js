/**
 * ESLint rule: disallow usage of Tailwind primary-* utility classes to enforce semantic tokens.
 */
export const rules = {
  'no-raw-primary-class': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Disallow raw primary-* Tailwind classes; use semantic brand tokens instead',
      },
      messages: {
        noPrimary: 'Avoid raw "{{cls}}". Use semantic brand / surface / text tokens instead.',
      },
      schema: [],
    },
    create(context) {
      const disallowed =
        /\b(?:bg|text|border|from|to|via|ring|outline)-primary-(?:[0-9]{2,3}|[0-9]{1,3})\b/g;
      return {
        Literal(node) {
          if (typeof node.value === 'string' && disallowed.test(node.value)) {
            const matches = node.value.match(disallowed) || [];
            matches.forEach(m => {
              context.report({ node, messageId: 'noPrimary', data: { cls: m } });
            });
          }
        },
      };
    },
  },
};
