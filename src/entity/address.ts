export default class Address {
  private _street: string;
  private _number: string;
  private _city: string;
  private _zipcode: string;

  constructor(street: string, number: string, city: string, zipcode: string) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._zipcode = zipcode;
    this.validate();
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._city}, ${this._zipcode}`;
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error("Street is mandatory");
    }
    if (this._number.length === 0) {
      throw new Error("Number is mandatory");
    }
    if (this._city.length === 0) {
      throw new Error("City is mandatory");
    }
    if (this._zipcode.length === 0) {
      throw new Error("Zipcode is mandatory");
    }
  }
}
