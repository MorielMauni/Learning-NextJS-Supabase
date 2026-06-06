export default function PhotosPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl mb-8 font-semibold">Photos</h1>

        <div className="grid grid-cols-2 gap-4 overflow-hidden">
          <div className="h-60">
            <img src="/images/dog1.png" className="object-cover w-full h-full"></img>
          </div>
        </div>
      </div>
    </>
  );
}
