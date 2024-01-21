import { useSearchParams } from 'next/navigation'
import { PRODUCTS_PER_PAGE } from '@/constants';
import React, { PropsWithChildren } from 'react'
import qs from 'query-string'
import Link from 'next/link';

type PagenationLinkProps = {
    page?: number | string;
    active?: boolean;
    disabled?: boolean;
} & PropsWithChildren

const PaginationLink = ({page, active, children, disabled}: PagenationLinkProps) => {
    const params = useSearchParams();
    const limit = PRODUCTS_PER_PAGE;
    const skip = page ? (Number(page) - 1) * limit : 0;

    let currentQuery = {};

    if(params) {
        currentQuery = qs.parse(params?.toString());
    }

    const updatedQuery = {
        ...currentQuery,
        page,
        skip
    }

  return (
    <Link
        href={{ query: updatedQuery}}
        className={`p-2 text-2xl ${active ? "font-bold text-orange-500" : "text-gray-500"}
        ${disabled ? "pointer-events-none text-gray=200" : ""}`}
    >{children}</Link>
  )
}

export default PaginationLink