import { FC } from 'react';

interface IconClockProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconClock: FC<IconClockProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M15.7099 15.1817L12.6099 13.3317C12.0699 13.0117 11.6299 12.2417 11.6299 11.6117V7.51172"
                        stroke="currentColor"
                        strokeWidth={width}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg className={className} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={duotone ? '0.5' : '1'} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M15.7106 15.9317C15.5806 15.9317 15.4506 15.9017 15.3306 15.8217L12.2306 13.9717C11.4606 13.5117 10.8906 12.5017 10.8906 11.6117V7.51172C10.8906 7.10172 11.2306 6.76172 11.6406 6.76172C12.0506 6.76172 12.3906 7.10172 12.3906 7.51172V11.6117C12.3906 11.9717 12.6906 12.5017 13.0006 12.6817L16.1006 14.5317C16.4606 14.7417 16.5706 15.2017 16.3606 15.5617C16.2106 15.8017 15.9606 15.9317 15.7106 15.9317Z" />
                </svg>
            )}
        </>
    );
};

export default IconClock;
