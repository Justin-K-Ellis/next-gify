"use client";

import { useState } from "react";

import GifCard from "@/components/custom-components/GifCard";
import InputBox from "@/components/custom-components/InputBox";
import PageTitle from "@/components/custom-components/PageTitle";

export default function Home() {
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <PageTitle text="Home" />
      <InputBox imgUrl={imgUrl} setImgUrl={setImgUrl} />
      <GifCard imgUrl={imgUrl} />
    </>
  );
}
