const ASSETS = {
  logo: "/img/logo_latek-solution.svg",
  logoPng: "/img/logo_latek-solutions.png",
  hero: "/img/title_site.png",
  monitor: {
    bg: "/img/monitor1_bg.png",
    en: "/img/monitor1_en.png"
  }
};

const COMPANY = {
  bgName: "ЛАТЕК СОЛЮШЪН",
  enName: "LATECH SOLUTION Ltd",
  legalFormBg: "Еднолично дружество с ограничена отговорност",
  legalFormEn: "Single-member limited liability company",
  eik: "208483553",
  vat: "Yes",
  addressBg: 'България, гр. Бургас, п.к. 8000, ул. "Апостол Карамитев" 10, ет.5, оф.13',
  addressEn: "Bulgaria, Burgas, 8000, 10 Apostol Karamitev St., floor 5, office 13",
  phone: "+359876896776",
  email: "mail@latek-sol.com",
  domain: "latek-sol.com",
  year: "2024"
};

const MEDICAL_DISCLAIMER = {
  bg: "Информацията на този уебсайт не представлява медицински съвет, диагноза или лечение. Платформата е предназначена да подпомага медицински специалисти и не заменя професионалната медицинска преценка.",
  en: "The information on this website does not constitute medical advice, diagnosis, or treatment. The platform is intended to support healthcare professionals and does not replace professional medical judgement."
};

