// 只有在生产环境下，全局错误才生效
"use client"

export default function GlobalError(){
    return (
        <html>
            <body>
                <h1>global error</h1>
            </body>
        </html>
    )
}

