"use client";

import { useState } from "react";
import { EmailPasswordCard, UsernameCard } from "../components";

export default function () {
  const [step, setStep] = useState<number>(0);

  if (step === 0) {
    return <UsernameCard setStep={() => setStep(1)} />;
  } else {
    return <EmailPasswordCard />;
  }
}
