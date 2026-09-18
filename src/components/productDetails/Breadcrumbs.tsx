import type { Category } from '../types/product'
import { Link } from 'react-router-dom'

type BreadcrumbsProps = {
    category: Category
}

export default function Breadcrumbs({ category }: BreadcrumbsProps) {
    return (
        <div className="flex py-3 px-4 md:px-0">
            <Link to={`/products`} className="text-[12px] pb-[0px] leading-[13px]">{category.name}</Link>
        </div>
    )
}