module.exports = {
  stories: [
    '../resources/js/components/**/*.stories.(js|mdx)',
    '../resources/js/pages/**/*.stories.(js|mdx)',
    '../node_modules/@freshinup/core-ui/src/components/**/*.stories.(js|mdx)',
    '../node_modules/@freshinup/core-ui/src/layouts/**/*.stories.(js|mdx)'
    // '../node_modules/@freshinup/deals-ui/src/components/**/*.stories.(js|mdx)', // Until we can get the issue/87 in
    // '../node_modules/@freshinup/deals-ui/src/pages/**/*.stories.(js|mdx)'
  ],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-options',
    '@storybook/addon-backgrounds',
    '@storybook/addon-contexts',
    '@storybook/addon-notes'
  ]
}
