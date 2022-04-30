import { Realm } from '@realm/react';

export type EntryType = 'in' | 'out';

export interface IEntry {
  _id: Realm.BSON.ObjectId;
  name: string;
  type: EntryType;
  value: number;
  userId?: string;
  createdAt: Date;
}

export type INewEntry = Pick<IEntry, 'name' | 'type' | 'value' | 'userId'>;

export class Entry extends Realm.Object {
  _id!: Realm.BSON.ObjectId;

  name!: string;

  value!: number;

  type!: EntryType;

  createdAt!: Date;

  userId!: string;

  static generate({ name, type, value, userId }: INewEntry) {
    return {
      name,
      type,
      value,
      createdAt: new Date(),
      _id: new Realm.BSON.ObjectID(),
      userId: userId || '_SYNC_DISABLED_',
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'Entry',
    properties: {
      _id: 'objectId',
      name: 'string',
      type: 'string',
      value: 'float',
      createdAt: 'date',
    },
    primaryKey: '_id',
  };
}
