import { FC } from "react";

interface IconArrowRightProps {
  className?: string;
  fill?: string | boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconArrowRight: FC<IconArrowRightProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          fill="none"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.5 12H20.33"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          fill="none"
          stroke="currentColor"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.5 12H20.33"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default IconArrowRight;
