import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CustomImage from '~/components/CustomImage'
import ReactMarkdown from 'react-markdown'

import { DiariesProps } from '~/shared/interfaces'
import { useGetDiaries } from '~/helpers/tanstack/queries/diaries'

const Home = () => {

  const { data: diaries, isLoading: isLoadingDiaries, isError: isErrorDiaries, error: errorDiaries } = useGetDiaries()

  if (isLoadingDiaries) return <div className="flex flex-row items-center justify-center w-full h-screen">Loading...</div>
  if (isErrorDiaries) return <div className="flex flex-row items-center justify-center w-full h-screen">{errorDiaries.response.data}</div>

  return (
    <>
      <Head>
        <title>Diary App</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full h-full p-5">
        <div className="flex flex-col items-center w-full max-w-5xl space-y-10">
          <h3 className="font-quicksand font-bold text-xl">Diaries</h3>
          <div className="flex flex-col w-full space-y-3">
            {diaries.data.map((diary: DiariesProps) => (
              <div key={diary.id} className="flex flex-row w-full overflow-hidden rounded-xl border border-neutral-300">
                <div className="flex w-full">
                  <CustomImage
                    src={`${process.env.DEV_API_URL}${diary.attributes.image.data.attributes.url}`}
                    alt={diary.attributes.description}
                  />
                </div>
                <div className="flex flex-col items-start w-full p-3 space-y-5">
                  <h3 className="font-quicksand font-bold text-xl">{diary.attributes.description}</h3>
                  <ReactMarkdown
                    className="prose font-quicksand"
                    children={diary.attributes.content}
                  />
                  <div className="flex flex-row items-center justify-end w-full">
                    <Link
                      href={`/${diary.id}`}
                      className="px-3 py-2 rounded-md font-quicksand text-sm text-white bg-blue-500 transition ease-in-out duration-200 hover:bg-opacity-50"
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
