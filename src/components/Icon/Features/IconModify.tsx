import { FC } from 'react';

interface IconModifyProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
}

const IconModify: FC<IconModifyProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
    return (
        <>
            {!fill ? (
                <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M22.6,9.9c0.9,1,1.4,2.3,1.4,3.6v4c0,3-2.5,5.5-5.5,5.5h-13c-3,0-5.5-2.5-5.5-5.5v-4C0,10.5,2.5,8,5.5,8h4
	C10.3,8,11,8.7,11,9.5S10.3,11,9.5,11h-4C4.1,11,3,12.1,3,13.5v4C3,18.9,4.1,20,5.5,20h13c1.4,0,2.5-1.1,2.5-2.5v-4
	c0-0.6-0.2-1.2-0.6-1.7c-0.5-0.6-0.5-1.6,0.1-2.1C21.1,9.2,22.1,9.2,22.6,9.9L22.6,9.9z"
                    />
                    <circle cx="6.5" cy="15.5" r="1.5" />
                    <circle cx="11.5" cy="15.5" r="1.5" />
                    <path
                        d="M13.5,11h1c1.1,0,2.3-0.5,3.1-1.3L23.3,4c0.9-0.8,1-2.2,0.3-3.2c-0.9-1.1-2.5-1.1-3.4-0.2l-5.8,5.8C13.5,7.3,13,8.4,13,9.5
	v1C13,10.8,13.2,11,13.5,11z"
                    />
                </svg>
            ) : (
                <svg fill="currentColor" className={className} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.6,9.9c0.9,1,1.4,2.3,1.4,3.6v4c0,3-2.5,5.5-5.5,5.5h-13c-3,0-5.5-2.5-5.5-5.5v-4C0,10.5,2.5,8,5.5,8h4
	C10.3,8,11,8.7,11,9.5S10.3,11,9.5,11h-4C4.1,11,3,12.1,3,13.5v4C3,18.9,4.1,20,5.5,20h13c1.4,0,2.5-1.1,2.5-2.5v-4
	c0-0.6-0.2-1.2-0.6-1.7c-0.5-0.6-0.5-1.6,0.1-2.1C21.1,9.2,22.1,9.2,22.6,9.9L22.6,9.9z"
                    />
                    <circle cx="6.5" cy="15.5" r="1.5" />
                    <circle cx="11.5" cy="15.5" r="1.5" />
                    <path
                        d="M13.5,11h1c1.1,0,2.3-0.5,3.1-1.3L23.3,4c0.9-0.8,1-2.2,0.3-3.2c-0.9-1.1-2.5-1.1-3.4-0.2l-5.8,5.8C13.5,7.3,13,8.4,13,9.5
	v1C13,10.8,13.2,11,13.5,11z"
                    />
                </svg>
            )}
        </>
    );
};

export default IconModify;
