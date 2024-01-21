'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { GiWindmill } from 'react-icons/gi'
import { TbBeach } from 'react-icons/tb'
import CategoryBox from './CategoryBox'

export const categories = [
    {
        label: '경매상품',
        path: 'auction',
        icon: TbBeach,
        description: '경매상품 카테고리 입니다.'
    },
    {
        label: '판매상품',
        path: 'selling',
        icon: GiWindmill,
        description: '판매상품 카테고리 입니다.'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    
  return (
    <div className = 'flex flex-row items-center justify-between pt-4 overflow-x-auto'>
        {categories.map((item) => (
            <CategoryBox
                key={item.label}
                label={item.label}
                path={item.path}
                icon={item.icon}
                selected={category === item.path}
            />
        ))}
    </div>
  )
}

export default Categories