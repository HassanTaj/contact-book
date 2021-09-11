import { ContactEmail } from './contact-mail';
import { ContactPhone } from './contact-phone';

export class Contact {
  public Id?: number;
  public FirstName?: string;
  public LastName?: string;
  public Address?: string;
  public City?: string;
  public Country?: string;
  public PostalCode?: string;
  public About?: string;

  public PhoneNumbers?: ContactPhone[];
  public Emails?: ContactEmail[];
}
