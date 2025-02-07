import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SocialCardContent({ url, children }) {
  return (
    <CardContent className="text-xl hover:bg-secondary hover:shadow rounded-md flex items-center justify-center">
      <Link href={url} className="flex gap-1 items-center justify-center pt-4">
        {children}
      </Link>
    </CardContent>
  );
}
