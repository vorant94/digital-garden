---
title: '[Browser tour]: Safari'
description: This year I noticed that long-established traditional set of browsers (Chrome, Firefox, Safari, Opera) started to supplemented by a new generation of alternatives. Personally, for the last few years I've been switching back and forth between Chrome and Safari (peeking at Firefox from a long distance), but the drums of Brave, Vivaldi, Edge, Arc and SigmaOS are getting stronger and stronger. So to add some variety to the day-to-day routine I decided to try something new and share it with you.
tags:
  - tech
  - software
publishedAt: 2023-03-07
coverImage:
related:
  - browser-tour-google-chrome
---

I'll start with a Safari, a built-in MacOS and not Google Chrome, which is de-facto go-to browser in the modern world. There is a reason for it: since I myself use almost the entire Apple ecosystem, I got used to the huge amount of features, that are possible at all thanks to deep and mutual integration between all its devices. E.g. my starting point as a user is this experience of unified system, that smoothly flows from a laptop to network, from network to the phone and so on by the direction.

> **Side note:** this is my expectations from any modern software product. It is not enough to just do it's own single function (or several of those), the product should skillfully integrate itself into each user ecosystem. At the same time I understand that the lack of such integration may be caused by the issue "from the other side" (a developer of a some app is glad to integrate with something, but this "something" doesn't provide such an option). So I don't set the goal of finding the guilty ones, I'd like only to articulate my vision. I haven't come up with what to do with it yet.

### TouchID

So what are the integrations I'm talking about? First thing that comes to mind - is TouchID, fingerprint scanner. It can be used in Safari for the whole number of occasions: either password auto-fill guarded with fingerprint, or to confirm a transaction via Apple Pay, or for passwordless authentication (on sites that support Login via Apple). Everything is so good here so the third-party developers of Safari extensions have access to TouchID. E.g. such third-party apps like 1Password or Bitwarden (both apps are well popular third-party password managers) have a real opportunity to integrate themselves in such a way, so their user will notice no difference between usage of their product or built-in solutions from Apple.

### Time Limit

The next integration, that honestly I don't use as much, but is still worth to mention is Time Limit. I can as a user monitor or/and limit the amount of time spent in the apps. Interesting that combined time from all of your device is counted, e.g. after a half an hour reading Telegram channels from the phone and another half an hour doing the same from a laptop sum up to an hour of screen time in total. It could end up here, if not for one "but". Time using the Safari itself isn't counted, instead a separate by website statistics are sent to Time Limit. So if I have a limit of one hour per day for YouTube, after I spent this hour watching videos from my phone, I won't be able to go YouTube **website** so easily, which IMHO just makes sense ©️.

### Third-party приложения

Возвращаясь к теме third-party приложений MacOS. Есть целый пласт программ, которые или изначально пишутся исключительно под эту систему, или имеют смысл только в ее рамках. Я сейчас говорю о трех программах, которыми лично пользуюсь на ежедневной основе. Это Reeder 5 (RSS-читалка и агрегатор + Read Latter сервис), Alfred 5 (продвинутая альтернатива встроенному в MacOS Spotlight) и Things 3 (to-do трекер). Все эти программы отлично интегрируются с Safari: Reeder имеет расширение для добавления новых фидов прямо из браузера, а так же для использования его вместо Read Latter сервиса от Safari; Alfred сканирует закладки Safari и позволяет их открывать без лишних телодвижений; Things при добавлении новой записи через всплывающее окно понимает контекст и, если он вызван из окна браузера, вставляет в запись адрес и заголовок открытой вкладки.

### AirPlay/ChromeCast

