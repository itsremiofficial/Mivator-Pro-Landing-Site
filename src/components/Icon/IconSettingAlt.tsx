import { FC } from 'react';

interface IconSettingAltProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconSettingAlt: FC<IconSettingAltProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <g opacity={duotone ? '0.5' : '1'}>
                        <path d="M15.5703 18.4977V14.5977" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5703 7.45V5.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M15.5697 12.6492C17.0057 12.6492 18.1697 11.4851 18.1697 10.0492C18.1697 8.61328 17.0057 7.44922 15.5697 7.44922C14.1338 7.44922 12.9697 8.61328 12.9697 10.0492C12.9697 11.4851 14.1338 12.6492 15.5697 12.6492Z"
                            stroke="currentColor"
                            strokeWidth={width}
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M8.42969 18.5008V16.5508" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.42969 9.4V5.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M8.43008 16.5477C9.86602 16.5477 11.0301 15.3836 11.0301 13.9477C11.0301 12.5118 9.86602 11.3477 8.43008 11.3477C6.99414 11.3477 5.83008 12.5118 5.83008 13.9477C5.83008 15.3836 6.99414 16.5477 8.43008 16.5477Z"
                            stroke="currentColor"
                            strokeWidth={width}
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" />
                    <path d="M15.5801 19.2516C15.1701 19.2516 14.8301 18.9116 14.8301 18.5016V14.6016C14.8301 14.1916 15.1701 13.8516 15.5801 13.8516C15.9901 13.8516 16.3301 14.1916 16.3301 14.6016V18.5016C16.3301 18.9116 15.9901 19.2516 15.5801 19.2516Z" />
                    <path d="M15.5801 8.2C15.1701 8.2 14.8301 7.86 14.8301 7.45V5.5C14.8301 5.09 15.1701 4.75 15.5801 4.75C15.9901 4.75 16.3301 5.09 16.3301 5.5V7.45C16.3301 7.86 15.9901 8.2 15.5801 8.2Z" />
                    <path d="M8.41992 19.2508C8.00992 19.2508 7.66992 18.9108 7.66992 18.5008V16.5508C7.66992 16.1408 8.00992 15.8008 8.41992 15.8008C8.82992 15.8008 9.16992 16.1408 9.16992 16.5508V18.5008C9.16992 18.9108 8.83992 19.2508 8.41992 19.2508Z" />
                    <path d="M8.41992 10.15C8.00992 10.15 7.66992 9.81 7.66992 9.4V5.5C7.66992 5.09 8.00992 4.75 8.41992 4.75C8.82992 4.75 9.16992 5.09 9.16992 5.5V9.4C9.16992 9.81 8.83992 10.15 8.41992 10.15Z" />
                    <path d="M15.5796 7.33203C14.0796 7.33203 12.8496 8.55203 12.8496 10.0521C12.8496 11.5521 14.0696 12.7821 15.5796 12.7821C17.0796 12.7821 18.2996 11.5621 18.2996 10.0521C18.2996 8.54203 17.0796 7.33203 15.5796 7.33203Z" />
                    <path d="M8.41922 11.2305C6.91922 11.2305 5.69922 12.4505 5.69922 13.9605C5.69922 15.4705 6.91922 16.6805 8.41922 16.6805C9.91922 16.6805 11.1492 15.4605 11.1492 13.9605C11.1492 12.4605 9.92922 11.2305 8.41922 11.2305Z" />
                </svg>
            )}
        </>
    );
};

export default IconSettingAlt;
