import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// types
import { CardProps } from "../types/cardprops";

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-blue-500 rounded-lg object-contain w-50 h-50">
      <Link to={"/items/" + item.frontmatter.slug} key={item.id}>
        <GatsbyImage
          image={getImage(
            item.frontmatter.thumb.childImageSharp.gatsbyImageData
          )}
          alt="banner"
        />
        <div>
          <h1> {item.frontmatter.title}</h1>
          <h1> {item.frontmatter.price}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
