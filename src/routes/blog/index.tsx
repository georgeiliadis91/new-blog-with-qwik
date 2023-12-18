import { component$ } from "@builder.io/qwik";
import { routeLoader$, Link, type DocumentHead } from "@builder.io/qwik-city";
import { CMS_BASE_URL, CMS_API_ROUTES } from "~/helpers";
import { formatDate } from "~/helpers";

interface IBlog {
  title: string;
  slug: string;
  created_at: string;
}

export const useBlogPageData = routeLoader$(async () => {
  const response = await fetch(
    `${CMS_BASE_URL}/${CMS_API_ROUTES.blogs}?_sort=created_at:DESC`
  );
  const data = await response.json();
  /*
   * Make sure we get the data by filtering on the api instead of here
   **/
  const formattedData = data.map((blog: IBlog) => {
    return {
      title: blog.title,
      slug: blog.slug,
      created_at: blog.created_at,
    };
  });

  return { blogs: formattedData };
});

export default component$(() => {
  const signal = useBlogPageData();
  return (
    <article>
      <h1>Articles</h1>
      <ul>
        {signal.value.blogs.map((post: IBlog) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <p>
                Date:{" "}
                <span class="date-str">{formatDate(post.created_at)}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </article>
  );
});

export const head: DocumentHead = {
  title: "George Iliadis | Blog List ",
  meta: [
    {
      name: "description",
      content: "George Iliadis Blog List",
    },
  ],
};
