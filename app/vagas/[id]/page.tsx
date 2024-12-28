import Container from "@/app/components/ui/Container";
import JobDetails from "@/app/components/ui/jobDetails";
import React from "react";

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
