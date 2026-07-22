import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import Marquee from "../components/Marquee";
import ScrollReveal from "../components/ScrollReveal";
import { reviews, getAvatarColors } from "../constants";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, username, body, initials, colorIdx }) => {
  const colors = getAvatarColors(colorIdx);

  return (
    <figure
      className={twMerge(
        "relative h-full w-72 cursor-default overflow-hidden rounded-2xl review-card p-5"
      )}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
        style={{
          background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`,
        }}
      />

      <div className="flex flex-row items-center gap-3 mb-4">
        <motion.div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
            boxShadow: `0 4px 14px ${colors[0]}33`,
          }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {initials}
        </motion.div>
        <div className="flex flex-col min-w-0">
          <figcaption className="text-sm font-semibold dark:text-white text-neutral-800 truncate">
            {name}
          </figcaption>
          <p className="text-xs dark:text-white/30 text-neutral-400 truncate">{username}</p>
        </div>
      </div>

      <blockquote className="text-sm dark:text-neutral-300 text-neutral-600 leading-relaxed">
        &ldquo;{body}&rdquo;
      </blockquote>

      <div className="flex gap-0.5 mt-4">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-3.5 h-3.5"
            fill="#d6995c"
            viewBox="0 0 20 20"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 + 0.3, duration: 0.3, ease: "backOut" }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section className="items-start mt-20 md:mt-30 c-space" aria-labelledby="testimonials-heading">
      <ScrollReveal distance={30}>
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-royal mb-2">Testimonials</p>
          <h2 id="testimonials-heading" className="text-heading">What Clients Say</h2>
          <p className="mt-3 dark:text-neutral-400 text-neutral-500 max-w-2xl text-sm md:text-base">
            Feedback from clients and collaborators who&apos;ve worked with me.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal distance={30} delay={0.15} amount={0.1}>
        <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none testimonial-fade-left" />
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none testimonial-fade-right" />
        </div>
      </ScrollReveal>
    </section>
  );
}
