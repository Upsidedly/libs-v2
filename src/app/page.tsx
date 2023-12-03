"use client";

import { useState } from 'react'
import { LibrariesTable } from '~/components/libraries-table'
import { LibraryRow } from '~/components/library-row'
import { ModeToggle } from '~/components/mode-toggle'
import { Nav } from '~/components/nav'
import { libs } from '~/libraries'

const languages = [...new Set(libs.map((x) => x.language).sort())]

export default function Home() {
  const [query, setQuery] = useState('')
  return (<>
    <Nav searchState={setQuery} />
    <div className='w-full flex justify-center align-center'>
      <main className="flex min-h-screen flex-col p-4 sm:p-5 md:p-10 lg:p-15 w-[100%]">
        <div className='w-full flex justify-center align-center flex-col'>
          <h1 id="top" className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl hover:underline underline-offset-4 decoration-1'><a href='#top'>Discord API Library Comparisons</a></h1>
          <p className='mt-0.5'>By Upsided, Information from <a target='_blank' href="https://libs.advaith.io/" className='text-blue-500 hover:underline underline-offset-4 decoration-1 duration-100'>libs by Advaith</a></p>
          <p className="mt-0.5">Github: <a className='text-blue-500 hover:underline underline-offset-4' href="https://github.com/Upsidedly/libs-v2">https://github.com/Upsidedly/libs-v2</a></p>
          <p className='mt-0.5'>Interested in adding your own or updating what&apos;s there? Make a PR! Edit this file: <a className='text-blue-500 hover:underline underline-offset-4' href="https://github.com/Upsidedly/libs-v2/blob/main/src/libraries.ts">libraries.ts</a></p>
        </div>
        {languages.filter((lang) => libs.filter((lib) => lib.name.toLowerCase().includes(query.toLowerCase())).some((v) => v.language === lang)).map((language) => <div key={language} className='mb-4 mt-5 fw'>
          <h2 id={language.toLowerCase()} className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 hover:underline underline-offset-4 decoration-1'><a href={`#${encodeURIComponent(language.toLowerCase())}`}>{language}</a></h2>

          <LibrariesTable>
            {libs.filter((v) => v.language === language).filter((v) => v.name.toLowerCase().includes(query.toLowerCase())).map((lib) =>
              <LibraryRow library={lib} key={lib.name} />
            )}
          </LibrariesTable>
        </div>)}
        <ModeToggle className="left-3 fixed bottom-3 z-10" />
      </main>
    </div>
  </>
  )
}
