import Image from "next/image";
import dog1 from "@/public/images/dog1.png";

export default function PhotosPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl mb-8 font-semibold">Photos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
          <div className="relative h-60">
            <Image
              fill
              src={dog1}
              className="object-cover w-full h-full"
              alt="Dog-1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
