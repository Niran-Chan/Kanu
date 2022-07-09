import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// types
import { CardProps } from "../types/cardprops";

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-md hover:shadow-lg">
      <Link to={"/items/" + item.frontmatter.slug} key={item.id}>
      <div className="p-2">
        <h2 className="font-bold text-lg mb-2">{item.frontmatter.title}</h2>
        
          <GatsbyImage
            className="h-40 rounded-xl object-cover object-center"
            image={getImage(
              item.frontmatter.thumb.childImageSharp.gatsbyImageData
            )}
            alt="banner"
          />
     
        <div className="py-1" />
        <h1 className="text-black font-semibold">{item.frontmatter.price}</h1>
        <div className="py-1" />
        <div className="h-40">
          <p className="text-sm text-gray-600 text-ellipsis">
            {item.frontmatter.description}
          </p>
        </div>
      </div>
      <div className="m-2">
     
      </div>
         </Link>
    </div>
  );
};

export default Card;

/*
////////////
// Button //
////////////

   <a
          role="button"
          href="#"
          className="text-white font-semibold bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-700"
        >
          Learn More
        </a>


*/