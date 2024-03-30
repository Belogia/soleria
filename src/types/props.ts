export interface INavbarProps {
    selectedGuild: string | null;
    onBotClick: (bot: string) => void;
}

export interface ISidebarProps {
    onGuildClick: (guildId: string) => void;
}
