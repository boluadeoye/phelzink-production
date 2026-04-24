const MOBILE_VIEWPORT = 390;
const MOBILE_SIDE_PADDING = 24 * 2; // px-6 on both sides
const MOBILE_SAFE_WIDTH = MOBILE_VIEWPORT - MOBILE_SIDE_PADDING; // 342px
const PRODUCTION_WIDTH_EM = 5.6; // Montserrat 900, tracking -0.05em
const LOCKED_MOBILE_TITLE_PX = Math.floor(MOBILE_SAFE_WIDTH / PRODUCTION_WIDTH_EM); // 61px

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f3f3f3] pt-[112px] md:pt-[120px]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-16">
        <div className="md:grid md:grid-cols-12 md:items-start">
          <div className="relative z-20 md:col-span-5">
            <h2
              className="w-[342px] max-w-full font-black leading-[0.76] tracking-[-0.05em]"
              aria-label="About Phelzink Production"
            >
              <span
                className="block whitespace-nowrap text-[#0a0a10]"
                style={{ fontSize: `${LOCKED_MOBILE_TITLE_PX}px` }}
              >
                About
              </span>
              <span
                className="block whitespace-nowrap text-[#68686f]"
                style={{ fontSize: `${LOCKED_MOBILE_TITLE_PX}px` }}
              >
                Phelzink
              </span>
              <span
                className="block whitespace-nowrap text-[#68686f]"
                style={{ fontSize: `${LOCKED_MOBILE_TITLE_PX}px` }}
              >
                Production
              </span>
            </h2>

            <div className="relative z-10 mt-[-6px] h-[560px] md:hidden">
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png"
                alt=""
                className="pointer-events-none absolute left-1/2 top-[2%] w-[178%] max-w-none -translate-x-1/2 select-none"
              />
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png"
                alt="3D character reading a book on a chair"
                className="absolute bottom-[-2%] left-1/2 w-[92%] max-w-none -translate-x-1/2 scale-[1.14] select-none"
              />
            </div>

            <div className="relative z-20 mt-[-32px] md:mt-[26px] md:max-w-[520px]">
              <h3 className="text-[56px] font-black leading-[0.8] tracking-[-0.045em] text-[#0a0a10] md:text-[54px]">
                Our story
              </h3>
              <div className="mt-7 space-y-8 text-[18px] font-light leading-[1.5] tracking-[-0.01em] text-[#2f2f35] md:text-[16px] md:leading-[1.45]">
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
                  deliver print and design solutions that not only meet but exceed expectations.
                  Every project we undertake is an opportunity to showcase our passion for
                  excellence and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:col-span-7 md:block">
            <div className="relative h-[760px] w-[120%] -translate-x-[20%]">
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png"
                alt=""
                className="pointer-events-none absolute left-[-44%] top-[-2%] w-[172%] max-w-none select-none"
              />
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png"
                alt="3D character reading a book on a chair"
                className="absolute bottom-[3%] left-[14%] w-[72%] max-w-none scale-[1.16] select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
