"use client";

import InputBox from "@/components/custom-components/InputBox";
import PageTitle from "@/components/custom-components/PageTitle";
import { useState } from "react";

export default function Home() {
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <PageTitle text="Home" />
      <InputBox imgUrl={imgUrl} setImgUrl={setImgUrl} />
      <p>Image URL: {imgUrl}</p>
    </>
  );
}
