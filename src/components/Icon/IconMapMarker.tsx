import { FC } from 'react';

interface IconMapMarkerProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconMapMarker: FC<IconMapMarkerProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
                        stroke="currentColor"
                        strokeWidth={width}
                    />
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth={width} />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M12 2C7.58172 2 4 6.00258 4 10.5C4 14.9622 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.9622 20 10.5C20 6.00258 16.4183 2 12 2Z"
                    />
                    <path d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" />
                </svg>
            )}
        </>
    );
};

export default IconMapMarker;
