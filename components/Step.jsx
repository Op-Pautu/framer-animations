import { CheckIcon } from "./CheckIcon";
import { motion } from "framer-motion";
export function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div
      animate={{
        backgroundColor:
          status === "complete" ? "var(--blue-500)" : "var(--white)",

        borderColor:
          status === "complete" || status === "active"
            ? "var(--blue-500)"
            : "var(--slate-200)",
        color:
          status === "complete" || status === "active"
            ? "var(--blue-500)"
            : "var(--slate-400)",
      }}
      transition={{ duration: 1 }}
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
    >
      <div className="flex items-center justify-center">
        {status === "complete" ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <span>{step}</span>
        )}
      </div>
    </motion.div>
  );
}
