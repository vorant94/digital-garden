export class Profile {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly email: string,
    public readonly copyright: string,
    public readonly navLinks: NavLink[],
    public readonly socialLinks: SocialLink[],
  ) {}
}

export class NavLink {
  constructor(
    public readonly label: string,
    public readonly url: string,
  ) {}
}

export class SocialLink {
  constructor(
    public readonly icon: string,
    public readonly label: string,
    public readonly url: URL,
  ) {}
}

export const PROFILE = new Profile(
  `vorant94's Digital Garden`,
  `Welcome to my digital garden, here I write about all sorts of things (mostly about technologies, a little bit on gaming, traveling and self-reflecting)`,
  'vorant94@gmail.com',
  'Mordechai Dror © 2021-present',
  [
    new NavLink('Home', '/'),
    new NavLink('About', '/about'),
    new NavLink('Posts', '/posts'),
  ],
  [
    new SocialLink(
      'fa-linkedin-in',
      'LinkedIn',
      new URL('https://www.linkedin.com/in/vorant94/'),
    ),
    new SocialLink(
      'fa-github',
      'Github',
      new URL('https://github.com/vorant94/'),
    ),
    new SocialLink(
      'fa-medium',
      'Medium',
      new URL('https://vorant94.medium.com/'),
    ),
    new SocialLink(
      'fa-stack-overflow',
      'Stack Overflow',
      new URL('https://stackoverflow.com/users/4995200/vorant94'),
    ),
    new SocialLink(
      'fa-telegram',
      'Telegram',
      new URL('https://t.me/vorant94/'),
    ),
    new SocialLink(
      'fa-x-twitter',
      'Twitter / X',
      new URL('https://twitter.com/vorant94'),
    ),
  ],
);