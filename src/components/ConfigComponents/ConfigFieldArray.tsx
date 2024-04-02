import { FocusEvent } from "react";
import { IConfigFieldProps } from "../../types";
import { capitalize } from "../../utils";

function handleBlur(event: FocusEvent<HTMLTextAreaElement>) {
    event.target.scrollTop = 0;
}

export function ConfigFieldArray({ fieldKey, value }: Readonly<IConfigFieldProps>) {
    const name: string = capitalize(fieldKey);

    return (
        <li className="config-field" key={fieldKey}>
            <textarea className="config-field-input" placeholder={name} defaultValue={value} onBlur={handleBlur}></textarea>
            <label className="config-field-label">{name}</label>
        </li>
    );
}