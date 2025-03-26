"use client"

import { Card, Carousel,Separator } from "ui"

const imageUrls = [
  "https://placehold.co/400",
  "https://placehold.co/401",
  "https://placehold.co/402",
  "https://placehold.co/404",
  "https://placehold.co/405",
  "https://placehold.co/406",
  "https://placehold.co/407",
  "https://placehold.co/408",
  "https://placehold.co/409",
  "https://placehold.co/410",
];

export default function Component() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-4xl d-flex justify-center mx-auto "
    >
      <Carousel.Content items={imageUrls.map((url, index) => ({ id: index + 1, url }))}>
        {({ id, url }) => (
          <Carousel.Item id={id} className="basis-1/4 lg:basis-1/7">
            <Card className="flex aspect-square items-center justify-center cursor-pointer">
              <img 
                src={url} 
                alt={`Placeholder ${id}`} 
                className="w-full h-full object-cover" 
              />
            </Card>
          </Carousel.Item>
        )}
      </Carousel.Content>

      <Carousel.Handler>
        <Carousel.Button segment="previous" />
        <Carousel.Button segment="next" />
      </Carousel.Handler>
    </Carousel>
  )
}