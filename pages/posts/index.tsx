import {ChangeEvent, useState} from 'react';
import {useDebounce} from 'react-use';

import PostList from '@/components/blog/PostList';
import {getAllPosts} from '@/lib/post';
import {PostMeta} from '@/models/post';

export default function PostsPage({posts}: {posts: PostMeta[]}) {
  const [term, setTerm] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const [isReady, cancel] = useDebounce(
    () => {
      setDebouncedValue(term);

      const data = posts.filter((slug) => slug.title.match(new RegExp(term, 'i')));
      setFilteredPosts(data);
    },
    1000,
    [term],
  );
  // const deferredTerm = useDeferredValue(term, {timeoutMs: 2000});

  return (
    <section className="bg-white dark:bg-gray-900" id="project">
      <div className="container m-auto py-10 px-6 lg:py-20">
        <h2 className="py-6 text-center text-2xl lg:mb-10 lg:text-left lg:text-5xl">Posts</h2>

        {/* <form action="/blog" method="GET"> */}
        <form className="w-full pb-10 lg:w-2/3">
          <div className="relative">
            <button
              title="Search"
              type="button"
              className="absolute left-6 top-0 flex h-full cursor-default items-center justify-center border-none bg-transparent p-0 text-gray-500"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75068 11.3405C1.65161 9.23359 1.65161 5.80439 3.75068 3.69748C4.76756 2.67681 6.11976 2.11292 7.55689 2.11292C8.99619 2.11292 10.3484 2.67681 11.3653 3.69748C13.4622 5.80439 13.4622 9.23359 11.3653 11.3405C9.2662 13.4452 5.84975 13.4452 3.75068 11.3405ZM18 16.4548L13.595 12.0333C15.7986 9.06529 15.5874 4.8471 12.9047 2.15226C10.0479 -0.715235 5.06587 -0.719606 2.21121 2.15226C-0.737072 5.10937 -0.737072 9.9286 2.21121 12.8857C3.68536 14.3654 5.62112 15.1041 7.55906 15.1041C9.14861 15.1041 10.7229 14.5752 12.0555 13.5785L16.4605 18L18 16.4548Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              name="q"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search posts by title"
              className="w-full rounded-full border border-gray-200 bg-gray-100 py-4 pl-14 pr-6 text-lg font-medium focus:border-king-500 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-king-500 md:pr-20"
            />
            <div className="absolute right-6 top-0 hidden h-full w-14 items-center justify-end text-lg font-medium text-gray-500 md:flex">
              {filteredPosts.length}
            </div>
          </div>
        </form>

        <PostList posts={filteredPosts} />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    // .slice(0, 9)
    .map((post) => post.meta);

  return {props: {posts}};
}
