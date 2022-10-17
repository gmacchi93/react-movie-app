import React, { MouseEventHandler } from "react";

export interface TabInterface {
  label: string;
  value: string;
  action: Function;
}

type Props = {
  selected: string;
  tabs: TabInterface[];
};

const Tab = ({ selected, tabs }: Props) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    tab: TabInterface
  ) => {
    tab.action();
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className="flex flex-row text-sm custom-tab">
      {tabs.map((tab) => (
        <button
          className="bg-gray-300 px-5 py-1 shadow-md"
          role="tab"
          aria-selected={selected === tab.value ? "true" : "false"}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleClick(event, tab);
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
