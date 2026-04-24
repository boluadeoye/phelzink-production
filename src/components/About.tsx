const MOBILE_SAFE_ZONE_PX = 342; // 390 viewport - (px-6 + px-6)
const PRODUCTION_MEASURED_EM = 5.6; // Montserrat 900 with -0.05em tracking
const MOBILE_PRODUCTION_PX = Math.floor(MOBILE_SAFE_ZONE_PX / PRODUCTION_MEASURED_EM); // 61px hard lock

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f3f3f3] pt-[116px] md:pt-[132px]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-start">
          <div className="relative z-20 md:col-span-6">
            <h2
              className="w-[342px] max-w-full font-black leading-[0.74] tracking-[-0.05em]"
              aria-label="About Phelzink Production"
            >
              <span className="block whitespace-nowrap text-[76px] text-[#0a0a0f]">About</span>
              <span
                className="block whitespace-nowrap text-[#8f8f94]"
                style={{ fontSize: `${MOBILE_PRODUCTION_PX}px` }}
              >
                Phelzink
              </span>
              <span
                className="block whitespace-nowrap text-[#8f8f94]"
                style={{ fontSize: `${MOBILE_PRODUCTION_PX}px` }}
              >
                Production
              </span>
            </h2>

            <div className="relative mt-4 h-[640px] w-full md:hidden">
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png"
                alt=""
                className="pointer-events-none absolute left-1/2 top-[2%] w-[162%] max-w-none -translate-x-1/2 select-none"
              />
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png"
                alt="3D character reading a book on a chair"
                className="absolute bottom-0 left-1/2 w-[84%] max-w-none -translate-x-1/2 scale-[1.14] select-none"
              />
            </div>

            <div className="relative z-20 mt-[-78px] max-w-[820px] md:mt-[56px]">
              <h3 className="text-[54px] font-black leading-[0.76] tracking-[-0.05em] text-[#0a0a0f] md:text-[62px]">
                Our story
              </h3>
              <div className="mt-8 space-y-7 text-[20px] font-light leading-[1.6] tracking-[-0.01em] text-[#2b2b32] md:text-[34px] md:leading-[1.58]">
                <p>
                  Founded in 2021, Phelzink Production began with a simple mission: to help
                  businesses create compelling brand identities through exceptional design and
                  high-quality printing.
                </p>
                <p>
                  Over the past 6 years, we&apos;ve grown into a comprehensive branding and print
                  agency, serving hundreds of clients across diverse industries. Our success is
                  built on a foundation of creativity, quality, and unwavering commitment to our
                  clients&apos; vision.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting-edge technology to
                  deliver print and design solutions that not only meet, but exceed expectations.
                  Every project we undertake is an opportunity to showcase our passion for
                  excellence and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:col-span-6 md:block">
            <div className="relative h-[860px] w-[118%] -translate-x-[20%]">
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png"
                alt=""
                className="pointer-events-none absolute left-[-46%] top-[-4%] w-[178%] max-w-none select-none"
              />
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png"
                alt="3D character reading a book on a chair"
                className="absolute bottom-[2%] left-[10%] w-[76%] max-w-none scale-[1.2] select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
