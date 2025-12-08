import Link from "next/link"
import {Separator} from '@/components/ui/separator'
import {Title, MenuList} from "@/lib/constants"

export default async function Header(){
    return (
        <div className="h-16 bg-white border-b">
            <div className="container flex items-center justify-between h-full">
                <h1 className="text-2xl">
                    <Link href="/">{Title}</Link>
                </h1>
                <div className="flex justify-end space-x-4 text-sm h-1/3">
                    {
                        MenuList.map((item, index) => {
                            return (
                                <>
                                    {index !== 0 && <Separator orientation="vertical"/>}
                                    <Link key={item.href} href={item.href}>{item.text}</Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}