import { FC } from 'react';

interface IconLogoutProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconLogout: FC<IconLogoutProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'}
                        d="M8.90039 7.55828C9.21039 3.95828 11.0604 2.48828 15.1104 2.48828H15.2404C19.7104 2.48828 21.5004 4.27828 21.5004 8.74828V15.2683C21.5004 19.7383 19.7104 21.5282 15.2404 21.5282H15.1104C11.0904 21.5282 9.24039 20.0782 8.91039 16.5382"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g>
                        <path d="M14.9991 12H3.61914" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.85 8.64844L2.5 11.9984L5.85 15.3484" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" />
                    <path d="M5.56945 8.11953L2.21945 11.4695C1.92945 11.7595 1.92945 12.2395 2.21945 12.5295L5.56945 15.8795C5.85945 16.1695 6.33945 16.1695 6.62945 15.8795C6.91945 15.5895 6.91945 15.1095 6.62945 14.8195L4.55945 12.7495H15.2495C15.6595 12.7495 15.9995 12.4095 15.9995 11.9995C15.9995 11.5895 15.6595 11.2495 15.2495 11.2495H4.55945L6.62945 9.17953C6.77945 9.02953 6.84945 8.83953 6.84945 8.64953C6.84945 8.45953 6.77945 8.25953 6.62945 8.11953C6.33945 7.81953 5.86945 7.81953 5.56945 8.11953Z" />
                </svg>
            )}
        </>
    );
};

export default IconLogout;
