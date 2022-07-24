import Head from "next/head"
import Link from "next/link"

export default function Error500() {
  return (
    <div>
      <Head>
        <title>Server Error 500</title>
        <meta name="description" content="Cloud I/O streaming platform" />
        <link rel="icon" href="/iocloud-logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ff0000" />
      </Head>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">500</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Server Error</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, Unexpected Error. You&apos;ll find lots to explore on the home page. </p>
            <Link href="/">
              <a className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
