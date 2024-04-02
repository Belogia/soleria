export interface IConfigEditorProps {
    selectedGuild: string | null;
    selectedBot: string | null;
}

export interface IConfigFieldProps {
    fieldKey: string;
    value: string;
}

export interface INavbarProps {
    selectedGuild: string | null;
    onBotClick: (bot: string) => void;
}

export interface ISidebarProps {
    onGuildClick: (guildId: string) => void;
}