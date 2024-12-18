import { FC } from 'react';

interface IconSidebarOpenProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconSidebarOpen: FC<IconSidebarOpenProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
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
                    <path opacity={duotone ? '0.5' : '1'} d="M14.9707 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M7.9707 9.44141L10.5307 12.0014L7.9707 14.5614" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C16.39 22 16.59 21.99 16.78 21.98C18.01 21.9 19.05 21.55 19.87 20.95C20.29 20.66 20.66 20.29 20.95 19.87C21.64 18.92 22 17.68 22 16.19V7.81C22 4.37 20.06 2.24 16.78 2.03C16.59 2.01 16.39 2 16.19 2H7.81C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81Z"
                        fill="currentColor"
                    />
                    <path
                        d="M16.1898 4C15.6872 4 15.2798 4.40742 15.2798 4.91V19.09C15.2798 19.5926 15.6872 20 16.1898 20V20V20C16.5197 20 16.7798 19.7237 16.7798 19.3937V4.61466C16.7798 4.28072 16.5237 4 16.1898 4V4V4Z"
                        fill="currentColor"
                    />
                    <path
                        d="M9.03021 15.3089C9.22021 15.3089 9.41022 15.2389 9.56022 15.0889L12.1202 12.5289C12.4102 12.2389 12.4102 11.7589 12.1202 11.4689L9.56022 8.90891C9.27022 8.61891 8.79021 8.61891 8.50021 8.90891C8.21021 9.19891 8.21021 9.67891 8.50021 9.96891L10.5202 11.9989L8.50021 14.0289C8.21021 14.3189 8.21021 14.7989 8.50021 15.0889C8.64021 15.2389 8.83021 15.3089 9.03021 15.3089Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </>
    );
};

export default IconSidebarOpen;
