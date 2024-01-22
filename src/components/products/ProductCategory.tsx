import React from 'react'
import { IconType } from 'react-icons'

interface ProductCategoryProps {
    icon: IconType;
    label: string;
    description: string;
}

const ProductCategory = ({
    icon: Icon,
    label,
    description
}: ProductCategoryProps) => {
  return (
    <div>
        <div className='flex flex-row items-center gap-4'>
            <Icon size={40} className='text-neutral-600' />
            <div className='flex flex-col'>
                <div className='text-lg font-semibold'>
                    {label}
                </div>
                <div className='font-light text-neutral-500'>
                    {description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCategory