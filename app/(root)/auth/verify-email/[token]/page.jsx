// import EmailVerificationClient from "./EmailVerificationClient";

import EmailVerificationClient from "@/components/Application/EmailVerificationClient";

const Page = async ({ params }) => {
  return <EmailVerificationClient token={params.token} />;
};

export default Page;
