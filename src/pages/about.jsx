import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Fajar Nur Rohman</title>
        <meta
          name="description"
          content="I’m Fajar Nur Rohman. I live in Pemalang City, where I build my future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Fajar Nur Rohman. I live in Pemalang City, where I build my
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fermentum posuere urna nec tincidunt praesent semper feugiat
                nibh sed. In ante metus dictum at tempor commodo. Duis at
                consectetur lorem donec massa sapien faucibus et molestie. In
                ornare quam viverra orci sagittis eu volutpat. Nulla facilisi
                morbi tempus iaculis urna id volutpat lacus laoreet. Eleifend
                donec pretium vulputate sapien nec. Scelerisque viverra mauris
                in aliquam sem fringilla ut morbi. Aliquam id diam maecenas
                ultricies mi eget. Scelerisque varius morbi enim nunc faucibus a
                pellentesque sit. Egestas dui id ornare arcu odio. Vestibulum
                lectus mauris ultrices eros in. Interdum velit euismod in
                pellentesque massa placerat. Id aliquet lectus proin nibh nisl
                condimentum.
              </p>
              <p>
                Tellus elementum sagittis vitae et leo duis. Nisl rhoncus mattis
                rhoncus urna neque viverra. Amet porttitor eget dolor morbi non
                arcu risus quis. Integer vitae justo eget magna fermentum
                iaculis eu non diam. Faucibus nisl tincidunt eget nullam non.
                Quis ipsum suspendisse ultrices gravida dictum fusce ut.
                Adipiscing elit ut aliquam purus sit amet. Sem fringilla ut
                morbi tincidunt augue interdum velit. Sed egestas egestas
                fringilla phasellus faucibus scelerisque eleifend. Elit
                ullamcorper dignissim cras tincidunt lobortis feugiat. Augue ut
                lectus arcu bibendum at varius vel. Gravida neque convallis a
                cras semper. Ac turpis egestas sed tempus urna et pharetra
                pharetra. Consectetur purus ut faucibus pulvinar elementum.
                Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Non sodales neque sodales ut etiam sit amet nisl purus.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/jaaaayyyyyyyy/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/fajjarnr"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/fajarnurrohman/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:fajjarnr@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                fajjarnr@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
