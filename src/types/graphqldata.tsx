import { ImageDataLike } from "gatsby-plugin-image";

export type GraphQLData = {
  frontmatter: {
    [x: string]: ReactNode;
    slug: string;
    thumb: { childImageSharp: { gatsbyImageData: ImageDataLike } };
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    price:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
  id: React.Key | null | undefined;
};
