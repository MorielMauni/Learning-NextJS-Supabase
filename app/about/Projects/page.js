import ProjectList from "@/components/ProjectList/ProjectList";
import { Suspense } from "react";
import LoadingPageList from "./loading-list";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProjectPage() {
  return (
    <>
      <div className="mb-8 text-xl">Projects Lists</div>
      <ErrorBoundary fallback={<div>Can not fetch at the moment</div>}>
        <Suspense fallback={<LoadingPageList />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
