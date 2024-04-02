import { IConfigFieldProps } from "../types";

function ConfigField({ fieldKey, value }: Readonly<IConfigFieldProps>) {
    return (
        <li className="config-field" key={fieldKey}>
            <label>{fieldKey}</label>
            <input type="text" defaultValue={value} />
        </li>
    );
}

export default ConfigField;