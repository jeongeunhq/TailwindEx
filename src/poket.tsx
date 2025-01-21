import { motion } from "framer-motion";

export default function Poket() {
  const items = [
    { id: 1, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 2, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 3, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 4, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 5, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 6, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 7, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 8, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
    { id: 9, rate: "★★★★★", title: "\"Don’t download this app\"", text: "Unless you want to have the best life ever! I am literally writing this from a yacht.", author: "Jeff Bezos" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mt-[20px] text-center text-3xl font-bold text-gray-900 sm:text-center">
        Everyone is changing their life with Pocket.
      </h2>
      <p className="mt-2 mb-[30px] text-lg text-gray-600 sm:text-center">
        Thousands of people have doubled their net-worth in the last 30 days.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
           <motion.div
           key={item.id}
           className="flex flex-col justify-center rounded-lg bg-white p-10 shadow"
           initial={{ y: 0 }}
           animate={{ y: [-30, 30, -30] }}
           transition={{
             duration: 3,
             repeat: Infinity,
             ease: "easeInOut",
             delay: (index % 3) * 0.2,
           }}
         >
            <p className="text-lg font-bold text-[#06b6d4] mb-2">{item.rate}</p>
            <p className="text-lg font-bold text-gray-700 mb-2">{item.title}</p>
            <p className="text-base font-medium text-gray-700 mb-2">{item.text}</p>
            <p className="text-sm text-gray-500">- {item.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
