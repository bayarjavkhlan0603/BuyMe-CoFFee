"use client";
import { useState } from "react";
import { ProfileContainer } from "../components";
import { ProfileAccount } from "../components/ProfileAccount";

export default function () {
  const [step, setStep] = useState<number>(0);

  if (step === 0) {
    return <ProfileContainer setStep={setStep} />;
  } else {
    return <ProfileAccount />;
  }
}
