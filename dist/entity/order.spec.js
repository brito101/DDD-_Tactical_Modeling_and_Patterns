"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new order_1.default("", "1", []);
        }).toThrow("Id is required");
    });
    it("should throw error when customerId is empty", () => {
        expect(() => {
            new order_1.default("1", "", []);
        }).toThrow("CustomerId is required");
    });
    it("should throw error when items is empty", () => {
        expect(() => {
            new order_1.default("1", "1", []);
        }).toThrow("Items are required");
    });
    it("should calculate total", () => {
        const item1 = new order_item_1.default("1", "Item 1", 10, "1", 2);
        const item2 = new order_item_1.default("2", "Item 2", 20, "2", 3);
        const order1 = new order_1.default("1", "1", [item1]);
        let total = order1.total();
        expect(total).toBe(20);
        const order2 = new order_1.default("1", "1", [item1, item2]);
        total = order2.total();
        expect(total).toBe(80);
    });
    it("should trow error if the item quantity is less or equal than zero", () => {
        expect(() => {
            const item = new order_item_1.default("1", "Item 1", 10, "1", 0);
            const order = new order_1.default("1", "1", [item]);
        }).toThrow("Quantity must be greater than 0");
    });
});
