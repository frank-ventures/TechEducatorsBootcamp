"use client";

import { inView, motion } from "framer-motion";
import Image from "next/image";

export default function CardDisplay({ data }) {
  const variants = {
    inView: { opacity: 1, scale: 1 },
    notInView: { opacity: 0, scale: 0 }
  };

  return (
    <>
      {data.map((photo) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            variants={variants}
            key={photo.id}
            className="flex items-center justify-between gap-1 w-6/12 border p-1 bg-cyan-600"
          >
            <p className="w-80">{photo.title}</p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                className="w-28"
                src={photo.url}
                alt={photo.title}
                width={600}
                height={600}
              ></Image>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}
