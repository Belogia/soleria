import { IConfigFieldProps } from "../../types";
import { capitalize } from "../../utils";

export function ConfigFieldString({ fieldKey, value }: Readonly<IConfigFieldProps>) {
    const name: string = capitalize(fieldKey);

    return (
        <li className="config-field" key={fieldKey}>
            <input type="text" className="config-field-input" placeholder={name} defaultValue={value} />
            <label className="config-field-label">{name}</label>
        </li>
    );
}