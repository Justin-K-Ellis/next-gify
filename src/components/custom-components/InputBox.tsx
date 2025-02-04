"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InputBox() {
  const [gifText, setGifText] = useState("a Gif");

  return (
    <Card className="w-8/12 mx-auto">
      <CardHeader className="text-2xl font-bold">Find {gifText}</CardHeader>
      <CardContent className="flex flex-row gap-1">
        <Input
          type="text"
          placeholder="cats"
          value={gifText}
          onChange={(event) => setGifText(event.target.value)}
        />
        <Button>Go</Button>
      </CardContent>
    </Card>
  );
}
