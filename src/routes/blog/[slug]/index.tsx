import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { CMS_BASE_URL, CMS_API_ROUTES, converter, formatDate } from "~/helpers";

export const useArticleFetchData = routeLoader$(async (requestEvent) => {
  const response = await fetch(
    `${CMS_BASE_URL}/${CMS_API_ROUTES.blogs}?slug=${requestEvent.params.slug}`
  );
  const data = await response.json();

  console.log("the data", data);

  const body = converter
    .makeHtml(data[0].body)
    .replace(/<img/g, '<img loading="lazy"');

  return {
    title: data[0].title,
    body: body,
    created_at: data[0].created_at,
  };
});

export default component$(() => {
  const signal = useArticleFetchData();
  return (
    <>
      <h1>{signal.value.title}</h1>
      <article dangerouslySetInnerHTML={signal.value.body}></article>

      <p class="article-date-container">
        Date: <span class="article-date">{formatDate(signal.value.created_at)}</span>
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "George Iliadis",
  meta: [
    {
      name: "George Iliadis | Software Engineer",
      content: "Article",
    },
  ],
};
