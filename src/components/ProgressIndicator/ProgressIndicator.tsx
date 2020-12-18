import { useEffect } from "react";
import React, { useState } from "react";
import twx from "tailwindcssx";

export interface ProgressIndicatorProps {

}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = () => {
    let autoDelay = 0;

    const ActiveStep = () => (
        <div className={twx([
            // 'border border-red-600',
            'flex',
            'items-center',
        ])}>
            <span className="flex relative h-4 w-4 mx-1">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                    style={{
                        animationDelay: `${autoDelay}ms`
                    }}
                >

                </span>
                <span
                    className="animate-border relative inline-flex rounded-full h-4 w-4 border-4 border-gray-600 bg-white from-gray-600 to-green-600"
                    style={{
                        animationDelay: `${(() => { let prevAutoDelay = autoDelay; autoDelay += 300; return prevAutoDelay; })()}ms`
                    }}
                ></span>
            </span>
        </div>
    );

    const InactiveStep = (
        <div className={twx([
            // 'border border-red-600',
            'flex',
            'items-center',
        ])}>
            <div className={twx([
                'inline-block',
                'rounded-full',
                'bg-gray-600',
                'p-1',
                'mx-1',
            ])}>

            </div>
        </div>
    );

    const CompletedStep = () => {
        return (
            <div className={twx([
                // 'border border-red-600',
                'flex',
                'items-center',
            ])}>
                <div className={twx([
                    'inline-block',
                    'rounded-full',
                    'bg-gray-600',
                    'p-1',
                    'mx-1',
                    'animate-background',
                    'from-gray-600 to-green-600',
                ])} style={{
                    animationDelay: `${(() => { let prevAutoDelay = autoDelay; autoDelay += 300; return prevAutoDelay; })()}ms`,
                }}>

                </div>
            </div>
        )
    };

    const ActiveLine = () => (
        <div className={twx([
            // 'border border-red-600',
            'flex',
            'items-center',
            'flex-1'
        ])}>
            <div className={twx([
                'w-full',
                'inline-block',
                'h-1',
                'bg-gray-200',
                'rounded-full',
                'overflow-hidden',
                'align-middle'
            ])}>
                <div className={twx([
                    'bg-green-500',
                    // 'transition-all duration-500 ease-in-out',
                    'h-full',
                    'animate-scaleX'
                ])} style={{
                    width: `100%`,
                    transform: `scaleX(0)`,
                    animationDelay: `${(() => { let prevAutoDelay = autoDelay; autoDelay += 1000; return prevAutoDelay; })()}ms`,
                    transformOrigin: 'top left'
                }}>

                </div>
            </div>
        </div>
    )

    const InactiveLine = (
        <div className={twx([
            // 'border border-red-600',
            'flex',
            'items-center',
            'flex-1'
        ])}>
            <div className={twx([
                'w-full',
                'inline-block',
                'h-1',
                'bg-gray-200',
                'rounded-full',
                'overflow-hidden',
                'align-middle'
            ])}>
                <div className={twx([
                    'bg-green-500',
                    'transition-all duration-500 ease-in-out',
                    'h-full',
                ])} style={{
                    width: `100%`,
                    transform: `scaleX(0)`,
                    transformOrigin: 'top left'
                }}>

                </div>
            </div>
        </div>
    )

    return (
        <div className={twx([
            'overflow-auto',
            'w-full',
            'flex',
            'h-10'
        ])}>
            {CompletedStep()}
            {ActiveLine()}
            {CompletedStep()}
            {ActiveLine()}
            {ActiveStep()}
            {InactiveLine}
            {InactiveStep}
            {InactiveLine}
            {InactiveStep}
        </div>
    )
}