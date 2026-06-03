export default function LoadingPageList() {
  return (
    <>
      <h1 className="mb-8 text-xl">Projects</h1>

      <ul className="space-y-8">
        {Array(3)
          .fill(0)
          .map((_el, index) => (
            <li key={index}>
              <div className="w-full h-24 animate-pulse bg-amber-100"></div>
            </li>
          ))}
      </ul>
    </>
  );
}
