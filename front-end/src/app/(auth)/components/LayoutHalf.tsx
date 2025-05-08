import Image from "next/image";

export const LayoutHalf = () => {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="absolute top-8 left-20 text-[16px] ">
        <Image src={"/Logo.png"} alt="logo" width={160} height={50} />
      </div>
      <div className="flex flex-col items-center gap-10">
        <Image src={"/illustration.png"} alt="logo" width={240} height={240} />
        <div className="flex flex-col items-center gap-3 text-black">
          <p className="text-2xl font-bold">Fund your creative work</p>
          <p className="text-[16px] text-center w-[455px]">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think.
          </p>
        </div>
      </div>
    </div>
  );
};
