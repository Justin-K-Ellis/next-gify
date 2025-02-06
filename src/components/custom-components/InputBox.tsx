"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InputBox({ imgUrl, setImgUrl }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=`;

  const [gifText, setGifText] = useState("");

  const handleClick = () => {
    setImgUrl(URL + gifText);
  };

  return (
    <Card className="w-8/12 mx-auto">
      <CardHeader className="text-2xl font-bold">
        Find{gifText ? " " + gifText : "..."}
      </CardHeader>
      <CardContent className="flex flex-row gap-1">
        <Input
          type="text"
          placeholder="cats"
          value={gifText}
          onChange={(event) => setGifText(event.target.value)}
        />
        <Button onClick={handleClick}>Go</Button>
      </CardContent>
    </Card>
  );
}
