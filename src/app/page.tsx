import Image from 'next/image'
import { LibrariesTable } from '~/components/libraries-table'
import { LibraryRow } from '~/components/library-row'
import { ModeToggle } from '~/components/mode-toggle'
import { Table, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import { libs } from '~/libraries'

const languages = [...new Set(libs.map((x) => x.language).sort())]

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <main className="flex min-h-screen flex-col justify-between p-24 w-[100%]">
        <div>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Discord API Library Comparisons</h1>
          <p className='mt-0.5'>By Upsided, Forked from <a href="https://libs.advaith.io/" className='text-blue-500 hover:underline underline-offset-4 decoration-1 duration-100'>libs by Advaith</a></p>
        </div>
        {languages.map((language) => <div key={language} className='mb-4 mt-5 fw'>
          <h2 id={language.toLowerCase()} className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 hover:underline underline-offset-4 decoration-1'><a href={`#${encodeURIComponent(language.toLowerCase())}`}>{language}</a></h2>

          <LibrariesTable>
            {libs.filter((v) => v.language === language).map((lib) =>
              <LibraryRow library={lib} key={lib.name} />
            )}
          </LibrariesTable>
        </div>)}
        <ModeToggle className="left-3 fixed bottom-3 z-10" />
      </main>
    </div>
  )
}
