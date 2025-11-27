"use client";

import JobCard from "@/components/job-card";

interface Props {
  heading: string;
  subHeading?: string;
}

const JobList = (props: Props) => {
  const { heading, subHeading } = props;

  return (
    <div className="">
      <div className="max-h-[76px] flex items-center justify-between">
        <div>
          <p className="text-[#3E3F47] text-[12px]">
            {/* Top Jobs You Can Apply Right Now */}
            {subHeading}
          </p>
          <h2 className="text-[32px] text-[#0E0F19] font-medium">
            {/* Latest Jobs */}
            {heading}
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-[52px]">
        {[1, 2, 3, 4].map((job,idx) => (
          <JobCard key={idx} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
