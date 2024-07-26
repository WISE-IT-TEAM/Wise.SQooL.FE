// component/editor/Styles.js
import { EditorView } from 'codemirror';

export const createSqoolTheme = (isDarkMode) => EditorView.theme({
  '&': {
    color: `${isDarkMode ? '#ffffff' : '#000000'}`,
    backgroundColor: `${isDarkMode ? '#2d3748' : '#edf2f7'}`,
    fontSize: '14px',
    lineHeight: '1.5',
    tabSize: '4',
    whiteSpace: 'pre',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    hyphens: 'none',
    minHeight: '200px',
  },
  '&.cm-editor': {
    outline: 'none',
  },
  '.cm-content': {
    padding: '8px',
  },
  '.cm-activeLine' : {
    backgroundColor: `${isDarkMode ? '#000000' : '#ffffff'}`,
  },
  '.cm-line': {
    fontFamily: "'EliceDigitalCodingver.H', monospace",
  },
  '.cm-gutterElement': {
    fontFamily: "'EliceDigitalCodingver.H', monospace",
  },
});