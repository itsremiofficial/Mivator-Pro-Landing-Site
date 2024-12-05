import { FC } from 'react';

interface IconResetProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconReset: FC<IconResetProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M14.8901 5.07844C14.0201 4.81844 13.0601 4.64844 12.0001 4.64844C7.21008 4.64844 3.33008 8.52844 3.33008 13.3184C3.33008 18.1184 7.21008 21.9984 12.0001 21.9984C16.7901 21.9984 20.6701 18.1184 20.6701 13.3284C20.6701 11.5484 20.1301 9.88844 19.2101 8.50844"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M16.1302 5.32L13.2402 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.1298 5.32031L12.7598 7.78031" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" />
                    <path d="M12 18.5803C8.83 18.5803 6.25 16.0003 6.25 12.8303C6.25 9.72037 8.73 7.19036 11.81 7.08036L11.44 6.65036C11.17 6.34036 11.2 5.86036 11.51 5.59036C11.82 5.32036 12.3 5.35036 12.57 5.66036L14.23 7.56036C14.25 7.58036 14.26 7.60036 14.28 7.62036C14.32 7.68036 14.36 7.75036 14.38 7.82036C14.39 7.86036 14.4 7.90037 14.41 7.94037C14.43 8.03036 14.42 8.13037 14.4 8.22037C14.38 8.30037 14.35 8.38037 14.31 8.46037C14.3 8.48037 14.28 8.50036 14.27 8.52036C14.23 8.58036 14.17 8.63037 14.11 8.67037C14.11 8.67037 14.1 8.67037 14.1 8.68037L12.16 10.1003C11.82 10.3403 11.36 10.2703 11.11 9.94036C10.87 9.61036 10.94 9.14036 11.27 8.89036L11.68 8.59037C9.48 8.75037 7.74 10.5903 7.74 12.8303C7.74 15.1703 9.65 17.0803 11.99 17.0803C14.33 17.0803 16.24 15.1703 16.24 12.8303C16.24 11.9903 15.99 11.1703 15.53 10.4703C15.3 10.1303 15.39 9.66037 15.74 9.43037C16.09 9.20037 16.55 9.29036 16.78 9.64036C17.41 10.5903 17.75 11.6903 17.75 12.8303C17.75 16.0003 15.17 18.5803 12 18.5803Z" />
                </svg>
            )}
        </>
    );
};

export default IconReset;
