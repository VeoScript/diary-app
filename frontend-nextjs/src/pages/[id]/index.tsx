import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CustomImage from '~/components/CustomImage'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'

import { useGetDiary } from '~/helpers/tanstack/queries/diaries'

const Post = () => {
  const { query } = useRouter()

  const {data: diary, isLoading: isLoadingDiary, isError: isErrorDiary, error: errorDiary} = useGetDiary(String(query.id))

  if (isLoadingDiary) return <div className="flex flex-row items-center justify-center w-full h-screen">Loading...</div>
  if (isErrorDiary) return <div className="flex flex-row items-center justify-center w-full h-screen">{errorDiary.response.data}</div>

  return (
    <>
      <Head>
        <title>{diary.data.attributes.description}</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl space-y-10">
          <div className="flex w-full h-[20rem] overflow-hidden rounded-xl">
            <CustomImage
              src={`${process.env.DEV_API_URL}${diary.data.attributes.image.data.attributes.url}`}
              alt={diary.data.attributes.description}
            />
          </div>
          <div className="flex flex-row items center justify-between w-full">
            <h3 className="font-quicksand font-bold text-xl">{diary.data.attributes.description}</h3>
            <Link
              href={'/'}
              className="px-3 py-2 rounded-md font-quicksand text-sm text-white bg-blue-500 transition ease-in-out duration-200 hover:bg-opacity-50"
            >
              Homepage
            </Link>
          </div>
          <div className="flex flex-col w-full">
            <ReactMarkdown
              className="prose font-quicksand"
              children={diary.data.attributes.content}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