const I18N = {
  bg: {
    code: "bg",
    label: "BG",
    otherCode: "en",
    locale: "bg-BG",
    brand: COMPANY.bgName,
    brandCaption: "Remote Health Monitoring",
    productName: "Дистанционен мониторинг на здравето",
    homePath: "/bg",
    seo: {
      title: "Дистанционен мониторинг на здравето | ЛАТЕК СОЛЮШЪН",
      description:
        "Цифрова платформа за дистанционен мониторинг на здравни показатели, структуриране на данни и подпомагане на медицински екипи."
    },
    nav: {
      product: "Платформа",
      ai: "ЕКГ",
      workflow: "Процес",
      audience: "За кого",
      security: "Данни",
      contact: "Контакт"
    },
    actions: {
      contact: "Свържете се с нас",
      learn: "Научете повече"
    },
    hero: {
      eyebrow: "B2B HealthTech платформа",
      title: "Дистанционен мониторинг на здравето",
      lead:
        "Цифрова платформа за наблюдение на здравни показатели и структуриране на пациентски данни. Подпомага медицинските екипи при дистанционна работа с пациенти.",
      imageAlt: "Медицински специалист работи с цифров интерфейс за дистанционен мониторинг на здравни показатели"
    },
    platform: {
      eyebrow: "Какво прави платформата",
      title: "Единен контур за дистанционна работа с пациентски данни.",
      text:
        "Платформата помага на медицинските организации да събират, структурират и проследяват клинична информация, без да заменя професионалната медицинска преценка.",
      items: [
        "Събиране и структуриране на здравни данни",
        "Мониторинг на показатели на пациента",
        "Поддръжка на ЕКГ и клинична информация",
        "Интелигентни известия за отклонения",
        "Проследяване на динамиката във времето",
        "Интеграции с медицински информационни системи"
      ]
    },
    ai: {
      eyebrow: "Интелигентна обработка",
      title: "Интелигентна обработка на ЕКГ и клинични данни",
      text:
        "AI-assisted ECG обработката е представена като част от дистанционния мониторинг. Тя подпомага вниманието към рискови индикатори и помага на специалистите да работят с големи обеми сигнали и клинични данни."
    },
    workflow: {
      eyebrow: "Архитектура",
      title: "Как работи системата",
      text:
        "Данни от медицински организации и дистанционни точки за наблюдение могат да бъдат структурирани в общ работен процес за преглед, проследяване и координация.",
      alt: "Схема за дистанционен мониторинг на здравето"
    },
    audience: {
      eyebrow: "За кого",
      title: "За дистанционни здравни процеси.",
      items: [
        "Медицински организации",
        "Клиники и диагностични центрове",
        "Телемедицински екипи",
        "Здравни проекти и пилотни програми"
      ]
    },
    security: {
      eyebrow: "Данни и сигурност",
      title: "Проектирана с мисъл за поверителност и контрол на достъпа.",
      text:
        "Архитектурата може да бъде конфигурирана за защитени работни процеси, ролеви достъп и намаляване на фрагментираните пациентски данни.",
      items: [
        "Проектирана с мисъл за поверителност",
        "Поддържа ролеви достъп",
        "Може да бъде конфигурирана за защитени процеси",
        "Подпомага проследимост и одитируемост",
        "Ориентирана към минимизация на данните",
        "Подходяща за GDPR-ориентирана архитектура"
      ]
    },
    contact: {
      eyebrow: "Контакт",
      title: "Свържете се с ЛАТЕК СОЛЮШЪН",
      text: "За демонстрация, пилотен проект или партньорски разговор използвайте телефон, Viber или email.",
      phone: "Телефон / Viber",
      email: "Email",
      cta: "Заявете демонстрация"
    },
    footer: {
      text: "Дигитална платформа за дистанционен мониторинг на здравето и структуриране на пациентски данни.",
      privacy: "Поверителност",
      cookies: "Бисквитки",
      legal: "Правна информация",
      rights: "Всички права запазени.",
      madeIn: "Изработено в България"
    }
  },
  en: {
    code: "en",
    label: "EN",
    otherCode: "bg",
    locale: "en-US",
    brand: COMPANY.enName,
    brandCaption: "Remote Health Monitoring",
    productName: "Remote Health Monitoring",
    homePath: "/en",
    seo: {
      title: "Remote Health Monitoring | LATECH SOLUTION Ltd",
      description:
        "A digital platform for remote health monitoring, patient data structuring, and support for healthcare teams."
    },
    nav: {
      product: "Platform",
      ai: "ECG",
      workflow: "Workflow",
      audience: "For whom",
      security: "Data",
      contact: "Contact"
    },
    actions: {
      contact: "Contact us",
      learn: "Learn more"
    },
    hero: {
      eyebrow: "B2B HealthTech platform",
      title: "Remote Health Monitoring",
      lead:
        "A digital platform for monitoring health indicators and structuring patient data. Supports healthcare teams in remote patient management.",
      imageAlt: "Healthcare professional using a digital remote health monitoring interface"
    },
    platform: {
      eyebrow: "What the platform does",
      title: "A unified workflow for remote patient data operations.",
      text:
        "The platform helps medical organizations collect, structure, and follow clinical information while preserving professional medical judgement.",
      items: [
        "Collection and structuring of health data",
        "Patient indicator monitoring",
        "Support for ECG and clinical information",
        "Intelligent notifications for deviations",
        "Longitudinal tracking over time",
        "Integrations with medical information systems"
      ]
    },
    ai: {
      eyebrow: "Intelligent processing",
      title: "Intelligent ECG and Clinical Data Processing",
      text:
        "AI-assisted ECG processing is presented as part of remote health monitoring. It supports attention to risk indicators and helps specialists work with large volumes of signals and clinical data."
    },
    workflow: {
      eyebrow: "Architecture",
      title: "How the System Works",
      text:
        "Data from medical organizations and remote monitoring points can be structured into a shared workflow for review, follow-up, and coordination.",
      alt: "Remote health monitoring workflow diagram"
    },
    audience: {
      eyebrow: "For whom",
      title: "For remote care workflows.",
      items: [
        "Medical organizations",
        "Clinics and diagnostic centers",
        "Telemedicine teams",
        "Digital health projects and pilots"
      ]
    },
    security: {
      eyebrow: "Data and security",
      title: "Designed with privacy and access control in mind.",
      text:
        "The architecture can be configured for secure workflows, role-based access, and reduced fragmentation of patient data.",
      items: [
        "Designed with privacy in mind",
        "Supports role-based access",
        "Can be configured for secure workflows",
        "Supports auditability and traceability",
        "Oriented toward data minimization",
        "Suitable for GDPR-oriented architecture"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact LATECH SOLUTION Ltd",
      text: "For a demo, pilot, or partnership conversation, reach us via phone, Viber, or email.",
      phone: "Phone / Viber",
      email: "Email",
      cta: "Request a demo"
    },
    footer: {
      text: "A digital platform for remote health monitoring and patient data structuring.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      legal: "Legal Notice",
      rights: "All rights reserved.",
      madeIn: "Made in Bulgaria"
    }
  }
};

const LEGAL_PAGES = {
  privacy: {
    bg: {
      title: "Поверителност",
      description: "Основна информация за обработването на лични данни от LATECH SOLUTION Ltd.",
      updated: "Последна актуализация: 9 юли 2026",
      sections: [
        {
          title: "Администратор на данни",
          body: [
            `${COMPANY.bgName}, ЕИК/ПИК ${COMPANY.eik}, адрес: ${COMPANY.addressBg}.`,
            `Контакт: ${COMPANY.phone}, ${COMPANY.email}.`
          ]
        },
        {
          title: "Какви данни може да се обработват",
          body: [
            "Технически логове, необходими за сигурността и работата на уебсайта.",
            "Контактни данни, когато потребителят сам се свърже с компанията по телефон, Viber или email.",
            "Cookies или analytics данни само ако такива инструменти бъдат реално добавени. В текущата статична версия не са намерени analytics или marketing tracking скриптове."
          ]
        },
        {
          title: "Цели и правни основания",
          body: [
            "Отговор на запитвания, поддръжка на комуникацията и техническа защита на уебсайта.",
            "Правното основание може да включва легитимен интерес, предприемане на стъпки по искане на потребителя и законови задължения, според конкретния контекст."
          ]
        },
        {
          title: "Срокове и получатели",
          body: [
            "Данните се съхраняват само доколкото е необходимо за съответната цел или за законови задължения.",
            "Данни могат да бъдат обработвани от технически доставчици, когато това е необходимо за хостинг, сигурност или комуникация."
          ]
        },
        {
          title: "Права на субектите на данни",
          body: [
            "Потребителите могат да поискат достъп, корекция, изтриване, ограничаване, възражение или преносимост, когато приложимото право предоставя такива права.",
            "Потребителите могат да подадат жалба до компетентния надзорен орган по защита на данните."
          ]
        },
        {
          title: "Медицинска информация",
          body: [MEDICAL_DISCLAIMER.bg]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      description: "Basic information about personal data processing by LATECH SOLUTION Ltd.",
      updated: "Last updated: July 9, 2026",
      sections: [
        {
          title: "Data controller",
          body: [
            `${COMPANY.enName}, EIK/PIC ${COMPANY.eik}, address: ${COMPANY.addressEn}.`,
            `Contact: ${COMPANY.phone}, ${COMPANY.email}.`
          ]
        },
        {
          title: "Data that may be processed",
          body: [
            "Technical logs required for website security and operation.",
            "Contact data when a user voluntarily contacts the company by phone, Viber, or email.",
            "Cookies or analytics data only if such tools are actually added. No analytics or marketing tracking scripts were found in the current static version."
          ]
        },
        {
          title: "Purposes and legal bases",
          body: [
            "Responding to inquiries, supporting communication, and protecting the website technically.",
            "The legal basis may include legitimate interest, steps taken at the user's request, and legal obligations, depending on the specific context."
          ]
        },
        {
          title: "Retention and recipients",
          body: [
            "Data is retained only as long as necessary for the relevant purpose or legal obligations.",
            "Data may be processed by technical providers when required for hosting, security, or communication."
          ]
        },
        {
          title: "Data subject rights",
          body: [
            "Users may request access, rectification, erasure, restriction, objection, or portability where applicable law provides such rights.",
            "Users may lodge a complaint with the competent data protection supervisory authority."
          ]
        },
        {
          title: "Medical information",
          body: [MEDICAL_DISCLAIMER.en]
        }
      ]
    }
  },
  cookies: {
    bg: {
      title: "Бисквитки",
      description: "Информация за cookies и подобни технологии на latek-sol.com.",
      updated: "Последна актуализация: 9 юли 2026",
      sections: [
        {
          title: "Текущо използване",
          body: [
            "В текущата статична версия на сайта не са намерени analytics, marketing cookies или embedded third-party widgets.",
            "Сайтът може да използва само технически необходими cookies или подобни технически записи, ако това е необходимо за хостинг, сигурност или нормална работа."
          ]
        },
        {
          title: "Non-essential cookies",
          body: [
            "Ако в бъдеще бъдат добавени analytics или marketing инструменти, те трябва да се зареждат само след валидно съгласие, с възможност за приемане, отказ и промяна на настройките."
          ]
        }
      ]
    },
    en: {
      title: "Cookie Policy",
      description: "Information about cookies and similar technologies on latek-sol.com.",
      updated: "Last updated: July 9, 2026",
      sections: [
        {
          title: "Current use",
          body: [
            "No analytics, marketing cookies, or embedded third-party widgets were found in the current static version of the website.",
            "The website may use only technically necessary cookies or similar technical records if required for hosting, security, or normal operation."
          ]
        },
        {
          title: "Non-essential cookies",
          body: [
            "If analytics or marketing tools are added in the future, they should load only after valid consent, with options to accept, reject, and change preferences."
          ]
        }
      ]
    }
  },
  legal: {
    bg: {
      title: "Правна информация",
      description: "Правна информация за LATECH SOLUTION Ltd и сайта latek-sol.com.",
      updated: "Последна актуализация: 9 юли 2026",
      sections: [
        {
          title: "Данни за компанията",
          body: [
            `Име: ${COMPANY.bgName}`,
            `Правна форма: ${COMPANY.legalFormBg}`,
            `ЕИК/ПИК: ${COMPANY.eik}`,
            `VAT registration: ${COMPANY.vat}`,
            `Адрес: ${COMPANY.addressBg}`,
            `Телефон / Viber: ${COMPANY.phone}`,
            `Email: ${COMPANY.email}`
          ]
        },
        {
          title: "Информационен характер",
          body: [
            "Информацията на този сайт е предоставена само с информационна цел и не представлява договорно предложение, медицинска препоръка или правен съвет.",
            MEDICAL_DISCLAIMER.bg
          ]
        }
      ]
    },
    en: {
      title: "Legal Notice",
      description: "Legal information about LATECH SOLUTION Ltd and latek-sol.com.",
      updated: "Last updated: July 9, 2026",
      sections: [
        {
          title: "Company details",
          body: [
            `Name: ${COMPANY.enName}`,
            `Legal form: ${COMPANY.legalFormEn}`,
            `EIK/PIC: ${COMPANY.eik}`,
            `VAT registration: ${COMPANY.vat}`,
            `Address: ${COMPANY.addressEn}`,
            `Phone / Viber: ${COMPANY.phone}`,
            `Email: ${COMPANY.email}`
          ]
        },
        {
          title: "Informational notice",
          body: [
            "The information on this website is provided for informational purposes only and does not constitute a contractual offer, medical recommendation, or legal advice.",
            MEDICAL_DISCLAIMER.en
          ]
        }
      ]
    }
  }
};

const HOME_PAGES = new Set(["home", ""]);
const LEGAL_PAGE_KEYS = Object.keys(LEGAL_PAGES);
const DISABLED_LEGAL_PAGES = new Set(["cookies"]);
const SUPPORTED_LANGS = Object.keys(I18N);

function normalizePath(pathname) {
  const normalized = pathname.replace(/\/index\.html$/i, "").replace(/\/+$/g, "");
  return normalized || "/";
}

function getPreferredLanguage() {
  const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  const normalized = languages.map((language) => String(language || "").toLowerCase());

  if (normalized.some((language) => language.startsWith("bg"))) {
    return "bg";
  }

  if (normalized.some((language) => language.startsWith("en"))) {
    return "en";
  }

  return "bg";
}

function getRoute() {
  const pathname = normalizePath(window.location.pathname);
  const parts = pathname.split("/").filter(Boolean);

  if (!parts.length) {
    return { lang: getPreferredLanguage(), page: "home", isRoot: true };
  }

  const lang = SUPPORTED_LANGS.includes(parts[0]) ? parts[0] : "bg";
  const page = parts[1] || "home";

  if (!SUPPORTED_LANGS.includes(parts[0])) {
    return { lang, page: "home", notFound: true };
  }

  if (page !== "home" && (!LEGAL_PAGE_KEYS.includes(page) || DISABLED_LEGAL_PAGES.has(page))) {
    return { lang, page: "home", notFound: true };
  }

  return { lang, page, isRoot: false };
}

function getPagePath(lang, page = "home", hash = "") {
  const cleanPage = HOME_PAGES.has(page) ? "" : `/${page}`;
  return `/${lang}${cleanPage}${hash}`;
}

function getCurrentPageLabel(page, lang) {
  if (HOME_PAGES.has(page)) {
    return I18N[lang].productName;
  }

  return LEGAL_PAGES[page][lang].title;
}

function setMetaAttribute(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function updateSeo(lang, page) {
  const t = I18N[lang];
  const isHome = HOME_PAGES.has(page);
  const pageData = isHome ? t.seo : LEGAL_PAGES[page][lang];
  const title = pageData.title || t.seo.title;
  const description = pageData.description || t.seo.description;
  const currentPath = getPagePath(lang, page);
  const fullUrl = `https://${COMPANY.domain}${currentPath}`;

  document.documentElement.lang = lang;
  document.title = title;
  setMetaAttribute('meta[name="description"]', "content", description);
  setMetaAttribute('meta[property="og:title"]', "content", title);
  setMetaAttribute('meta[property="og:description"]', "content", description);
  setMetaAttribute('meta[property="og:url"]', "content", fullUrl);
  setMetaAttribute('meta[name="twitter:title"]', "content", title);
  setMetaAttribute('meta[name="twitter:description"]', "content", description);
  setMetaAttribute('link[rel="canonical"]', "href", fullUrl);
  setMetaAttribute('link[rel="alternate"][hreflang="bg"]', "href", `https://${COMPANY.domain}${getPagePath("bg", page)}`);
  setMetaAttribute('link[rel="alternate"][hreflang="en"]', "href", `https://${COMPANY.domain}${getPagePath("en", page)}`);
  setMetaAttribute('link[rel="alternate"][hreflang="x-default"]', "href", `https://${COMPANY.domain}${getPagePath("bg", page)}`);
}

function createLanguageSwitcher(lang, page, modifier = "") {
  return `
    <div class="language-switcher ${modifier}" aria-label="Language">
      ${SUPPORTED_LANGS.map((code) => {
        const isActive = code === lang;
        return `
          <a class="${isActive ? "is-active" : ""}" href="${getPagePath(code, page)}" hreflang="${code}" aria-current="${isActive ? "true" : "false"}">
            ${I18N[code].label}
          </a>
        `;
      }).join("")}
    </div>
  `;
}

function createBrand(lang, page) {
  const t = I18N[lang];

  return `
    <a class="brand" href="${getPagePath(lang)}#hero" aria-label="${t.brand}">
      <img class="brand__logo" src="${ASSETS.logo}" alt="" width="44" height="44">
      <span class="brand__text">
        <span class="brand__name">${t.brand}</span>
        <span class="brand__caption">${getCurrentPageLabel(page, lang)}</span>
      </span>
    </a>
  `;
}

function renderHeader(lang, page) {
  const t = I18N[lang];
  const isHome = HOME_PAGES.has(page);
  const homePath = getPagePath(lang);
  const navPrefix = isHome ? "" : homePath;
  const header = document.querySelector("[data-app-header]");

  if (!header) {
    return;
  }

  header.innerHTML = `
    <div class="shell site-header__inner">
      ${createBrand(lang, page)}

      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle aria-label="Menu">
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" id="site-nav" data-nav>
        <a href="${navPrefix}#platform" data-nav-link>${t.nav.product}</a>
        <a href="${navPrefix}#ai" data-nav-link>${t.nav.ai}</a>
        <a href="${navPrefix}#workflow" data-nav-link>${t.nav.workflow}</a>
        <a href="${navPrefix}#audience" data-nav-link>${t.nav.audience}</a>
        <a href="${navPrefix}#security" data-nav-link>${t.nav.security}</a>
        <a href="${navPrefix}#contacts" class="site-nav__cta" data-nav-link>${t.nav.contact}</a>
        ${createLanguageSwitcher(lang, page, "language-switcher--nav")}
      </nav>
    </div>
  `;
}

function renderFooter(lang, page) {
  const t = I18N[lang];
  const footer = document.querySelector("[data-app-footer]");

  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <div class="shell site-footer__layout">
      <div class="site-footer__brand">
        <img src="${ASSETS.logo}" alt="" class="site-footer__logo" width="54" height="54">
        <div>
          <strong>${t.brand}</strong>
          <p>${t.footer.text}</p>
        </div>
      </div>

      <nav class="site-footer__links" aria-label="Legal">
        <a href="${getPagePath(lang, "privacy")}">${t.footer.privacy}</a>
        <a href="${getPagePath(lang, "legal")}">${t.footer.legal}</a>
      </nav>

      ${createLanguageSwitcher(lang, page, "language-switcher--footer")}

      <div class="site-footer__legal">
        <p>© ${new Date().getFullYear()} ${t.brand}. ${t.footer.rights}</p>
        <p>EIK/PIC: ${COMPANY.eik} | VAT: ${COMPANY.vat} | ${COMPANY.domain}</p>
        <p>${MEDICAL_DISCLAIMER[lang]}</p>
      </div>
    </div>
  `;
}

function createList(items, className = "feature-list") {
  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

const ecgTracePath =
  "M0 122 H28 C38 122 42 116 52 116 C62 116 66 122 78 122 H90 L98 138 L112 58 L126 160 L140 122 H158 C174 122 184 106 204 106 C224 106 236 122 256 122 H292 C302 122 306 116 316 116 C326 116 330 122 342 122 H354 L362 138 L376 58 L390 160 L404 122 H420 C438 122 450 105 470 105 C490 105 500 122 516 122 H528 C536 122 544 115 552 115 C560 115 565 122 572 122 C582 122 588 92 596 70 C604 50 616 166 626 154 C636 142 644 128 662 128 H682 C696 128 704 113 720 113 C738 113 746 122 766 122 H796 C806 122 810 116 820 116 C830 116 834 122 846 122 H858 L866 138 L880 58 L894 160 L908 122 H926 C942 122 952 106 972 106 C992 106 1004 122 1024 122 H1060 C1070 122 1074 116 1084 116 C1094 116 1098 122 1110 122 H1122 L1130 138 L1144 58 L1158 160 L1172 122 H1190 C1208 122 1220 105 1240 105 C1260 105 1270 122 1286 122 H1318 C1328 122 1332 116 1342 116 C1352 116 1356 122 1368 122 H1380 C1390 122 1396 93 1404 71 C1412 51 1424 166 1434 154 C1444 142 1452 128 1470 128 H1490 C1504 128 1512 113 1528 113 C1546 113 1554 122 1574 122";

const ecgAlertPath =
  "M528 122 C536 122 544 115 552 115 C560 115 565 122 572 122 C582 122 588 92 596 70 C604 50 616 166 626 154 C636 142 644 128 662 128";

function renderEcgMonitor(lang) {
  const label = lang === "bg" ? "Подпомагаща ЕКГ обработка" : "Assisted ECG processing";
  const badge = lang === "bg" ? "Сигнал" : "Signal";
  const finding = lang === "bg" ? "Индикатор за внимание" : "Attention indicator";
  const stats = lang === "bg"
    ? [["Функция", "ЕКГ архив"], ["Подход", "Подпомагане"], ["Сценарий", "Мониторинг"]]
    : [["Function", "ECG archive"], ["Approach", "Assistance"], ["Scenario", "Monitoring"]];

  return `
    <div class="ecg-monitor" role="img" aria-label="${label}">
      <div class="ecg-monitor__header">
        <span>${label}</span>
        <span>${badge}</span>
      </div>
      <div class="ecg-monitor__screen">
        <svg class="ecg-monitor__svg" viewBox="0 0 720 220" preserveAspectRatio="none" aria-hidden="true">
          <path class="ecg-monitor__trace ecg-monitor__trace--back" d="${ecgTracePath}"></path>
          <path class="ecg-monitor__trace" d="${ecgTracePath}"></path>
          <path class="ecg-monitor__trace ecg-monitor__trace--alert" d="${ecgAlertPath}"></path>
          <g class="ecg-monitor__marker">
            <circle class="ecg-monitor__marker-ring" cx="596" cy="70" r="18"></circle>
            <circle class="ecg-monitor__marker-dot" cx="596" cy="70" r="6"></circle>
          </g>
          <line class="ecg-monitor__scanner" x1="0" y1="18" x2="0" y2="202"></line>
        </svg>
      </div>
      <div class="ecg-monitor__analysis">
        <span class="ecg-monitor__analysis-code">
          <small>${lang === "bg" ? "AI помощ" : "AI assist"}</small>
          <strong>ECG</strong>
        </span>
        <span>${finding}</span>
      </div>
      <div class="ecg-monitor__stats">
        ${stats.map(([small, strong]) => `<span><small>${small}</small><strong>${strong}</strong></span>`).join("")}
      </div>
    </div>
  `;
}

function renderHeroVisual(lang) {
  const t = I18N[lang];
  const cards = lang === "bg"
    ? [
        ["Данни", "Пациентски показатели"],
        ["ЕКГ", "Клинична информация"],
        ["Процес", "Дистанционна координация"]
      ]
    : [
        ["Data", "Patient indicators"],
        ["ECG", "Clinical information"],
        ["Workflow", "Remote coordination"]
      ];

  return `
    <div class="hero-stage" data-hero-stage data-reveal="left">
      <div class="hero-stage__panel">
        <div class="hero-stage__screen hero-stage__screen--title">
          <img src="${ASSETS.hero}" alt="${t.hero.imageAlt}">
        </div>

        ${cards.map((card, index) => `
          <div class="hero-stage__floating hero-stage__floating--${["left", "right", "bottom"][index]}">
            <span class="float-card__eyebrow">${card[0]}</span>
            <strong>${card[1]}</strong>
          </div>
        `).join("")}

        <div class="hero-stage__orbit hero-stage__orbit--blue"></div>
        <div class="hero-stage__orbit hero-stage__orbit--red"></div>
      </div>
    </div>
  `;
}

function renderHome(lang) {
  const t = I18N[lang];
  const monitorSrc = ASSETS.monitor[lang];

  return `
    <section class="hero section-shell" id="hero">
      <div class="shell hero__layout">
        <div class="hero__copy" data-reveal="up">
          <p class="eyebrow">${t.hero.eyebrow}</p>
          <h1 class="hero__title">${t.hero.title}</h1>
          <p class="hero__lead">${t.hero.lead}</p>

          <div class="hero__actions">
            <a class="button button--primary" href="#contacts">${t.actions.contact}</a>
            <a class="button button--ghost" href="#platform">${t.actions.learn}</a>
          </div>
        </div>

        ${renderHeroVisual(lang)}
      </div>
    </section>

    <section class="signal-strip" aria-label="${t.platform.eyebrow}">
      <div class="signal-strip__viewport">
        <div class="signal-strip__track">
          ${(lang === "bg" ? [
            "Дистанционен мониторинг",
            "Пациентски данни",
            "ЕКГ",
            "Клиничен процес",
            "Ролеви достъп",
            "Одитируемост",
            "GDPR",
            "Медицински екипи",
            "Дистанционен мониторинг",
            "Пациентски данни",
            "ЕКГ",
            "Клиничен процес",
            "Ролеви достъп",
            "Одитируемост",
            "GDPR",
            "Медицински екипи"
          ] : [
            "Remote monitoring",
            "Patient data",
            "ECG",
            "Clinical workflow",
            "Role-based access",
            "Auditability",
            "GDPR-oriented",
            "Healthcare teams",
            "Remote monitoring",
            "Patient data",
            "ECG",
            "Clinical workflow",
            "Role-based access",
            "Auditability",
            "GDPR-oriented",
            "Healthcare teams"
          ]).map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="section-shell" id="platform">
      <div class="shell">
        <div class="section-heading" data-reveal="up">
          <p class="eyebrow">${t.platform.eyebrow}</p>
          <h2>${t.platform.title}</h2>
          <p>${t.platform.text}</p>
        </div>

        <div class="overview-grid overview-grid--six">
          ${t.platform.items.map((item, index) => `
            <article class="overview-card interactive-card" data-spotlight data-reveal="up">
              <span class="overview-card__index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${item}</h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section-shell section-shell--tight-top" id="ai">
      <div class="shell">
        <article class="story-card story-card--ai" data-reveal="up">
          <div class="story-card__head">
            <div>
              <span class="story-badge">ECG</span>
              <h2>${t.ai.title}</h2>
            </div>
          </div>

          <div class="story-card__layout">
            <div class="story-card__copy">
              <p class="eyebrow">${t.ai.eyebrow}</p>
              <p>${t.ai.text}</p>
              <p class="disclaimer-note">${MEDICAL_DISCLAIMER[lang]}</p>
            </div>
            <div class="story-card__visual">
              ${renderEcgMonitor(lang)}
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section-shell" id="workflow">
      <div class="shell workflow-layout">
        <div class="section-heading" data-reveal="up">
          <p class="eyebrow">${t.workflow.eyebrow}</p>
          <h2>${t.workflow.title}</h2>
          <p>${t.workflow.text}</p>
        </div>

        <figure class="workflow-figure panel" data-reveal="up">
          <img src="${monitorSrc}" alt="${t.workflow.alt}" loading="lazy">
        </figure>
      </div>
    </section>

    <section class="section-shell section-shell--tight-top" id="audience">
      <div class="shell split-layout">
        <div class="section-heading" data-reveal="up">
          <p class="eyebrow">${t.audience.eyebrow}</p>
          <h2>${t.audience.title}</h2>
        </div>

        <div class="audience-grid">
          ${t.audience.items.map((item) => `
            <article class="audience-card interactive-card" data-spotlight data-reveal="up">
              <h3>${item}</h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section-shell" id="security">
      <div class="shell">
        <article class="security-panel panel" data-reveal="up">
          <div class="section-heading section-heading--inside">
            <p class="eyebrow">${t.security.eyebrow}</p>
            <h2>${t.security.title}</h2>
            <p>${t.security.text}</p>
          </div>
          ${createList(t.security.items, "feature-list feature-list--columns")}
        </article>
      </div>
    </section>

    <section class="section-shell section-shell--contact" id="contacts">
      <div class="shell contact-layout">
        <article class="contact-main panel" data-reveal="up">
          <p class="eyebrow">${t.contact.eyebrow}</p>
          <h2>${t.contact.title}</h2>
          <p>${t.contact.text}</p>
          <div class="contact-actions">
            <a class="button button--primary" href="tel:${COMPANY.phone.replace(/\s+/g, "")}">${t.contact.phone}: ${COMPANY.phone}</a>
            <a class="button button--ghost" href="mailto:${COMPANY.email}">${t.contact.email}: ${COMPANY.email}</a>
          </div>
        </article>

        <div class="contact-side">
          <article class="contact-card panel" data-reveal="up">
            <span class="contact-card__label">${lang === "bg" ? "Компания" : "Company"}</span>
            <strong>${t.brand}</strong>
          </article>
          <article class="contact-card panel" data-reveal="up">
            <span class="contact-card__label">EIK/PIC</span>
            <strong>${COMPANY.eik}</strong>
          </article>
          <article class="contact-card panel" data-reveal="up">
            <span class="contact-card__label">${lang === "bg" ? "Адрес" : "Address"}</span>
            <p>${lang === "bg" ? COMPANY.addressBg : COMPANY.addressEn}</p>
          </article>
          <article class="contact-card panel" data-reveal="up">
            <span class="contact-card__label">${t.contact.phone}</span>
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}">${COMPANY.phone}</a>
          </article>
          <article class="contact-card panel" data-reveal="up">
            <span class="contact-card__label">${t.contact.email}</span>
            <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderLegalPage(lang, page) {
  const t = I18N[lang];
  const pageData = LEGAL_PAGES[page][lang];
  const sections = page === "privacy"
    ? pageData.sections.filter((_, index) => index === 0 || index === pageData.sections.length - 1)
    : pageData.sections;

  return `
    <section class="legal-hero section-shell" id="hero">
      <div class="shell legal-hero__layout">
        <div data-reveal="up">
          <p class="eyebrow">${t.brand}</p>
          <h1 class="hero__title">${pageData.title}</h1>
          <p class="hero__lead">${pageData.description}</p>
          <p class="legal-updated">${pageData.updated}</p>
        </div>
      </div>
    </section>

    <section class="section-shell section-shell--tight-top">
      <div class="shell legal-layout">
        ${sections.map((section) => `
          <article class="legal-card panel" data-reveal="up">
            <h2>${section.title}</h2>
            ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderApp() {
  const route = getRoute();

  if (route.isRoot && window.location.protocol !== "file:") {
    window.location.replace(getPagePath(route.lang));
    return;
  }

  const lang = route.lang;
  const page = route.page;
  const app = document.getElementById("app");

  if (!app) {
    return;
  }

  updateSeo(lang, page);
  renderHeader(lang, page);
  renderFooter(lang, page);
  app.innerHTML = HOME_PAGES.has(page) ? renderHome(lang) : renderLegalPage(lang, page);
}

function getHeaderOffset() {
  const header = document.querySelector("[data-header]");
  return header ? Math.ceil(header.getBoundingClientRect().height) + 16 : 0;
}

function scrollToTarget(target) {
  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function syncHeaderOffset() {
  const header = document.querySelector("[data-header]");
  if (!header) {
    return;
  }

  const updateOffset = () => {
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-space", `${height}px`);
    document.documentElement.style.setProperty("--header-height", `${height}px`);
  };

  updateOffset();
  window.addEventListener("resize", updateOffset, { passive: true });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(updateOffset);
    resizeObserver.observe(header);
  }
}

function closeMobileNav() {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!button || !nav) {
    return;
  }

  button.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function initMobileNav() {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMobileNav();
    }
  });
}

function initSmoothAnchors() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href*="#"]');

    if (!link) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    const currentPath = normalizePath(window.location.pathname);

    if (!url.hash || normalizePath(url.pathname) !== currentPath) {
      return;
    }

    const target = document.querySelector(url.hash);
    if (!target) {
      return;
    }

    event.preventDefault();
    scrollToTarget(target);
    closeMobileNav();
  });
}

function initScrollProgress() {
  const progressBar = document.querySelector("[data-scroll-progress]");
  const header = document.querySelector("[data-header]");
  const scrollTopButton = document.querySelector("[data-scroll-top]");

  if (!progressBar) {
    return;
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 24);
    }

    if (scrollTopButton) {
      scrollTopButton.classList.toggle("is-visible", scrollTop > Math.min(520, window.innerHeight * 0.5));
    }
  };

  let isTicking = false;
  const requestUpdate = () => {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateProgress();
      isTicking = false;
    });
  };

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      closeMobileNav();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  updateProgress();
  window.addEventListener("scroll", requestUpdate, { passive: true });
}

