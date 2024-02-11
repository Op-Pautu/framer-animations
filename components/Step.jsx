import { CheckIcon } from "./CheckIcon";

export function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <div
      className={`${
        status === "active"
          ? "border-blue-500 bg-white text-blue-500"
          : status === "complete"
          ? "border-blue-500 bg-blue-500"
          : "border-slate-200 bg-white text-slate-400"
      } flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
    >
      <div className="flex items-center justify-center">
        {status === "complete" ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <span>{step}</span>
        )}
      </div>
    </div>
  );
}
