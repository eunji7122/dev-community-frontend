import React, {useEffect, useRef} from 'react';
import ReactQuill, {Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {ImageActions} from "@xeger/quill-image-actions";
import {ImageFormats} from "@xeger/quill-image-formats";
import {imagePost} from "../api/postApi";

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
    value: string,
    onChange: any,
    height: any
}

const QuillEditor = ({ value, onChange, height }: QuillEditorProps) => {

    const quillRef = useRef<any>(null);


    useEffect(() => {
        const imageHandler = () => {
            const input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.setAttribute('accept', 'image/*')
            input.click()

            input.addEventListener('change', async () => {
                const file= input.files ? input.files[0] : null
                if (!file) return;

                try {
                    imagePost(file).then(res => {
                        let editor = quillRef.current?.getEditor()
                        const range = editor.getSelection()
                        editor?.insertEmbed(range.index, 'image', res)
                        editor?.setSelection(range.index + 1)
                    })

                } catch (e) {
                    console.log("Fail to upload file: " + e)
                }
            })
        }

        if (quillRef.current) {
            const toolbar = quillRef.current.getEditor().getModule("toolbar")
            toolbar.addHandler("image", imageHandler)
        }
    })


    return (
        <div>
            <ReactQuill
                ref={quillRef}
                theme={"snow"}
                formats={formats}
                placeholder={"내용을 입력해주세요."}
                style={{height: height}}
                modules={modules}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default QuillEditor;