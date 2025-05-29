"use client";
import InputField from "@/components/Form/InputField";
import { AuthBtn } from "@/components/AuthBtn/AuthBtn";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13+

export default function Otp() {
  const router = useRouter(); // Initialize router for navigation

  const handleLogin = () => {
    router.push("/auth/createbussinessprofile"); // Navigate to OTP page on click
  };

  return (
    <form>
      <label htmlFor="email">Postal Code</label>
      <InputField
        type="number"
        placeholder="12345670"
        id="number"
        classInput="classInput"
        classImg="classImg"
      />
      <label htmlFor="email">Country</label>
      <InputField
        type="text"
        placeholder="USA"
        id="country"
        classInput="classInput"
        classImg="classImg"
      />
      <label htmlFor="email">State</label>
      <InputField
        type="state"
        placeholder="California"
        id="state"
        classInput="classInput"
        classImg="classImg"
      />
      <label htmlFor="email">City</label>
      <InputField
        type="city"
        placeholder="Los angeles"
        id="city"
        classInput="classInput"
        classImg="classImg"
      />
      <br />
      <AuthBtn title="Next" type="button" onClick={handleLogin} />
    </form>
  );
}
