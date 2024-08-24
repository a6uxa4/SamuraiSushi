"use client";

import { Carousel } from "@mantine/carousel";
import { Paper, rem } from "@mantine/core";
import classes from "./style.module.css";

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  return (
    <Paper
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    />
  );
}

const data = [
  {
    image:
      "https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/UU98ckkIpWkMy5wJNTv6aZDvaY1-frB-0x5iWSKMUR4/pr:advert_desktop/cHl4dmtuZ2tmbWll/MDFwbXEwMWJta3cy/NWM4cg",
  },
  {
    image:
      "https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/t_ji-PGFm9gfxYSdpktBkD5laog8Lco-S6CekSp01qI/pr:advert_desktop/aTVuNGd3dWkzb3Bn/Zjg0cXVhbDNuZWE1/ZmI3cQ",
  },
  {
    image:
      "https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/2H-CiBD7Aik3mLG-ETPj8k2cIxE_jN24etOUxNFWlgM/pr:advert_desktop/aXphb2ZzcWV6cWIy/c2k5bzhsZXk1OXF5/bDJ5Zg",
  },
  {
    image:
      "https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/WNAxMniNpNXRspjJ-KAqU_psTVz9uAdgT1EbLq4WDDA/pr:advert_desktop/Z2o5NmVxN3FpYXN1/cjJwam9ycGg0YThv/bjlkMg",
  },
  {
    image:
      "https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/hcDzW5OdIdgq8LUtP4colEgfB-CynfSKL_wjeATu9_E/pr:advert_desktop/bmRkOWhiNmhhdHZh/aHR3MmtiYXlwOW5r/dzFwNQ",
  },
  {
    image:
      "https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/5PJTVAhrTB2UhAzNa3h-W3IVKWbc1IbYruT1C9qkFY0/pr:advert_desktop/enVjajNtOTcza203/OHViamJ6ejhtZzZh/YjR4Ng",
  },
];

export function CardsCarousel() {
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      slideGap={rem(2)}
      align="start"
      slidesToScroll={1}
      loop={true}
    >
      {slides}
    </Carousel>
  );
}
