import { URL } from 'node:url';
import type { FC, PropsWithChildren } from 'react';
import { profile, type EnvModel } from '../../config/index.js';
import { Background } from '../components/Background.js';
import { Button } from '../components/Button.js';
import { ButtonLink } from '../components/ButtonLink.js';
import { Icon } from '../components/Icon.js';
import { Link, type LinkProps } from '../components/Link.js';
import { Meta } from '../components/Meta.js';
import { ThemedImage } from '../components/ThemedImage.js';
import { cn } from '../utils/cn.js';
import { getFullTitle } from '../utils/get-full-title.js';

export const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> =
  function ({
    currentPath,
    env,
    title,
    image = '/favicon.ico',
    description = profile.description,
    type = 'website',
    children,
  }) {
    const fullTitle = getFullTitle(title);
    const fullImageUrl = new URL(image, env.BASE_URL).toString();
    const fullCurrentPath = new URL(currentPath, env.BASE_URL).toString();
    const domain = new URL(env.BASE_URL).hostname;

    return (
      <html
        className={cn(`dark:[color-scheme:dark]`)}
        lang="en"
        prefix="og: https://ogp.me/ns#">
        <head>
          <Meta title={title} />

          {/* FACEBOOK */}
          <meta
            property="og:title"
            content={fullTitle}
          />
          <meta
            property="og:description"
            content={description}
          />
          <meta
            property="og:url"
            content={fullCurrentPath}
          />
          <meta
            property="og:image"
            content={fullImageUrl}
          />
          <meta
            property="og:type"
            content={type}
          />

          {/* TWITTER */}
          <meta
            name="twitter:title"
            content={fullTitle}
          />
          <meta
            name="twitter:description"
            content={description}
          />
          <meta
            property="twitter:url"
            content={fullCurrentPath}
          />
          <meta
            name="twitter:image"
            content={fullImageUrl}
          />
          <meta
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            property="twitter:domain"
            content={domain}
          />
        </head>
        <body
          className={cn(
            'bg-slate-50 dark:bg-slate-900 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex min-h-dvh flex-col',
          )}>
          <Background />

          <Header>
            <Nav />
          </Header>

          <main className={cn('flex flex-1 flex-col gap-2 px-4 py-8')}>
            {children}
          </main>

          <Footer />
        </body>
      </html>
    );
  };

export interface DefaultLayoutProps {
  // TODO merge currentPath with env.BASE_URL
  currentPath: string;
  env: EnvModel;
  title?: string;
  image?: string;
  description?: string;
  type?: string;
}

const Header: FC<PropsWithChildren> = function ({ children }) {
  return (
    <header
      className={cn(
        'flex gap-1 items-center p-4 border-b border-slate-300 dark:border-slate-600',
      )}>
      <nav>
        <ButtonLink
          href="/"
          className={cn('!p-0')}>
          <ThemedImage
            src="/ui/header-logo.webp"
            srcDark="/ui/header-logo-dark.webp"
            alt="Logo"
            width="120"
          />
        </ButtonLink>
      </nav>

      <span className="flex-1"></span>

      {children}
    </header>
  );
};

const Nav: FC = function () {
  return (
    <div x-data="true">
      <nav
        data-testid="desktop-nav"
        className="hidden lg:flex">
        <menu className="flex gap-3 md:gap-4 lg:gap-6">{navLinks}</menu>
      </nav>

      <Button
        x-on:click="$store.defaultLayout.openMobileNav()"
        aria-label="mobile-nav-burger"
        className="lg:hidden">
        <Icon glyph="menu" />
      </Button>

      <template x-teleport="body">
        <div
          x-bind:class="$store.defaultLayout.isMobileNavOpen ? 'translate-y-0' : '-translate-y-full'"
          x-cloak="true"
          className={cn(
            'fixed top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur z-10 transition duration-300',
          )}>
          <div
            className={cn(
              'mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col h-full',
            )}>
            <Header>
              <Button
                x-on:click="$store.defaultLayout.closeMobileNav()"
                aria-label="modal-close">
                <Icon glyph="close" />
              </Button>
            </Header>

            <nav
              data-testid="mobile-nav"
              className="flex-1 flex flex-col justify-center">
              <menu className="flex flex-col gap-3 px-6">{navLinks}</menu>
            </nav>
          </div>
        </div>
      </template>
    </div>
  );
};

const navLinksMeta = [
  { label: '👨‍💻 About', url: '/about' },
  { label: '✏️ Posts', url: '/posts' },
  { label: '🏗️ Projects', url: '/projects' },
] as const;

const NavLink: FC<PropsWithChildren<NavLinkProps>> = function ({
  children,
  className,
  href,
  ...rest
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'font-semibold block text-center text-2xl p-3 md:p-4 rounded-full border-2 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-600 lg:text-sm lg:p-0 lg:bg-none dark:lg:bg-none lg:rounded-none lg:border-none',
          className,
        )}
        bindClass={`window.location.pathname.startsWith(href) && 'underline !text-cyan-500'`}
        {...rest}>
        {children}
      </Link>
    </li>
  );
};

export interface NavLinkProps extends LinkProps {}

const navLinks = navLinksMeta.map((navLink) => (
  <NavLink
    key={navLink.url}
    href={navLink.url}>
    {navLink.label}
  </NavLink>
));

const Footer: FC = function () {
  return (
    <footer className="flex gap-1 items-center p-4 border-t border-slate-300 dark:border-slate-600 text-slate-500">
      {/* TODO replace with Text */}
      <span className="text-sm">Mordechai Dror © 2023-present</span>

      <div className="flex-1"></div>

      <ButtonLink
        href="/rss.xml"
        aria-label="RSS feed"
        target="_blank">
        <Icon glyph="rss" />
      </ButtonLink>
    </footer>
  );
};
