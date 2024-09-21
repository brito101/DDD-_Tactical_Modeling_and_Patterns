"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const customer_1 = __importDefault(require("./customer"));
describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new customer_1.default("", "Costumer 1");
        }).toThrow("ID is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            new customer_1.default("1", "");
        }).toThrow("Name is required");
    });
    it("should change name", () => {
        const customer = new customer_1.default("1", "Costumer 1");
        customer.changeName("Costumer 2");
        expect(customer.name).toBe("Costumer 2");
    });
    it("should activate customer", () => {
        const customer = new customer_1.default("1", "Costumer 1");
        const address = new address_1.default("Street 1", "123", "Zip", "City");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should error when address is undefined to activate", () => {
        expect(() => {
            const customer = new customer_1.default("1", "Costumer 1");
            customer.activate();
        }).toThrow("Address is mandatory to activate a customer");
    });
    it("should deactivate customer", () => {
        const customer = new customer_1.default("1", "Costumer 1");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });
});
