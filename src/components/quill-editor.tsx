import React from 'react';
import ReactQuill, {Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {ImageActions} from "@xeger/quill-image-actions";
import {ImageFormats} from "@xeger/quill-image-formats";

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
    'background',
    'size',
    'image',
    'float',
    'height',
    'width',
];

const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["image"],
];

const modules= {
    imageActions: {},
    imageFormats: {},
    toolbar: {
        container: toolbarOptions,
    },
};

interface QuillEditorProps {
    content: string,
    setContent: any,
    height: any
}

const QuillEditor = ({ content, setContent, height }: QuillEditorProps) => {
    return (
        <div>
            <ReactQuill
                theme={"snow"}
                formats={formats}
                placeholder={"내용을 입력해주세요."}
                style={{height: height}}
                modules={modules}
                value={content}
                onChange={setContent}
            />
        </div>
    );
};

export default QuillEditor;