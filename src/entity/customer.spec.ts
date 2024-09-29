import Address from "./address";
import Customer from "./customer";

describe("Customer unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Customer("", "John")).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => new Customer("1", "")).toThrow("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("1", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  });

  it("should activate a customer", () => {
    const customer = new Customer("1", "John");
    const address = new Address("Street 1", "123", "City", "12345");
    customer.address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate a customer", () => {
    const customer = new Customer("1", "John");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    const customer = new Customer("1", "John");
    expect(() => customer.activate()).toThrow(
      "Address is mandatory to activate a customer"
    );
  });
});
