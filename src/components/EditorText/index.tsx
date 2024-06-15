// packages
import React from 'react';

import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

// styles
import style from './style.module.scss';

interface IProps {
  title: string
  subtitle?: string
  description?: string
}

const EditorTextInput: React.FC<IProps> = ({ title, subtitle, description }) => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  return (
    <>
    <div className={style.container}>
      <div className={style.option}>
        <span className={style.title}>
          {title} <strong>{subtitle}</strong>
        </span>
        <span className={style.description}>{description}</span>
      </div>
    </div>
    <Editor editorState={editorState} onChange={setEditorState} />
    </>
  )
}

export default EditorTextInput
