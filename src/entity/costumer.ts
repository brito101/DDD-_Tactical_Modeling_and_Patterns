import Address from "./adress";

class Costumer {
  _id: string;
  _name: string = "";
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }
  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address !== undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}

let costumer = new Costumer("1", "Costumer 1");
costumer.Address = new Address("Street 1", "123", "Zip 1", "City 1");
console.log(costumer);
