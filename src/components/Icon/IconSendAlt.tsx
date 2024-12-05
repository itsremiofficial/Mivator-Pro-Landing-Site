import { FC } from 'react';

interface IconSendAltProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconSendAlt: FC<IconSendAltProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M10.1094 13.6486L13.6894 10.0586" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M7.11039 5.96125L16.1304 2.95125C20.1804 1.60125 22.3804 3.81125 21.0404 7.86125L18.0304 16.8812C16.0104 22.9512 12.6904 22.9512 10.6704 16.8812L9.78039 14.2012L7.10039 13.3112C1.04039 11.3012 1.04039 7.99125 7.11039 5.96125Z"
                    />
                    <path d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z" />
                </svg>
            )}
        </>
    );
};

export default IconSendAlt;
