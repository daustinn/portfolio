export default function Footer() {
  return (
    <footer className="py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300">
      <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
        <div className="flex flex-col gap-2">
          <h4 className="text-left font-extrabold text-2xl tracking-tighter dark:text-white">
            <div className="flex gap-2 font-medium dark:text-neutral-400 text-neutral-800 text-xs">
              <span>f</span>
              <span>r</span>
              <span>o</span>
              <span>m</span>
            </div>
            <a
              href="https://es.wikipedia.org/wiki/Per%C3%BA"
              target="_blank"
              referrerPolicy="no-referrer"
              className="hover:underline"
            >
              Perú
            </a>
          </h4>
          <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700">
            Loosely designed in{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href=""
            >
              Invision Studio
            </a>{' '}
            and coded in{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href=""
            >
              Visual Studio Code
            </a>{' '}
            by yours truly. Built with{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href=""
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href=""
            >
              Tailwind CSS
            </a>{' '}
            , deployed with{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href=""
            >
              Vercel
            </a>{' '}
            . All text is set in the Inter typeface.
          </p>
        </div>
      </div>
    </footer>
  )
}
