import PageTitle from "@/components/custom-components/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle text="About" />
      <p>
        This is a small app where you can fetch a number of gifs from Gify and
        copy their URLs to share as you like.
      </p>
      <br />
      <p>This page is built with Next.js and shadcn/ui.</p>
    </>
  );
}
