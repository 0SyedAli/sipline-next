"use client";
import { useState } from "react";
import InputField from "@/components/Form/InputField";
import { AuthBtn } from "@/components/AuthBtn/AuthBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
const emailImage = "/images/email.png";
const passImage = "/images/lock.png";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/createprofile");
  };

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <InputField type="email" id="email" imageSrc={emailImage} />
      <label htmlFor="password">Password:</label>
      <InputField
        type={show ? "text" : "password"}
        id="password"
        imageSrc={passImage}
        show={show}
        handleClick={handleClick}
      />
      <div className="remember d-flex justify-content-between align-items-center pb-4">
        <div className="d-flex align-items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me</label>
        </div>
        <Link href="/auth/forget">Forget Password?</Link>
      </div>
      <AuthBtn title="Login" type="button" onClick={handleLogin} />{" "}
    </form>
  );
}
