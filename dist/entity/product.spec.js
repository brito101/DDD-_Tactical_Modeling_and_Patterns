"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
describe("Product unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new product_1.default("", "Product 1", 100);
        }).toThrow("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            new product_1.default("1", "", 100);
        }).toThrow("Name is required");
    });
    it("should throw error when price is equal or less than zero", () => {
        expect(() => {
            new product_1.default("1", "Product 1", 0);
        }).toThrow("Price must be greater than 0");
        expect(() => {
            new product_1.default("1", "Product 1", -1);
        }).toThrow("Price must be greater than 0");
    });
    it("should change name", () => {
        const product = new product_1.default("1", "Product 1", 100);
        product.changeName("Product 2");
        expect(product.name).toBe("Product 2");
    });
    it("should change price", () => {
        const product = new product_1.default("1", "Product 1", 100);
        product.changePrice(200);
        expect(product.price).toBe(200);
    });
});
