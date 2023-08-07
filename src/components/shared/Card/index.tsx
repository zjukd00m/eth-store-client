import { useState } from "react";

export interface ICardProps {
  title: string;
  subtitle?: string;
  description: string;
  images?: string[];
}

export default function Card(props: ICardProps) {
  const { title, subtitle, description, images } = props;

  return (
    <div className="">
      {images?.length
        ? images.map((image, index) => (
            <div className="" key={index}>
              <img src={image} alt="" />
            </div>
          ))
        : null}
      <div className="">
        <p className=""> {title} </p>
        {subtitle?.length ? <p className=""> {subtitle} </p> : null}
        <div className="">
          <p className=""> {description} </p>
        </div>
      </div>
    </div>
  );
}
