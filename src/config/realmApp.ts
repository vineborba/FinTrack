import Realm from 'realm';
import { appId, baseUrl } from '../../realm.json';

if (!appId) {
  throw new Error('Missing Realm App ID. Set appId in realm.json');
}
if (!baseUrl) {
  throw new Error('Missing Realm base URL. Set baseUrl in realm.json');
}

const appConfiguration: Realm.AppConfiguration = {
  id: appId,
  baseUrl,
};

export const realmApp = new Realm.App(appConfiguration);
