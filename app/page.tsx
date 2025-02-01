import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import EducationSection from "./education/page";

export default function Home() {

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-all duration-300">
      <div className="py-24 text-center">
        <div className="container max-w-1xl">
          <Intro />
          <div className="prose prose-lg dark:prose-invert mx-auto mt-6">
          </div>
        </div>
      </div>
    </section>
  );
}
