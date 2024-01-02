export const paths = {
  home() {
    return "/";
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(postSlug: string) {
    return `/topics/${postSlug}/posts/new`;
  },
  postShow(postSlug: string, postId: string) {
    return `/topics/${postSlug}/posts/${postId}`;
  },
};
