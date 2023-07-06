import React from 'react'

type ImageCaptionProps = {
    children: React.ReactNode
}

const ImageCaption: React.FC<ImageCaptionProps> = (props) => {
    const { children } = props
  return (
    <div className="text-sm text-slate-400 dark:text-slate-500 w-full text-center p-3">
        {children}
    </div>
  )
}

export default ImageCaption