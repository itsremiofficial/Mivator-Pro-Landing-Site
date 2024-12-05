import { FC } from 'react';

interface IconLoginProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconLogin: FC<IconLoginProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.90039 7.55828C9.21039 3.95828 11.0604 2.48828 15.1104 2.48828H15.2404C19.7104 2.48828 21.5004 4.27828 21.5004 8.74828V15.2683C21.5004 19.7383 19.7104 21.5282 15.2404 21.5282H15.1104C11.0904 21.5282 9.24039 20.0782 8.91039 16.5382"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g opacity={duotone ? '0.5' : '1'}>
                        <path d="M2 12H14.88" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.6504 8.64844L16.0004 11.9984L12.6504 15.3484" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" />
                    <path d="M12.43 8.11953L15.78 11.4695C16.07 11.7595 16.07 12.2395 15.78 12.5295L12.43 15.8795C12.14 16.1695 11.66 16.1695 11.37 15.8795C11.08 15.5895 11.08 15.1095 11.37 14.8195L13.44 12.7495H2.75C2.34 12.7495 2 12.4095 2 11.9995C2 11.5895 2.34 11.2495 2.75 11.2495H13.44L11.37 9.17953C11.22 9.02953 11.15 8.83953 11.15 8.64953C11.15 8.45953 11.22 8.26953 11.37 8.11953C11.66 7.81953 12.13 7.81953 12.43 8.11953Z" />
                </svg>
            )}
        </>
    );
};

export default IconLogin;
