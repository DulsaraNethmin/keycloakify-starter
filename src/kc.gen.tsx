// This file is auto-generated by the `update-kc-gen` command. Do not edit it manually.
// Hash: 3cf83a079bd7929dc57808fa2a76b7187f31a3f65cc656be12ace047595773c6

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "app-v1" | "app-v2";

export const themeNames: ThemeName[] = ["app-v1", "app-v2"];

export type KcEnvName = never;

export const kcEnvNames: KcEnvName[] = [];

export const kcEnvDefaults: Record<KcEnvName, string> = {};

/**
 * NOTE: Do not import this type except maybe in your entrypoint.
 * If you need to import the KcContext import it either from src/login/KcContext.ts or src/account/KcContext.ts.
 * Depending on the theme type you are working on.
 */
export type KcContext = import("./login/KcContext").KcContext;

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}

export const KcLoginPage = lazy(() => import("./login/KcPage"));

export function KcPage(props: { kcContext: KcContext; fallback?: ReactNode }) {
    const { kcContext, fallback } = props;
    return (
        <Suspense fallback={fallback}>
            {(() => {
                switch (kcContext.themeType) {
                    case "login":
                        return <KcLoginPage kcContext={kcContext} />;
                }
            })()}
        </Suspense>
    );
}