Но ровно настолько, насколько Apple хороши в интеграции своих продуктов между собой, настолько они плохи в интеграции с продуктами вне яблочной экосистемы. Допустим, у вас есть smart-TV и вы хотите посмотреть там фильм с какого-нибудь сайта (нерелевантно, если вы пользуетесь одним из стриминговых сервисов по типу Netflix, у которых всегда есть свои приложения для smart-TV). Набирать поисковый запрос на пульте от тв - боль, подключать комп по проводу - тоже. На помощь приходит AirPlay - технология позволяющая транслировать музыку/видео с одного устройства на другое. Но есть один нюанс, AirPlay - это технология Apple, а значит "с одного устройства на другое" означает на самом деле "с одного устройства **Apple** на другое устройство **Apple** и никак иначе". А теперь вопрос: видели ли вы smart-TV от Apple? Ответ - нет. Есть консоль Apple TV, которая подключается к настоящему телевизору и делает его умным и яблочным одновременно. Но лично я не понимаю, зачем покупать консоль отдельно от телевизора, когда современные телевизоры уже выпускают со встроенным Android TV и при этом у них есть поддержка альтернативы AirPlay - ChromeCast (а эта технология куда универсальнее AirPlay в принципе). По итогу получается такая картина: при наличии сайта, который поддерживает ChromeCast, при наличии тв, который поддерживает ChromeCast, при наличии **ноутбука**, который поддерживает ChromeCast (MacOS сама по себе таки поддерживает эту технологию) пользователь все равно не может транслировать медиа из сети сразу на тв, потому что Safari...

### Hide My Email

Касательно яблочных сервисов проблемы не заканчиваются на попытках интеграции устройств Apple с внешним миром. В подписку iCloud+ с недавнего времени входит возможность автоматической генерации виртуальных email-адресов для регистрации на различных сайтах. Это отлично работает как инструмент превентивной борьбы со спамом. Типичный сценарий такой: пользователь во время регистрации на каком-то непонятном сайте указывает сгенерированную почту, Apple заботится о доставке писем с этой виртуальной почты на реальную, а в случае, если этот непонятный сайт взломают или он сам продаст базу своих пользователей какой-то спам-рассылке, у пользователя будет возможность отключить виртуальный адрес и не захламлять почту реального спамом. Вот только одно "но"... Судя по моему Bitwarden у меня уже есть 100+ всяческих аккаунтов на просторах Интернета, а значит мой реальный адрес уже утек куда только можно было утечь. То есть на данном этапе реальной пользы от этого сервиса ноль, а вот вред очень даже имеется. Если я начну им пользоваться и в будущем передумаю платить на iCloud+, что будет со всеми моими аккаунтами, которые были зарегестрированы на виртуальные почтовые адреса?

Можно было бы сказать "Ну ок, не надо - не пользуйся, в чем проблема?". Но это же Apple, а значит **они** решают за пользователя, что тому нужно, а что нет. До введения этого сервиса при регистрации на сайтах Safari предлагала заполнить поле email адресом, на который зарегистрирован мой Apple ID, и это было удобно даже с учетом того, что пароли я генерирую через Bitwarden. А вот после введения этого сервиса, Safari предлагает ввести **только** новый виртуальный адрес и все, нет возможности вернуть как было. Это называется агрессивный маркетинг и отключение привычного функционала с целью того, чтобы склонить пользователя к выгодному самой фирме решению.

### Расширения браузера

Дальше - больше. Так как Safari - браузер сам по себе, а не базируется на Chrome (как многие современные решения), то разработчики должны отдельно писать под него версии своих расширений, что означает, что далеко не все этим будут заниматься. Я не пользуюсь таким большим количеством расширений как некоторые, поэтому в моем случае это не так больно. Единственным расширением, которого лично мне не хватает в Safari, но которое есть в Chrome, - это крипто-кошелек Metamask. Но так я до сих пор так и не вкатился нормально в крипту, то даже это не критично.

### Поддержка сайтами

