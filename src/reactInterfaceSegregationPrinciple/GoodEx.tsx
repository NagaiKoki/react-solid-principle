import React, { VFC } from "react";

type PostType = {
  title: string;
  author: {
    name: string;
    age: number;
  };
  createdAt: Date;
};

export const Post = ({ post }: { post: PostType }) => {
  return (
    <div>
      <PostTitle title={post.title} />
      <span>author: {post.author.name}</span>
      <PostDate date={post.createdAt} />
    </div>
  );
};

type Props = {
  title: string;
};

export const PostTitle: VFC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

type DateProps = {
  date: Date
};

export const PostDate: VFC<DateProps> = ({ date }) => {
  return <time>{date}</time>; // サンプルということで...
};