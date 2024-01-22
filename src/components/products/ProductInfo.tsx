import { User } from '@prisma/client'
import React from 'react'
import { IconType } from 'react-icons'
import ProductCategory from './ProductCategory';
import Avatar from '../Avatar';
import { formatTime } from '@/helpers/dayjs';

interface ProductInfoProps {
    user: User,
    description: string,
    createdAt: Date,
    category?: {
        icon: IconType;
        label: string;
        description: string;
    }
}

const ProductInfo = ({
    user,
    category,
    createdAt,
    description
}: ProductInfoProps) => {
  return (
    <div>
        <div>
            <div className='
            flex items-center gap-2 text-xl font-semibold
            '>
                <Avatar src={user?.image}/>
                <p>{user?.name}</p>
            </div>
            <div>
                {formatTime(createdAt)}
            </div>
        </div>
        <hr />
        {category &&
            <ProductCategory
                icon={category.icon}
                label={category.label}
                description={category.description}
            />
        }
        <hr />
        <div>
            {description}
        </div>
    </div>
  )
}

export default ProductInfo