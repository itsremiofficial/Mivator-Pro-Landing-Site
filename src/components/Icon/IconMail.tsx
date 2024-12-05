import { FC } from 'react';

interface IconMailProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconMail: FC<IconMailProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                        stroke="currentColor"
                        strokeWidth={width}
                    />
                    <path
                        d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                    />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" />
                    <path d="M11.9998 12.8719C11.1598 12.8719 10.3098 12.6119 9.65978 12.0819L6.52978 9.58192C6.20978 9.32192 6.14978 8.85192 6.40978 8.53192C6.66978 8.21192 7.13978 8.15193 7.45978 8.41193L10.5898 10.9119C11.3498 11.5219 12.6398 11.5219 13.3998 10.9119L16.5298 8.41193C16.8498 8.15193 17.3298 8.20192 17.5798 8.53192C17.8398 8.85192 17.7898 9.33192 17.4598 9.58192L14.3298 12.0819C13.6898 12.6119 12.8398 12.8719 11.9998 12.8719Z" />
                </svg>
            )}
        </>
    );
};

export default IconMail;
