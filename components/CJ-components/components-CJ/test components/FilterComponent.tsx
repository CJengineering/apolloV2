// src/components/FilterComponent.tsx
'use client';
import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface RelatedCollection {
  id: string;
  name: string;
}

const programmes: RelatedCollection[] = [
  { id: '1', name: 'J-Pal' },
  { id: '2', name: 'J-Wafs' },
  { id: '3', name: 'J-Wel' },
];

const people : RelatedCollection[] = [
  { id: '1', name: 'George Richards' },
  { id: '2', name: 'Esther Duflo' },
  { id: '3', name: 'Nathanael Daudrich' },
];

const sources: RelatedCollection[] = [
  { id: '1', name: 'New York Times' },
  { id: '2', name: 'MIT ' },
  { id: '3', name: 'Le Monde' },
];

const tags: RelatedCollection[] = [
  { id: '1', name: 'Tag 1' },
  { id: '2', name: 'Tag 2' },
  { id: '3', name: 'Tag 3' },
];

const FilterComponent: React.FC = () => {
  const [selectedProgrammes, setSelectedProgrammes] = useState<RelatedCollection[]>([]);
  const [selectedSources, setSelectedSources] = useState<RelatedCollection[]>([]);
  const [selectedPeople, setSelectedPeople] = useState<RelatedCollection[]>([]);
  const [selectedTags, setSelectedTags] = useState<RelatedCollection[]>([]);

  const handleProgrammeSelect = (programme: RelatedCollection) => {
    if (!selectedProgrammes.some((p) => p.id === programme.id)) {
      setSelectedProgrammes([...selectedProgrammes, programme]);
    }
  };

  const handleSourceSelect = (source: RelatedCollection) => {
    if (!selectedSources.some((s) => s.id === source.id)) {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const handlePeopleSelect = (person: RelatedCollection) => {
    if (!selectedPeople.some((p) => p.id === person.id)) {
      setSelectedPeople([...selectedPeople, person]);
    }
  };

  const handleTagSelect = (tag: RelatedCollection) => {
    if (!selectedTags.some((t) => t.id === tag.id)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveProgramme = (programme: RelatedCollection) => {
    setSelectedProgrammes(selectedProgrammes.filter((p) => p.id !== programme.id));
  };

  const handleRemoveSource = (source: RelatedCollection) => {
    setSelectedSources(selectedSources.filter((s) => s.id !== source.id));
  };

  const handleRemovePerson = (person: RelatedCollection) => {
    setSelectedPeople(selectedPeople.filter((p) => p.id !== person.id));
  };

  const handleRemoveTag = (tag: RelatedCollection) => {
    setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <Listbox onChange={handleProgrammeSelect}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Select Programme</Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">Select Programme</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={React.Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-40 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {programmes.map((programme) => (
                        <Listbox.Option key={programme.id} value={programme} className={({ active }) => `cursor-default select-none relative py-2 pl-3 pr-9 ${active ? 'text-white bg-indigo-600' : 'text-gray-900'}`}>
                          {({ selected, active }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>{programme.name}</span>
                              {selected ? (
                                <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'}`}>
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        <div className="w-1/2">
          <Listbox onChange={handleSourceSelect}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Select Source</Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">Select Source</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={React.Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-40 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {sources.map((source) => (
                        <Listbox.Option key={source.id} value={source} className={({ active }) => `cursor-default select-none relative py-2 pl-3 pr-9 ${active ? 'text-white bg-indigo-600' : 'text-gray-900'}`}>
                          {({ selected, active }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>{source.name}</span>
                              {selected ? (
                                <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'}`}>
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <Listbox onChange={handlePeopleSelect}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Select Person</Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">Select Person</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={React.Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-40 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option key={person.id} value={person} className={({ active }) => `cursor-default select-none relative py-2 pl-3 pr-9 ${active ? 'text-white bg-indigo-600' : 'text-gray-900'}`}>
                          {({ selected, active }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>{person.name}</span>
                              {selected ? (
                                <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'}`}>
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        <div className="w-1/2">
          <Listbox onChange={handleTagSelect}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Select Tag</Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">Select Tag</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={React.Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-40 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {tags.map((tag) => (
                        <Listbox.Option key={tag.id} value={tag} className={({ active }) => `cursor-default select-none relative py-2 pl-3 pr-9 ${active ? 'text-white bg-indigo-600' : 'text-gray-900'}`}>
                          {({ selected, active }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>{tag.name}</span>
                              {selected ? (
                                <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-600'}`}>
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium text-gray-700">Selected Items</h2>
        <div className="mt-2 flex flex-wrap space-x-2 ">
          {selectedProgrammes.map((programme) => (
            <div key={programme.id} className="flex items-center justify-between p-2 bg-blue-200 rounded-md">
              <span>{programme.name}</span>
              <button onClick={() => handleRemoveProgramme(programme)} className="ml-4 text-red-600 hover:text-red-800 focus:outline-none">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          {selectedSources.map((source) => (
            <div key={source.id} className="flex items-center justify-between p-2 bg-green-200 rounded-md">
              <span>{source.name}</span>
              <button onClick={() => handleRemoveSource(source)} className="ml-4 text-red-600 hover:text-red-800 focus:outline-none">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          {selectedPeople.map((person) => (
            <div key={person.id} className="flex items-center justify-between p-2 bg-yellow-200 rounded-md">
              <span>{person.name}</span>
              <button onClick={() => handleRemovePerson(person)} className="ml-4 text-red-600 hover:text-red-800 focus:outline-none">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          {selectedTags.map((tag) => (
            <div key={tag.id} className="flex items-center justify-between p-2 bg-purple-200 rounded-md">
              <span>{tag.name}</span>
              <button onClick={() => handleRemoveTag(tag)} className="ml-4 text-red-600 hover:text-red-800 focus:outline-none">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
