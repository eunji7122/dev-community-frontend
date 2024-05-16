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

interface propsType {
    content: string,
    setContent: any,
    height: any
}

const QuillEditor = (props: propsType) => {
    return (
        <div>
            <ReactQuill
                theme={"snow"}
                formats={formats}
                placeholder={"내용을 입력해주세요."}
                style={{height: props.height}}
                modules={modules}
                value={props.content}
                onChange={props.setContent}
            />
        </div>
    );
};

export default QuillEditor;