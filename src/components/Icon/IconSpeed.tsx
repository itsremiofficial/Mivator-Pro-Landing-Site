import { FC } from 'react';

interface IconSpeedProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconSpeed: FC<IconSpeedProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg fill="none" className={className} width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11.5C9 12.8807 7.88071 14 6.5 14C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5Z" stroke="currentColor" strokeWidth={width} />
                    <path opacity={duotone ? '0.5' : '1'} d="M14.3206 16.8008L9 13.2891" stroke="currentColor" strokeWidth={width} strokeLinecap="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M14.4207 6.83984L9.1001 10.3515" stroke="currentColor" strokeWidth={width} strokeLinecap="round" />
                    <path
                        d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
                        stroke="currentColor"
                        strokeWidth={width}
                    />
                    <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="currentColor" strokeWidth={width} />
                </svg>
            ) : (
                <svg fill="currentColor" className={className} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 22.75a8.7 8.7 0 0 1 -5-1.569.75.75 0 0 1 .858-1.231 7.25 7.25 0 1 0 0-11.9.75.75 0 0 1 -.858-1.231 8.75 8.75 0 1 1 5 15.931z" />
                    <path d="m7 15.25h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5z" />
                    <path d="m7.68 12.25h-5.68a.75.75 0 0 1 0-1.5h5.68a.75.75 0 0 1 0 1.5z" />
                    <path d="m8 18.25h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5z" />
                    <path d="m21.619 3.641-3.372-2.153a1.753 1.753 0 0 0 -2.417.535l-.538.843a1.751 1.751 0 0 0 .534 2.416l3.374 2.152a1.754 1.754 0 0 0 2.415-.534l.538-.843a1.753 1.753 0 0 0 -.534-2.416z" />
                    <path d="m16.839 8.162a.75.75 0 0 1 -.631-1.153l1.075-1.686a.75.75 0 0 1 1.265.807l-1.076 1.685a.747.747 0 0 1 -.633.347z" />
                    <path d="m12 8.25a5.75 5.75 0 1 0 5.75 5.75 5.712 5.712 0 0 0 -5.75-5.75zm2.492 4.58-1.021.886a1.479 1.479 0 0 1 .029.284 1.524 1.524 0 1 1 -1.016-1.413l1.024-.89a.75.75 0 0 1 .984 1.133z" />
                </svg>
            )}
        </>
    );
};

export default IconSpeed;
