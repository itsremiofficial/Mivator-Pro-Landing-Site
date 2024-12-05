import { FC } from 'react';

interface IconSidebarCloseProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconSidebarClose: FC<IconSidebarCloseProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M7.9707 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M14.9702 9.44141L12.4102 12.0014L14.9702 14.5614" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
                        fill="currentColor"
                    />
                    <path
                        d="M7.81021 4C8.31279 4 8.72022 4.40742 8.72022 4.91V19.09C8.72022 19.5926 8.31279 20 7.81021 20V20V20C7.48028 20 7.22021 19.7237 7.22021 19.3937V4.61466C7.22021 4.28072 7.47628 4 7.81021 4V4V4Z"
                        fill="currentColor"
                    />
                    <path
                        d="M14.9701 15.3089C14.7801 15.3089 14.5901 15.2389 14.4401 15.0889L11.8801 12.5289C11.5901 12.2389 11.5901 11.7589 11.8801 11.4689L14.4401 8.90891C14.7301 8.61891 15.2101 8.61891 15.5001 8.90891C15.7901 9.19891 15.7901 9.67891 15.5001 9.96891L13.4801 11.9989L15.5101 14.0289C15.8001 14.3189 15.8001 14.7989 15.5101 15.0889C15.3601 15.2389 15.1701 15.3089 14.9701 15.3089Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </>
    );
};

export default IconSidebarClose;
