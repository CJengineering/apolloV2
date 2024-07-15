"use client";
import React, { useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePostContext } from "@/app/[locale]/news/post-context";

interface RelatedCollection {
  id: string;
  name: string;
}

export const FilterComponentForPosts: React.FC = () => {
  const { programmes, people, setProgrammeFilter, setPeopleFilter } =
    usePostContext();

  const [selectedProgrammes, setSelectedProgrammes] = useState<
    RelatedCollection[]
  >([]);
  const [selectedPeople, setSelectedPeople] = useState<RelatedCollection[]>([]);

  const [queryProgramme, setQueryProgramme] = useState<string>("");
  const [queryPerson, setQueryPerson] = useState<string>("");

  useEffect(() => {
    setProgrammeFilter(selectedProgrammes);
  }, [selectedProgrammes, setProgrammeFilter]);

  useEffect(() => {
    setPeopleFilter(selectedPeople);
  }, [selectedPeople, setPeopleFilter]);

  const filteredProgrammes =
    queryProgramme === ""
      ? programmes
      : programmes.filter((programme) =>
          programme.name.toLowerCase().startsWith(queryProgramme.toLowerCase())
        );
  const filteredPeople =
    queryPerson === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().startsWith(queryPerson.toLowerCase())
        );

  const handleSelect = (item: RelatedCollection, type: string) => {
    switch (type) {
      case "programme":
        if (!selectedProgrammes.some((p) => p.id === item.id)) {
          setSelectedProgrammes([...selectedProgrammes, item]);
        }
        break;
      case "person":
        if (!selectedPeople.some((p) => p.id === item.id)) {
          setSelectedPeople([...selectedPeople, item]);
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
        break;
      case "person":
        setSelectedPeople(selectedPeople.filter((p) => p.id !== id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <Combobox
            value={queryProgramme}
            onChange={(value) => setQueryProgramme(String(value))}
          >
            {({ open }) => (
              <>
                <Combobox.Label className="block text-sm font-medium text-gray-700">
                  Select Programme
                </Combobox.Label>
                <div className="mt-1 relative">
                  <div className="relative w-full text-left bg-white rounded-lg cursor-default overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    <Combobox.Input
                      className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search programme..."
                      onChange={(event) =>
                        setQueryProgramme(event.target.value)
                      }
                      displayValue={(programme: RelatedCollection) =>
                        programme.name
                      }
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <MagnifyingGlassIcon
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

        <div className="w-1/2">
          <Combobox
            value={queryPerson}
            onChange={(value) => setQueryPerson(String(value))}
          >
            {({ open }) => (
              <>
                <Combobox.Label className="block text-sm font-medium text-gray-700">
                  Select Person
                </Combobox.Label>
                <div className="mt-1 relative">
                  <div className="relative w-full text-left bg-white rounded-lg cursor-default overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    <Combobox.Input
                      className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search person..."
                      onChange={(event) => setQueryPerson(event.target.value)}
                      displayValue={(person: RelatedCollection) => person.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <MagnifyingGlassIcon
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
                      {filteredPeople.length === 0 && queryPerson !== "" ? (
                        <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                          No results found
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            value={person}
                            onClick={() => handleSelect(person, "person")}
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
                                  {person.name}
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
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium text-gray-700">Selected Items</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedProgrammes.map((programme) => (
            <div
              key={programme.id}
              className="flex items-center justify-between p-2 bg-blue-200 rounded-md"
            >
              <span>{programme.name}</span>
              <button
                onClick={() => handleRemove(programme.id, "programme")}
                className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          {selectedPeople.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between p-2 bg-green-200 rounded-md"
            >
              <span>{person.name}</span>
              <button
                onClick={() => handleRemove(person.id, "person")}
                className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponentForPosts;
