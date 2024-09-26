import { html } from "cheerio/lib/api/manipulation"

export default function layout({ children }: { children: React.ReactNode })
{
    return (
        <html lang="en" >
            <body>
                
        <div className="">{children}</div>
            </body>
</html >   );
}