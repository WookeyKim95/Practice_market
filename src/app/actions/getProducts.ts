import { PRODUCTS_PER_PAGE } from "@/constants";

export interface ProductsParams {
    category?: string;
    page?: number;
    skip?: number;
}

export default async function getProducts(params: ProductsParams) {
    try {
        const {category, skip} = params;
        let query: any = {};

        if (category) {
            query.category = category;
        }

        const totalItems = await prisma?.product.count({ where: query});

        const products = await prisma?.product.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            },
            skip: skip ? Number(skip) :0 ,
            take: PRODUCTS_PER_PAGE
        })

        return {
            data: products,
            totalItems
        }
    } catch (error: any) {
        throw new Error(error);
    }
}