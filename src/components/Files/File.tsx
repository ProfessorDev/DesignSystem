import React, { SyntheticEvent } from "react";
import twx from "tailwindcssx";

export const types = {
    word: ["doc", "docx", "word"],
    pdf: ["pdf"],
    excel: ["xls", "xlsx", "csv", "excel"],
    video: ["mp4", "avi", "mkv", "video"],
    powerpoint: ["ppt", "pptx", "powerpoint"],
    image: ["jpg", "jpeg", "gif", "png", "image"],
    code: ["html", "css", "js", "code"],
    audio: ["mp3", "ogg", "audio"],
    archive: ["zip", "rar", "archive"],
} as {
    [x: string]: Array<string>;
};

type WordFileType = "doc" | "docx" | "word";
type PDFFileType = "pdf";
type ExcelFileType = "xls" | "xlsx" | "csv" | "excel";
type VideoFileType = "mp4" | "avi" | "mkv" | "video";
type PowerpointFileType = "ppt" | "pptx" | "powerpoint";
type ImageFileType = "jpg" | "jpeg" | "gif" | "png" | "image";
type CodeFileType = "html" | "css" | "js" | "code";
type AudioFileType = "mp3" | "ogg" | "audio";
type ArchiveFileType = "zip" | "rar" | "archive";
type UnknownFileType = string;

type FileType =
    | WordFileType
    | PDFFileType
    | ExcelFileType
    | VideoFileType
    | PowerpointFileType
    | ImageFileType
    | CodeFileType
    | AudioFileType
    | ArchiveFileType
    | UnknownFileType;

export const colors = {
    word: "#295394",
    pdf: "#B60000",
    excel: "#026E39",
    video: "#2F8DCA",
    powerpoint: "#F0E7DD",
    image: "#4EC274",
    code: "#4200E9",
    audio: "#003121",
    archive: "#463C2C",
    "": "#4B5563",
} as {
    [x: string]: string;
};

const getIcon = (type: FileType): React.ReactNode => {
    switch (type) {
        case "word":
            return <i className="fas fa-word" />;
        case "pdf":
            return <i className="fas fa-file-pdf" />;
        case "excel":
            return <i className="fas fa-file-excel" />;
        case "video":
            return <i className="fas fa-file-video" />;
        case "powerpoint":
            return <i className="fas fa-file-powerpoint" />;
        case "image":
            return <i className="fas fa-file-image" />;
        case "code":
            return <i className="fas fa-file-code" />;
        case "audio":
            return <i className="fas fa-file-audio" />;
        case "archive":
            return <i className="fas fa-file-archive" />;
    }
    return <i className="fas fa-file" />;
};

const getTypeFromExtension = (extension: FileType): string => {
    for (let key of Object.keys(types)) {
        if (types[key].includes(extension)) {
            return key;
        }
    }
    return "";
};

export interface FileProps {
    isViewable?: boolean;
    isDownloadable?: boolean;
    isRemovable?: boolean;
    onViewClick?: (e: SyntheticEvent) => void;
    onDownloadClick?: (e: SyntheticEvent) => void;
    onRemoveClick?: (e: SyntheticEvent) => void;
    extension?: FileType;
    label: string;
}

export const File: React.FC<FileProps> = ({
    onViewClick,
    onDownloadClick,
    onRemoveClick,
    label,
    isViewable = true,
    isDownloadable = true,
    isRemovable = true,
    extension = "",
}) => {
    return (
        <div
            className={twx([
                // "border border-red-600",
                "px-2 py-0.5",
                "flex",
                "items-center",
                "bg-gray-200",
            ])}
        >
            <span
                className="mr-2"
                style={{
                    color: colors[getTypeFromExtension(extension)],
                }}
            >
                {getIcon(getTypeFromExtension(extension))}
            </span>
            <span className="text-sm flex-1 truncate">{label}</span>
            {isViewable && (
                <button className="ml-2 text-gray-600" onClick={onViewClick}>
                    <i className="fas fa-eye" />
                </button>
            )}
            {isDownloadable && (
                <button
                    className="ml-2 text-gray-600"
                    onClick={onDownloadClick}
                >
                    <i className="fas fa-download" />
                </button>
            )}
            {isRemovable && (
                <button className="ml-2 text-gray-600" onClick={onRemoveClick}>
                    <i className="fas fa-times" />
                </button>
            )}
        </div>
    );
};
