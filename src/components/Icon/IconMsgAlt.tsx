import { FC } from 'react';

interface IconMsgAltProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconMsgAlt: FC<IconMsgAltProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 10V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H14"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M11.9955 11H12.0045" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6.75C21.5188 6.75 22.75 5.51878 22.75 4C22.75 2.48122 21.5188 1.25 20 1.25C18.4812 1.25 17.25 2.48122 17.25 4C17.25 5.51878 18.4812 6.75 20 6.75Z" />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M20 8C17.79 8 16 6.21 16 4C16 3.27 16.21 2.59 16.56 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V7.44C21.41 7.79 20.73 8 20 8Z"
                    />
                    <path d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z" />
                    <path d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z" />
                    <path d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z" />
                </svg>
            )}
        </>
    );
};

export default IconMsgAlt;
