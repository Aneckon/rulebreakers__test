import Realm, {ObjectSchema} from 'realm';

export class Notes extends Realm.Object<Notes> {
  _id!: Realm.BSON.ObjectId;
  name!: string;

  static schema: ObjectSchema = {
    name: 'Notes',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
    primaryKey: '_id',
  };
  static generate: any;
}