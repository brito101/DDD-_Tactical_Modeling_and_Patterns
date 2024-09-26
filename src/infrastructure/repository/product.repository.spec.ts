import { Sequelize } from "sequelize-typescript";
import ProductModel from "../db/sequelize/model/product.model";
import Product from "../../domain/entity/product";
import ProductRepository from "./product.repository";

describe("Product repository unit tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const repository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);

    await repository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1",
      price: 10,
    });
  });

  it("should update a product", async () => {
    const repository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await repository.create(product);

    product.changeName("Product 2");
    product.changePrice(20);
    await repository.update(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 2",
      price: 20,
    });
  });

  it("should find a product", async () => {
    const repository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await repository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    const result = await repository.find("1");

    expect(productModel.toJSON()).toStrictEqual(
      expect.objectContaining({
        id: result.id,
        name: result.name,
        price: result.price,
      })
    );
  });

  it("should find all products", async () => {
    const repository = new ProductRepository();
    const product1 = new Product("1", "Product 1", 10);
    await repository.create(product1);
    const product2 = new Product("2", "Product 2", 20);
    await repository.create(product2);

    const result = await repository.findAll();
    const products = [product1, product2];

    expect(products).toEqual(result);
  });
});
