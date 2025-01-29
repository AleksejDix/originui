"use client";

import { Badge } from "@/registry/default/ui/badge";
import { X } from "lucide-react";
import { useId, useState } from "react";

export default function Component() {
  const [isActive, setIsActive] = useState(true);
  const labelId = useId();
  const descriptionId = useId();
  if (!isActive) return null;

  return (
    <Badge variant="outline" className="rounded-md px-2 py-1">
      <span className="sr-only" id={descriptionId}>
        Remove
      </span>
      <span id={labelId}>Tag</span>
      <button
        className="-my-[5px] -me-2 -ms-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
        onClick={() => setIsActive(false)}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
      >
        <X size={14} strokeWidth={2} aria-hidden="true" />
      </button>
    </Badge>
  );
}
