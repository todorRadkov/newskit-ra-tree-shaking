import React from 'react';
import {ThemeProvider, Tag, TagSize, theSunTheme, Play} from 'newskit';
// import {Play} from 'newskit/icons';
// import {ThemeProvider} from 'newskit/themes/emotion';
// import {Tag, TagSize} from 'newskit/tag';
// import {theSunTheme} from 'newskit/themes';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theSunTheme}>
        <Tag
          href="http://example.com"
          $size={TagSize.Medium}>
            <Play />
            Hello World
        </Tag>
      </ThemeProvider>
    )
  }
};
