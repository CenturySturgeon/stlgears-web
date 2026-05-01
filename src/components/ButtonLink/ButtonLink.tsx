'use client';

import Link from "next/link";
import { Button, ButtonProps, ElementProps } from "@mantine/core";

// Combine Mantine's Button props with Next's Link props
interface ButtonLinkProps extends ButtonProps, Omit<ElementProps<'a', 'href'>, 'color'> {
    href: string;
    children: React.ReactNode;
}

export default function ButtonLink({ href, children, ...props }: ButtonLinkProps) {
    return (
        <Button component={Link} href={href} {...props}>
            {children}
        </Button>
    );
}