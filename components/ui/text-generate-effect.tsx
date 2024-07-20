"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={`text-gray-400  opacity-0 `}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-semibold text-wrap", className)}>
            <div className="mt-5 mb-5 ">
                <div className="w-96 md:w-[40rem] lg:w-[50rem] xl:w-full dark:text-gray-500 text-wrap text-black text-lg md:text-xl leading-none tracking-wider font-medium">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
