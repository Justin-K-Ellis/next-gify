import { useState, useEffect } from "react";
import { ImageInfo } from "@/lib/types";

function useAPI(url) {
  const [imageInfo, setImageInfo] = useState<ImageInfo>({
    url: "",
    title: "",
    height: 0,
    width: 0,
    alt: "",
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchGif() {
      try {
        const response = await fetch(url);
        const responseData = response.json();
        setImageInfo({
          url: responseData.data.images.original.url,
          title: responseData.data.title,
          height: responseData.data.images.original.height,
          width: responseData.data.images.original.width,
          alt: responseData.data.title,
        });
      } catch (error) {
        console.log(`An error occured when fetching the gif: ${error}`);
        setIsError(true);
      }
    }
    fetchGif();
  }, []);

  return { imageInfo, isError };
}
