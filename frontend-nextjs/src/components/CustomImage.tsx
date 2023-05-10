import React from 'react'
import Image from 'next/image'

interface IProps {
  src: string;
  alt: string;
}

type CustomeImageProps = (props: IProps) => JSX.Element

const CustomImage: CustomeImageProps = ({ src, alt }) => {
  return (
    <Image
      priority
      unoptimized
      className="object-cover w-full h-full"
      src={src}
      alt={alt}
      width={500}
      height={500}
    />
  )
}

export default CustomImage
