import { useContext, useCallback, useMemo, createContext } from 'react';

import { Entry, INewEntry } from '../schemas/Entry';
import EntryContext from '../contexts/RealmContext';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  createEntry: (newEntry: INewEntry) => void;
}

const EntriesContext = createContext<ContextValue>({
  createEntry: () => {},
});

const { useRealm } = EntryContext;

export function EntriesProvider({ children }: Props) {
  const realm = useRealm();

  const createEntry = useCallback(
    (newEntry: INewEntry) => {
      if (!realm) {
        throw new Error('Realm instance is not open');
      }

      let result;
      realm.write(() => {
        result = realm.create<Entry>('Entry', Entry.generate(newEntry));
      });
      if (!result) {
        throw new Error('Failed to create entry');
      }
    },
    [realm],
  );

  const contextValue = useMemo(() => ({ createEntry }), [createEntry]);

  return (
    <EntriesContext.Provider value={contextValue}>
      {children}
    </EntriesContext.Provider>
  );
}

export function useEntries() {
  const entries = useContext(EntriesContext);

  if (!entries) {
    throw new Error('useRecords beeing called out of context');
  }

  return entries;
}
