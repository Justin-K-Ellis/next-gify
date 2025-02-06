import { useState, useEffect } from "react";
import { ImageInfo } from "@/lib/types";

function useAPI(url: string) {
  const [imageInfo, setImageInfo] = useState<ImageInfo>({
    url: "",
    title: "",
    height: 0,
    width: 0,
    alt: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGif() {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        setImageInfo({
          url: responseData.data.images.original.url,
          title: responseData.data.title,
          height: responseData.data.images.original.height,
          width: responseData.data.images.original.width,
          alt: responseData.data.title,
        });
        setIsLoading(false);
      } catch (error) {
        console.log(`An error occured when fetching the gif: ${error}`);
        setIsError(true);
      }
    }
    fetchGif();
  }, [url]);

  return { imageInfo, isError, isLoading };
}

export default useAPI;
