'use client'

import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group"

import {SortValue} from "@/types/global"
import {SortTitle, SortList} from "@/lib/constants"

export default function Sort(){

    const handleValueChange = (value: SortValue) => {
        console.log("value=", value);
    }

    return (
        <div className="w-64 py-4">
            <p className="m-5 text-xl">{SortTitle}</p>
            <ToggleGroup className="flex-col gap-3" type="single" defaultValue="latest" onValueChange={handleValueChange}>
                {
                    SortList.map(item => <ToggleGroupItem key={item.value} value={item.value}>{item.text}</ToggleGroupItem>)
                }
            </ToggleGroup>
        </div>
    )
}