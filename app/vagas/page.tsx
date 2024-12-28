import React from "react";
import Container from "@/app/components/ui/Container";
import JobDetails from "../components/ui/jobDetails";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <div className="container mx-auto py-8">
          <JobDetails />
        </div>
      </Container>
    </div>
  );
}
