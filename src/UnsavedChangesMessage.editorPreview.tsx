import { ReactElement, createElement } from "react";
import { UnsavedChangesMessagePreviewProps } from "../typings/UnsavedChangesMessageProps";

export function preview({ block, debugMode }: UnsavedChangesMessagePreviewProps): ReactElement {
    return (
        <div className="on-before-unload alert alert-info">
            {(debugMode ? "[DEBUG MODE] " : "") + "On Before Unload is blocking based on the expression:  " + block}
        </div>
    );
}
