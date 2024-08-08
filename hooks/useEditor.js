// hooks/useEditor.js
import { useRef, useEffect } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { sql } from '@codemirror/lang-sql';
import { autocompletion } from '@codemirror/autocomplete';
import { createSqoolTheme } from '../components/editor/Styles';
import { sqliteCompletion } from '../components/editor/SqliteKeywords';
import { placeholder } from '@codemirror/view';

const useEditor = (initialValue, isDarkMode, onChange) => {
  const editorElement = useRef(null);
  const editorView = useRef(null);

  useEffect(() => {
    if (editorElement.current && !editorView.current) {
      editorView.current = new EditorView({
        extensions: [
          basicSetup,
          sql(),
          createSqoolTheme(isDarkMode),
          autocompletion({ override: [sqliteCompletion] }),
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              onChange(update.state.doc.toString());
            }
          }),
          placeholder("쿼리문을 입력해주세요. 예시) SELECT * FROM Artist;")
        ],
        parent: editorElement.current,
        doc: initialValue,
      });
      editorElement.current.view = editorView.current; // editorView를 editorElement에 저장
    }

    return () => {
      if (editorView.current) {
        editorView.current.destroy();
        editorView.current = null;
      }
    };
  }, [initialValue, isDarkMode, onChange]);

  return editorElement;
};

export default useEditor;
