"use client";

import { useState } from "react";
import { EmailPasswordCard, UsernameCard } from "../components";

export default function () {
  const [step, setStep] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  if (step === 0) {
    return <UsernameCard setStep={setStep} setUsername={setUsername} />;
  } else {
    return <EmailPasswordCard username={username} />;
  }
}
