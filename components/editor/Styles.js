// component/editor/Styles.js
import { EditorView } from 'codemirror';

export const createSqoolTheme = (isDarkMode) => EditorView.theme({
  '&': {
    backgroundColor: 'transparent',
    fontSize: '14px',
    tabSize: '4',
    whiteSpace: 'pre',
    // wordWrap: 'normal',
    // overflowWrap: 'normal',
    hyphens: 'none',
    minHeight: '400px',
  },
  '&.cm-editor': {
    outline: 'none',
  },
  '.cm-content': {
    padding: '8px',
  },
  '.cm-gutters' : {
    backgroundColor: 'transparent',
  },
  '.cm-activeLine' : {
    backgroundColor: `${isDarkMode ? '#231A2E' : '#F7EBFA'}`,
  },
  '.cm-line': {
    margin: '0;',
    fontFamily: "'EliceDigitalCodingver.H', monospace",
  },
  'span.ͼb': {
    color: `${isDarkMode ? '#C944EA' : '#A832C7'}`,
  },
  '.cm-gutterElement': {
    fontFamily: "'EliceDigitalCodingver.H', monospace",
    height: 'auto',
    textAlign: 'center',
    padding: '8px 0',
    marginTop: '0',
  },
  '.cm-activeLineGutter': {
    backgroundColor: `${isDarkMode ? '#231A2E' : '#F7EBFA'}`,
  },
  '.cm-scroller': {
    overflowY: 'auto',
    maxHeight: '400px',
    scrollbarWidth: 'thin', /* 파이어폭스 */
    scrollbarColor: '#888 #ccc' /* 파이어폭스 */
  },
  /* 웹킷 기반 브라우저 */
  '.cm-scroller::-webkit-scrollbar': {
    width: '4px',
    height: '4px'
  },
  '.cm-scroller::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '10px'
  },
  '.cm-scroller::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555'
  },
  '.cm-cursor': {
    borderLeftColor: isDarkMode ? '#f8fafc' : '#0f172a' // 커서 색상 설정
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: isDarkMode ? '#AA55FF' : '#8A2BE2' // 포커스된 상태의 커서 색상 설정
  }
});