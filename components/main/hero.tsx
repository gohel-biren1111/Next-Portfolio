import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="
          rotate-180 absolute left-0 w-full h-full object-cover -z-20
          top-[-480px] lg:top-[-340px]
          max-[767px]:top-[-475px]
          max-[479px]:top-[-425px]
        "
      >
        <source src="/videos/blackhole.mp4" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
