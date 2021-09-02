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
      <PostTitle post={post} />
      <span>author: {post.author.name}</span>
      <PostDate post={post} />
    </div>
  );
};

type Props = {
  post: PostType;
};

export const PostTitle: VFC<Props> = ({ post }) => {
  return <h1>{post.title}</h1>;
};

type DateProps = {
  post: PostType;
};

export const PostDate: VFC<DateProps> = ({ post }) => {
  return <time>{post.createdAt}</time>; // サンプルということで...
};