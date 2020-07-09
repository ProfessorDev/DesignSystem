import c from "classnames";

export default function tailwindClassNamesExtension(classNames, add = '') {
    if (Array.isArray(classNames)) {
        return c(
            ...classNames
                .map(className => {
                    return add.length > 0 ? `${add}:${c(className)}` : c(className);
                })
                .filter(className => className.length > 0)
        );
    } else if (typeof classNames === "object") {
        const keys = Object.keys(classNames);

        return c(
            ...keys.flatMap(key => {
                return tailwindClassNamesExtension(classNames[key], key.length > 0 ? (add.length > 0 ? `${add}:${key}` : key) : add);
            })
        );
    }
    return classNames;
}
