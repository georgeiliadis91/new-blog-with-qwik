import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { CMS_BASE_URL, CMS_API_ROUTES, converter } from "~/helpers";

export const useHomePageData = routeLoader$(async () => {
  const response = await fetch(`${CMS_BASE_URL}/${CMS_API_ROUTES.home}`);
  const data = await response.json();
  const portofolioText = converter.makeHtml(data.portofolio);

  return { content: portofolioText, cvUrl: data.cv.url };
});

export default component$(() => {
  const signal = useHomePageData();
  return (
    <>
      <article dangerouslySetInnerHTML={signal.value.content} />
      <section class="cv-section">
        <a class="cv-link" href={`${CMS_BASE_URL}${signal.value.cvUrl}`}>
          Link to my CV
        </a>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my Website",
  meta: [
    {
      name: "George Iliadis | Software Engineer",
      content: "Web engineering blog",
    },
  ],
};