В продолжение того, что Safari не основывается на Chrome, стоит упомянуть, что это влияет не только на разработчиков расширений, но и на разработчиков сайтов. Из-за популярности Chrome все сайты в первую очередь проверяют на работоспособность именно в нем, а вот проверять сайт в Safari могут и забыть. В это трудно поверить, но даже всего лишь год назад, я реально сталкивался с тем, как сайты или глючат или просто не работают вне Chrome. И это не был сайт какого-то Васи Пупкина, это был онлайн магазин PlayStation Network...

### Распознавание URL-адресов

Это относительно мелочь, но так сложилось, что эта мелочь мне часто и очень сильно мозолит глаза. Суть в том, что в любом современном браузере адресная строка занимает помимо своей обычной роли (переадресовывать пользователя по введенному им адресу) еще и функцию поисковой строки. То есть если введенные данные не удалось распознать распознать как URL-адрес она отправляет пользователя в поисковик, а введенные данные теперь служат поисковым запросом. Так вот, у меня дома стоит Raspberry Pi с парой-тройкой локальных сервисов и настроенным локальным DNS, чтобы можно было достучаться до малинки не только по ее IP, но и по адресу `pi.lan`. И вот если в Chrome при вводе `pi.lan` браузер понимает, что я подразумевал адрес сайта, то Safari отправляет меня гуглить, что же такое это ваше `pi.lan`... Только в случае, если я напишу `pi.lan/` (со слэшем в конце), тогда Safari все распознает правильно и переадресовывает меня на малинку. Я искренне не понимаю эту особенность, потому что обычные адреса по типу `fb.com` Safari распознает и без слэша в конце, что приводит к постоянной путанице, когда в 99% случаев пользователь пишет как обычно, но в 1% случаев он обязан добавлять слэш в конце...

### Инструменты разработчика

И последнее, о чем хотелось упомянуть, хотя это скорее уже мой личный каприз, так это инструменты разработчика. Суть в том, что в виду моей профессии браузер для меня это одновременно и просто программа для серфинга сети и инструмент заработка. Если Chrome - это стандарт отрасти программ для серфинга сети, то Chrome dev-tools - это стандарт инструментов для разработки сайтов. Допустим мне нравится Safari как программа для серфинга, но это не означает, что я и работать в нем хочу. Иметь на ноутбуке сразу два браузера и разделять между ними функции - вполне себе решение, но мне кажется мы упускаем суть. С одной стороны понятно и очевидно, почему в Safari нет Chrome dev-tools (опять же по причине того, что Safari не базируется на Chrome), с другой - мне как пользователю неинтересны эти технические перипетии. Я был бы рад, если бы мои "программа для серфинга" и "инструмент заработка" были хорошо интегрированными, но разными программами. Было бы круто использовать Chrome dev-tools в Safari или же Safari dev-tools в Chrome (Боже упаси, но все же)

### Итог

**Плюсы:**

- идеальная интеграция с технологиями MacOS
  - TouchID
  - AirPlay
- идеальная интеграция с сервисами Apple
  - Apple Pay
  - Time Limit
  - Hide My Email
- хорошая интеграция со сторонними программами
  - Reeder 5 (в виде расширения)
  - Alfred 5
  - Things 3
  - 1Password (в виде расширения)
  - Bitwarden (в виде расширения)

**Минусы:**

- отсутствие интеграций с технологиями вне Apple
  - ChromeCast
- слишком агрессивный маркетинг сервисов Apple в случае, когда пользователь не хочет пользоваться некоторыми из них
  - Hide My Email
- куда более бедный выбор расширений для браузера
  - MetaMask
- нет возможности избирательно использовать встроенные возможности браузера или же полностью их заменять на сторонние решения
  - инструменты разработчика Chrome вместо встроенных от Safari
  - менеджер паролей не в виде расширения, а как "нативная" замена встроенному Autofill
  - то же самое, что и выше, но с read latter программами
- не все сайты могут корректно работать в Safari
  - PlayStation Network
- странная избирательность при распознавании строки ввода как URL-адреса