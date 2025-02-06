// React imports
import { useState, useEffect } from "react";

// Next imports
import Image from "next/image";

// shadcn imports
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Custom imports
import { ImageInfo } from "@/lib/types";

export default function GifCard({ imgUrl }) {
  const [imageInfo, setImageInfo] = useState<ImageInfo>({
    url: "",
    title: "",
    height: 0,
    width: 0,
    alt: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchGif() {
      try {
        const response = await fetch(imgUrl);
        const responseData = await response.json();
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
    if (imgUrl) {
      fetchGif();
    }
  }, [imgUrl]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-8">
        <Badge>[Your GIF here!]</Badge>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center mt-8">
        <Badge variant={"destructive"}>There was an error :(</Badge>
      </div>
    );

  return (
    <Card className="p-1 flex flex-col justify-center mt-4">
      <CardContent className="flex flex-col justify-center items-center">
        <CardHeader className="text-2xl font-bold text-center">
          {imageInfo.title}
        </CardHeader>
        <Image
          src={imageInfo.url}
          width={imageInfo.width}
          height={imageInfo.height}
          alt={imageInfo.alt}
        />
      </CardContent>
    </Card>
  );
}
