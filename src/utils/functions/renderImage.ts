function renderImage(url: string) {
    return url
      ? process.env.NEXT_PUBLIC_ASSET_URL + url
      : "/images/img-fallback.png";
  }
  
  export { renderImage };
  