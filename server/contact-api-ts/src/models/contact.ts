import { Schema, model, Document, Model } from 'mongoose';

export interface IContact {
  name: string;
  category: string;
  unit: number;
}
export interface IContactDoc extends IContact, Document { }
export type IContactModel = Model<IContactDoc>
export class Contact {
  private _model: Model<IContactDoc>;

  constructor() {
  	/**
     * Creating new schema instance
     */
  	const schema = new Schema({
  		name: { type: String, required: true },
  		category: { type: String, required: true },
  		unit: { type: Number, required: true }
  	}, {
  		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  	});

  	/**
     * Registering schema instance as Product model
     */
  	this._model = model<IContactDoc>('Contact', schema);
  }

  /**
   * Function to return the model
   * @returns contact model
   */
  public get model(): Model<IContactDoc> {
  	return this._model;
  }
}