function initActiveNavigation() {
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]")).filter((link) => {
    const url = new URL(link.href, window.location.href);
    return normalizePath(url.pathname) === normalizePath(window.location.pathname) && url.hash;
  });

  if (!navLinks.length) {
    return;
  }

  const linkMap = new Map(navLinks.map((link) => [new URL(link.href, window.location.href).hash, link]));
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkMap.get(`#${entry.target.id}`);
        if (!link || !entry.isIntersecting) {
          return;
        }

        navLinks.forEach((item) => item.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    },
    { threshold: 0.38, rootMargin: "-10% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealAnimations() {
  const revealed = document.querySelectorAll("[data-reveal]");

  if (!revealed.length) {
    return;
  }

  document.body.classList.add("reveal-ready");

  const revealAll = () => {
    revealed.forEach((element) => element.classList.add("is-visible"));
  };

  if (!("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  revealed.forEach((element) => observer.observe(element));
  window.setTimeout(revealAll, 1600);
}

function initSpotlights() {
  const cards = document.querySelectorAll("[data-spotlight]");

  cards.forEach((card) => {
    if (card.dataset.spotlightReady === "true") {
      return;
    }

    card.dataset.spotlightReady = "true";
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--spotlight-x", `${x}px`);
      card.style.setProperty("--spotlight-y", `${y}px`);
    });
  });
}

function initHeroParallax() {
  const stage = document.querySelector("[data-hero-stage]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (!stage || prefersReducedMotion || isCoarsePointer) {
    return;
  }

  const floatingCards = stage.querySelectorAll(".hero-stage__floating");

  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    floatingCards.forEach((card, index) => {
      const depth = index + 1;
      const offsetX = relativeX * depth * 10;
      const offsetY = relativeY * depth * 8;
      const baseTransform = card.classList.contains("hero-stage__floating--bottom") && window.innerWidth > 720
        ? "translateX(-50%) "
        : "";
      card.style.transform = `${baseTransform}translate(${offsetX}px, ${offsetY}px)`;
    });
  });

  stage.addEventListener("pointerleave", () => {
    floatingCards.forEach((card) => {
      card.style.transform = card.classList.contains("hero-stage__floating--bottom") && window.innerWidth > 720
        ? "translateX(-50%)"
        : "";
    });
  });
}

function bootstrap() {
  renderApp();
  syncHeaderOffset();
  initMobileNav();
  initSmoothAnchors();
  initScrollProgress();
  initActiveNavigation();
  initRevealAnimations();
  initSpotlights();
  initHeroParallax();
}

document.addEventListener("DOMContentLoaded", bootstrap);
