import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type Enter = {
    type: "randomized";
    options?: {
        maxDelay?: number;
        characterPool?: string;
    };
} | {
    type: "typed sweep";
    options?: {
        rate?: number;
        cursor?: string;
    };
} | {
    type: "number sweep";
    options?: {
        rate?: number;
        cyclesPerDigit?: number;
        characterPool?: string;
    };
};
type Hover = {
    type: "cursor sweep";
    options?: {
        rate?: number;
        cursor?: string;
        idle?: boolean;
        idleRate?: number;
    };
} | {
    type: "shuffle";
    options?: {
        rate?: number;
        characterPool?: string;
        delimiter?: string;
    };
} | {
    type: "twinkle";
    options?: {
        rate?: number;
        characterPool?: string;
        maxNum?: number;
        opacity?: number;
    };
};

interface TxtProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: string;
    enter?: Enter | null;
    hover?: Hover | null;
}
declare const Txt: (props: TxtProps) => react_jsx_runtime.JSX.Element;

export { Txt };
