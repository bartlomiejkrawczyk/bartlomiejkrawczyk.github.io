export const commandIds = ["go-to-home", "open-github"] as const;

export type CommandId = (typeof commandIds)[number];

export interface Command {
  id: CommandId;
  name: { en: string; pl: string };
  execute: () => void;
}

export const commands: Record<CommandId, Command> = {
  "go-to-home": {
    id: "go-to-home",
    name: { en: "Go to home", pl: "Przejdź do Strony Głównej" },
    execute: () => {
      window.location.href = "/";
    },
  },
  "open-github": {
    id: "open-github",
    name: { en: "Open GitHub", pl: "Otwórz GitHub" },
    execute: () => {
      window.open("https://github.com/bartlomiejkrawczyk");
    },
  },
};
