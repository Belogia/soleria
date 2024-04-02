import { useCallback, useEffect, useState } from "react";
import { IConfigEditorProps } from "../../types";
import { ConfigFieldArray } from "./ConfigFieldArray";
import { ConfigFieldString } from "./ConfigFieldString";
import { capitalize } from "../../utils/capitalize";
import axios from "axios";
import "../../styles/config.scss";

type ConfigType = { [key: string]: unknown };

function displayField(key: string, value: unknown) {
    switch (typeof value) {
        case "string":
            return <ConfigFieldString key={key} fieldKey={key} value={value} />;
        case "object":
            if (value instanceof Array)
                return <ConfigFieldArray key={key} fieldKey={key} value={value.join(", ")} />;

            if (value === null)
                return <ConfigFieldString key={key} fieldKey={key} value="" />;

            return (
                <li key={key} className="config-field">
                    <label>{capitalize(key)}</label>
                    <ul className="sub-config-fields">
                        {
                            Object
                                .keys((value as ConfigType))
                                .map(subKey => displayField(subKey, (value as ConfigType)[subKey]))
                        }
                    </ul>
                </li>
            );
    }
}

function ConfigEditor({ selectedGuild, selectedBot }: Readonly<IConfigEditorProps>) {
    const [config, setConfig] = useState<ConfigType>({});

    const getConfig = useCallback(async (botId: string) => {
        const response = await axios.get(`http://localhost:3000/api/guild/${selectedGuild}/configs/${botId}`, {
            withCredentials: true,
        });

        setConfig(response.data.config);
    }, [selectedGuild]);

    useEffect(() => {
        if (selectedBot !== null)
            getConfig(selectedBot);
    }, [selectedBot, getConfig]);

    return (
        <ul className="config-fields">
            {Object.keys(config).map(key => displayField(key, config[key]))}
        </ul>
    )
}

export default ConfigEditor;