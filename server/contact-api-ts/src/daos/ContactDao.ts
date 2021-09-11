import { IContact } from '../models/index';
import { IDao } from './IDao';
import { DB } from './index';


/**
 * Class for Contacts DAO, contains every methods possible on Contacts collection
 * {@linkcode IContactDao}
 */
export class ContactDao implements IDao<IContact> {
  get: () => Promise<IContact[]>;
  getByQuery: (query: any) => Promise<IContact[]>;

  /**
   * Get one by_id
   * @param id
   * @async
   * @returns Promise<IContact | null>
   */
  public async getSingle(_id: string): Promise<IContact | null> {
  	try {
  		const data = await DB.Models.Contacts.find({ _id }).exec();
  		if (data) {
  			return data[0];
  		}
  		throw new Error('Contacts not found!');
  	} catch (err) {
  		throw err;
  	}
  }


  /**
   * Get all
   * @async
   * @returns Promise<IContact[]>
   */
  public async read(): Promise<IContact[]> {
  	try {
  		const data = await DB.Models.Contacts.find({}).exec();
  		return data;
  	} catch (err) {
  		throw err;
  	}
  }


  /**
   * Create new
   * @async
   * @param Contacts
   * @returns Promise<IContact>
   */
  public async add(Contacts: IContact): Promise<IContact> {
  	try {
  		const newContacts = await new DB.Models.Contacts(Contacts).save();
  		return newContacts;
  	} catch (err) {
  		throw err;
  	}
  }


  /**
   * Update one
   * @async
   * @param _id
   * @param Contacts
   * @returns Promise<IContact>
   */
  public async update(_id: string, Contacts: IContact): Promise<IContact> {
  	try {
  		await DB.Models.Contacts.findOneAndUpdate({ _id }, Contacts).exec();
  		return Contacts;
  	} catch (err) {
  		throw err;
  	}
  }


  /**
   * Delete one
   * @async
   * @param _id
   * @returns Promise<void>
   */
  public async delete(_id: string): Promise<void> {
  	try {
  		await DB.Models.Contacts.findByIdAndDelete({ _id }).exec();
  	} catch (err) {
  		throw err;
  	}
  }
}
