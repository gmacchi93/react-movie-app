import React, { CSSProperties, useState } from "react";

type Props = {
  src: string;
  fallbackSrc: string;
  placeholderColor?: string;
  className?: string;
  alt?: string;
  width?: number | string | undefined;
  height?: number | string | undefined;
  style?: CSSProperties;
  loading?: "eager" | "lazy" | undefined;
};

const Image = ({
  src: srcProp,
  alt,
  className,
  fallbackSrc,
  width = undefined,
  height = undefined,
  style,
  loading = undefined,
  placeholderColor,
}: Props) => {
  const [state, setState] = useState({
    src: srcProp,
    loaded: false,
    errored: false,
  });

  const onError = () => {
    if (!state.errored) {
      setState((prev) => ({
        ...prev,
        src: fallbackSrc,
        errored: true,
      }));
    }
  };

  const onLoad = () => {
    if (!state.loaded) {
      setState((prev) => ({
        ...prev,
        loaded: true,
        errored: false,
      }));
    }
  };

  let styleAux = {
    ...style,
    backgroundColor: placeholderColor || "white",
  };

  if (state.loaded) {
    styleAux.backgroundColor = "transparent";
  }

  return (
    <img
      className={className}
      alt={alt}
      width={width}
      height={height}
      style={styleAux}
      onLoad={onLoad}
      onError={onError}
      src={state.src}
      loading={loading}
    />
  );
};

export default Image;
