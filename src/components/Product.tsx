'use client'
import Image from "next/image"

import { ProductsTitle } from "@/lib/constants"
import { Product } from "@/types/global"

export default function Products({data}: {data: Product[]}) {
    // 当前的过滤条件从状态管理中获得 latest / low / high
    const {value} = {value: "latest"};
    const products = [...data];
    if(value !== "latest"){
        products.sort((a, b) => {
            if(value === "low"){
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        })
    }

    return (
        <div className="flex-1">
            <p className="mb-8 text-xl">{ProductsTitle}</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(item => (
                        <div key={item.id} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer">
                            <Image src={item.imageUrl} alt={item.name} width={300} height={300} priority />
                            <div className="flex items-center justify-between mt-4">
                                <h3 className="flex-2xl text-slate-700">{item.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}