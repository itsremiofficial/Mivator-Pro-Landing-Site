import { FC } from 'react';

interface IconMonitorProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconMonitor: FC<IconMonitorProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M12 17.2188V21.9988" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M2 13H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 22H16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M21.97 6.41V12.91H2V6.41C2 3.98 3.98 2 6.41 2H17.56C19.99 2 21.97 3.98 21.97 6.41Z" />
                    <path d="M2 12.918V13.118C2 15.558 3.98 17.528 6.41 17.528H10.25C10.8 17.528 11.25 17.978 11.25 18.528V19.498C11.25 20.048 10.8 20.498 10.25 20.498H7.83C7.42 20.498 7.08 20.838 7.08 21.248C7.08 21.658 7.41 21.998 7.83 21.998H16.18C16.59 21.998 16.93 21.658 16.93 21.248C16.93 20.838 16.59 20.498 16.18 20.498H13.76C13.21 20.498 12.76 20.048 12.76 19.498V18.528C12.76 17.978 13.21 17.528 13.76 17.528H17.57C20.01 17.528 21.98 15.548 21.98 13.118V12.918H2Z" />
                </svg>
            )}
        </>
    );
};

export default IconMonitor;
