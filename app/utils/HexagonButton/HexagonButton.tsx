import { type ReactElement, ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import hex from '@/app/utils/HexagonButton/assets/svg/hex-button.svg';

import styles from './HexagonButton.module.scss';
import Link from "next/link";

type HexagonButtonProps = {
    label: string;
    alt: string;
    href : string;
    disabled?: boolean;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function HexagonButton({
                                  label,
                                  alt,
                                  href,
                                  disabled = false,
                                  className,
                                  ...props
                              }: HexagonButtonProps): ReactElement {
    const containerClassNames = clsx(styles.container, className, {
        [styles.disabled]: disabled,
    });

    return (
        <button
            className={containerClassNames}
            aria-label={label}
            disabled={disabled}
            {...props}
        >
            <Link href={href} className={styles.text}>{label}</Link>
            <Image className={styles.image} src={hex} alt={alt} height={96} />
        </button>
    );
}
