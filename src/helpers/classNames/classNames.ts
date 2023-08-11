type Mods = Record<string, string | boolean>

export const classNames = (mainClass: string, mods: Mods = {}, additional: Array<string> = []): string => {
    return [
        mainClass,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(' ');
};
