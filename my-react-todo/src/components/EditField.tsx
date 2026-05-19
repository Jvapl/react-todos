import { useEffect, useState } from "react"

interface EditableFieldProps {
    value: string | undefined,
    isEditing: boolean,
    onEditStart: () => void,
    onSave: (newValue: string) => void
    placeholder: string
    inputType?: string
    isTextArea?: boolean
}

export const EditableField = ({value, isEditing, onEditStart, onSave, placeholder, inputType, isTextArea}: EditableFieldProps) => {
    const [inputValue, setInputValue] = useState(value || "")
    
    useEffect(() => { // Sycronise les valeurs quand j'edit
        setInputValue(value || "")
    }, [value, isEditing])

    if(isTextArea){
        return(
            <textarea name="" id=""
                onBlur={() => onSave(inputValue)}>
            </textarea>
        )
    }



    if(isEditing){
        return (
            <input
                type={inputType}
                className="CSSBase editInput"
                autoFocus={true}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => onSave(inputValue)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        onSave(inputValue)
                    }
                }}
                placeholder={placeholder}
            />
        )
    }
    return <span style={{cursor: "pointer"}} onClick={onEditStart}>{value || placeholder}</span>
}