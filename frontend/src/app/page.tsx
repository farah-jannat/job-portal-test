import Container from "@/components/container";
import HeroSection from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import JobList from "@/components/job-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <Home />
    </Suspense>
  );
}

function Home() {
  return (
    <>
      <Container>
        <HeroSection />
      </Container>

      <Container className="bg-[#F5F6FD] pt-12 pb-16">
        <JobList
          subHeading="Top Jobs You Can Apply Right Now"
          heading="Latest Jobs"
        />
      </Container>

      <Container className={"bg-[#FBFBFE] pt-12 pb-16"}>
        <HowItWorks />
      </Container>
    </>
  );
}
