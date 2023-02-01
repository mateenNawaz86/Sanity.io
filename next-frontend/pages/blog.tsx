import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import Footer from "../components/Footer";
import Link from "next/link";
type Props = {};

const Blog = ({ blogs }) => {
  const client = createClient({
    projectId: "o7156ep0",
    dataset: "production",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);
  return (
    <>
      <HeadContent />
      <Navbar />
      <div className="bg-grey-50" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          <h2 className="text-center font-header text-2xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6  pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((item, index) => {
              return (
                <Link key={index} href="/post" className="shadow">
                  <div
                    style={{
                      backgroundImage: `url(${
                        builder.image(item.blogimage).width(200).url() ||
                        "/assets/img/post-02.png)"
                      })`,
                    }}
                    className="group relative h-72 bg-cover rounded-t-md bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                      Read More
                    </span>
                  </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black">
                      {item.title}
                    </span>
                    <span className="block pt-2 font-body text-grey-20">
                      {item.metadesc}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

// code for connecting to sanity server
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "o7156ep0",
    dataset: "production",
    useCdn: false,
  });

  // GROQ code below. GROQ is simply use to run a sanity query
  const query = `*[_type == "blog" ]`;

  // Here fetch is a sanity fetch function
  const blogs = await client.fetch(query);
  // return a list of blogs
  return {
    props: {
      blogs,
    },
  };
}
