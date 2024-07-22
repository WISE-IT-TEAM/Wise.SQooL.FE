// components/Icon.js

import React from 'react';
const Icon = ({ fill = 'currentColor', width = 24, height = 24, className = '', children, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill}
        width={width}
        height={height}
        className={className}
        {...props}
    >
        {children}
    </svg>
);

export const MemberGithub = ({ width = 24, height = 24, ...props }) => (
    <Icon width={width} height={height} {...props}>
        <g clipPath="url(#clip0_1725_1819)">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0004 2.41699C9.62639 2.41822 7.33025 3.25904 5.52253 4.78909C3.71482 6.31915 2.5134 8.43867 2.1331 10.7687C1.7528 13.0986 2.21841 15.4872 3.4467 17.5071C4.67499 19.5271 6.58584 21.0468 8.83758 21.7945C9.33435 21.8867 9.52147 21.5788 9.52147 21.317C9.52147 21.0552 9.51153 20.2962 9.50822 19.4663C6.72631 20.0673 6.13846 18.2924 6.13846 18.2924C5.68475 17.1399 5.02901 16.8369 5.02901 16.8369C4.12157 16.2211 5.0969 16.2326 5.0969 16.2326C6.10204 16.3034 6.63027 17.2584 6.63027 17.2584C7.52115 18.7781 8.97005 18.3385 9.53969 18.0816C9.6291 17.4379 9.88909 16.9999 10.1756 16.7513C7.95333 16.501 5.61851 15.6481 5.61851 11.8382C5.60473 10.8501 5.97349 9.89454 6.64848 9.16923C6.54582 8.91896 6.20304 7.90802 6.74618 6.53485C6.74618 6.53485 7.58573 6.26812 9.49664 7.55403C11.1357 7.10835 12.865 7.10835 14.5041 7.55403C16.4133 6.26812 17.2512 6.53485 17.2512 6.53485C17.796 7.90473 17.4533 8.91567 17.3506 9.16923C18.0277 9.89465 18.3972 10.8519 18.3822 11.8415C18.3822 15.6597 16.0424 16.501 13.8169 16.7463C14.1746 17.0559 14.4942 17.6601 14.4942 18.5888C14.4942 19.9191 14.4826 20.9893 14.4826 21.317C14.4826 21.5821 14.663 21.8916 15.1698 21.7945C17.4218 21.0467 19.3328 19.5267 20.5611 17.5064C21.7893 15.4861 22.2547 13.0972 21.874 10.767C21.4932 8.43683 20.2912 6.31729 18.4829 4.7875C16.6746 3.25771 14.3779 2.41744 12.0037 2.41699H12.0004Z" fill=""/>
        </g>
        <defs>
            <clipPath id="clip0_1725_1819">
                <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
            </clipPath>
        </defs>
    </Icon>
);

export const MemberEmail = ({ width = 24, height = 24, ...props }) => (
    <Icon width={width} height={height} {...props}>
        <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill=""/>
    </Icon>
);