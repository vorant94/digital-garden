---
name: Digital Garden
slogan: My personal piece of the Internet
status: live
logo: ../attachments/digital-garden/logo.webp
logoDark: ../attachments/digital-garden/logo-dark.webp
sourceCodeUrl: https://github.com/vorant94/digital-garden
productionUrl: https://www.vorant94.io/
isFeatured: true
demo: ../attachments/digital-garden/demo.png
version: 1.0.0
---

The site you are currently reading is as simple from a technical standpoint as it can possible be, but still it took me several years to turn the idea of having a personal blog to actually having it.

I had a couple of iterations on how and where to write posts. I wrote on Reddit, Medium and Devto, I had personal channel in Telegram. But I wanted to have my own personal space, where I can do whatever I want without being bound to what platform allows and I wanted to have my content separate from the way I deliver it. I found the concept of "digital garden" being compelling to me, so I went with old-school personal blog option.

The tech stack is:

- framework - **Astro** in SSG mode with **React** integration for components
- styling - **TailwindCSS**
- hosting - **Vercel**
- tests (a little bit) - **Vitest** for unit tests and **Playwright** for e2e ones
- CMS for posts - **Markdown** files (stored right inside project repo)
- CMS for comments - GitHub discussions via **giscus** app

My current plans on this project (besides the content itself) include a full rewrite with NuxtJS, adding a dedicated email newsletter, diving into custom web elements to make posts interactive and many more. So stay tuned, make yourself at home, take a sit and grab something to ~~drink~~ read
