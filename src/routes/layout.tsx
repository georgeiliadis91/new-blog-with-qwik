import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import {
  SOCIAL_ICON_SVGS,
  CMS_BASE_URL,
  CMS_API_ROUTES,
} from "~/helpers/index";
import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(async () => {
  const response = await fetch(`${CMS_BASE_URL}/${CMS_API_ROUTES.socials}`);
  const data = await response.json();
  return {
    data,
    year: new Date().getFullYear(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  useStyles$(styles);
  const { data, year } = serverTime.value;
  return (
    <>
      <header>
        <a class="header-label" href="/">
          George Iliadis
        </a>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <main>
        <Slot />
      </main>

      <footer>
        <p> Copyright © {year} | George Iliadis </p>
        <div class="social-container">
          {Object.entries(SOCIAL_ICON_SVGS).map(([key, val]) => (
            <Link href={data[key]} key={key} aria-label={`${key}-icon-link`}>
              <span dangerouslySetInnerHTML={val} />
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
});
