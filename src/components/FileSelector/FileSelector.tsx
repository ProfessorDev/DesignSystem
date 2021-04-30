import React from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import twx from "tailwindcssx";

export interface FileSelectorProps extends DropzoneOptions {
    variant?: "max" | "basic";
    hasError?: boolean;
    errorMessage?: string;
    label?: string;
    isDisabled?: boolean;
}

export const FileSelector: React.FC<FileSelectorProps> = (props) => {
    const {
        variant = "basic",
        hasError = false,
        errorMessage,
        label,
        disabled,
    } = props;

    const { getRootProps, getInputProps, isDragActive } = useDropzone(props);

    return (
        <div>
            {label && <label className="mb-1 text-xs">{label}</label>}
            <div
                {...getRootProps()}
                className={twx([
                    "border border-dashed border-gray-300",
                    "p-0.5",
                    "text-sm",
                    "flex",
                    variant === "basic" && "flex-row",
                    variant === "max" && ["flex-col", "justify-center", "h-64"],
                    "items-center",
                    "relative",
                ])}
            >
                <input {...getInputProps()} />
                {disabled && (
                    <div
                        className={twx([
                            "absolute",
                            "inset-0",
                            "bg-gray-300",
                            "bg-opacity-70",
                        ])}
                    ></div>
                )}
                <div>
                    <button
                        type="button"
                        className={twx({
                            "": [
                                "text-sm",
                                "border border-gray-300",
                                "rounded",
                                "text-blue-600",
                                "px-3 py-1",
                            ],
                            hover: ["bg-gray-100"],
                        })}
                    >
                        <span className="mr-2">
                            <i className="fas fa-upload" />
                        </span>
                        Upload Files
                    </button>
                </div>
                <div>
                    <span className="ml-2">
                        {isDragActive ? "Drop here" : "or Drop Files"}
                    </span>
                </div>
            </div>
            {hasError && (
                <div className="mt-1 text-xs text-red-600">{errorMessage}</div>
            )}
        </div>
    );
};
