import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

export default function Home() {
  const content = '#This is a markdown heading'
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="py-24 text-center">
        <div className="container max-w-3xl">
          <Intro />
          <MDXRemote source={content} />
        </div>
      </div>
    </section>
  );
}
