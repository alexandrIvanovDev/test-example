export const classNames = (mainClass: string, mods = {}, additional: Array<string> = []): string => {
    return [
        mainClass,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(' ');
};
