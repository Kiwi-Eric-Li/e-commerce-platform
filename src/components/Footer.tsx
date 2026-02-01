import Link from "next/link"
import {Separator} from '@/components/ui/separator'

import {Title, NavList} from "@/lib/constants"

export default async function Footer(){
    return (
        <div className="border-t mt-6">
            <div className="container py-32 flex justify-between">
                <h2 className="text-2xl">
                    <Link href="/">{Title}</Link>
                </h2>
                <div className="grid-cols-3 gap-10 flex">
                    {
                        NavList.map((navItem, index) => {
                            return (
                                <div key={index}>
                                    <span>{navItem.title}</span>
                                    <ul className="m-4 space-y-3">
                                        {navItem.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <Separator orientation="vertical"/>
                    <div>
                        <span>Categories</span>
                        <ul className="m-4 space-y-3">
                            <li>Clothing</li>
                            <li>Audio</li>
                            <li>Furniture</li>
                        </ul>
                    </div>
                    <Separator orientation="vertical"/>
                    <div>
                        <span>Categories</span>
                        <ul className="m-4 space-y-3">
                            <li>Clothing</li>
                            <li>Audio</li>
                            <li>Furniture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}