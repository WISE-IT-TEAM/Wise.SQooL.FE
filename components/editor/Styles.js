import { EditorView } from 'codemirror';

export const createSqoolTheme = (isDarkMode) => EditorView.theme({
  '&': {
    backgroundColor: 'transparent',
    fontSize: '14px',
    tabSize: '4',
    whiteSpace: 'pre-wrap', // 줄 바꿈을 위해 whiteSpace를 pre-wrap으로 변경
    hyphens: 'none',
  },
  '&.cm-editor': {
    outline: 'none',
  },
  '.cm-content': {
    padding: '8px',
  },
  '.cm-gutters': {
    backgroundColor: 'transparent',
  },
  '.cm-activeLine': {
    backgroundColor: `${isDarkMode ? '#231A2E' : '#F7EBFA'}`,
  },
  '.cm-line': {
    margin: '0',
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
    overflowX: 'hidden', // 가로 스크롤을 숨기기 위해 overflowX를 hidden으로 설정
  },
  '.cm-cursor': {
    borderLeftColor: `${isDarkMode ? '#f8fafc' : '#0f172a'}`,
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: `${isDarkMode ? '#AA55FF' : '#8A2BE2'}`,
  },
  '.cm-content::before': {
    content: 'attr(placeholder)',
    color: '#666',
    pointerEvents: 'none',
    position: 'absolute',
    left: '10px',
    top: '10px',
  },
});
