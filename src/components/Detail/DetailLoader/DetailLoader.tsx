import React from "react";

type Props = {};

const DetailLoader = (props: Props) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 animate-pulse">
      <div className="w-48 h-72 bg-slate-700 rounded-md" />
      <div className="flex flex-col gap-5">
        <div className="h-5 w-36 bg-slate-700 rounded-full" />
        <div className="h-3 w-64 bg-slate-700 rounded-full" />
        <div className="flex gap-4">
          <div className="h-2 w-16 bg-slate-700 rounded-full" />
          <div className="h-2 w-16 bg-slate-700 rounded-full" />
        </div>
        <div className="h-2 w-24 bg-slate-700 rounded-full" />
        <div className="h-2 w-24 bg-slate-700 rounded-full" />
        <div className="h-2 w-full bg-slate-700 rounded-full" />
        <div className="h-2 w-full bg-slate-700 rounded-full" />
        <div className="h-2 w-full bg-slate-700 rounded-full" />
      </div>
    </div>
  );
};

export default DetailLoader;
