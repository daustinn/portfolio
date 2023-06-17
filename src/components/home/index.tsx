import Image from 'next/image'
function HomeSection() {
  return (
    <>
      <section className="h-screen relative flex items-center max-w-[1000px] mx-auto">
        <div className="p-0 h-full text-center max-w-full page_center__diPtZ">
          <div className="flex items-center flex-col justify-center w-full gap-4">
            <div className="opacity-90 w-36 h-36 -mb-4">
              <Image
                src="/avatar-square.png"
                alt="Avatar - Daustinn"
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col -z-10 gap-3">
              <h1 className="font-extrabold relative  inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#fde089] dark:to-[#ec8b26] from-[#ffd24e] to-[#b96205]">
                <span>{'¡Hi!'}</span>
                <span className="shake-left-right inline-flex">
                  <Image
                    src="/wave.png"
                    alt="Wave Icon"
                    width={80}
                    height={80}
                  />
                </span>
                <span>{", I'm David or Daustinn"}</span>
              </h1>
              <h2 className="dark:text-[#cecece] text-neutral-700 tracking-tight font-semibold text-2xl">
                {'Software Engineer & Music Producer'}
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="animate-bounce block">
            <Image
              src="/pointing-up.png"
              alt="Pointing Icon"
              width={37}
              className="rotate-180"
              height={37}
            />
          </a>
        </div>
      </section>
    </>
  )
}

export default HomeSection
