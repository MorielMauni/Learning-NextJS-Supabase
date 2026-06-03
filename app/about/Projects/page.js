import ProjectList from "@/components/ProjectList/ProjectList";
import { Suspense } from "react";
import LoadingPageList from "./loading-list";

export default async function ProjectPage() {
  return (
    <>
      <div className="mb-8 text-xl">Projects Lists</div>
      <Suspense fallback={<LoadingPageList />}>
        <ProjectList />
      </Suspense>
    </>
  );
}
