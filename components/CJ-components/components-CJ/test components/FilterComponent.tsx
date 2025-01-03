"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNewsContext } from "@/app/[locale]/(website)/media/news-contect";
import { FixedSizeList as List } from "react-window";

interface RelatedCollection {
  id: string;
  name: string;
}

const FilterComponent: React.FC = () => {
  const {
    programmes,
    sources,
    setProgrammeFilter,
    setSourceFilter,
    setNewsQuery,
    newsQuery,
  } = useNewsContext();

  const [selectedProgrammes, setSelectedProgrammes] = useState<
    RelatedCollection[]
  >([]);
  const [selectedSources, setSelectedSources] = useState<RelatedCollection[]>(
    []
  );

  const [openProgrammeDropdown, setOpenProgrammeDropdown] =
    useState<boolean>(false);
  const [openSourceDropdown, setOpenSourceDropdown] = useState<boolean>(false);
  const [queryProgramme, setQueryProgramme] = useState<string>("");
  const [querySource, setQuerySource] = useState<string>("");

  useEffect(() => {
    setProgrammeFilter(selectedProgrammes);
  }, [selectedProgrammes, setProgrammeFilter]);

  useEffect(() => {
    setSourceFilter(selectedSources);
  }, [selectedSources, setSourceFilter]);

  const filteredProgrammes = useMemo(() => {
    const sortedProgrammes =
      queryProgramme === ""
        ? [...programmes]
        : programmes.filter((programme) =>
            programme.name.toLowerCase().includes(queryProgramme.toLowerCase())
          );
    return sortedProgrammes.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  }, [programmes, queryProgramme]);
  
  const filteredSources = useMemo(() => {
    const sortedSources =
      querySource === ""
        ? [...sources]
        : sources.filter((source) =>
            source.name.toLowerCase().includes(querySource.toLowerCase())
          );
    return sortedSources.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  }, [sources, querySource]);

  const handleSelect = (item: RelatedCollection, type: string) => {
    switch (type) {
      case "programme":
        if (!selectedProgrammes.some((p) => p.id === item.id)) {
          setSelectedProgrammes([...selectedProgrammes, item]);
        }
        break;
      case "source":
        if (!selectedSources.some((s) => s.id === item.id)) {
          setSelectedSources([...selectedSources, item]);
        }
        break;
      default:
        break;
    }
  };

  const handleRemove = (id: string, type: string) => {
    switch (type) {
      case "programme":
        setSelectedProgrammes(selectedProgrammes.filter((p) => p.id !== id));
        setQueryProgramme(""); // Reset the programme filter query
        break;
      case "source":
        setSelectedSources(selectedSources.filter((s) => s.id !== id));
        setQuerySource(""); // Reset the source filter query
        break;
      default:
        break;
    }
  };
  interface SourceItemProps {
    index: number;
    style: React.CSSProperties;
  }

  const SourceItem = ({ index, style }: SourceItemProps) => {
    const source = filteredSources[index];
    return (
      <div
        style={style}
        key={source.id}
        onClick={() => handleSelect(source, "source")}
        className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900"
      >
        <span className="block truncate font-normal">{source.name}</span>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4">
        <div className="w-full">
          <input
            id="news-search"
            type="text"
            placeholder="Search..."
            value={newsQuery}
            onChange={(e) => setNewsQuery(e.target.value)}
            className="mt-1 sans-serif text-base block w-full pl-3 pr-10 py-2 dark:text-gray-800  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="hidden md:block w-1/2">
          <Combobox
            value={queryProgramme}
            onChange={(value) => setQueryProgramme(String(value))}
          >
            {({ open }) => (
              <>
                <div className="mt-1 relative">
                  <div className="relative w-full text-left bg-white rounded-lg cursor-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    <Combobox.Input
                      className="sans-serif text-base w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Lab"
                      onChange={(event) =>
                        setQueryProgramme(event.target.value)
                      }
                      displayValue={(programme: RelatedCollection) =>
                        programme.name
                      }
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    show={open}
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Combobox.Options className="absolute z-40 mt-1 w-full bg-white max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {filteredProgrammes.length === 0 &&
                      queryProgramme !== "" ? (
                        <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                          No results found
                        </div>
                      ) : (
                        filteredProgrammes.map((programme) => (
                          <Combobox.Option
                            key={programme.id}
                            value={programme}
                            onClick={() => handleSelect(programme, "programme")}
                            className={({ active }) =>
                              `cursor-default select-none relative py-2 pl-3 pr-9 ${
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900"
                              }`
                            }
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-semibold" : "font-normal"
                                  }`}
                                >
                                  {programme.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                      active ? "text-white" : "text-indigo-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Combobox>
        </div>

        <div className="hidden md:block w-1/2">
          <Combobox
            value={querySource}
            onChange={(value) => setQuerySource(String(value))}
          >
            {({ open }) => (
              <>
                <div className="mt-1 relative">
                  <div className="relative w-full text-left bg-white rounded-lg cursor-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    <Combobox.Input
                      className="sans-serif text-base w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Source"
                      onChange={(event) => setQuerySource(event.target.value)}
                      displayValue={(source: RelatedCollection) => source.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    show={open}
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Combobox.Options className="absolute z-40 mt-1 w-full bg-white max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm">
                      {filteredSources.length === 0 && querySource !== "" ? (
                        <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                          No results found
                        </div>
                      ) : (
                        <List
                          height={240}
                          itemCount={filteredSources.length}
                          itemSize={35}
                          width={"100%"}
                        >
                          {SourceItem}
                        </List>
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Combobox>
        </div>
      </div>

      <div className="mt-1 mb-9">
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedProgrammes.map((programme) => (
            <div
              key={programme.id}
              className="flex items-center justify-between px-2 py-2 bg-blue-200 rounded-md"
            >
              <span className="mono text-xs uppercase font-medium">
                {programme.name}
              </span>
              <button
                onClick={() => handleRemove(programme.id, "programme")}
                className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
              >
                <XMarkIcon className="h-3 w-3" />
              </button>
            </div>
          ))}
          {selectedSources.map((source) => (
            <div
              key={source.id}
              className="flex items-center justify-between px-2 py-2 bg-green-200 rounded-md"
            >
              <span className="mono text-xs uppercase font-medium">
                {source.name}
              </span>
              <button
                onClick={() => handleRemove(source.id, "source")}
                className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
              >
                <XMarkIcon className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
