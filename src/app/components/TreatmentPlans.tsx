"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function TreatmentPlan() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const plans = [
    { name: "Sunnah Basic", path: "/treatment-plans/sunnah-basic" },
    { name: "Sunnah Plus", path: "/treatment-plans/sunnah-plus" },
    { name: "Vital Organ Cleanse", path: "/treatment-plans/vital-organ-cleanse" },
    { name: "Head Cupping", path: "/treatment-plans/head-cupping" },
    { name: "Lymphatic Cleanse", path: "/treatment-plans/lymphatic-cleanse" },
    { name: "Infertility Cupping", path: "/treatment-plans/infertility-cupping" },
    { name: "i-Revive Plan", path: "/treatment-plans/i-revive-plan" },
    { name: "Custom Plan", path: "/treatment-plans/custom-plan" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const buttonTopPosition = isMounted
    ? pathname === "/"
      ? "top-[155px]"
      : "top-[265px]"
    : "top-[155px]";

  if (!isMounted) return null;

  return (
    <>
      {!isOpen && (
        <button
          className={`fixed right-0 ${buttonTopPosition} mt-[-115px] md:mt-0 md:top-[200px] z-40 btn_hotline`}
          onClick={() => setIsOpen(true)}
        >
          <div className="px-5 py-3 bg-blackshed border border-gray-400 shadow-lg lg:shadow-xl hover:bg-primary/80 text-white uppercase font-semibold rounded-l-3xl">
            SELECT TREATMENT PLAN
          </div>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed z-20 inset-0 bg-black/80 cursor-pointer"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed z-50 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            >
              <div className="relative bg-white mt-40 border border-gray-200 rounded-xl w-full max-w-3xl shadow-2xl px-8 py-10 transition-all duration-300 ease-in-out">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 md:mb-8">
                  SELECT TREATMENT PLAN
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 max-h-[350px] overflow-y-auto pr-2">
                  {plans.map((plan, index) => (
                    <Link key={index} href={plan.path}>
                      <div
                        className="group p-2 md:p-5 rounded-lg bg-gray-300 hover:bg-primary shadow-sm hover:shadow-md cursor-pointer transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                          {plan.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
