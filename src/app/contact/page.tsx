import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

import PageTitle from "@/components/custom-components/PageTitle";
import SocialCardContent from "@/components/custom-components/SocialCardContent";

export default function Contact() {
  return (
    <>
      <PageTitle text="Contact" />
      <Card className="p-2">
        <CardTitle className="text-2xl font-semibold text-center my-4">
          Find me here
        </CardTitle>
        <SocialCardContent url="https://github.com/Justin-K-Ellis">
          <FaSquareGithub />
          GitHub
        </SocialCardContent>
        <SocialCardContent url="https://www.linkedin.com/in/justin-klitgaard-ellis-384b9965/">
          <FaLinkedin />
          LinkedIn
        </SocialCardContent>
      </Card>
    </>
  );
}
