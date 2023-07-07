import React from "react";

type ImageCaptionProps = {
  children: React.ReactNode;
};

const ImageCaption: React.FC<ImageCaptionProps> = (props) => {
  const { children } = props;
  return (
    <div className="w-full p-3 text-center text-sm text-slate-400 dark:text-slate-500">
      {children}
    </div>
  );
};

export default ImageCaption;
