import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

interface Props {
  value: string | null
  setValue: (value: string) => void
}

export default function TextEditor(props: Props) {
  const { value, setValue } = props

  return (
    <ReactQuill
      theme="snow"
      value={value || ""}
      onChange={(value) => {
        setValue(value)
      }}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ]}
    />
  )
}
